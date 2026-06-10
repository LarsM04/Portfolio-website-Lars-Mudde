/* ============================================================
   Smooth Scroll
   ============================================================
   Adds smooth-scroll behaviour to all anchor links (href="#…").
   This is a fallback for browsers that don't support
   CSS scroll-behavior: smooth.
   ============================================================ */

/**
 * Initialise smooth scrolling for all internal anchor links.
 * Called once from main.js after the DOM is ready.
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var targetId = this.getAttribute("href");

      // Skip plain "#" links (e.g. the logo)
      if (targetId === "#") return;

      var targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}
