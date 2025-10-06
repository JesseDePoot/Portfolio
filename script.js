document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // voorkomt dat de pagina herlaadt

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const response = document.getElementById("response");

  // Eenvoudige validatie
  if (!name || !email || !message) {
    response.textContent = "Vul alle velden in!";
    response.style.color = "red";
    return;
  }

  // Simulatie van verzenden
  response.textContent = "Bedankt voor je bericht, " + name + "!";
  response.style.color = "green";

  // Formulier leegmaken
  document.getElementById("contactForm").reset();
});

