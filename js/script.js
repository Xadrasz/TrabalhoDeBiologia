  const info = document.getElementById("info");

function typeWriter(texto, elementoId, velocidade = 50) {
  return new Promise((resolve) => {
    const elemento = document.getElementById(elementoId);
    let i = 0;

    function digitar() {
      if (i < texto.length) {
        elemento.textContent += texto[i++];
        setTimeout(digitar, velocidade);
      } else {
        resolve(); // avisa que terminou
      }
    }

    digitar();
  });
}

async function iniciar() {
  await typeWriter("Primeira frase...", "texto", 60);
  await typeWriter(" Segunda frase!", "texto", 60);
};

async function mostrarTexto(tipo) {
  if (tipo === "geral") {
   await typeWriter("Os cloroplastos são organelas responsáveis pela fotossíntese.", "texto", 60);
  }
  if (tipo === "funcao") {
   await typeWriter("Eles transformam luz em energia química (glicose).", "texto", 60);
  }
  if (tipo === "curiosidade") {
   await typeWriter("Possuem DNA próprio — evidência da endossimbiose.", "texto", 60);
  }
}

function mostrarParte(parte) {
  if (parte === "tilacoide") {
    await typeWriter("Tilacoides: onde ocorre a fase luminosa.", "texto", 50);
  }
  if (parte === "estroma") {
    await typeWriter("Estroma: onde ocorre o ciclo de Calvin.", "texto", 50);
  }
  if (parte === "membrana") {
    await typeWriter("Membrana: controla entrada e saída.", "texto", 50);
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
