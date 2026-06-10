/* ============================================================
   Navigation
   ============================================================
   Handles:
   - Navbar background change on scroll
   - Mobile hamburger menu toggle
   - Closing the mobile menu when a link is clicked
   ============================================================ */

/**
 * Initialise all navigation behaviour.
 * Called once from main.js after the DOM is ready.
 */
function initNavigation() {
  var nav = document.getElementById("navbar");
  var toggle = document.getElementById("nav-toggle");
  var mobileMenu = document.getElementById("mobile-menu");
  var iconMenu = document.getElementById("icon-menu");
  var iconClose = document.getElementById("icon-close");

  /* --- Scroll state ---
     Add a .scrolled class to the nav when the user has scrolled
     past 60px, which triggers the blurred background. */
  function updateNav() {
    if (window.scrollY > 60) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", updateNav, { passive: true });
  updateNav(); // Set initial state on page load

  /* --- Mobile menu toggle ---
     Toggles the .open class and swaps the hamburger / close icons. */
  toggle.addEventListener("click", function () {
    var isOpen = mobileMenu.classList.toggle("open");
    iconMenu.style.display = isOpen ? "none" : "block";
    iconClose.style.display = isOpen ? "block" : "none";
  });

  /* --- Close menu on link click ---
     When a mobile nav link is tapped, close the menu so the
     user sees the page scroll to the section. */
  mobileMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("open");
      iconMenu.style.display = "block";
      iconClose.style.display = "none";
    });
  });
}
