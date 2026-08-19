import "./TelaInicial.css";
import React from 'react';
import cenario from '../assets/cenario.png';
import logo from '../assets/logo.png';
import mario from '../assets/mario.png';
import goomba from '../assets/goomba.png';
import canoverde from '../assets/canoverde.png';
import blocos from '../assets/blocos.png';
import moeda from '../assets/moeda.png';
import estrela from '../assets/estrela.png';
import nuvem from '../assets/nuvem.png';

export default function TelaInicial() {
  return (
    <div 
      className="tela-inicial" 
      style={{ backgroundImage: `url(${cenario})` }}
    >
      {/* Moeda e Estrela no topo */}
      <img src={moeda} alt="Moeda Topo" className="sprite moeda-topo-esquerda" />
      <img src={estrela} alt="Estrela Topo" className="sprite estrela-topo-direita" />

      {/* Nuvens decorativas */}
      <img src={nuvem} alt="Nuvem" className="sprite nuvem nuvem-1" />
      <img src={nuvem} alt="Nuvem" className="sprite nuvem nuvem-2" />

      {/* Logo Principal */}
      <div className="logo-wrapper">
        <img src={logo} alt="SUPER MARIO RUNNER" className="sprite logo-game" />
      </div>

      {/* Conjunto Esquerdo (Blocos + Moedas) */}
      <div className="grupo-plataforma plataforma-esquerda">
        <div className="fileira-moedas moedas-dupla">
          <img src={moeda} alt="Moeda" className="sprite moeda-item" />
          <img src={moeda} alt="Moeda" className="sprite moeda-item" />
        </div>
        <img src={blocos} alt="Blocos" className="sprite blocos-img" />
      </div>
      <img src={canoverde} alt="Cano Verde" className="sprite cano-esquerdo" />

      {/* Personagens Centrais (Ancorados no chão) */}
      <img src={mario} alt="Mario" className="sprite mario-personagem" />
      <img src={goomba} alt="Goomba" className="sprite goomba-inimigo" />

      {/* Conjunto Direito (Blocos + Moedas) */}
      <div className="grupo-plataforma plataforma-direita">
        <div className="fileira-moedas moedas-trio">
          <img src={moeda} alt="Moeda" className="sprite moeda-item" />
          <img src={moeda} alt="Moeda" className="sprite moeda-item" />
          <img src={moeda} alt="Moeda" className="sprite moeda-item" />
        </div>
        <img src={blocos} alt="Blocos" className="sprite blocos-img" />
      </div>
      <img src={canoverde} alt="Cano Verde" className="sprite cano-direito" />

      {/* Botão de Início */}
      <button className="botao-iniciar" type="button">
        <span className="icone-play">▶</span> INICIAR 
      </button>
    </div>
  );
}