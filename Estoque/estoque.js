function ordenarPor(tipo, ordem) {
  const cardsContainer = document.querySelector(".sectionCard");
  const cards = Array.from(document.querySelectorAll(".cardMain"));

  cards.sort((a, b) => {
    const valorA = parseInt(a.dataset[tipo]);
    const valorB = parseInt(b.dataset[tipo]);

    return ordem === "asc" ? valorA - valorB : valorB - valorA;
  });

  cards.forEach((card) => cardsContainer.appendChild(card));
}

function filtrarPorPreco() {
  const precoMin = parseInt(document.getElementById("precoMin").value) || 0;
  const precoMax =
    parseInt(document.getElementById("precoMax").value) || Infinity;
  const cards = document.querySelectorAll(".cardMain");

  cards.forEach((card) => {
    const preco = parseInt(card.dataset.preco);
    if (preco >= precoMin && preco <= precoMax) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}

function filtrarPorKm() {
  const kmMin = parseInt(document.getElementById("kmMin").value) || 0;
  const kmMax = parseInt(document.getElementById("kmMax").value) || Infinity;
  const cards = document.querySelectorAll(".cardMain");

  cards.forEach((card) => {
    const km = parseInt(card.dataset.km);
    if (km >= kmMin && km <= kmMax) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const abrirBtn = document.getElementById("abrirFiltro");
  const fecharBtn = document.getElementById("fecharFiltro");
  const filtro = document.getElementById("filtroMobile");

  abrirBtn.addEventListener("click", () => {
    filtro.style.display = "block";
  });

  fecharBtn.addEventListener("click", () => {
    filtro.style.display = "none";
  });
});
