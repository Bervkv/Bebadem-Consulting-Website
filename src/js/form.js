// Formulaire de contact : validation côté utilisateur, puis envoi au serveur.
// Rappel : ce contrôle améliore l'expérience, il ne protège rien.
// La vraie validation se fait côté serveur (netlify/functions/contact.mjs).
(function () {
  "use strict";

  const form = document.getElementById("contact-form");
  if (!form) return; // ce script est inoffensif sur les autres pages

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

    if (input.name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return rules.invalid;
    }
    if (input.name === "message" && value.length < 20) return rules.tooShort;
    return "";
  }

  // textContent, jamais innerHTML : aucune injection possible
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

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    status.textContent = "";

    // 1. Validation locale
    let firstInvalid = null;
    for (const name of Object.keys(messages)) {
      const input = form.elements[name];
      const error = validate(input);
      showError(input, error);
      if (error && !firstInvalid) firstInvalid = input;
    }
    if (firstInvalid) {
      firstInvalid.focus();
      status.textContent = "Le formulaire contient des erreurs. Corrigez les champs signalés.";
      return;
    }

    // 2. Envoi au serveur
    const button = form.querySelector('button[type="submit"]');
    button.disabled = true;
    status.textContent = "Envoi en cours…";

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result = await response.json().catch(() => ({}));

      if (response.ok) {
        form.reset();
        status.textContent = "Merci, votre message a bien été envoyé.";
      } else if (response.status === 429) {
        status.textContent = "Trop de tentatives. Réessayez dans une minute.";
      } else if (result.errors) {
        for (const name of Object.keys(messages)) {
          if (result.errors[name]) showError(form.elements[name], result.errors[name]);
        }
        status.textContent = "Le serveur a refusé certaines informations. Corrigez les champs signalés.";
      } else {
        status.textContent = "L'envoi a échoué. Réessayez plus tard ou écrivez-nous directement.";
      }
    } catch {
      status.textContent = "Connexion impossible. Vérifiez votre réseau et réessayez.";
    } finally {
      button.disabled = false;
    }
  });
})();// Formulaire de contact : validation côté utilisateur, puis envoi au serveur.
// Rappel : ce contrôle améliore l'expérience, il ne protège rien.
// La vraie validation se fait côté serveur (netlify/functions/contact.mjs).
(function () {
  "use strict";

  const form = document.getElementById("contact-form");
  if (!form) return; // ce script est inoffensif sur les autres pages

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

    if (input.name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return rules.invalid;
    }
    if (input.name === "message" && value.length < 20) return rules.tooShort;
    return "";
  }

  // textContent, jamais innerHTML : aucune injection possible
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

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    status.textContent = "";

    // 1. Validation locale
    let firstInvalid = null;
    for (const name of Object.keys(messages)) {
      const input = form.elements[name];
      const error = validate(input);
      showError(input, error);
      if (error && !firstInvalid) firstInvalid = input;
    }
    if (firstInvalid) {
      firstInvalid.focus();
      status.textContent = "Le formulaire contient des erreurs. Corrigez les champs signalés.";
      return;
    }

    // 2. Envoi au serveur
    const button = form.querySelector('button[type="submit"]');
    button.disabled = true;
    status.textContent = "Envoi en cours…";

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result = await response.json().catch(() => ({}));

      if (response.ok) {
        form.reset();
        status.textContent = "Merci, votre message a bien été envoyé.";
      } else if (response.status === 429) {
        status.textContent = "Trop de tentatives. Réessayez dans une minute.";
      } else if (result.errors) {
        for (const name of Object.keys(messages)) {
          if (result.errors[name]) showError(form.elements[name], result.errors[name]);
        }
        status.textContent = "Le serveur a refusé certaines informations. Corrigez les champs signalés.";
      } else {
        status.textContent = "L'envoi a échoué. Réessayez plus tard ou écrivez-nous directement.";
      }
    } catch {
      status.textContent = "Connexion impossible. Vérifiez votre réseau et réessayez.";
    } finally {
      button.disabled = false;
    }
  });
})();