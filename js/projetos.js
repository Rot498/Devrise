// FILTRO
const botoes = document.querySelectorAll(".filtros button");
const cards = document.querySelectorAll(".card");

botoes.forEach(botao => {
  botao.addEventListener("click", () => {

    document.querySelector(".filtros .active").classList.remove("active");
    botao.classList.add("active");

    const categoria = botao.dataset.filter;

    cards.forEach(card => {
      if (categoria === "todos" || card.dataset.category === categoria) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });

  });
});

// MODAL
function abrirModal(titulo, descricao) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modal-title").innerText = titulo;
  document.getElementById("modal-desc").innerText = descricao;
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

// FECHAR CLICANDO FORA
window.addEventListener("click", (e) => {
  const modal = document.getElementById("modal");
  if (e.target === modal) {
    fecharModal();
  }
});