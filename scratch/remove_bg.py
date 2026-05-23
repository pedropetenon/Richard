from PIL import Image
import os

def remove_background():
    img_path = "/Users/pedropetenon/Richard/public/images/logo-v2.png"
    if not os.path.exists(img_path):
        print(f"Error: File not found at {img_path}")
        return
        
    img = Image.open(img_path).convert("RGBA")
    datas = img.getdata()
    
    newData = []
    # Thresholds for soft transition
    lower_threshold = 25
    upper_threshold = 70
    
    for item in datas:
        r, g, b, a = item
        # Calculate perceived luminance
        lumi = 0.299 * r + 0.587 * g + 0.114 * b
        
        if lumi < lower_threshold:
            # Completely transparent
            newData.append((0, 0, 0, 0))
        elif lumi < upper_threshold:
            # Semi-transparent transition for soft anti-aliased borders
            ratio = (lumi - lower_threshold) / (upper_threshold - lower_threshold)
            new_a = int(255 * ratio)
            newData.append((r, g, b, new_a))
        else:
            # Fully opaque
            newData.append((r, g, b, 255))
            
    img.putdata(newData)
    img.save(img_path, "PNG")
    print("Background removed and saved as transparent PNG successfully!")

if __name__ == "__main__":
    remove_background()
