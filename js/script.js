document.addEventListener("DOMContentLoaded", function () {
  // Reservation form
  const reservationForm = document.getElementById("reservationForm");

  if (reservationForm) {
    reservationForm.addEventListener("submit", function (e) {
      e.preventDefault();

      document.getElementById("message").textContent =
        "✅ Thank you! Your reservation request has been received. We will contact you shortly.";
    });
  }

  // Contact form
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      document.getElementById("contactMessage").textContent =
        "✅ Thank you for contacting Savory Bites! Our team will reply to your message soon.";
    });
  }
});
