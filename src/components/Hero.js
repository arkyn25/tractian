import React from 'react';
import gif from '../assets/videoInvertido.gif';

export default function Hero() {
  return (
    <div className="container mx-auto focus-within:justify-center align-center pt-28 lg:pt-36">
      <div className="relative flex flex-col lg:flex-row justify-between">
        <div className="container max-w-prose px-4 py-6 z-30">
          <div className="text-white lg:text-3xl text-xl font-semibold">Monitoramento Online e Gestão de Ativos em um só lugar</div>
          <h4 className="text-white font-light sm:text-lg my-6 pr-2">Evite falhas nas suas máquinas e torne o tempo de inatividade uma coisa do passado com sistema preditivo da TRACTIAN.</h4>
          <div>
            <button className="max-w-max whitespace-nowrap cursor-pointer inline-flex items-center justify-center px-6 py-2  rounded-md shadow-sm text-base font-medium text-white bg-green-500 hover:bg-green-400">Demonstração</button>
          </div>
          <p class="text-white">
          Já é cliente?
          <span> </span>
          <a href="https://app.tractian.com" target="_blank" className="font-semibold" rel="noreferrer">Acesse aqui.</a>
          </p>
          
        </div>
        <img className="w-50 h-50 z-0" src={gif} alt="logo" />

      </div>
      
    </div>
    
  );
}
