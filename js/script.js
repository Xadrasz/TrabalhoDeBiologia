let timeoutAtual = null; // guarda a referência do timeout em andamento

    function escrever(texto, velocidade = 60) {
      // Cancela qualquer digitação em andamento
      if (timeoutAtual) {
        clearTimeout(timeoutAtual);
        timeoutAtual = null;
      }

      const elemento = document.getElementById("info");
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

  // Criar estrelas animadas
  const stars = document.getElementById("stars");
  for (let i = 0; i < 60; i++) {
    let star = document.createElement("span");
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.animationDuration = (5 + Math.random() * 10) + "s";
    stars.appendChild(star);
  }
