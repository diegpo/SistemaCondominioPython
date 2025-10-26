// Responsável pela interação da tela de login e controle visual
document.addEventListener("DOMContentLoaded", () => {
  const btnAcessar = document.getElementById("btnAcessar");
  const form = document.getElementById("loginForm");
  const btnVoltar = document.getElementById("voltar");
  const btnEsqueceu = document.getElementById("esqueceu");

  // Mostrar formulário de login
  if (btnAcessar && form) {
    btnAcessar.addEventListener("click", () => {
      btnAcessar.style.display = "none";
      form.classList.add("active");
    });
  }

  // Voltar à tela inicial
  if (btnVoltar && btnAcessar && form) {
    btnVoltar.addEventListener("click", () => {
      form.classList.remove("active");
      setTimeout(() => {
        btnAcessar.style.display = "inline-block";
      }, 500);
    });
  }

  // Esqueceu a senha (apenas aviso)
  if (btnEsqueceu) {
    btnEsqueceu.addEventListener("click", () => {
      alert("Recuperação de senha não implementada.");
    });
  }
});

// Créditos 😎
window.diego = function () {
  console.log("Mensagem secreta");
};

// Bloqueios de atalho e inspeção
document.addEventListener(
  "contextmenu",
  (e) => e.preventDefault(),
  false
);
document.addEventListener("selectstart", (e) => e.preventDefault());
document.addEventListener("dragstart", (e) => e.preventDefault());
document.addEventListener("keydown", (e) => {
  if (e.key === "F12") {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  if (e.ctrlKey && e.shiftKey) {
    const key = e.key.toLowerCase();
    if (["i", "c", "j"].includes(key)) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }

  if (
    (e.ctrlKey && e.key.toLowerCase() === "u") ||
    (e.ctrlKey && (e.key.toLowerCase() === "s" || (e.shiftKey && e.key.toLowerCase() === "s")))
  ) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
});
