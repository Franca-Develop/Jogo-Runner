export function Mario() {
  let img = new Image();
  img.src = "../assets/sprite-mario.png";
  img.onload = () => {
    init();
  };

  let canvas = document.querySelector("canvas");
  let contexto = canvas.getContext("2d");
  const escala = 2;
  const largura = 18;
  const altura = 28;
  const escalaLargura = escala * largura;
  const escalaAltura = escala * altura;

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

    const imagens = [0, 1];
    let indiceImagem = 0;
    let contaQuadro = 0;
    let direcaoAtual = 0;
  }

  return <canvas width={300} height={200}></canvas>;
}
