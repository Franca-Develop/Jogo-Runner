import React from 'react';
import './Cenario.css';

import chaoImg from '../assets/chao.png';
import montanhaImg from '../assets/montanhas.png';
import nuvensImg from '../assets/nuvem.png';
import canoImg from '../assets/canoverde.png';
import goombaImg from '../assets/goomba.png';

export function Cenario() {
  return (
    <div className="mario-cenario">
      {/* Camada das Nuvens */}
      <div 
        className="camada-nuvens" 
        style={{ backgroundImage: `url(${nuvensImg})` }} 
      />

      {/* Camada das Montanhas */}
      <div 
        className="camada-montanhas" 
        style={{ backgroundImage: `url(${montanhaImg})` }} 
      />

      {/* Container dos Obstáculos diretamente no Cenário */}
      <div className="container-obstaculos">
        <img src={canoImg} alt="Cano Verde" className="obstaculo cano" />
        <img src={goombaImg} alt="Goomba" className="obstaculo goomba" />
      </div>

      {/* Camada do Chão */}
      <div 
        className="camada-chao" 
        style={{ backgroundImage: `url(${chaoImg})` }} 
      />
    </div>
  );
}