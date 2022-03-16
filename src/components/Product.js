import React from 'react';

export default function Product() {
  return (
    <div class=" bg-gradient-to-b from-white to-gray-50 py-12 px-4 lg:py-20 lg:pt-28 ">
      <div class="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-start container mx-auto max-w-7xl">
        
        <div class="flex flex-col max-w-md">
          <h3 class="text-blue-600 uppercase text-lg font-semibold mb-4">Manutenção preditiva descomplicada</h3>
          <h2 class="mb-6 lg:mb-12 text-3xl leading-9 text-gray-900 sm:text-4xl tracking-wide sm:leading-tight">
          Mantenha a sua equipe e seus ativos com o 
          <b>melhor desempenho</b>
          </h2>
        </div>
        <div className="flex flex-col ml-2 lg:-mt-16 justify-center	">
        <img className="w-80 justify-center	" src="https://imgix.tractian.com/images/cole-o-sensor.png?auto=format&fit=max&w=828" alt="" />
        <h4 class=" text-3xl text-gray-800">Tecnologia IoT avançada para conectar seus ativos</h4>
        <p>"Nossos sensores enviam dados do seu equipamento através de rede 3g/4g. Basta fixar o sensor no local a ser monitorado e pronto: acompanhe em tempo real a condição da sua máquina."</p>
        </div>
      </div>
    </div>
  );
}
