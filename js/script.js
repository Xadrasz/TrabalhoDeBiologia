  const info = document.getElementById("info");

function escreverTexto(texto) {
  info.classList.add("show");
  info.innerHTML = "";

    let i = 0;

  function digitar() {
    if (i < texto.length) {
      info.innerHTML += texto.charAt(i);
      i++;
      setTimeout(digitar, 30); // velocidade (menor = mais rápido)
    }
  }

  digitar();
}

function mostrarTexto(tipo) {
  if (tipo === "geral") {
    escreverTexto("Os cloroplastos são organelas responsáveis pela fotossíntese.");
  }
  if (tipo === "funcao") {
    escreverTexto("Eles transformam luz em energia química (glicose).");
  }
  if (tipo === "curiosidade") {
    escreverTexto("Possuem DNA próprio — evidência da endossimbiose!");
  }
}

function mostrarParte(parte) {
  if (parte === "tilacoide") {
    escreverTexto("Tilacoides: onde ocorre a fase luminosa.");
  }
  if (parte === "estroma") {
    escreverTexto("Estroma: onde ocorre o ciclo de Calvin.");
  }
  if (parte === "membrana") {
    escreverTexto("Membrana: controla entrada e saída.");
  }
}

  // Criar estrelas animadas
  const stars = document.getElementById("stars");
  for (let i = 0; i < 60; i++) {
    let star = document.createElement("span");
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.animationDuration = (5 + Math.random() * 10) + "s";
    stars.appendChild(star);
  }