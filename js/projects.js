/* ============================================================
   Projects Renderer
   ============================================================
   Reads the projectsData array (from data/projects.js) and
   generates the project cards HTML into the #projects-list
   container.

   To add a new project, just add an object to data/projects.js —
   no HTML editing needed.
   ============================================================ */

/**
 * Build the HTML string for a single project card.
 *
 * @param {Object} project - A project object from projectsData
 * @returns {string} HTML string for the project card
 */
function buildProjectHTML(project) {
  /* Build technology tags */
  var techHTML = project.tech
    .map(function (t) {
      return '<span class="project__tech">' + t + "</span>";
    })
    .join("\n            ");

  /* CSS class: add project--reverse for alternating layout */
  var reverseClass = project.reverse ? " project--reverse" : "";

  return (
    '<div class="project' + reverseClass + ' reveal">\n' +
    '  <div class="project__text">\n' +
    '    <div class="project__header">\n' +
    '      <span class="project__number">' + project.number + "</span>\n" +
    '      <span class="project__tagline">' + project.tagline + "</span>\n" +
    "    </div>\n" +
    '    <h3 class="project__name">' + project.name + "</h3>\n" +
    '    <p class="project__desc">' + project.desc + "</p>\n" +
    '    <div class="project__stack">\n' +
    "      " + techHTML + "\n" +
    "    </div>\n" +
    '    <div class="project__meta">\n' +
    '      <span class="project__role-year">' + project.role + "</span>\n" +
    '      <button class="project__case-study">\n' +
    "        Case study\n" +
    '        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n' +
    '          <line x1="7" y1="17" x2="17" y2="7"/>\n' +
    '          <polyline points="7 7 17 7 17 17"/>\n' +
    "        </svg>\n" +
    "      </button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    '  <div class="project__image-wrap">\n' +
    '    <img\n' +
    '      src="' + project.image + '"\n' +
    '      alt="' + project.imageAlt + '"\n' +
    '      loading="lazy"\n' +
    "    />\n" +
    '    <div class="project__image-gradient"></div>\n' +
    '    <div class="project__image-border"></div>\n' +
    "  </div>\n" +
    "</div>"
  );
}

/**
 * Render all projects into the #projects-list container.
 * Called once from main.js after the DOM is ready.
 */
function initProjects() {
  var container = document.getElementById("projects-list");
  if (!container) return;

  var html = projectsData
    .map(function (project) {
      return buildProjectHTML(project);
    })
    .join("\n\n");

  container.innerHTML = html;
}
