document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.querySelector("#email").value.trim();
      const mensagem = document.querySelector("#mensagem").value.trim();

      if (!email.includes("@")) {
        alert("Por favor, insira um email válido.");
        return;
      }

      alert("Mensagem enviada com sucesso!");
      form.reset();
    });
  }
});
