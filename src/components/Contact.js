import React from 'react'

const Contact = () => {
  return (
    <div class="w-full container mx-auto flex flex-col items-center p-5">
      <h2 class="my-6 text-3xl text-center leading-none tracking-tight text-gray-900 sm:text-5xl">Melhore os seus processos de manutenção</h2>
      <p class="text-center text-gray-900	">Preencha o formulário para uma demonstração.</p>
      <div class="my-10 bg-gradient-to-l bg-slate-400 rounded-xl p-6 w-full lg:w-1/2">
        <form action="#">
          <div class="flex flex-col">
            <span></span>
            <div class="flex flex-col mb-3"> 
              <label htmlFor="firstname" class="text-white">Nome</label>
              <input type="text" name="firstname" class="rounded-md p-2" placeholder="Insira seu nome" />
              <span></span>
            </div>
            <div class="flex flex-col mb-3">
              <label htmlFor="role" class="text-white">Cargo</label>
              <input type="text" name="jobtitle" class="rounded-md p-2" placeholder="Insira seu cargo" />
            </div>
            <div class="flex flex-col lg:flex-row mb-3">
              <div class="flex lg:w-2/3 lg:mr-5 flex-col">
                <label htmlFor="email" class="text-white">E-mail profissional</label>
                <input type="text" name="email" class="rounded-md p-2"placeholder="Insira seu e-mail profissional" />
              </div>
              <div class="flex flex-col mt-3 lg:mt-0 lg:w-1/3">
                <label htmlFor="phone" class="text-white">Telefone</label>
                <input name="phone" class="rounded-md p-2" placeholder="(XX) XXXX-XXXX" />
              </div>
            </div>
            <button type="submit" class="mt-3 mx-10 whitespace-nowrap inline-flex items-center justify-center px-4 py-2  rounded-md shadow-sm text-base font-medium           text-white bg-green-500 hover:bg-green-400">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact