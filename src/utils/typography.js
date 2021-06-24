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
    googleFonts: [
        {
            name: "Source Sans Pro",
            styles: ["400", "600", "700"]
        }
    ]
});

export default typography;
