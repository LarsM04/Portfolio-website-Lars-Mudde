/* ============================================================
   Scroll Reveal Animations
   ============================================================
   Uses IntersectionObserver to add a .visible class to elements
   with .reveal or .reveal-right when they enter the viewport.

   The actual CSS transitions are defined in css/animations.css.
   This file only handles the *triggering* logic.

   GSAP UPGRADE NOTE:
   To switch to GSAP-powered animations:
   1. Include GSAP + ScrollTrigger via CDN or local file
   2. Replace the observer below with gsap.from() calls
   3. You can keep or remove the CSS transition classes
   ============================================================ */

/**
 * Initialise the scroll-reveal observer.
 * Called once from main.js after the DOM is ready.
 */
function initAnimations() {
  var revealElements = document.querySelectorAll(".reveal, .reveal-right");

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Stop observing once revealed (one-time animation)
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "-60px 0px",
      }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback for older browsers: show everything immediately
    revealElements.forEach(function (el) {
      el.classList.add("visible");
    });
  }
}
