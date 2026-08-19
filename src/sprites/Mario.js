import spriteMario from "../assets/SpritesMario.png";

export function criarMario(contexto) {
  const img = new Image();

  const escala = 0.7;
  const largura = 222;
  const altura = 192;

  const escalaLargura = escala * largura;
  const escalaAltura = escala * altura;

  // Sprites de corrida
  const spritesCorrendo = [7, 8, 9, 10, 11, 12];

  // Sprite de pulo
  const spritePulando = 19;

  let indiceImagem = 0;
  let contaQuadro = 0;
  let direcaoAtual = 0;

  let y = 100;
  let velocidadeY = 0;

  const gravidade = 0.5;
  const forcaPulo = -10;

  let noChao = true;

  let estado = "correndo";

  let animationId;

  function desenhaQuadro(numeroSprite, canvasX, canvasY) {
    const coluna = (numeroSprite - 1) % 6;
    const linha = Math.floor((numeroSprite - 1) / 6);

    contexto.drawImage(
      img,

      coluna * largura,
      linha * altura,
      largura,
      altura,

      canvasX,
      canvasY,
      escalaLargura,
      escalaAltura,
    );
  }

  function pular() {
    if (!noChao) {
      return;
    }

    velocidadeY = forcaPulo;
    noChao = false;
    estado = "pulando";
  }

  function atualizar() {
    velocidadeY += gravidade;
    y += velocidadeY;

    if (y >= 100) {
      y = 100;
      velocidadeY = 0;
      noChao = true;

      estado = "correndo";
    }
  }

  function loop() {
    atualizar();

    contaQuadro++;

    if (contaQuadro >= 8) {
      contaQuadro = 0;

      contexto.clearRect(0, 0, contexto.canvas.width, contexto.canvas.height);

      if (estado === "correndo") {
        desenhaQuadro(spritesCorrendo[indiceImagem], 0, y);

        indiceImagem++;

        if (indiceImagem >= spritesCorrendo.length) {
          indiceImagem = 0;
        }
      }

      if (estado === "pulando") {
        desenhaQuadro(spritePulando, 0, y);
      }
    }

    animationId = window.requestAnimationFrame(loop);
  }

  function iniciar() {
    img.onload = () => {
      console.log("Imagem carregada!");

      animationId = window.requestAnimationFrame(loop);
    };

    img.onerror = () => {
      console.error("Erro ao carregar a imagem!");
    };

    img.src = spriteMario;
  }

  function parar() {
    window.cancelAnimationFrame(animationId);
  }

  iniciar();

  return {
    pular,
    parar,
  };
}
