(function () {
    if (window._discordEmojiInitialized) return;
    window._discordEmojiInitialized = true;

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
            setTimeout(() => toast.remove(), 300);
        }, 2000);
    }

    function initCopyButton() {
        const btn = document.getElementById('copy-discord-emoji-btn');
        if (btn && !btn.dataset.initialized) {
            btn.dataset.initialized = 'true';
            const emoji = btn.getAttribute('data-emoji');
            const originalText = btn.textContent;
            btn.addEventListener('click', async function () {
                try {
                    await navigator.clipboard.writeText(emoji);
                    btn.textContent = '✓ Copied!';
                    setTimeout(function () {
                        btn.textContent = originalText;
                    }, 1200);
                } catch (err) {
                    console.error('Failed to copy emoji:', err);
                }
            });
        }
    }

    function initEvolutionImages() {
        // Evolution image copy handler
        document.querySelectorAll('.evolution-image-container').forEach(container => {
            container.addEventListener('click', async function () {
                const imageUrl = this.getAttribute('data-evolution-url');
                const version = this.getAttribute('data-evolution-version');
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
                    showToast(`${version} emoji copied to clipboard!`, 'success');
                } catch (err) {
                    console.error('Failed to copy image:', err);
                    showToast('Failed to copy image to clipboard', 'error');
                }
            });
        });
    }

    // Initialize all Discord emoji functionality
    function initializeDiscordEmoji() {
        initCopyButton();
        initEvolutionImages();
    }

    // Try immediately
    initializeDiscordEmoji();

    // Also try on DOMContentLoaded in case script runs before button exists
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeDiscordEmoji);
    }
})();
