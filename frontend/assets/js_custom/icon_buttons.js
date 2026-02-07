console.log("FDT: IconButtonsScript loaded via static file");

window.STRICT_VSCODE_ENV = false;

// Check URL params immediately
if (window.location.search.includes('vscode=true') || window.location.href.includes('vscode=true')) {
    console.log("[FDT] Detected VS Code via URL parameter");
    window.STRICT_VSCODE_ENV = true;
}

window.addEventListener('message', (event) => {
    if (event.data && event.data.command === 'init-vscode') {
        console.log("[FDT] Received VS Code init message. Setting STRICT_VSCODE_ENV = true");
        window.STRICT_VSCODE_ENV = true;
    }
});

window.showToast = function (message, type = "success") {
    let toast = document.getElementById("vanilla-toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "vanilla-toast";
        toast.className = "fixed bottom-4 right-4 px-6 py-3 rounded shadow-lg z-50 transition-opacity duration-300 opacity-0 transform translate-y-2";
        document.body.appendChild(toast);
    }
    if (type === "error") {
        toast.className = "fixed bottom-4 right-4 px-6 py-3 rounded shadow-lg z-50 transition-opacity duration-300 text-white bg-red-600";
    } else {
        toast.className = "fixed bottom-4 right-4 px-6 py-3 rounded shadow-lg z-50 transition-opacity duration-300 text-white bg-green-600";
    }
    toast.textContent = message;
    requestAnimationFrame(() => toast.classList.remove("opacity-0", "translate-y-2"));
    setTimeout(() => toast.classList.add("opacity-0", "translate-y-2"), 3000);
};

async function fetchSvgContent(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Fetch failed");
        return await response.text();
    } catch (e) {
        console.error(e);
        window.showToast("Failed to load Icon", "error");
        return null;
    }
}

function renderSvgToCanvas(svgContent, size) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        if (!svgContent.includes("xmlns=")) {
            svgContent = svgContent.replace("<svg", '<svg xmlns="http://www.w3.org/2000/svg"');
        }
        const blob = new Blob([svgContent], { type: "image/svg+xml;charset=utf-8" });
        const url = URL.createObjectURL(blob);

        img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = size;
            canvas.height = size;
            const ctx = canvas.getContext("2d");

            // Calculate aspect ratio to fit
            const imgAspect = img.width / img.height;
            let drawWidth, drawHeight;
            if (imgAspect > 1) {
                drawWidth = size * 0.8;
                drawHeight = drawWidth / imgAspect;
            } else {
                drawHeight = size * 0.8;
                drawWidth = drawHeight * imgAspect;
            }

            const x = (size - drawWidth) / 2;
            const y = (size - drawHeight) / 2;

            ctx.drawImage(img, x, y, drawWidth, drawHeight);
            URL.revokeObjectURL(url);
            resolve(canvas);
        };

        img.onerror = (e) => {
            URL.revokeObjectURL(url);
            reject(e);
        };

        img.src = url;
    });
}

window.downloadSvg = async function (url, filename) {
    console.log("[FDT] downloadSvg called for:", filename);
    const content = await fetchSvgContent(url);
    if (!content) return;

    if (!filename.endsWith('.svg')) {
        filename += '.svg';
    }

    // VS Code Handling
    // Check if running in an iframe (VS Code Webview)
    if (window.STRICT_VSCODE_ENV || window.self !== window.top) {
        console.log("[FDT] Detected Iframe (Env or Top) - sending postMessage to VS Code");
        window.parent.postMessage({
            command: 'download',
            fileName: filename,
            content: content
        }, '*');
        return;
    }

    console.log("[FDT] Standard browser download");
    const blob = new Blob([content], { type: "image/svg+xml" });
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(blobUrl);
};

window.downloadPng = async function (url, filename, sizeSelectId) {
    const select = document.getElementById(sizeSelectId);
    if (!select) {
        console.error("Size selector not found:", sizeSelectId);
        return;
    }
    const size = parseInt(select.value || "512");
    const content = await fetchSvgContent(url);
    if (!content) return;

    try {
        const canvas = await renderSvgToCanvas(content, size);
        const dataUrl = canvas.toDataURL("image/png");

        // VS Code Handling
        if (window.STRICT_VSCODE_ENV || window.self !== window.top) {
            console.log("[FDT] Detected Iframe (PNG Env or Top) - sending postMessage to VS Code");
            window.parent.postMessage({
                command: 'download',
                fileName: filename + "-" + size + "px.png",
                content: dataUrl,
                isBase64: true
            }, '*');
            return;
        }

        console.log("[FDT] Standard browser PNG download");
        const a = document.createElement("a");
        a.href = dataUrl;
        a.download = filename + "-" + size + "px.png";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    } catch (e) {
        console.error(e);
        window.showToast("Failed to generate PNG", "error");
    }
};

window.copySvg = async function (url) {
    const content = await fetchSvgContent(url);
    if (content) {
        try {
            await navigator.clipboard.writeText(content);
            window.showToast("SVG copied to clipboard!");
        } catch (e) {
            window.showToast("Failed to copy", "error");
        }
    }
};

window.copyPng = async function (url) {
    const content = await fetchSvgContent(url);
    if (content) {
        try {
            const canvas = await renderSvgToCanvas(content, 512);
            canvas.toBlob(async blob => {
                if (blob) {
                    try {
                        const item = new ClipboardItem({ "image/png": blob });
                        await navigator.clipboard.write([item]);
                        window.showToast("PNG copied to clipboard!");
                    } catch (e) {
                        console.error(e);
                        window.showToast("Clipboard write failed (HTTPS required?)", "error");
                    }
                } else {
                    window.showToast("PNG blob creation failed", "error");
                }
            });
        } catch (e) {
            console.error(e);
            window.showToast("Failed to process PNG", "error");
        }
    }
};
