/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * Core Typography.js file.
 */

// Core dependencies
import Typography from "typography";

const typography = new Typography({
    baseFontSize: "20px",
    bodyFontFamily: [
        "Noto Serif", "sans-serif"
    ],
    googleFonts: [
        {
            name: "Source Sans Pro",
            styles: ["400", "600", "700"]
        },
        {
            name: "Noto Serif",
            styles: ["400"]
        }
    ],
    headerFontFamily: ["Source Sans Pro", "sans-serif"],
    headerWeight: 600,
});

export default typography;
