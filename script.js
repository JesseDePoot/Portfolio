const btn = document.getElementById("toggleBtn");
const body = document.body;
const logo = document.getElementById("headerLogo");
const icon = btn.querySelector("i"); // het <i> element in de knop

// Check localStorage bij laden
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-theme");
  logo.src = "./images/logoLight.png";

  // wissel icoon class
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-lightbulb");
} else {
  body.classList.remove("dark-theme");
  logo.src = "./images/logoDark.png";

  icon.classList.remove("fa-lightbulb");
  icon.classList.add("fa-moon");
}

// Toggle event
btn.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  if (body.classList.contains("dark-theme")) {
    logo.src = "./images/logoLight.png";

    // wissel icon class
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-lightbulb");

    localStorage.setItem("theme", "dark");
  } else {
    logo.src = "./images/logoDark.png";

    // wissel icon class
    icon.classList.remove("fa-lightbulb");
    icon.classList.add("fa-moon");

    localStorage.setItem("theme", "light");
  }
});

// Typed.js animatie
var typed = new Typed('.auto-type', {
  strings: ['Gamer','Student', 'Frontend Developer'],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

// Contactformulier met AJAX (Formspree)
const contactForm = document.getElementById("contactForm");
const responseEl = document.getElementById("response");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault(); // voorkomt herladen

  responseEl.textContent = "Bezig met verzenden...";

  try {
    const formData = new FormData(contactForm);
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      responseEl.textContent = "Bedankt! Je bericht is verzonden.";
      contactForm.reset();
    } else {
      responseEl.textContent = "Er ging iets mis. Probeer opnieuw.";
    }
  } catch (error) {
    responseEl.textContent = "Er trad een fout op. Controleer je verbinding.";
  }
});
