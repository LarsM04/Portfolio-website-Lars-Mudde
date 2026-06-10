/* ============================================================
   Portfolio — Lars Mudde
   JavaScript: Navigation, Scroll Reveal, Mobile Menu
   ============================================================ */

(function () {
  "use strict";

  // --- Navigation: scroll state ---
  const nav = document.getElementById("navbar");

  function updateNav() {
    if (window.scrollY > 60) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", updateNav, { passive: true });
  updateNav();

  // --- Mobile menu toggle ---
  const toggle = document.getElementById("nav-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const iconMenu = document.getElementById("icon-menu");
  const iconClose = document.getElementById("icon-close");

  toggle.addEventListener("click", function () {
    const isOpen = mobileMenu.classList.toggle("open");
    iconMenu.style.display = isOpen ? "none" : "block";
    iconClose.style.display = isOpen ? "block" : "none";
  });

  // Close mobile menu when a link is clicked
  mobileMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("open");
      iconMenu.style.display = "block";
      iconClose.style.display = "none";
    });
  });

  // --- Intersection Observer: reveal on scroll ---
  const revealElements = document.querySelectorAll(".reveal, .reveal-right");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
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
    // Fallback: show everything
    revealElements.forEach(function (el) {
      el.classList.add("visible");
    });
  }

  // --- Smooth scroll for anchor links (fallback for browsers without CSS smooth scroll) ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
})();
