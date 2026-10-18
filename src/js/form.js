// Validation côté utilisateur du formulaire de contact.
// Rappel : ce contrôle améliore l'expérience, il ne protège rien.
// La vraie validation se fait côté serveur (Jour 3).
(function () {
  "use strict";

  const form = document.getElementById("contact-form");
  if (!form) return; // ce script est inoffensif sur les autres pages

  const status = document.getElementById("form-status");

  // Messages d'erreur en langage clair, par champ
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

  // Renvoie un message d'erreur, ou "" si le champ est valide
  function validate(input) {
    const rules = messages[input.name];
    if (!rules) return ""; // champ sans règle (organisation, honeypot)

    const value = input.value.trim();
    if (value === "") return rules.required;

    if (input.name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return rules.invalid;
    }
    if (input.name === "message" && value.length < 20) {
      return rules.tooShort;
    }
    return "";
  }

  // Affiche ou efface l'erreur d'un champ (textContent, jamais innerHTML)
  function showError(input, message) {
    const slot = document.getElementById(input.id + "-error");
    if (slot) slot.textContent = message;
    input.setAttribute("aria-invalid", message ? "true" : "false");
  }

  // Validation à la sortie du champ, puis correction en direct
  form.addEventListener("focusout", function (event) {
    if (event.target.name in messages) showError(event.target, validate(event.target));
  });
  form.addEventListener("input", function (event) {
    if (event.target.getAttribute("aria-invalid") === "true") {
      showError(event.target, validate(event.target));
    }
  });

  // À l'envoi : on bloque s'il y a une erreur, et on met le focus sur la première
  form.addEventListener("submit", function (event) {
    status.textContent = "";
    let firstInvalid = null;

    for (const name of Object.keys(messages)) {
      const input = form.elements[name];
      const error = validate(input);
      showError(input, error);
      if (error && !firstInvalid) firstInvalid = input;
    }

    if (firstInvalid) {
      event.preventDefault();
      firstInvalid.focus();
      status.textContent = "Le formulaire contient des erreurs. Corrigez les champs signalés.";
      return;
    }

    // TEMPORAIRE : l'envoi serveur sera branché au Jour 3.
    // Supprimer ces deux lignes à ce moment-là.
    event.preventDefault();
    status.textContent = "Formulaire valide (envoi serveur pas encore branché).";
  });
})();