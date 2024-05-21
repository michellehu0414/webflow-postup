import os
import re

# Define the path to the HTML file
html_file_path = 'tastebuds-new.html'

# Function to update img src in HTML file
def update_img_src(html_file):
    with open(html_file, 'r') as file:
        content = file.read()

    print("Original content:")
    print(content[:500])  # Print first 500 characters for reference

    # Regular expression to match and replace the src attribute
    new_content = re.sub(
        r'src="public/images/tastebuds/[^_]*_([^"]+)"',
        r'src="public/images/tastebuds/\1"',
        content
    )

    print("Updated content:")
    print(new_content[:500])  # Print first 500 characters for reference

    with open(html_file, 'w') as file:
        file.write(new_content)

# Check if the path is a file and ends with .html
if os.path.isfile(html_file_path) and html_file_path.endswith('.html'):
    update_img_src(html_file_path)
    print(f'Updated {html_file_path}')
else:
    print(f'Invalid path or not an HTML file: {html_file_path}')

print('All img src attributes have been updated.')
