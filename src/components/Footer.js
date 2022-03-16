import React from 'react'

const Footer = () => {
  return (
    <div class="bg-gradient-to-br bg-orange-600	 to-blue-600">
      <div class="flex flex-col container mx-auto px-8 pt-16 ">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-x-4 ">
          <div class="flex flex-col mb-8 lg:mb-0 false">
            <h3 class="uppercase lg:mb-2 font-semibold">Produto</h3>
            <ul>
              <li class="mt-2 flex flex-col mr-2 lg:mr-0">
              <a class="no-underline hover:underline text-blue-100 hover:text-white" href="/sensor-tractian">Sensor Tractian</a>
              </li>
              <li class="mt-2 flex flex-col mr-2 lg:mr-0">
              <a class="no-underline hover:underline text-blue-100 hover:text-white" href="/plataforma-de-monitoramento">Plataforma</a>
              </li>
              <li class="mt-2 flex flex-col mr-2 lg:mr-0">
              <a class="no-underline hover:underline text-blue-100 hover:text-white" href="/funcionalidades-cmms">Funcionalidades</a>
              </li>
              <li class="mt-2 flex flex-col mr-2 lg:mr-0">
              <a class="no-underline hover:underline text-blue-100 hover:text-white" href="/planos">Planos e preços</a>
              </li>
            </ul>
          </div>
          <div class="flex flex-col mb-8 lg:mb-0 ml-4 lg:ml-0">
            <h3 class="uppercase lg:mb-2 font-semibold" >Materiais</h3>
            <ul>
              <li class="mt-2 flex flex-col mr-2 lg:mr-0">
                <a class="no-underline hover:underline text-blue-100 hover:text-white" href="/guias">Guias e Ebooks</a>
              </li>
              <li class="mt-2 flex flex-col mr-2 lg:mr-0">
                <a class="no-underline hover:underline text-blue-100 hover:text-white" href="/checklists">Checklists</a>
              </li>
              <li class="mt-2 flex flex-col mr-2 lg:mr-0">
                <a class="no-underline hover:underline text-blue-100 hover:text-white" href="/intensivao">Intensivão</a>
              </li>
              <li class="mt-2 flex flex-col mr-2 lg:mr-0">
                <a class="no-underline hover:underline text-blue-100 hover:text-white" href="/calculadora">Calculadora</a>
              </li>
            </ul>
          </div>
          <div class="flex flex-col mb-8 lg:mb-0 false">
            <h3 class="uppercase lg:mb-2 font-semibold" >Sobre a TRACTIAN</h3>
            <ul>
              <li class="mt-2 flex flex-col mr-2 lg:mr-0">
                <a class="no-underline hover:underline text-blue-100 hover:text-white" href="/sobre">Conheça a Tractian</a>
              </li>
              <li class="mt-2 flex flex-col mr-2 lg:mr-0">
                <a class="no-underline hover:underline text-blue-100 hover:text-white" href="/casos-de-sucesso">Histórias de Sucesso</a>
              </li>
              <li class="mt-2 flex flex-col mr-2 lg:mr-0">
                <a class="no-underline hover:underline text-blue-100 hover:text-white" href="/imprensa">Imprensa</a>
              </li>
              <li class="mt-2 flex flex-col mr-2 lg:mr-0">
                <a class="no-underline hover:underline text-blue-100 hover:text-white" href="/carreiras">Trabalhe conosco</a>
              </li>
              <li class="mt-2 flex flex-col mr-2 lg:mr-0">
                <a class="no-underline hover:underline text-blue-100 hover:text-white" href="/politica-de-privacidade">Política de Privacidade</a>
              </li>
            </ul>
          </div>
          <div class="flex flex-col mb-8 lg:mb-0 ml-4 lg:ml-0">
            <h3 class="uppercase lg:mb-2 font-semibold" >Fale Conosco</h3>
            <ul>
              <li class="mt-2 flex flex-col mr-2 lg:mr-0">
                <a class="no-underline hover:underline text-blue-100 hover:text-white" href="/contato">Contato</a>
              </li>
              <li class="mt-2 flex flex-col mr-2 lg:mr-0">
                <a class="no-underline hover:underline text-blue-100 hover:text-white" href="/indicacoes">Indique e Ganhe</a>
              </li>
            </ul>
            <div class="flex w-full flex-col mt-2 justify-start items-start">
              <button class="text-left justify-self-start no-underline hover:underline text-blue-100 hover:text-white">Agende uma demonstração</button>
              <div class="flex w-full mt-2">
                <ul class="lg:flex flex-col h-full list-reset hidden">
                  <li class="mt-2 inline-block mr-2 lg:block lg:mr-0 no-underline text-blue-300 font-semibold hover:text-white">© Tractian Tecnologia Ltda<br />
                  <span class="font-light mt-1">CNPJ: 35.755.699/0001-84
                  </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col col-span-1 mb-12 lg:mb-0 lg:mt-12 2xl:mt-0">
          <h3 class="uppercase mb-6 font-semibold text-center pt-8	"> Conecte-se com a TRACTIAN</h3>
          <div class="flex justify-evenly	pb-8" >
            <a href="https://www.linkedin.com/company/tractian/" target="_blank" class="mr-6" rel="noreferrer">
              <img src="https://imgix.tractian.com/images/linkedin.png?auto=format&fit=max&w=64" alt="Linkedin Tractian" class="object-contain w-7"/>
            </a>
            <a href="https://www.facebook.com/tractian" target="_blank" rel="noreferrer" class="mr-6">
              <img src="https://imgix.tractian.com/images/facebook.png?auto=format&fit=max&w=64" alt="Facebook da Tractian" class="object-contain w-7" />
            </a>
            <a href="https://www.instagram.com/tractian/" target="_blank" rel="noreferrer">
              <img src="https://imgix.tractian.com/images/instagram.png?auto=format&fit=max&w=64" alt="Instagram da Tractian"  class="object-contain w-7"/>
            </a>
            <a href="https://youtube.com/c/TRACTIAN" target="_blank" rel="noreferrer">
              <img src="https://imgix.tractian.com/images/youtube.png?auto=format&fit=max&w=64" alt="Youttube da Tractian" class="object-contain w-7"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer