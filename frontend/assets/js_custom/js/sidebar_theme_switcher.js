(function () {
    let currentTheme = 'light';
    let isDropdownOpen = false;

    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' || savedTheme === 'light') {
            currentTheme = savedTheme;
        } else {
            // Check system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            currentTheme = prefersDark ? 'dark' : 'light';
        }
        applyTheme(currentTheme);
        updateUI();
    }

    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
        currentTheme = theme;
    }

    function updateUI() {
        const label = document.getElementById('sidebar-theme-label');
        const lightIcon = document.querySelector('.sidebar-theme-icon-light');
        const darkIcon = document.querySelector('.sidebar-theme-icon-dark');
        const chevron = document.querySelector('.sidebar-theme-chevron');

        if (label) {
            label.textContent = currentTheme === 'light' ? 'Light' : 'Dark';
        }

        if (lightIcon && darkIcon) {
            if (currentTheme === 'light') {
                lightIcon.style.opacity = '1';
                darkIcon.style.opacity = '0';
            } else {
                lightIcon.style.opacity = '0';
                darkIcon.style.opacity = '1';
            }
        }

        if (chevron) {
            chevron.style.transform = isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)';
        }
    }

    function toggleDropdown() {
        const dropdown = document.getElementById('sidebar-theme-dropdown');
        const btn = document.getElementById('sidebar-theme-btn');

        if (!dropdown || !btn) return;

        isDropdownOpen = !isDropdownOpen;
        dropdown.style.display = isDropdownOpen ? 'block' : 'none';
        btn.setAttribute('aria-expanded', isDropdownOpen.toString());
        updateUI();
    }

    function changeTheme(newTheme) {
        applyTheme(newTheme);
        updateUI();
        // Close dropdown after selection
        isDropdownOpen = false;
        const dropdown = document.getElementById('sidebar-theme-dropdown');
        const btn = document.getElementById('sidebar-theme-btn');
        if (dropdown) dropdown.style.display = 'none';
        if (btn) btn.setAttribute('aria-expanded', 'false');
    }

    function handleClickOutside(event) {
        const container = document.getElementById('sidebar-theme-switcher-container');
        if (container && !container.contains(event.target) && isDropdownOpen) {
            isDropdownOpen = false;
            const dropdown = document.getElementById('sidebar-theme-dropdown');
            const btn = document.getElementById('sidebar-theme-btn');
            if (dropdown) dropdown.style.display = 'none';
            if (btn) btn.setAttribute('aria-expanded', 'false');
            updateUI();
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        initTheme();

        const btn = document.getElementById('sidebar-theme-btn');
        if (btn) {
            btn.addEventListener('click', toggleDropdown);
            btn.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleDropdown();
                }
            });
        }

        const lightOption = document.getElementById('sidebar-theme-option-light');
        if (lightOption) {
            lightOption.addEventListener('click', () => changeTheme('light'));
            lightOption.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    changeTheme('light');
                }
            });
        }

        const darkOption = document.getElementById('sidebar-theme-option-dark');
        if (darkOption) {
            darkOption.addEventListener('click', () => changeTheme('dark'));
            darkOption.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    changeTheme('dark');
                }
            });
        }

        // Close dropdown when clicking outside
        document.addEventListener('click', handleClickOutside);

        // Listen for theme changes from other switchers
        window.addEventListener('storage', function (e) {
            if (e.key === 'theme') {
                initTheme();
            }
        });
    });
})();
