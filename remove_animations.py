import re

# Read the file
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove all wow animations and data-wow-delay attributes
content = re.sub(r' wow [^"]*"[^"]*"', '', content)
content = re.sub(r' data-wow-delay="[^"]*"', '', content)
content = re.sub(r' data-wow-iteration="[^"]*"', '', content)

# Write back to file
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("All WOW animations removed successfully!")