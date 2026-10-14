import os
from PIL import Image

IMAGE_DIR = "images"
MAX_SIZE = 2048;
QUALITY = 75;

for root, dirs, files in os.walk(IMAGE_DIR):
    for file in files:
        # Check for .jpg or .jpeg (including uppercase like .JPG)
        if file.lower().endswith(('.jpg', '.jpeg')):
            filepath = os.path.join(root, file)
            
            try:
                img = Image.open(filepath)
                
                # thumbnail() resizes proportionally to fit inside MAX_SIZE
                img.thumbnail((MAX_SIZE, MAX_SIZE), Image.Resampling.LANCZOS)
                
                # Overwrite the original file with the compressed version
                img.save(filepath, "JPEG", quality=QUALITY, optimize=True)
                print(f"Crushed: {filepath}")
                
            except Exception as e:
                print(f"Error on {filepath}: {e}")

print("All done! Ready to commit and push.")