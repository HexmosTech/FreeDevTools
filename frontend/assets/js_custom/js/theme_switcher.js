
(function () {
    let currentTheme = 'light';

    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' || savedTheme === 'light') {
            currentTheme = savedTheme;
        } else {
            currentTheme = 'light';
        }
        applyTheme(currentTheme);
        updateButtonStates();
    }

    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }

    function updateButtonStates() {
        const lightBtn = document.getElementById('light-theme-btn');
        const darkBtn = document.getElementById('dark-theme-btn');

        if (!lightBtn || !darkBtn) return;

        if (currentTheme === 'light') {
            lightBtn.className = lightBtn.className.replace('hover:bg-gray-100 dark:hover:bg-gray-700', 'bg-white ring ring-gray-950/10 dark:bg-gray-600 dark:ring-white/10');
            darkBtn.className = darkBtn.className.replace('bg-white ring ring-gray-950/10 dark:bg-gray-600 dark:ring-white/10', 'hover:bg-gray-100 dark:hover:bg-gray-700');
        } else {
            darkBtn.className = darkBtn.className.replace('hover:bg-gray-100 dark:hover:bg-gray-700', 'bg-white ring ring-gray-950/10 dark:bg-gray-600 dark:ring-white/10');
            lightBtn.className = lightBtn.className.replace('bg-white ring ring-gray-950/10 dark:bg-gray-600 dark:ring-white/10', 'hover:bg-gray-100 dark:hover:bg-gray-700');
        }
    }

    function changeTheme(newTheme) {
        currentTheme = newTheme;
        applyTheme(newTheme);
        updateButtonStates();
    }

    document.addEventListener('DOMContentLoaded', function () {
        initTheme();

        const lightBtn = document.getElementById('light-theme-btn');
        if (lightBtn) {
            lightBtn.addEventListener('click', () => changeTheme('light'));
            lightBtn.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    changeTheme('light');
                }
            });
        }

        const darkBtn = document.getElementById('dark-theme-btn');
        if (darkBtn) {
            darkBtn.addEventListener('click', () => changeTheme('dark'));
            darkBtn.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    changeTheme('dark');
                }
            });
        }
    });
})();