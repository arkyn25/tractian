import React from 'react'

const Solucoes = () => {
  return (
    <div class="flex flex-col lg:flex-row p-3	 gap-8 items-center lg:items-stretch justify-center ">
      <div class="flex flex-col w-full max-w-lg px-4 py-6 rounded-md lg:rounded-md shadow-md mb-10 lg:mb-0	bg-gray-500">
        <div class="flex flex-col items-start w-56 lg:w-full ">
          <h2 class=" mb-2 text-white text-3xl font-bold tracking-wide">
          Software de Manutenção
          </h2>
          <h2 class="justify-start md:self-center lg:self-start flex h-full text-white text-3xl font-bold tracking-wider">
            "TracOS"
            <span class="text-2xl font-medium">™</span>
          </h2>
        </div>
        <div class="flex w-full justify-center ">
          <span>
            <span >
            <img alt="soft image" aria-hidden="true" src="https://imgix.tractian.com/trac-os/cmms-presentation.png?auto=format&fit=max&w=640" />
            </span>
          </span>
        </div>

        <p class="self-center text-center text-white text-xl lg:text-xl font-medium tracking-wide mt-8">O CMMS revolucionário para planejar, acompanhar métricas e conectar-se com sua equipe.</p>
        <a class="cursor-pointer text-white bg-red-600 filter hover:brightness-90 lg:max-w-max self-center mt-4 whitespace-nowrap w-full	 text-center lg:px-20 py-2 rounded-md font-semibold " href="/">Ver mais</a>
      </div>

      <div class="flex flex-col w-full max-w-lg px-4 py-6  bg-gray-500 s rounded-md shadow-md" ><div class="flex flex-col items-start  lg:w-full "><h2 class=" mb-2 text-white text-3xl font-bold tracking-wide">Monitoramento Online</h2><h2 class="mb-3 justify-start md:self-center lg:self-start flex h-full text-white text-3xl lg:text-3xl font-bold tracking-wider">Smart Trac</h2></div>
      <div class="flex w-full justify-center mt-8 -mb-8 lg:mb-0 "><span ><span ></span>
      <img alt="Sensor-e-plataforma-de-monitoramento-online-Tractian" srcset="https://imgix.tractian.com/lp-software/sensor-plataforma-celular-tablet.png?auto=format&amp;fit=max&amp;w=640 1x, https://imgix.tractian.com/lp-software/sensor-plataforma-celular-tablet.png?auto=format&amp;fit=max&amp;w=1080 2x" src="https://imgix.tractian.com/lp-software/sensor-plataforma-celular-tablet.png?auto=format&amp;fit=max&amp;w=1080" decoding="async" data-nimg="intrinsic" class="object-contain" />
      </span>
      </div>
      <p class="self-center text-center text-white text-xl lg:text-xl font-medium tracking-wide">O sistema preditivo mais completo do mercado. Monitore vibração, temperatura e horímetro dos seus ativos.</p><a class="cursor-pointer text-white bg-red-600 filter hover:brightness-90 lg:max-w-max self-center mt-4 whitespace-nowrap w-full	 text-center lg:px-20 py-2 rounded-md font-semibold " href="/">Ver mais</a></div>
    </div>
  )
}

export default Solucoes