#!/usr/bin/env python3
import os
import re
import glob

# Find all markdown files
md_files = glob.glob('src/**/*.md', recursive=True)

# Process each markdown file
count = 0
for file_path in md_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if file contains captions
    if '\\[caption' not in content:
        continue
    
    # Use a pattern that matches the entire caption line as-is
    # The key is to match: \[caption id="..." align="..." width="..."\][markdown link] text\[/caption\]
    pattern = r'\\\[caption id="[^"]*" align="([^"]*)" width="[^"]*"\\\]\\\[\\\!\\\[([^\\\]]*)\\\]\\\(([^\\\)]*)\\\)\\\]\\\(([^\\\)]*)\\\) ([^\\\[]*)\\\[/caption\\\]'
    
    def replace_caption(match):
        align = match.group(1)
        alt_text = match.group(2)
        thumb_url = match.group(3)
        full_url = match.group(4)
        caption_text = match.group(5).strip()
        
        html = f'''<figure class="{align}">
  <a href="{full_url}">
    <img src="{thumb_url}" alt="{alt_text}">
  </a>
  <figcaption>{caption_text}</figcaption>
</figure>'''
        return html
    
    # Replace captions
    updated_content = re.sub(pattern, replace_caption, content)
    
    # Write back if changed
    if updated_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(updated_content)
        
        # Count how many were replaced
        num_replaced = content.count('\\[caption') - updated_content.count('\\[caption')
        print(f'✓ Converted {num_replaced} caption(s) in {file_path}')
        count += num_replaced

print(f'\nTotal captions converted: {count}')




