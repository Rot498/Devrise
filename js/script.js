// Simples interação no formulário de contato
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Obrigado por entrar em contato! 🚀 Em breve retornaremos.");
      form.reset();
    });
  }
});
