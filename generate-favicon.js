#!/usr/bin/env node
/**
 * Generate favicon.ico from icon.svg
 */
const sharp = require('sharp');
const toIco = require('to-ico');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, 'src', 'app', 'icon.svg');
const outputPath = path.join(__dirname, 'public', 'favicon.ico');

// Read SVG
const svgBuffer = fs.readFileSync(svgPath);

async function generate() {
  // Generate PNGs at multiple sizes
  const pngs = await Promise.all([
    sharp(svgBuffer).resize(16, 16).png().toBuffer(),
    sharp(svgBuffer).resize(32, 32).png().toBuffer(),
    sharp(svgBuffer).resize(48, 48).png().toBuffer(),
  ]);

  // Convert to ICO
  const ico = await toIco(pngs);
  fs.writeFileSync(outputPath, ico);
  
  console.log('✓ Generated public/favicon.ico (16×16, 32×32, 48×48)');
}

generate().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
