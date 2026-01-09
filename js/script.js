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

      if (mensagem.length < 10) {
        alert("A mensagem deve ter no mínimo 10 caracteres.");
        return;
      }

      alert("Mensagem enviada com sucesso!");
      form.reset();
    });
  }
});
