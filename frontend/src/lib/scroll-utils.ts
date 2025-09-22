/**
 * Utility function to scroll to the head-title element
 * Falls back to scrolling to top of page if head-title not found
 */
export function scrollToHeadTitle(): void {
  const headTitle = document.getElementById('head-title');
  if (headTitle) {
    headTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    // Fallback to top of page if head-title not found
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
