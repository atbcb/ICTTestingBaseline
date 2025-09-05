import os
import json
import re

# Input and output folders
input_folder = "_baselines/document-baselines"
output_folder = "_data/document-baselines-json"
os.makedirs(output_folder, exist_ok=True)

# Function to parse markdown content into structured sections
def parse_markdown(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    sections = []
    current_section = None
    ar_counter = 1
    tmr_counter = 1
    lae_counter = 1
    ti_counter = 1
    adv_counter = 1
    wcagtech_counter = 1

    for line in lines:
        line = line.strip()
        if re.match(r"^#{1,3} ", line):  # Heading lines
            if current_section:
                sections.append(current_section)
            heading_text = line.lstrip("# ").strip()
            heading_lower = heading_text.lower()
            if "accessibility requirements" in heading_lower:
                current_section = {
                    "heading": heading_text
                }
                ar_counter = 1
            elif "test method rationale" in heading_lower:
                current_section = {
                    "heading": heading_text
                }
                tmr_counter = 1
            elif "limitations, assumptions, exceptions" in heading_lower:
                current_section = {
                    "heading": heading_text
                }
                lae_counter = 1
            elif "advisory: tips" in heading_lower:
                current_section = {
                    "heading": heading_text
                }
                adv_counter = 1
            elif "wcag 2.2 techniques" in heading_lower:
                current_section = {
                    "heading": heading_text,
                    "content": []
                }
                wcagtech_counter = 1
            else:
                current_section = {
                    "heading": heading_text,
                    "content": []
                }
        elif line and current_section:
            heading_lower = current_section["heading"].lower()
            if "accessibility requirements" in heading_lower and line.startswith("- "):
                current_section[f"AR{ar_counter}"] = line.lstrip("- ").strip()
                ar_counter += 1
            elif "test method rationale" in heading_lower and line.startswith("- "):
                current_section[f"TMR{tmr_counter}"] = line.lstrip("- ").strip()
                tmr_counter += 1
            elif "limitations, assumptions, exceptions" in heading_lower and line.startswith("- "):
                current_section[f"LAE{lae_counter}"] = line.lstrip("- ").strip()
                lae_counter += 1
            elif "advisory: tips" in heading_lower and line.startswith("- "):
                current_section[f"ADV{adv_counter}"] = line.lstrip("- ").strip()
                adv_counter += 1
            elif "wcag 2.2 techniques" in heading_lower and line.startswith("- "):
                current_section[f"WCT{wcagtech_counter}"] = line.lstrip("- ").strip()
                wcagtech_counter += 1
            elif isinstance(current_section.get("content"), list):
                current_section["content"].append(line)

    if current_section:
        sections.append(current_section)

    return sections

# Process each markdown file in the input folder
results = []
for filename in os.listdir(input_folder):
    if filename.endswith(".md"):
        slug = filename.replace(".md", "")
        file_path = os.path.join(input_folder, filename)
        sections = parse_markdown(file_path)

        data = {
            "slug": slug,
            "sections": sections
        }

        output_path = os.path.join(output_folder, f"{slug}.json")
        with open(output_path, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)

        results.append(slug)

print(f"Successfully converted {len(results)} markdown files to JSON in '{output_folder}' folder with sub-bullet keys.")
