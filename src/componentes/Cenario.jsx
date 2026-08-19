import React from 'react';
import './Cenario.css';

import chaoImg from '../assets/chao.png';
import montanhaImg from '../assets/montanhas.png';
import nuvensImg from '../assets/nuvem.png';

export function Cenario() {
  return (
    <div className="mario-cenario">
      {/* Camada das Nuvens (movimento contínuo suave) */}
      <div 
        className="camada-nuvens" 
        style={{ backgroundImage: `url(${nuvensImg})` }} 
      />

      {/* Camada das Montanhas (efeito paralaxe, movimento mais lento) */}
      <div 
        className="camada-montanhas" 
        style={{ backgroundImage: `url(${montanhaImg})` }} 
      />

      {/* Camada do Chão */}
      <div 
        className="camada-chao" 
        style={{ backgroundImage: `url(${chaoImg})` }} 
      />
    </div>
  );
}