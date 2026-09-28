from __future__ import annotations
from pathlib import Path
from PIL import Image, ImageOps

root = Path(__file__).resolve().parents[1]
media_dir = root / "public" / "media"
out_dir = media_dir / "responsive"
out_dir.mkdir(exist_ok=True)

sizes = [420, 720, 900]
for source in sorted(media_dir.glob("*.*")):
    if source.suffix.lower() not in {".jpg", ".jpeg", ".png", ".webp"}:
        continue
    with Image.open(source) as image:
        image = ImageOps.exif_transpose(image)
        if image.mode in {"RGBA", "LA", "P"}:
            image = image.convert("RGB")
        for width in sizes:
            scale = min(1.0, width / max(image.size))
            target_size = (
                max(1, int(image.size[0] * scale)),
                max(1, int(image.size[1] * scale)),
            )
            resized = image.resize(target_size, Image.Resampling.LANCZOS)
            target = out_dir / f"{source.stem}-{width}{source.suffix.lower()}"
            resized.save(target, quality=62, optimize=True, progressive=True, subsampling=0)
            print(f"saved {target.relative_to(root)}")
