import re
import sys

def fix_tools_go():
    input_file = '/home/lince/hexmos/fdt-templ/config/tools/tools.go'
    output_file = input_file

    with open(input_file, 'r') as f:
        lines = f.readlines()

    new_lines = []
    in_tools_config = False
    in_entry = False
    entry_lines = []
    entry_key = ""
    brace_balance = 0

    # Regex patterns
    entry_start_pattern = re.compile(r'^\s*"([^"]+)":\s*\{\s*$')
    
    i = 0
    while i < len(lines):
        line = lines[i]
        
        if 'var ToolsConfig = map[string]Tool{' in line:
            in_tools_config = True
            new_lines.append(line)
            i += 1
            continue
        
        if not in_tools_config:
            new_lines.append(line)
            i += 1
            continue

        if not in_entry:
            if line.strip() == '}':
                in_tools_config = False
                new_lines.append(line)
                i += 1
                continue

            match = entry_start_pattern.match(line)
            if match:
                in_entry = True
                entry_key = match.group(1)
                entry_lines = []
                brace_balance = 1 
                # print(f"DEBUG: Start entry {entry_key} balance={brace_balance}")
                i += 1
                continue
            else:
                new_lines.append(line)
                i += 1
                continue

        if in_entry:
            open_braces = line.count('{')
            close_braces = line.count('}')
            brace_balance += open_braces - close_braces
            
            # print(f"DEBUG: Line: {line.strip()} | Balance: {brace_balance}")

            if brace_balance == 0:
                in_entry = False
                processed_entry = process_entry(entry_key, entry_lines)
                new_lines.extend(processed_entry)
                new_lines.append(line) 
                i += 1
                continue
            else:
                entry_lines.append(line)
                i += 1
                continue
        
    with open(output_file, 'w') as f:
        f.writelines(new_lines)

def process_entry(key, lines):
    fields = {}
    unkeyed_strings = []
    
    has_name = False
    has_path = False
    has_category = False
    
    in_array = False
    array_key = ""
    array_content = []

    idx = 0
    while idx < len(lines):
        line = lines[idx]
        stripped = line.strip()
        
        if in_array:
            array_content.append(line)
            if stripped.endswith('},'):
                fields[array_key] = array_content
                in_array = False
            idx += 1
            continue

        if stripped.startswith('Keywords: []string{'):
            in_array = True
            array_key = 'Keywords'
            array_content = [line]
            idx += 1
            continue
        
        if stripped.startswith('Features: []string{'):
            in_array = True
            array_key = 'Features'
            array_content = [line]
            idx += 1
            continue

        kv_match = re.match(r'^\s*([a-zA-Z0-9]+):\s*(.*)$', line)
        if kv_match:
            k = kv_match.group(1)
            v = kv_match.group(2)
            fields[k] = v
            if k == 'Name': has_name = True
            if k == 'Path': has_path = True
            if k == 'Category': has_category = True
            idx += 1
            continue
            
        str_match = re.match(r'^\s*(".*")\s*,\s*$', line)
        if str_match:
            val = str_match.group(1)
            if not has_name:
                if 'Title' not in fields:
                    fields['Title'] = val
            elif has_path and not has_category:
                if 'Description' not in fields:
                    fields['Description'] = val
            elif has_category:
                unkeyed_strings.append(val)
            else:
                unkeyed_strings.append(val)
            idx += 1
            continue
        
        idx += 1

    if len(unkeyed_strings) >= 1 and 'OgImage' not in fields:
        fields['OgImage'] = unkeyed_strings[0]
    if len(unkeyed_strings) >= 2 and 'TwitterImage' not in fields:
        fields['TwitterImage'] = unkeyed_strings[1]

    output = []
    output.append(f'\t"{key}": {{\n')
    
    order = [
        'Title', 'Name', 'Path', 'Description', 'Category', 'Icon', 
        'ThemeColor', 'Canonical', 'Keywords', 'Features', 
        'OgImage', 'TwitterImage', 'VariationOf', 'DatePublished', 'SoftwareVersion'
    ]
    
    for field in order:
        if field in fields:
            val = fields[field]
            if isinstance(val, list):
                for l in val:
                    output.append(l)
            else:
                if not val.strip().endswith(','):
                    val = val + ','
                output.append(f'\t\t{field}: {val}\n')
                
    return output

if __name__ == '__main__':
    fix_tools_go()
