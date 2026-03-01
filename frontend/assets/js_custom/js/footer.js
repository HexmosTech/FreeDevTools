// Optimized GitHub star count fetching with caching and error handling
let starCountCache = null;
let fetchInProgress = false;

async function fetchStarCount() {
    // Return cached result if available
    if (starCountCache !== null) {
        updateStarCount(starCountCache);
        return;
    }

    // Prevent multiple simultaneous requests
    if (fetchInProgress) return;
    fetchInProgress = true;

    try {
        // Check if we have a cached version in localStorage
        const cached = localStorage.getItem('github-star-count');
        const cacheTime = localStorage.getItem('github-star-count-time');
        const now = Date.now();

        // Use cache if it's less than 1 hour old
        if (cached && cacheTime && now - parseInt(cacheTime) < 3600000) {
            starCountCache = parseInt(cached);
            updateStarCount(starCountCache);
            fetchInProgress = false;
            return;
        }

        // Use AbortController for timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

        const response = await fetch(
            'https://api.github.com/repos/HexmosTech/FreeDevTools',
            {
                signal: controller.signal,
                headers: {
                    Accept: 'application/vnd.github.v3+json',
                    'User-Agent': 'FreeDevTools',
                },
            }
        );

        clearTimeout(timeoutId);

        if (response.ok) {
            const data = await response.json();
            const starCount = data.stargazers_count;
            starCountCache = starCount;

            // Cache the result
            localStorage.setItem('github-star-count', starCount.toString());
            localStorage.setItem('github-star-count-time', now.toString());

            updateStarCount(starCount);
        } else {
            throw new Error(`HTTP ${response.status}`);
        }
    } catch (error) {
        console.log('Could not fetch star count:', error);
        // Keep the default star emoji if fetch fails
    } finally {
        fetchInProgress = false;
    }
}

function updateStarCount(count) {
    const starCountElement = document.getElementById('star-count');
    if (starCountElement) {
        starCountElement.textContent = count.toLocaleString();
    }
}

// Optimized initialization with intersection observer
function initStarCount() {
    // Only fetch if the star button is visible or likely to be visible
    const starButton = document.querySelector(
        'a[href*="github.com/HexmosTech/FreeDevTools"]'
    );
    if (!starButton) return;

    // Use Intersection Observer to only fetch when button is visible
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    fetchStarCount();
                    observer.disconnect(); // Only fetch once
                }
            });
        },
        {
            rootMargin: '100px', // Start fetching when button is 100px away from viewport
        }
    );

    observer.observe(starButton);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    // Use requestIdleCallback for better performance
    if ('requestIdleCallback' in window) {
        requestIdleCallback(initStarCount, { timeout: 3000 });
    } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(initStarCount, 500);
    }
});
