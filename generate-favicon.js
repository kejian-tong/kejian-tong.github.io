const sharp = require("sharp");
const toIco = require("to-ico");
const fs = require("fs");
const path = require("path");

async function generateFavicon() {
  const svgPath = path.join(__dirname, "public", "school-logo.svg");
  const outputPath = path.join(__dirname, "public", "favicon.ico");

  try {
    console.log("Reading school-logo.svg...");
    const svgBuffer = fs.readFileSync(svgPath);

    console.log("Generating PNG versions...");
    const sizes = [16, 32, 48];
    const pngBuffers = await Promise.all(
      sizes.map((size) => sharp(svgBuffer).resize(size, size).png().toBuffer())
    );

    console.log("Creating favicon.ico...");
    const icoBuffer = await toIco(pngBuffers);
    fs.writeFileSync(outputPath, icoBuffer);

    console.log("✅ favicon.ico generated successfully!");
    console.log(`   Output: ${outputPath}`);
    console.log(`   Sizes: ${sizes.join("×, ")}×`);
  } catch (error) {
    console.error("❌ Error generating favicon:", error);
    process.exit(1);
  }
}

generateFavicon();
