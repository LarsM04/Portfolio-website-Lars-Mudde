/* ============================================================
   Projects Renderer — Compact Cards + Detail Modal
   ============================================================
   Reads the projectsData array (from data/projects.js) and
   generates compact project cards in a grid. Clicking a card
   opens a full-screen detail modal with all project info.

   To add a new project, just add an object to data/projects.js —
   no HTML editing needed.
   ============================================================ */

/**
 * Build the HTML string for a single compact project card.
 *
 * @param {Object} project - A project object from projectsData
 * @param {number} index   - Zero-based index (for stagger + data attr)
 * @returns {string} HTML string for the project card
 */
function buildProjectCardHTML(project, index) {
  var delayClass = index > 0 ? " delay-" + index : "";

  /* Build technology tags (max 3 shown on card) */
  var techHTML = project.tech
    .slice(0, 3)
    .map(function (t) {
      return '<span class="card__tech">' + t + "</span>";
    })
    .join("\n            ");

  /* Extra count if more than 3 techs */
  var extraTech = project.tech.length > 3
    ? '\n            <span class="card__tech card__tech--more">+' + (project.tech.length - 3) + "</span>"
    : "";

  return (
    '<article class="project-card reveal' + delayClass + '" data-project="' + index + '" tabindex="0" role="button" aria-label="Bekijk details van ' + project.name + '">\n' +
    '  <div class="card__image-wrap">\n' +
    '    <img\n' +
    '      src="' + project.image + '"\n' +
    '      alt="' + project.imageAlt + '"\n' +
    '      loading="lazy"\n' +
    "    />\n" +
    '    <div class="card__image-gradient"></div>\n' +
    '    <span class="card__tagline">' + project.tagline + "</span>\n" +
    "  </div>\n" +
    '  <div class="card__body">\n' +
    '    <h3 class="card__name">' + project.name + "</h3>\n" +
    '    <p class="card__desc">' + project.shortDesc + "</p>\n" +
    '    <div class="card__stack">\n' +
    "      " + techHTML + extraTech + "\n" +
    "    </div>\n" +
    '    <span class="card__cta">\n' +
    "      Bekijk project\n" +
    '      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n' +
    '        <line x1="5" y1="12" x2="19" y2="12"/>\n' +
    '        <polyline points="12 5 19 12 12 19"/>\n' +
    "      </svg>\n" +
    "    </span>\n" +
    "  </div>\n" +
    "</article>"
  );
}

/**
 * Build the detail modal body HTML for a project.
 *
 * @param {Object} project - A project object from projectsData
 * @returns {string} HTML string for the modal body content
 */
function buildProjectModalHTML(project) {
  /* Build all technology tags */
  var techHTML = project.tech
    .map(function (t) {
      return '<span class="modal__tech">' + t + "</span>";
    })
    .join("\n          ");

  /* Build highlights list */
  var highlightsHTML = "";
  if (project.highlights && project.highlights.length > 0) {
    var listItems = project.highlights
      .map(function (h) {
        /* Support both string highlights and object highlights with images */
        var text = typeof h === "string" ? h : h.text;
        var image = typeof h === "object" && h.image ? h.image : null;

        var liContent = '<span class="modal__highlight-text">' + text + "</span>";
        if (image) {
          liContent +=
            '<div class="modal__highlight-image" data-lightbox="' + image + '" role="button" tabindex="0" aria-label="Vergroot afbeelding">' +
            '<img src="' + image + '" alt="' + text + '" loading="lazy" />' +
            '<div class="modal__highlight-zoom"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg></div>' +
            "</div>";
        }
        return "    <li" + (image ? ' class="modal__highlight--has-image"' : "") + ">" + liContent + "</li>";
      })
      .join("\n");

    highlightsHTML =
      '<div class="modal__highlights">\n' +
      '  <h4 class="modal__subtitle">Hoogtepunten</h4>\n' +
      "  <ul>\n" +
      listItems +
      "\n  </ul>\n" +
      "</div>";
  }

  /* Build links */
  var linksHTML = "";
  if (project.links) {
    var linkItems = [];
    if (project.links.github) {
      linkItems.push(
        '<a href="' + project.links.github + '" target="_blank" rel="noopener noreferrer" class="modal__link">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
        '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>' +
        '<path d="M9 18c-4.51 2-5-2-7-2"/>' +
        "</svg>" +
        "GitHub" +
        "</a>"
      );
    }
    if (project.links.live) {
      linkItems.push(
        '<a href="' + project.links.live + '" target="_blank" rel="noopener noreferrer" class="modal__link">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
        '<circle cx="12" cy="12" r="10"/>' +
        '<line x1="2" y1="12" x2="22" y2="12"/>' +
        '<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>' +
        "</svg>" +
        "Live Demo" +
        "</a>"
      );
    }
    if (linkItems.length > 0) {
      linksHTML =
        '<div class="modal__links">\n  ' +
        linkItems.join("\n  ") +
        "\n</div>";
    }
  }

  /* Hero thumbnail overlay (e.g. homepage screenshot in the corner) */
  var heroThumbHTML = "";
  if (project.heroThumb) {
    heroThumbHTML =
      '  <div class="modal__hero-thumb" data-lightbox="' + project.heroThumb + '" role="button" tabindex="0" aria-label="Vergroot screenshot">\n' +
      '    <img src="' + project.heroThumb + '" alt="App screenshot" />\n' +
      '    <div class="modal__hero-thumb-zoom"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg></div>\n' +
      '  </div>\n';
  }

  /* Build team/solo badge */
  var teamBadgeHTML = "";
  if (project.teamType) {
    var badgeClass = project.teamType === "solo" ? "modal__badge--solo" : "modal__badge--team";
    var badgeLabel = project.teamType === "solo"
      ? "Solo Project"
      : "Teamproject" + (project.teamSize ? " · " + project.teamSize + " personen" : "");
    teamBadgeHTML = '  <span class="modal__badge ' + badgeClass + '">' + badgeLabel + "</span>\n";
  }

  /* Build role description */
  var roleDescHTML = "";
  if (project.roleDescription) {
    roleDescHTML = '  <p class="modal__role-desc">' + project.roleDescription + "</p>\n";
  }

  return (
    '<div class="modal__hero">\n' +
    '  <img src="' + project.image + '" alt="' + project.imageAlt + '" />\n' +
    '  <div class="modal__hero-gradient"></div>\n' +
    heroThumbHTML +
    "</div>\n" +
    '<div class="modal__info">\n' +
    '  <span class="modal__tagline">' + project.tagline + "</span>\n" +
    '  <h2 class="modal__title">' + project.name + "</h2>\n" +
    '  <span class="modal__role">' + project.role + "</span>\n" +
    teamBadgeHTML +
    roleDescHTML +
    '  <p class="modal__desc">' + project.desc + "</p>\n" +
    highlightsHTML + "\n" +
    '  <div class="modal__stack">\n' +
    '    <h4 class="modal__subtitle">Technologieën</h4>\n' +
    '    <div class="modal__tech-list">\n' +
    "      " + techHTML + "\n" +
    "    </div>\n" +
    "  </div>\n" +
    linksHTML + "\n" +
    "</div>"
  );
}

/**
 * Open the project detail modal.
 *
 * @param {number} index - Index into projectsData
 */
function openProjectModal(index) {
  var modal = document.getElementById("project-modal");
  var body = document.getElementById("modal-body");
  if (!modal || !body || !projectsData[index]) return;

  body.innerHTML = buildProjectModalHTML(projectsData[index]);
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  /* Bind lightbox click events on images */
  bindLightboxEvents(body);

  /* Focus the close button for accessibility */
  var closeBtn = document.getElementById("modal-close");
  if (closeBtn) closeBtn.focus();
}

/**
 * Close the project detail modal.
 */
function closeProjectModal() {
  var modal = document.getElementById("project-modal");
  if (!modal) return;

  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

/* ============================================================
   Image Lightbox
   ============================================================ */

/**
 * Open a full-screen lightbox for the given image URL.
 */
function openLightbox(imageSrc) {
  /* Remove existing lightbox if any */
  closeLightbox();

  var overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";
  overlay.id = "image-lightbox";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", "Vergrote afbeelding");

  overlay.innerHTML =
    '<div class="lightbox__backdrop"></div>' +
    '<div class="lightbox__content">' +
    '  <img src="' + imageSrc + '" alt="Vergrote afbeelding" />' +
    '</div>' +
    '<button class="lightbox__close" aria-label="Sluiten">' +
    '  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    '    <line x1="18" y1="6" x2="6" y2="18"/>' +
    '    <line x1="6" y1="6" x2="18" y2="18"/>' +
    '  </svg>' +
    '</button>';

  document.body.appendChild(overlay);

  /* Trigger reflow for animation */
  overlay.offsetHeight;
  overlay.classList.add("active");

  /* Close on backdrop click */
  overlay.querySelector(".lightbox__backdrop").addEventListener("click", closeLightbox);
  overlay.querySelector(".lightbox__close").addEventListener("click", closeLightbox);
}

/**
 * Close the lightbox overlay.
 */
function closeLightbox() {
  var overlay = document.getElementById("image-lightbox");
  if (!overlay) return;

  overlay.classList.remove("active");
  setTimeout(function () {
    if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
  }, 300);
}

/**
 * Bind click events on all elements with data-lightbox attribute.
 */
function bindLightboxEvents(container) {
  var triggers = container.querySelectorAll("[data-lightbox]");
  triggers.forEach(function (trigger) {
    trigger.addEventListener("click", function (e) {
      e.stopPropagation();
      openLightbox(trigger.getAttribute("data-lightbox"));
    });
    trigger.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        e.stopPropagation();
        openLightbox(trigger.getAttribute("data-lightbox"));
      }
    });
  });
}

/**
 * Render all project cards and set up modal event listeners.
 * Called once from main.js after the DOM is ready.
 */
function initProjects() {
  var container = document.getElementById("projects-list");
  if (!container) return;

  /* Render cards */
  var html = projectsData
    .map(function (project, index) {
      return buildProjectCardHTML(project, index);
    })
    .join("\n\n");

  container.innerHTML = html;

  /* Card click → open modal */
  var cards = container.querySelectorAll(".project-card");
  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      var index = parseInt(card.getAttribute("data-project"), 10);
      openProjectModal(index);
    });

    /* Keyboard: Enter or Space to open */
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        var index = parseInt(card.getAttribute("data-project"), 10);
        openProjectModal(index);
      }
    });
  });

  /* Modal close button */
  var closeBtn = document.getElementById("modal-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeProjectModal);
  }

  /* Close on backdrop click */
  var backdrop = document.getElementById("modal-backdrop");
  if (backdrop) {
    backdrop.addEventListener("click", closeProjectModal);
  }

  /* Close on Escape key */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      /* Close lightbox first if open, otherwise close modal */
      var lightbox = document.getElementById("image-lightbox");
      if (lightbox) {
        closeLightbox();
      } else {
        closeProjectModal();
      }
    }
  });
}
