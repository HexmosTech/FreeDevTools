(function () {
    if (window._emojiComponentsInitialized) return;
    window._emojiComponentsInitialized = true;

    // Simple toast notification function
    function showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.setAttribute('role', 'alert');
        toast.className = 'fixed right-4 top-4 bg-white text-slate-800 border border-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-600 rounded-lg shadow-lg z-[10000] max-w-sm min-w-[300px] p-4 flex items-start gap-3';
        toast.style.transform = 'translateX(100%)';
        toast.style.opacity = '0';
        toast.style.transition = 'transform .3s ease, opacity .3s ease';

        const iconContainer = document.createElement('div');
        iconContainer.className = 'flex-shrink-0 w-6 h-6';

        const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        iconSvg.setAttribute('width', '100%');
        iconSvg.setAttribute('height', '100%');
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

        if (type === 'success') {
            iconSvg.setAttribute('viewBox', '0 0 24 24');
            iconSvg.setAttribute('fill', '#22c55e');
            path.setAttribute('d', 'M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z');
        } else {
            iconSvg.setAttribute('viewBox', '0 0 24 24');
            iconSvg.setAttribute('fill', '#ef4444');
            path.setAttribute('d', 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5 15.586L15.586 17 12 13.414 8.414 17 7 15.586 10.586 12 7 8.414 8.414 7 12 10.586 15.586 7 17 8.414 13.414 12 17 15.586z');
        }

        iconSvg.appendChild(path);
        iconContainer.appendChild(iconSvg);

        const textContent = document.createElement('div');
        textContent.className = 'flex-1';
        textContent.textContent = message;

        toast.appendChild(iconContainer);
        toast.appendChild(textContent);

        document.body.appendChild(toast);

        // Animate in
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                toast.style.transform = 'translateX(0)';
                toast.style.opacity = '1';
            });
        });

        setTimeout(() => {
            toast.style.transform = 'translateX(100%)';
            toast.style.opacity = '0';
            toast.style.transition = 'transform .3s ease, opacity .3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 2000);
    }

    function initEmojiComponents() {
        // Copy emoji button handler
        const copyEmojiBtn = document.getElementById('copy-emoji-btn');
        if (copyEmojiBtn) {
            copyEmojiBtn.addEventListener('click', async function () {
                const emoji = this.getAttribute('data-emoji');
                try {
                    await navigator.clipboard.writeText(emoji);
                    this.textContent = '✓ Copied!';
                    this.classList.remove('bg-blue-100', 'text-blue-800', 'dark:bg-blue-900/20', 'dark:text-blue-400');
                    this.classList.add('bg-green-100', 'text-green-800', 'dark:bg-green-900/20', 'dark:text-green-400');
                    setTimeout(() => {
                        this.textContent = 'Copy ' + emoji;
                        this.classList.remove('bg-green-100', 'text-green-800', 'dark:bg-green-900/20', 'dark:text-green-400');
                        this.classList.add('bg-blue-100', 'text-blue-800', 'dark:bg-blue-900/20', 'dark:text-blue-400');
                    }, 2000);
                } catch (err) {
                    if (window.parent && window.parent !== window) {
                        window.parent.postMessage({ command: 'copy', text: emoji }, '*');
                        this.textContent = '✓ Copied!';
                        this.classList.remove('bg-blue-100', 'text-blue-800', 'dark:bg-blue-900/20', 'dark:text-blue-400');
                        this.classList.add('bg-green-100', 'text-green-800', 'dark:bg-green-900/20', 'dark:text-green-400');
                        setTimeout(() => {
                            this.textContent = 'Copy ' + emoji;
                            this.classList.remove('bg-green-100', 'text-green-800', 'dark:bg-green-900/20', 'dark:text-green-400');
                            this.classList.add('bg-blue-100', 'text-blue-800', 'dark:bg-blue-900/20', 'dark:text-blue-400');
                        }, 2000);
                    } else {
                        console.error('Failed to copy:', err);
                    }
                }
            });
        }

        // Copy shortcode buttons handler
        document.querySelectorAll('.copy-shortcode-btn').forEach(btn => {
            btn.addEventListener('click', async function () {
                const code = this.getAttribute('data-code');
                try {
                    await navigator.clipboard.writeText(code);
                    this.textContent = '✓';
                    this.classList.remove('bg-slate-100', 'text-slate-700', 'dark:bg-slate-800', 'dark:text-slate-300');
                    this.classList.add('bg-green-100', 'text-green-800', 'dark:bg-green-900/20', 'dark:text-green-400');
                    setTimeout(() => {
                        const vendor = this.getAttribute('data-vendor');
                        this.textContent = code + ' (' + vendor + ')';
                        this.classList.remove('bg-green-100', 'text-green-800', 'dark:bg-green-900/20', 'dark:text-green-400');
                        this.classList.add('bg-slate-100', 'text-slate-700', 'dark:bg-slate-800', 'dark:text-slate-300');
                    }, 2000);
                } catch (err) {
                    if (window.parent && window.parent !== window) {
                        window.parent.postMessage({ command: 'copy', text: code }, '*');
                        this.textContent = '✓';
                        this.classList.remove('bg-slate-100', 'text-slate-700', 'dark:bg-slate-800', 'dark:text-slate-300');
                        this.classList.add('bg-green-100', 'text-green-800', 'dark:bg-green-900/20', 'dark:text-green-400');
                        setTimeout(() => {
                            const vendor = this.getAttribute('data-vendor');
                            this.textContent = code + ' (' + vendor + ')';
                            this.classList.remove('bg-green-100', 'text-green-800', 'dark:bg-green-900/20', 'dark:text-green-400');
                            this.classList.add('bg-slate-100', 'text-slate-700', 'dark:bg-slate-800', 'dark:text-slate-300');
                        }, 2000);
                    } else {
                        console.error('Failed to copy:', err);
                    }
                }
            });
        });

        // Image copy handler
        document.querySelectorAll('.image-variant-container').forEach(container => {
            container.addEventListener('click', async function () {
                const imageUrl = this.getAttribute('data-variant-url');
                const variantType = this.getAttribute('data-variant-type');
                try {
                    let blob;

                    // Get blob from base64 or URL
                    if (imageUrl.startsWith('data:')) {
                        const [header, base64] = imageUrl.split(',');
                        const mimeMatch = header.match(/:(.*?);/);
                        const mime = mimeMatch ? mimeMatch[1] : 'application/octet-stream';
                        const binary = atob(base64);
                        const len = binary.length;
                        const bytes = new Uint8Array(len);
                        for (let i = 0; i < len; i++) bytes[i] = binary.charCodeAt(i);
                        blob = new Blob([bytes], { type: mime });
                    } else {
                        const res = await fetch(imageUrl);
                        blob = await res.blob();
                    }

                    // Convert unsupported types (WebP, SVG) → PNG for clipboard
                    if (blob.type === 'image/webp' || blob.type === 'image/svg+xml' || blob.type === 'application/octet-stream') {
                        const img = await createImageBitmap(blob);
                        const canvas = document.createElement('canvas');
                        canvas.width = img.width;
                        canvas.height = img.height;
                        const ctx = canvas.getContext('2d');
                        ctx?.drawImage(img, 0, 0);
                        blob = await new Promise(resolve => canvas.toBlob(b => resolve(b), 'image/png'));
                    }

                    // Write to clipboard
                    await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);

                    // Show success toast
                    showToast(`${variantType} image copied to clipboard!`, 'success');
                } catch (err) {
                    console.error('Failed to copy image:', err);
                    showToast('Failed to copy image to clipboard', 'error');
                }
            });
        });

        // Shortcode table copy handler
        document.querySelectorAll('.copy-shortcode-table-btn').forEach(btn => {
            btn.addEventListener('click', async function () {
                const code = this.getAttribute('data-code');
                try {
                    await navigator.clipboard.writeText(code);
                    this.textContent = 'Copied!';
                    this.classList.remove('bg-slate-100', 'text-slate-700', 'dark:bg-slate-800', 'dark:text-slate-300');
                    this.classList.add('bg-green-100', 'text-green-800', 'dark:bg-green-900/20', 'dark:text-green-400');
                    setTimeout(() => {
                        this.textContent = 'Copy';
                        this.classList.remove('bg-green-100', 'text-green-800', 'dark:bg-green-900/20', 'dark:text-green-400');
                        this.classList.add('bg-slate-100', 'text-slate-700', 'dark:bg-slate-800', 'dark:text-slate-300');
                    }, 2000);
                } catch (err) {
                    if (window.parent && window.parent !== window) {
                        window.parent.postMessage({ command: 'copy', text: code }, '*');
                        this.textContent = 'Copied!';
                        this.classList.remove('bg-slate-100', 'text-slate-700', 'dark:bg-slate-800', 'dark:text-slate-300');
                        this.classList.add('bg-green-100', 'text-green-800', 'dark:bg-green-900/20', 'dark:text-green-400');
                        setTimeout(() => {
                            this.textContent = 'Copy';
                            this.classList.remove('bg-green-100', 'text-green-800', 'dark:bg-green-900/20', 'dark:text-green-400');
                            this.classList.add('bg-slate-100', 'text-slate-700', 'dark:bg-slate-800', 'dark:text-slate-300');
                        }, 2000);
                    } else {
                        console.error('Failed to copy:', err);
                    }
                }
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initEmojiComponents);
    } else {
        initEmojiComponents();
    }
})();
