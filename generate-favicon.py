#!/usr/bin/env python3
"""
Generate favicon.ico from the NEU logo SVG.
Requires: pip install cairosvg pillow
"""
import sys
from io import BytesIO
from pathlib import Path

try:
    import cairosvg
    from PIL import Image
except ImportError:
    print("Installing required packages...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "cairosvg", "pillow"])
    import cairosvg
    from PIL import Image

# Read the source SVG
svg_path = Path(__file__).parent / "src" / "app" / "icon.svg"
svg_content = svg_path.read_text()

# Generate PNG at multiple sizes
sizes = [16, 32, 48, 64, 128, 256]
images = []

for size in sizes:
    png_data = cairosvg.svg2png(
        bytestring=svg_content.encode('utf-8'),
        output_width=size,
        output_height=size
    )
    img = Image.open(BytesIO(png_data))
    images.append(img)

# Save as multi-resolution favicon.ico
ico_path = Path(__file__).parent / "public" / "favicon.ico"
images[0].save(
    ico_path,
    format='ICO',
    sizes=[(s, s) for s in sizes],
    append_images=images[1:]
)

print(f"✓ Generated {ico_path} with sizes: {sizes}")
