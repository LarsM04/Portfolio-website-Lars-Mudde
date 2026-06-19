/* ============================================================
   Contact Form Handler
   ============================================================
   Handles form validation and submission via mailto.
   Opens the user's email client with the form data pre-filled.

   Called from main.js via initContact().
   ============================================================ */

/**
 * Initialise the contact form with validation and submit handling.
 */
function initContact() {
  var form = document.getElementById("contact-form");
  if (!form) return;

  var nameInput = document.getElementById("contact-name");
  var emailInput = document.getElementById("contact-email");
  var messageInput = document.getElementById("contact-message");
  var feedback = document.getElementById("form-feedback");
  var submitBtn = document.getElementById("contact-submit");

  /**
   * Show feedback message below the form.
   *
   * @param {string} message - The message to show
   * @param {string} type    - "success" or "error"
   */
  function showFeedback(message, type) {
    if (!feedback) return;
    feedback.textContent = message;
    feedback.className = "contact__form-feedback contact__form-feedback--" + type;
    feedback.style.display = "block";
  }

  /**
   * Clear all validation error styles.
   */
  function clearErrors() {
    var inputs = form.querySelectorAll(".contact__input");
    inputs.forEach(function (input) {
      input.classList.remove("contact__input--error");
    });
    if (feedback) {
      feedback.style.display = "none";
      feedback.textContent = "";
    }
  }

  /**
   * Validate email format.
   *
   * @param {string} email
   * @returns {boolean}
   */
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /* Handle form submission */
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    clearErrors();

    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var message = messageInput.value.trim();
    var hasError = false;

    /* Validate name */
    if (!name) {
      nameInput.classList.add("contact__input--error");
      hasError = true;
    }

    /* Validate email */
    if (!email || !isValidEmail(email)) {
      emailInput.classList.add("contact__input--error");
      hasError = true;
    }

    /* Validate message */
    if (!message) {
      messageInput.classList.add("contact__input--error");
      hasError = true;
    }

    if (hasError) {
      showFeedback("Vul alle velden correct in.", "error");
      return;
    }

    /* Construct mailto link */
    var subject = "Portfolio Contact — " + name;
    var body =
      "Naam: " + name + "\n" +
      "E-mail: " + email + "\n\n" +
      message;

    var mailtoURL =
      "mailto:larsmudde0810@gmail.com" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    /* Open email client */
    window.location.href = mailtoURL;

    /* Show success feedback */
    showFeedback("Bedankt! Je e-mailclient wordt geopend met je bericht.", "success");

    /* Disable button briefly */
    submitBtn.disabled = true;
    submitBtn.classList.add("contact__submit--sent");

    /* Reset form after a delay */
    setTimeout(function () {
      form.reset();
      submitBtn.disabled = false;
      submitBtn.classList.remove("contact__submit--sent");
    }, 3000);
  });

  /* Clear error styling on input */
  [nameInput, emailInput, messageInput].forEach(function (input) {
    if (!input) return;
    input.addEventListener("input", function () {
      input.classList.remove("contact__input--error");
    });
  });
}
