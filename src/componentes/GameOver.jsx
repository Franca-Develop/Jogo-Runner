import React from 'react';
import './GameOver.css';

// Importação dos assets fornecidos na pasta src/assets/
import gameOverImg from '../assets/gameOver.png';
import resetImg from '../assets/reset.png';
import luzImg from '../assets/luz.png';
import moedaImg from '../assets/moeda.png';
import estrelaImg from '../assets/estrela.png';

const GameOver = ({ onReset }) => {
  const handleReset = () => {
    if (onReset) {
      onReset();
    } else {
      console.log('Botão RESET clicado!');
    }
  };

  return (
    <div className="game-over-container">
      {/* Foco de luz vindo do topo */}
      <img 
        src={luzImg} 
        alt="Holofote de luz" 
        className="game-over-spotlight" 
      />

      {/* Pontos e estrelas decorativas de fundo em pixel art */}
      <div className="pixel-decorations">
        <span className="pixel-cross cross-1">+</span>
        <span className="pixel-cross cross-2">+</span>
        <span className="pixel-cross cross-3">+</span>
        <span className="pixel-cross cross-4">+</span>
        <span className="pixel-cross cross-5">+</span>
        <span className="pixel-dot dot-1"></span>
        <span className="pixel-dot dot-2"></span>
        <span className="pixel-dot dot-3"></span>
        <span className="pixel-dot dot-4"></span>
      </div>

      {/* Bloco principal de conteúdo (Game Over + Botão Reset) */}
      <div className="game-over-content">
        {/* Imagem GAME OVER! */}
        <div className="title-container">
          <img 
            src={gameOverImg} 
            alt="GAME OVER!" 
            className="game-over-title" 
          />
        </div>

        {/* Botão RESET */}
        <div className="button-container">
          <button 
            type="button" 
            className="reset-button" 
            onClick={handleReset}
            aria-label="Reiniciar jogo"
          >
            <img 
              src={resetImg} 
              alt="RESET" 
              className="reset-image" 
            />
          </button>
        </div>
      </div>

      {/* Moeda pixelada flutuando à direita */}
      <img 
        src={moedaImg} 
        alt="Moeda decorativa" 
        className="game-over-coin" 
      />

      {/* Estrela pixelada no canto inferior direito */}
      <img 
        src={estrelaImg} 
        alt="Estrela decorativa" 
        className="game-over-star" 
      />
    </div>
  );
};

export default GameOver;