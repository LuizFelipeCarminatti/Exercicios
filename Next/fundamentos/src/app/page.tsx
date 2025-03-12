'use client'
import { useState } from 'react';
import Luiz from '../app/Luiz'
import Felipe from '../app/Felipe'
import Ivanir from '../app/Ivanir'
import Admin from './admin/admin'
import Hello from '../app/Hello'
import { IconUser, IconBrandTailwind, IconBrandNextjs } from '@tabler/icons-react'
import Tailwind from './tailwind';

export default function Home() {

  const [ativo, setAtivo] = useState<number>(0)

  function renderizar() {
    if (ativo === 1) {
      return <Luiz />
    } else if (ativo === 2) {
      return <Felipe/>
    } else if(ativo === 3) {
      return <Ivanir/>
    }else if(ativo === 4) {
      return <Admin/>
    }else if(ativo === 5) {
      return <Tailwind/>
    }else{
      return <Hello/>
    }
  }

  function anoAtual() {
    let data = new Date()
    let ano = data.getFullYear()
    return ano
  }

  return (
    <div className='flex flex-col h-screen'>
      <header className='w-full h-[100px] border-b border-gray-600 flex justify-center items-center'>
        <h1 className='flex'>Fundamentos - <IconBrandNextjs /> Next.js <span className='px-2'>&</span> <IconBrandTailwind/> TailwindCss</h1>
      </header>
      <div className='flex h-screen'>
        <nav className='border-r border-gray-600 w-[200px] p-3 flex flex-col gap-3'>
          <button onClick={() => setAtivo(1)} className='botao padrao'>Luiz</button>
          <button onClick={() => setAtivo(2)} className='botao padrao'>Felipe</button>
          <button onClick={() => setAtivo(3)} className='botao padrao'>Ivanir</button>
          <button onClick={() => setAtivo(4)} className='flex bg-zinc-600 text-white p-2 rounded-md'><IconUser/>Administrador</button>
          <button onClick={() => setAtivo(5)} className='bg-sky-600 flex justify-center items-center p-2 rounded-md'><IconBrandTailwind/>Tailwindcss</button>
        </nav>
        <main className='p-3 w-[100%] bg-zinc-800'>
          {renderizar()}
        </main>
      </div>
      <footer className='h-[100px] border-t border-gray-600 flex justify-center items-center'>
          <p>&copy; Programmer <strong>Luiz Felipe Carminatti</strong> | Next.js &  <span className='text-sky-600'>TailwindCss</span> - {anoAtual()}</p>
      </footer>
    </div>
  );
}
