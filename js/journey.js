/* ============================================================
   Journey / Timeline Renderer
   ============================================================
   Reads the educationData array (from data/education.js) and
   generates the timeline HTML into the #journey-list container.

   To add a new milestone, just add an object to
   data/education.js — no HTML editing needed.
   ============================================================ */

/**
 * Build the HTML string for a single timeline milestone.
 *
 * @param {Object}  item  - A milestone object from educationData
 * @param {number}  index - Zero-based index (used for stagger delay)
 * @returns {string} HTML string for the timeline item
 */
function buildJourneyItemHTML(item, index) {
  var delayClass = index > 0 ? " delay-" + index : "";

  return (
    '<div class="journey__item reveal' + delayClass + '">\n' +
    '  <div class="journey__year-col">\n' +
    '    <span class="journey__year">' + item.year + "</span>\n" +
    '    <div class="journey__dot"></div>\n' +
    "  </div>\n" +
    '  <div class="journey__content">\n' +
    '    <h3 class="journey__role">' + item.role + "</h3>\n" +
    '    <span class="journey__org">' + item.org + "</span>\n" +
    '    <p class="journey__desc">' + item.desc + "</p>\n" +
    "  </div>\n" +
    "</div>"
  );
}

/**
 * Render all journey milestones into the #journey-list container.
 * Called once from main.js after the DOM is ready.
 */
function initJourney() {
  var container = document.getElementById("journey-list");
  if (!container) return;

  var html = educationData
    .map(function (item, index) {
      return buildJourneyItemHTML(item, index);
    })
    .join("\n\n");

  container.innerHTML = html;
}
