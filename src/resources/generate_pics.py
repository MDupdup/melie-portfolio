import os
from os.path import isfile, join
from PIL import Image
import json

json_file = "./src/resources/pictures.json"
pics_dir = "./src/resources/gallerypics/"

out = []

images = [f for f in os.listdir(pics_dir) if isfile(join(pics_dir, f))]

for name in images:
    image = Image.open(join(pics_dir, name))
    w, h = image.size

    out.append({
        "image": name,
        "width": w,
        "height": h
    })

with open(json_file, "w") as outfile:
    json.dump(out, outfile)
