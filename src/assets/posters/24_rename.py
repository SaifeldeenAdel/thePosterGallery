import os
import re

# 🔹 Set your directory path here
# curent
directory = os.getcwd()  # Use current working directory
files = [
    f for f in os.listdir(directory)
    if os.path.isfile(os.path.join(directory, f))
]

counter = 1

for filename in files:
    old_path = os.path.join(directory, filename)

    # Remove leading digits
    clean_name = re.sub(r'^\d+', '', filename)

    # Remove leftover underscores/spaces
    clean_name = clean_name.lstrip("_ ").strip()

    # Split name and extension
    name, ext = os.path.splitext(clean_name)

    # Format number with leading zeros (01, 02, 03...)
    new_number = f"{counter:02d}"

    new_name = f"{new_number}_{name}{ext}"
    new_path = os.path.join(directory, new_name)

    os.rename(old_path, new_path)
    print(f"{filename} -> {new_name}")

    counter += 1

print("Renaming complete.")