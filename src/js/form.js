// Validation côté navigateur. L'envoi est géré par Netlify Forms.
(function () {
  "use strict";

  const form = document.getElementById("contact-form");
  if (!form) return;

  const status = document.getElementById("form-status");

  const messages = {
    nom: { required: "Indiquez votre nom." },
    email: {
      required: "Indiquez votre adresse e-mail.",
      invalid: "Cette adresse e-mail ne semble pas valide (exemple : nom@societe.com).",
    },
    message: {
      required: "Écrivez votre message.",
      tooShort: "Votre message est trop court : 20 caractères minimum.",
    },
  };

  function validate(input) {
    const rules = messages[input.name];
    if (!rules) return "";
    const value = input.value.trim();
    if (value === "") return rules.required;
    if (input.name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return rules.invalid;
    if (input.name === "message" && value.length < 20) return rules.tooShort;
    return "";
  }

  function showError(input, message) {
    const slot = document.getElementById(input.id + "-error");
    if (slot) slot.textContent = message;
    input.setAttribute("aria-invalid", message ? "true" : "false");
  }

  form.addEventListener("focusout", function (event) {
    if (event.target.name in messages) showError(event.target, validate(event.target));
  });
  form.addEventListener("input", function (event) {
    if (event.target.getAttribute("aria-invalid") === "true") {
      showError(event.target, validate(event.target));
    }
  });

  form.addEventListener("submit", function (event) {
    let firstInvalid = null;
    for (const name of Object.keys(messages)) {
      const input = form.elements[name];
      const error = validate(input);
      showError(input, error);
      if (error && !firstInvalid) firstInvalid = input;
    }
    if (firstInvalid) {
      event.preventDefault(); // on bloque l'envoi seulement s'il y a une erreur
      firstInvalid.focus();
      status.textContent = "Le formulaire contient des erreurs. Corrigez les champs signalés.";
    }
    // Sinon : le navigateur envoie le formulaire à Netlify.
  });
})();