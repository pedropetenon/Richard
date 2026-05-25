from PIL import Image, ImageFilter
import os
from collections import deque

def remove_background_robust():
    src_path = "/Users/pedropetenon/.gemini/antigravity-ide/brain/8b6b1e0c-a0f7-4239-8a76-73f1a3832022/media__1779729921830.jpg"
    dest_path = "/Users/pedropetenon/Richard/public/images/owner-refined.png"

    
    if not os.path.exists(src_path):
        print(f"Error: Source image not found at {src_path}")
        return
        
    img = Image.open(src_path).convert("RGBA")
    w, h = img.size
    
    # Create mask: default all pixels to 255 (fully opaque foreground)
    mask = Image.new("L", (w, h), 255)
    
    # Pre-calculate background-like pixels by color signature (refined threshold)
    bg_pixels = set()
    for y in range(h):
        for x in range(w):
            r, g, b, a = img.getpixel((x, y))
            # Background is light blue/grey studio backdrop
            # Thresholded to prevent leaking into hair reflection and skin highlights
            is_bg_color = (b > 190) and (b > r + 15) and (b > g + 10) and (g > 150) and (r > 120)
            if is_bg_color:
                bg_pixels.add((x, y))
                
    # Run BFS starting from the top edge and upper side edges to find connected background
    visited = set()
    queue = deque()
    
    # Seed top edge
    for x in range(w):
        if (x, 0) in bg_pixels:
            queue.append((x, 0))
            visited.add((x, 0))
            
    # Seed upper sides (down to 75% height) where background is present
    for y in range(int(h * 0.75)):
        if (0, y) in bg_pixels and (0, y) not in visited:
            queue.append((0, y))
            visited.add((0, y))
        if (w - 1, y) in bg_pixels and (w - 1, y) not in visited:
            queue.append((w - 1, y))
            visited.add((w - 1, y))
            
    # BFS traversal
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    while queue:
        cx, cy = queue.popleft()
        mask.putpixel((cx, cy), 0) # set as background (transparent)
        
        for dx, dy in directions:
            nx, ny = cx + dx, cy + dy
            if 0 <= nx < w and 0 <= ny < h:
                if (nx, ny) in bg_pixels and (nx, ny) not in visited:
                    visited.add((nx, ny))
                    queue.append((nx, ny))
                    
    # Smooth the mask using a Gaussian blur to create soft edges (feather effect)
    mask_smoothed = mask.filter(ImageFilter.GaussianBlur(radius=2))
    
    # Put the mask back into the image's alpha channel
    img.putalpha(mask_smoothed)
    
    # Save the transparent PNG
    img.save(dest_path, "PNG")
    print(f"Robust background removal completed successfully! Saved to {dest_path}")

if __name__ == "__main__":
    remove_background_robust()

