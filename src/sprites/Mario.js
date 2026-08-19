import spriteMario from "../assets/sprite-mario.png";

export function criarMario(contexto) {
  let img = new Image();

  const escala = 3;
  const largura = 17.6;
  const altura = 30;

  const escalaLargura = escala * largura;
  const escalaAltura = escala * altura;

  const imagens = [5, 6, 5, 7];
  let indiceImagem = 0;
  let contaQuadro = 0;
  let direcaoAtual = 0;

  let y = 100;
  let velocidadeY = 0;

  const gravidade = 0.5;
  const forcaPulo = -10;

  let noChao = true;

  let animationId;

  function desenhaQuadro(posX, posY, canvasX, canvasY) {
    contexto.drawImage(
      img,
      posX * largura,
      posY * altura,
      largura,
      altura,
      canvasX,
      canvasY,
      escalaLargura,
      escalaAltura,
    );
  }

  function pular() {
    if (!noChao) return;

    velocidadeY = forcaPulo;
    noChao = false;
  }

  function atualizar() {
    velocidadeY += gravidade;
    y += velocidadeY;

    if (y >= 100) {
      y = 100;
      velocidadeY = 0;
      noChao = true;
    }
  }

  function corrida() {
    contaQuadro++;
    if (contaQuadro < 16) {
      window.requestAnimationFrame(corrida);
      return;
    }

    contaQuadro = 0;

    contexto.clearRect(0, 0, contexto.canvas.width, contexto.canvas.height);

    desenhaQuadro(imagens[indiceImagem], direcaoAtual, 0, y);
    indiceImagem++;
    if (indiceImagem >= imagens.length) {
      indiceImagem = 0;
      direcaoAtual++;
    }
    if (direcaoAtual >= 1) {
      direcaoAtual = 0;
    }

    animationId = requestAnimationFrame(corrida);
  }

  function iniciar() {
    img.onload = () => {
      console.log("Imagem carregada!");
      console.log(img.width, img.height);

      animationId = requestAnimationFrame(corrida);
    };

    img.onerror = () => {
      console.error("Erro ao carregar a imagem!");
    };

    img.src = spriteMario;
  }

  function parar() {
    cancelAnimationFrame(animationId);
  }

  iniciar();

  return {
    pular,
    parar,
  };
}
