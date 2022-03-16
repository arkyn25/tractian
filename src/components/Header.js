import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div className="header-parent" >
        <div class="header-logo">
          <img  src={require('../assets/images/Logo-Tractian.svg').default} alt="tractian"  />
        </div>
      <div className="header-container">
        <nav className="flex items-center">
          <div className="flex items-center">
            <div className="mr-6">
              <div>
              <button type="button" class="group rounded-md inline-flex items-center text-white hover:text-[#f2e14c] focus:outline-none focus:ring-indigo-500"><span>Soluções</span></button>
              </div>
            </div>
            <div className="mr-6">
              <div>
              <button type="button" className="group rounded-md inline-flex items-center text-white hover:text-[#f2e14c] focus:outline-none focus:ring-indigo-500"><span>Sobre Nós</span></button>
              </div>
            </div>
            <div className="mr-6">
              <div>
               <button type="button"className="group rounded-md inline-flex items-center text-white hover:text-[#f2e14c] focus:outline-none focus:ring-indigo-500"><span>Produtos</span></button>
              </div>
            </div>
            <div className="mr-6">
              <div>
               <button type="button"className="group rounded-md inline-flex items-center text-white hover:text-[#f2e14c] focus:outline-none focus:ring-indigo-500"><span>Contate</span></button>
              </div>
            </div>
          </div>
          
          
        </nav>
        
      </div>
      <div class="justify-items-center	pt-4">
            <a href="https://app.tractian.com" target="_blank" class="text-white hover:text-[#4cf2e2]" rel="noreferrer">Área do Cliente</a><div class="hidden lg:inline ml-4 w-full items-end"><button class="whitespace-nowrap cursor-pointer inline-flex items-center justify-center px-6 py-2
              rounded-md shadow-sm font-semibold tracking-wide text-white bg-gradient-to-tr from-green-600 via-green-500 to-green-500 hover:transition hover:brightness-110 " type="button">Demonstração</button>
            </div>
          </div>
         
    </div>
  );
}
