const activeToasts = new Map();
let rafId: number | null = null;
const GAP = 12, OFFSET = 16;

const updateToastPositions = () => {
    if (rafId !== null) return;
    rafId = requestAnimationFrame(() => {
        rafId = null;
        let o = OFFSET;
        activeToasts.forEach((h, t) => {
            if (t.parentNode) {
                t.style.top = o + 'px';
                o += h + GAP;
            }
        });
    });
};

const showToast = (text: string, type: string) => {
    if (typeof document === 'undefined') return;

    const toast = document.createElement('div');
    toast.setAttribute('role', 'alert');
    toast.className = 'fixed right-4 !bg-white !text-slate-800 !border !border-slate-200 dark:!bg-slate-800 dark:!text-slate-200 dark:!border-slate-600 rounded-lg shadow-lg z-[10000] max-w-sm min-w-[300px] p-4 flex items-start gap-3 a';

    const iconContainer = document.createElement('div');
    iconContainer.className = 'flex-shrink-0 w-6 h-6';

    const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    iconSvg.setAttribute('width', '100%');
    iconSvg.setAttribute('height', '100%');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    switch (type) {
        case 'success':
            iconSvg.setAttribute('viewBox', '0 0 24 24');
            iconSvg.setAttribute('fill', '#22c55e');
            path.setAttribute('d', 'M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z');
            break;
        case 'error':
            iconSvg.setAttribute('viewBox', '0 0 24 24');
            iconSvg.setAttribute('fill', '#ef4444');
            path.setAttribute('d', 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5 15.586L15.586 17 12 13.414 8.414 17 7 15.586 10.586 12 7 8.414 8.414 7 12 10.586 15.586 7 17 8.414 13.414 12 17 15.586z');
            break;
        case 'info':
            iconSvg.setAttribute('viewBox', '0 0 16 16');
            iconSvg.setAttribute('fill', '#3b82f6');
            path.setAttribute('d', 'M8.75 11.25a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 7c.416 0 .75.335.75.75v3.5zM8 4a.75.75 0 1 0 0 1.5A.75.75 0 0 0 8 4zm0-3a7 7 0 1 0 .001 14.001A7 7 0 0 0 8 1zm0 13.012A6.012 6.012 0 0 1 8 1.988c3.32 0 6.009 2.691 6.009 6.012S11.32 14.012 8 14.012z');
            break;
        case 'warning':
            iconSvg.setAttribute('viewBox', '0 0 24 24');
            iconSvg.setAttribute('fill', '#f59e0b');
            path.setAttribute('d', 'M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16v-2h2v2h-2zm0-4v-4h2v4h-2z');
            break;
    }

    iconSvg.appendChild(path);
    iconContainer.appendChild(iconSvg);

    // Text content
    const textContent = document.createElement('div');
    textContent.className = 'flex-1 text-sm font-medium leading-5';
    textContent.textContent = text;

    const progressWrapper = document.createElement('div');
    progressWrapper.className = 'absolute bottom-0 left-0 right-0 h-1 bg-slate-200 dark:bg-slate-600 rounded-b-lg overflow-hidden';
    const progressBar = document.createElement('div');
    progressBar.className = 'h-full !bg-blue-500 b';
    progressBar.setAttribute('role', 'progressbar');
    progressWrapper.appendChild(progressBar);

    toast.appendChild(iconContainer);
    toast.appendChild(textContent);
    toast.appendChild(progressWrapper);

    if (!document.getElementById('toast-styles')) {
        const style = document.createElement('style');
        style.id = 'toast-styles';
        style.textContent = '@keyframes s{0%{transform:translateX(100%);opacity:0}to{transform:none;opacity:1}}@keyframes p{from{width:100%}to{width:0}}.a{animation:s .3s ease}.b{animation:p 2s linear forwards}';
        document.head.appendChild(style);
    }

    let o = OFFSET;
    activeToasts.forEach((h, t) => {
        if (t !== toast && t.parentNode) o += h + GAP;
    });
    toast.style.top = o + 'px';

    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            if (toast.parentNode) activeToasts.set(toast, toast.offsetHeight);
        });
    });

    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        toast.style.opacity = '0';
        toast.style.transition = 'transform .3s ease,opacity .3s ease';
        toast.addEventListener('transitionend', () => {
            toast.remove();
            activeToasts.delete(toast);
            updateToastPositions();
        }, { once: true });
    }, 2000);
};

export const toast = {
    success: (message: string) => showToast(message, 'success'),
    error: (message: string) => showToast(message, 'error'),
    info: (message: string) => showToast(message, 'info'),
    warning: (message: string) => showToast(message, 'warning'),
};

export default toast;