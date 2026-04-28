document.querySelectorAll('.part').forEach(botao => {
  botao.addEventListener('click', function() {
    escrever(this.dataset.texto); // veja abaixo

    const caixa = document.getElementById('info').getBoundingClientRect();
    const btn = this.getBoundingClientRect();
    const x1 = btn.left + btn.width / 2;
    const y1 = btn.bottom;
    const y2 = caixa.top;
    const comprimento = Math.abs(y2 - y1);

    const svg = document.getElementById('svg-linha');
    svg.innerHTML = `
      <line x1="${x1}" y1="${y1}" x2="${x1}" y2="${y2}"
        stroke="white"
        stroke-width="2"
        stroke-dasharray="${comprimento}"
        stroke-dashoffset="${comprimento}"
        style="animation: desenhar 0.8s ease forwards"
      />
    `;
  });
});

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
