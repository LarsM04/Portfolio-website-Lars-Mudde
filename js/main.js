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

   IMPORTANT: Data-driven sections (projects, journey, skills) must be
   rendered BEFORE initAnimations() so the IntersectionObserver
   can find the dynamically created .reveal elements.
   ============================================================ */

(function () {
  "use strict";

  /**
   * Render skills with icons from data/skills.js into the #skills-list container.
   */
  function initSkills() {
    var container = document.getElementById("skills-list");
    if (!container || !window.skillsData) return;

    var html = skillsData
      .map(function (skill, index) {
        var delayClass = index > 0 ? " delay-" + Math.min(index, 6) : "";
        return (
          '<div class="skill-card reveal' + delayClass + '">\n' +
          '  <div class="skill-card__icon">\n' +
          "    " + skill.icon + "\n" +
          "  </div>\n" +
          '  <span class="skill-card__name">' + skill.name + "</span>\n" +
          "</div>"
        );
      })
      .join("\n");

    container.innerHTML = html;
  }

  /**
   * Render soft skills from data/skills.js into the #soft-skills-list container.
   */
  function initSoftSkills() {
    var container = document.getElementById("soft-skills-list");
    if (!container || !window.softSkillsData) return;

    var html = softSkillsData
      .map(function (skill, index) {
        var delayClass = index > 0 ? " delay-" + Math.min(index, 6) : "";
        return (
          '<div class="skill-card skill-card--soft reveal' + delayClass + '">\n' +
          '  <div class="skill-card__icon">\n' +
          "    " + skill.icon + "\n" +
          "  </div>\n" +
          '  <span class="skill-card__name">' + skill.name + "</span>\n" +
          "</div>"
        );
      })
      .join("\n");

    container.innerHTML = html;
  }

  // 1. Render data-driven sections first
  initProjects();
  initJourney();
  initSkills();
  initSoftSkills();

  // 2. Then initialise interactive behaviour
  initNavigation();
  initAnimations();
  initSmoothScroll();
  initContact();
})();

