// Gatsby-compatible image resolution on top of astro:assets.
// gatsbyImageData's constrained layout generated srcset widths of [1/4, 1/2, 1, 2] x the
// display width, capped at the source's intrinsic width (verified against the old build:
// the 333px logo got 83w/167w/333w). sizes = "(min-width: Wpx) Wpx, 100vw".
import { getImage } from "astro:assets";
import sharp from "sharp";

const FACTORS = [0.25, 0.5, 1, 2];
const PLACEHOLDER_WIDTH = 20;

async function dominantColor(src) {
  try {
    const { dominant } = await sharp(src.fsPath).stats();
    return `rgb(${dominant.r},${dominant.g},${dominant.b})`;
  } catch {
    return null; // placeholder is a loading-state nicety; never fail the build over it
  }
}

// Tiny (~20px-wide) preview for the "blurred" placeholder, returned as a data URI. Encodes
// both jpeg and png and keeps whichever is smaller -- photos favor jpeg, flat/graphic images
// (few colors) can come out smaller as a palette png.
async function blurredPreview(src, width, height) {
  try {
    const previewWidth = Math.max(1, Math.min(PLACEHOLDER_WIDTH, width));
    const previewHeight = Math.max(1, Math.round((previewWidth / width) * height));
    const [jpeg, png] = await Promise.all([
      sharp(src.fsPath)
        .resize(previewWidth, previewHeight, { fit: "cover" })
        .jpeg({ quality: 60 })
        .toBuffer(),
      sharp(src.fsPath)
        .resize(previewWidth, previewHeight, { fit: "cover" })
        .png({ compressionLevel: 9, palette: true })
        .toBuffer(),
    ]);
    const [buffer, mime] =
      jpeg.length <= png.length ? [jpeg, "image/jpeg"] : [png, "image/png"];
    return `data:${mime};base64,${buffer.toString("base64")}`;
  } catch {
    return null; // placeholder is a loading-state nicety; never fail the build over it
  }
}

export async function resolveImage(src, opts = {}) {
  const { avif = false, placeholder = "dominant" } = opts;
  const width = Math.min(opts.width ?? src.width, src.width);
  const height =
    opts.width && opts.height
      ? opts.height
      : Math.round((width / src.width) * src.height);
  const cover = Boolean(opts.width && opts.height);

  const widths = [
    ...new Set(
      FACTORS.map((f) => Math.round(width * f)).filter(
        (w) => w >= 16 && w <= src.width
      )
    ),
  ].sort((a, b) => a - b);
  const sizes = `(min-width: ${width}px) ${width}px, 100vw`;
  // NB: astro:assets derives the crop aspect ratio from targetWidth/targetHeight (see
  // getTargetDimensions in astro/dist/assets/services/service.js). Passing only `height`
  // here (per the brief) leaves `width` unset, so astro back-fills it from the *source*
  // image's aspect ratio instead of the requested crop box -- every srcset entry (and the
  // plain fallback src) then comes out at the source's aspect ratio, not square. Passing an
  // explicit `width` alongside `height` fixes the ratio astro derives fit:"cover" against.
  const common = cover
    ? {
        src,
        widths,
        sizes,
        width: Math.max(...widths),
        height: Math.round((height / width) * Math.max(...widths)),
        fit: "cover",
      }
    : { src, widths, sizes };

  const fallback = await getImage({
    ...common,
    format: src.format === "svg" ? "svg" : src.format,
  });
  const webp = await getImage({ ...common, format: "webp" });
  const sources = [{ type: "image/webp", srcSet: webp.srcSet.attribute }];
  if (avif) {
    const av = await getImage({ ...common, format: "avif" });
    sources.unshift({ type: "image/avif", srcSet: av.srcSet.attribute });
  }

  return {
    width,
    height,
    sizes,
    fallback: { src: fallback.src, srcSet: fallback.srcSet.attribute },
    sources,
    backgroundColor: placeholder === "none" ? null : await dominantColor(src),
    placeholderSrc:
      placeholder === "blurred" ? await blurredPreview(src, width, height) : null,
  };
}
