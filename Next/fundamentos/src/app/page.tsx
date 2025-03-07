'use client'
import { useState } from 'react';
import Luiz from '../app/Luiz'
import Felipe from '../app/Felipe'
import Ivanir from '../app/Ivanir'
import Hello from '../app/Hello'
import { IconUser } from '@tabler/icons-react'

export default function Home() {

  const [ativo, setAtivo] = useState<number>(0)

  function renderizar() {
    if (ativo === 1) {
      return <Luiz />
    } else if (ativo === 2) {
      return <Felipe/>
    } else if(ativo === 3) {
      return <Ivanir/>
    }else{
      return <Hello/>
    }
  }

  return (
    <div className='flex flex-col h-screen'>
      <header className='w-full h-[100px] border-b border-gray-600 flex justify-center items-center'>
        <h1>Fundamentos Next.js</h1>
      </header>
      <div className='flex h-screen'>
        <nav className='border-r border-gray-600 w-[200px] p-3 flex flex-col gap-3'>
          <button onClick={() => setAtivo(1)} className='hover:bg-blue-500 rounded-md flex justify-center items-center p-2'><IconUser/>Luiz</button>
          <button onClick={() => setAtivo(2)} className='hover:bg-blue-500 rounded-md flex justify-center items-center p-2'><IconUser/>Felipe</button>
          <button onClick={() => setAtivo(3)} className='hover:bg-blue-500 rounded-md flex justify-center items-center p-2'><IconUser/>Ivanir</button>
        </nav>
        <main className='p-3 w-[100%]'>
          {renderizar()}
        </main>
      </div>
    </div>
  );
}
