# file_handler
# utility to handle files for js objects

import re
import json
import file

img_src = r'../img/in'
txt_src = r'../../perufiles/txt'
data_file = r'../json/in_data.json'


# sort filenames by number #
def atoi(txt):
    return int(txt) if txt.isdigit() else txt


# sorting key #
def natural_keys(txt):
    """
    {filenames}.sort(key=natural_keys) sorts in human order
    http://nedbatchelder.com/blog/200712/human_sorting.html
    (See Toothy's implementation in the comments)
    """
    return [atoi(c) for c in re.split(r'(\d+)', txt)]


images = file.get_filenames_with_ext('.jpg', img_src)
texts = file.get_filenames_without_ext(txt_src)

images.sort(key=natural_keys)
texts.sort(key=natural_keys)

# for image in images:
#     print(image)
# for text in texts[:2]:
#     print(text)


file_zip = zip(texts, images)

data = []
for file in file_zip:
    txt_url = f'{txt_src}/{file[0]}'
    img_url = f'{img_src}/{file[1]}'
    with open(txt_url, 'r') as f:
        text_data = f.read()
        data.append({'title': file[0], 'src': img_url, 'content': text_data})

with open(data_file, 'w') as f:
    json.dump(data, f)




