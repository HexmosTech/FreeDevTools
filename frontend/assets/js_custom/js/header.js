// Toggle sidebar visibility
(function () {
    function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        const hamburgerButton = document.getElementById('hamburger-menu-button');
        const backdrop = document.getElementById('sidebar-backdrop');

        if (!sidebar || !hamburgerButton) return;

        const isOpen = sidebar.classList.contains('sidebar-open');

        if (isOpen) {
            // Close sidebar
            sidebar.classList.remove('sidebar-open');
            hamburgerButton.setAttribute('aria-expanded', 'false');
            if (backdrop) {
                backdrop.style.display = 'none';
            }
            // Prevent body scroll when sidebar is open
            document.body.style.overflow = '';
        } else {
            // Open sidebar
            sidebar.classList.add('sidebar-open');
            hamburgerButton.setAttribute('aria-expanded', 'true');
            if (backdrop) {
                backdrop.style.display = 'block';
            }
            // Prevent body scroll when sidebar is open
            document.body.style.overflow = 'hidden';
        }
    }

    function closeSidebar() {
        const sidebar = document.getElementById('sidebar');
        const hamburgerButton = document.getElementById('hamburger-menu-button');
        const backdrop = document.getElementById('sidebar-backdrop');

        if (sidebar) {
            sidebar.classList.remove('sidebar-open');
        }
        if (hamburgerButton) {
            hamburgerButton.setAttribute('aria-expanded', 'false');
        }
        if (backdrop) {
            backdrop.style.display = 'none';
        }
        document.body.style.overflow = '';
    }

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            const hamburgerButton = document.getElementById('hamburger-menu-button');
            const backdrop = document.getElementById('sidebar-backdrop');

            if (hamburgerButton) {
                hamburgerButton.addEventListener('click', toggleSidebar);
            }

            if (backdrop) {
                backdrop.addEventListener('click', closeSidebar);
            }

            // Close sidebar on escape key
            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape') {
                    const sidebar = document.getElementById('sidebar');
                    if (sidebar && sidebar.classList.contains('sidebar-open')) {
                        closeSidebar();
                    }
                }
            });
        });
    } else {
        const hamburgerButton = document.getElementById('hamburger-menu-button');
        const backdrop = document.getElementById('sidebar-backdrop');

        if (hamburgerButton) {
            hamburgerButton.addEventListener('click', toggleSidebar);
        }

        if (backdrop) {
            backdrop.addEventListener('click', closeSidebar);
        }

        // Close sidebar on escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                const sidebar = document.getElementById('sidebar');
                if (sidebar && sidebar.classList.contains('sidebar-open')) {
                    closeSidebar();
                }
            }
        });
    }
})();
