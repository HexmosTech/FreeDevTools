import os
import markdown
import mimetypes

# File extensions to language mapping for syntax highlighting
LANGUAGE_MAP = {
    '.js': 'javascript',
    '.py': 'python',
    '.sh': 'bash',
    '.css': 'css',
    '.html': 'html',
    '.php': 'php',
    '.java': 'java',
    '.cpp': 'cpp',
    '.c': 'c',
    '.go': 'go',
    '.rs': 'rust',
    '.rb': 'ruby',
    '.sql': 'sql',
    '.yaml': 'yaml',
    '.yml': 'yaml',
    '.json': 'json',
    '.xml': 'xml',
    '.dockerfile': 'dockerfile',
    '.dockerignore': 'dockerfile',
    '.gitignore': 'gitignore',
    '.md': 'markdown',
    '.txt': 'text',
    '.log': 'text'
}

def get_language_from_extension(file_path):
    """Get the language for syntax highlighting based on file extension"""
    _, ext = os.path.splitext(file_path.lower())
    return LANGUAGE_MAP.get(ext, 'text')

def create_html_template(content, title, language=None):
    """Create a complete HTML document with syntax highlighting"""
    html_template = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css">
    <style>
        body {{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8f9fa;
        }}
        .container {{
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            overflow: hidden;
        }}
        .header {{
            background: #2c3e50;
            color: white;
            padding: 20px;
            border-bottom: 1px solid #34495e;
        }}
        .header h1 {{
            margin: 0;
            font-size: 1.5em;
        }}
        .content {{
            padding: 20px;
        }}
        pre {{
            background: #f8f9fa;
            border: 1px solid #e9ecef;
            border-radius: 4px;
            padding: 16px;
            overflow-x: auto;
            margin: 0;
        }}
        code {{
            font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
            font-size: 14px;
        }}
        .markdown-content {{
            line-height: 1.7;
        }}
        .markdown-content h1, .markdown-content h2, .markdown-content h3 {{
            color: #2c3e50;
            border-bottom: 1px solid #e9ecef;
            padding-bottom: 8px;
        }}
        .markdown-content pre {{
            background: #f8f9fa;
            border: 1px solid #e9ecef;
            border-radius: 4px;
            padding: 16px;
            overflow-x: auto;
        }}
        .markdown-content code {{
            background: #f1f3f4;
            padding: 2px 4px;
            border-radius: 3px;
            font-size: 0.9em;
        }}
        .markdown-content pre code {{
            background: none;
            padding: 0;
        }}
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>{title}</h1>
        </div>
        <div class="content">
            {content}
        </div>
    </div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
    <script>
        hljs.highlightAll();
    </script>
</body>
</html>"""
    return html_template

def convert_md_to_html(repo_path, output_folder="html_output"):
    # Create output folder if it doesn't exist
    os.makedirs(output_folder, exist_ok=True)

    # Supported file extensions
    supported_extensions = ['.md', '.js', '.py', '.sh', '.css', '.html', '.php', '.java', 
                          '.cpp', '.c', '.go', '.rs', '.rb', '.sql', '.yaml', '.yml', 
                          '.json', '.xml', '.dockerfile', '.txt', '.log']

    for root, _, files in os.walk(repo_path):
        for file in files:
            file_path = os.path.join(root, file)
            _, ext = os.path.splitext(file.lower())
            
            if ext in supported_extensions:
                # Read file content
                try:
                    with open(file_path, "r", encoding="utf-8") as f:
                        content = f.read()
                except UnicodeDecodeError:
                    # Try with different encoding if UTF-8 fails
                    try:
                        with open(file_path, "r", encoding="latin-1") as f:
                            content = f.read()
                    except:
                        print(f"Could not read file: {file_path}")
                        continue

                # Generate title from filename
                title = os.path.splitext(file)[0].replace('_', ' ').replace('-', ' ').title()
                
                if ext == '.md':
                    # Convert markdown to HTML
                    html_content = markdown.markdown(content, extensions=["fenced_code", "tables", "codehilite"])
                    final_content = f'<div class="markdown-content">{html_content}</div>'
                else:
                    # Wrap other formats in code blocks with syntax highlighting
                    language = get_language_from_extension(file)
                    escaped_content = content.replace('<', '&lt;').replace('>', '&gt;')
                    final_content = f'<pre><code class="language-{language}">{escaped_content}</code></pre>'

                # Create complete HTML document
                html_document = create_html_template(final_content, title, language if ext != '.md' else None)

                # Save HTML file
                html_filename = os.path.splitext(file)[0] + ".html"
                html_path = os.path.join(output_folder, html_filename)

                with open(html_path, "w", encoding="utf-8") as f:
                    f.write(html_document)

                print(f"Converted: {file_path} → {html_path}")

if __name__ == "__main__":
    repo_path = input("Enter the path to your repo: ").strip()
    convert_md_to_html(repo_path)
