import os
import re
import shutil

def migrate_tools():
    source_dir = 'astro_freedevtools/src/pages/t'
    target_react_dir = 'frontend/components/tools'
    target_templ_dir = 'components/pages/t'
    routes_file = 'cmd/server/tools_routes.go'

    # Ensure directories exist
    os.makedirs(target_react_dir, exist_ok=True)
    os.makedirs(target_templ_dir, exist_ok=True)

    # Get list of tools
    tools = [d for d in os.listdir(source_dir) if os.path.isdir(os.path.join(source_dir, d))]
    
    # Filter out tools with special characters
    tools = [t for t in tools if '[' not in t and ']' not in t]

    # Read routes file to append cases
    with open(routes_file, 'r') as f:
        routes_content = f.read()

    switch_case_pattern = re.compile(r'switch slug \{')
    switch_case_match = switch_case_pattern.search(routes_content)
    
    if not switch_case_match:
        print("Could not find switch statement in routes file")
        return

    # We will collect new cases to insert
    new_cases = []

    for tool_name in tools:
        print(f"Migrating {tool_name}...")
        
        tool_dir = os.path.join(source_dir, tool_name)
        index_file = os.path.join(tool_dir, 'index.astro')
        
        if not os.path.exists(index_file):
            print(f"Skipping {tool_name}: index.astro not found")
            continue
            
        with open(index_file, 'r') as f:
            index_content = f.read()
            
        # Find component import
        # import UuidGenerator from './_UuidGenerator';
        # import RsaKeyPairGenerator from './_RsaKeyPairGenerator.tsx';
        import_match = re.search(r"import\s+(\w+)\s+from\s+'\./(_[\w\d]+)(?:\.\w+)?'", index_content)
        if not import_match:
            # Try without underscore
            import_match = re.search(r"import\s+(\w+)\s+from\s+'\./([\w\d]+)(?:\.\w+)?'", index_content)
            
        if not import_match:
            print(f"Skipping {tool_name}: Could not find component import in index.astro")
            continue
            
        component_name = import_match.group(1)
        component_file_base = import_match.group(2)
        
        # Find the actual file (tsx, jsx, etc)
        component_src_path = None
        ext = None
        for e in ['.tsx', '.jsx', '.ts', '.js']:
            p = os.path.join(tool_dir, component_file_base + e)
            if os.path.exists(p):
                component_src_path = p
                ext = e
                break
                
        if not component_src_path:
            print(f"Skipping {tool_name}: Component file {component_file_base} not found")
            continue
            
        # Create target directory for this tool
        tool_react_dir = os.path.join(target_react_dir, tool_name)
        os.makedirs(tool_react_dir, exist_ok=True)
        
        # Copy and transform component file
        target_component_file = os.path.join(tool_react_dir, component_name + ext)
        
        with open(component_src_path, 'r') as f:
            comp_content = f.read()
            
        # Transform imports
        comp_content = transform_content(comp_content)
        
        # Write to new location
        with open(target_component_file, 'w') as f:
            f.write(comp_content)
            
        # Copy auxiliary files (skeletons, etc.)
        for file in os.listdir(tool_dir):
            if file.endswith(('.tsx', '.ts')) and file != 'index.astro' and file != 'sitemap.xml.ts':
                src_path = os.path.join(tool_dir, file)
                
                # Skip if it's the main component file we just copied
                if src_path == component_src_path:
                    continue
                    
                dst_path = os.path.join(tool_react_dir, file)
                
                with open(src_path, 'r') as f:
                    aux_content = f.read()
                    
                aux_content = transform_content(aux_content)
                
                with open(dst_path, 'w') as f:
                    f.write(aux_content)

        # Create Templ file
        templ_content = f"""package t

import (
	"fdt-templ/components/layouts"
	"fdt-templ/config/tools"
)

templ {component_name}() {{
	@layouts.BaseLayout(layouts.BaseLayoutProps{{
		Title:       tools.ToolsConfig["{tool_name}"].Title,
		Description: tools.ToolsConfig["{tool_name}"].Description,
		Canonical:   tools.ToolsConfig["{tool_name}"].Canonical,
        ShowHeader:  true,
	}}) {{
		<div id="{tool_name}-root"></div>
		<script type="module">
			import {{ render{component_name} }} from '/static/js/index.js';
			render{component_name}(document.getElementById('{tool_name}-root'));
		</script>
	}}
}}
"""
        templ_file = os.path.join(target_templ_dir, f"{tool_name.replace('-', '_')}.templ")
        with open(templ_file, 'w') as f:
            f.write(templ_content)
            
        # Add to routes
        # Check if already exists
        if f'case "{tool_name}":' not in routes_content:
            new_cases.append(f'\t\tcase "{tool_name}":\n\t\t\tcomponent = t.{component_name}()')

        # We also need to update react/index.ts to export the render function
        update_react_index(component_name, tool_name)

    # Update routes file
    if new_cases:
        # Insert new cases before default
        default_idx = routes_content.find('default:')
        if default_idx != -1:
            new_routes_content = routes_content[:default_idx] + "\n".join(new_cases) + "\n\t\t" + routes_content[default_idx:]
            with open(routes_file, 'w') as f:
                f.write(new_routes_content)

def transform_content(content):
    # Replace @/components/tool/ with @/components/toolComponents/
    content = content.replace('@/components/tool/', '@/components/toolComponents/')
    # Replace relative imports to tool components if any
    content = content.replace("'./tool/", "'@/components/toolComponents/")
    content = content.replace('"./tool/', '"@/components/toolComponents/')
    
    # Fix ToastProvider import if needed
    content = content.replace('import toast from "../../ToastProvider"', 'import toast from "@/components/ToastProvider"')
    
    # Fix AdBanner import
    content = content.replace('import AdBanner from "../../../components/banner/AdBanner"', 'import AdBanner from "@/components/banner/AdBanner"')
    
    return content

def update_react_index(component_name, tool_name):
    index_file = 'frontend/index.ts'
    with open(index_file, 'r') as f:
        content = f.read()
        
    import_stmt = f"import {component_name} from './components/tools/{tool_name}/{component_name}';"
    render_func = f"""
export function render{component_name}(e: HTMLElement) {{
    createRoot(e).render(React.createElement({component_name}));
}}"""

    if import_stmt not in content:
        # Add import at the top
        lines = content.split('\n')
        last_import_idx = 0
        for i, line in enumerate(lines):
            if line.startswith('import '):
                last_import_idx = i
        
        lines.insert(last_import_idx + 1, import_stmt)
        content = '\n'.join(lines)
        
    if f"render{component_name}" not in content:
        content += render_func
        
    with open(index_file, 'w') as f:
        f.write(content)

if __name__ == '__main__':
    migrate_tools()
