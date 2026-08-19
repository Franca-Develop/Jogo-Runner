import { useEffect, useRef } from "react";
import { criarMario } from "../sprites/Mario";

export function MarioCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const contexto = canvas.getContext("2d");

    const mario = new criarMario(contexto);

    function teclaPressionada(event) {
      if (
        event.code === "Space" ||
        event.code === "KeyW" ||
        event.code === "ArrowUp"
      ) {
        mario.pular();
      }
    }

    window.addEventListener("keydown", teclaPressionada);

    return () => {
      window.removeEventListener("keydown", teclaPressionada);

      mario.parar();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={600}
      height={400}
      style={{ border: "1px solid red" }}
    />
  );
}
