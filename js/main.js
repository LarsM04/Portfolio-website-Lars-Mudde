/* ============================================================
   Main — Entry Point
   ============================================================
   This file initialises all modules after the DOM is ready.
   Each init function is defined in its own file:

   - initNavigation()   → js/navigation.js
   - initProjects()     → js/projects.js  (renders from data/projects.js)
   - initJourney()      → js/journey.js   (renders from data/education.js)
   - initAnimations()   → js/animations.js
   - initSmoothScroll() → js/smooth-scroll.js

   IMPORTANT: Data-driven sections (projects, journey) must be
   rendered BEFORE initAnimations() so the IntersectionObserver
   can find the dynamically created .reveal elements.
   ============================================================ */

(function () {
  "use strict";

  /**
   * Render skills tags from data/skills.js into the #skills-list container.
   */
  function initSkills() {
    var container = document.getElementById("skills-list");
    if (!container || !window.skillsData) return;

    var html = skillsData
      .map(function (skill) {
        return '<span class="about__tag">' + skill + '</span>';
      })
      .join("\n            ");

    container.innerHTML = html;
  }

  // 1. Render data-driven sections first
  initProjects();
  initJourney();
  initSkills();

  // 2. Then initialise interactive behaviour
  initNavigation();
  initAnimations();
  initSmoothScroll();
})();
