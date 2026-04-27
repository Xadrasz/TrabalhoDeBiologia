  const info = document.getElementById("info");
let timeoutAtual = null; // guarda a referência do timeout em andamento

    function escrever(texto, velocidade = 60) {
      // Cancela qualquer digitação em andamento
      if (timeoutAtual) {
        clearTimeout(timeoutAtual);
        timeoutAtual = null;
      }

      const elemento = document.getElementById("texto");
      elemento.textContent = ""; // limpa o texto anterior
      let i = 0;

      function digitar() {
        if (i < texto.length) {
          elemento.textContent += texto[i++];
          timeoutAtual = setTimeout(digitar, velocidade);
        } else {
          timeoutAtual = null; // digitação concluída
        }
      }

      digitar();
    }

function mostrarTexto(tipo) {
  if (tipo === "geral") {
   escrever("Os cloroplastos são organelas responsáveis pela fotossíntese.", "texto", 60);
  }
  if (tipo === "funcao") {
   escrever("Eles transformam luz em energia química (glicose).", "texto", 60);
  }
  if (tipo === "curiosidade") {
   escrever("Possuem DNA próprio — evidência da endossimbiose.", "texto", 60);
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
