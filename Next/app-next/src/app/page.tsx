'use client'

import Layout from '../components/Layout'
import Primeiro from './basicos/Primeiro'
import { useState } from "react";
import { useRouter } from 'next/navigation';

let i = 0
export default function Home() {

  const router = useRouter()

  const [contador, setContador] = useState(0)

  function incrementar() {
    setContador(i++)
  }

  function decrementar() {
    setContador(i--)
  }

  function zerar() {
    setContador(0)
  }

  return (
    <Layout>
      <div className={`border border-gray-600 flex flex-col justify-center items-center p-4`}>
        <div className={`bg-gray-800`}>
          <div className={`w-[100%] bg-gray-800 flex justify-center p-7`}>
            <p className={`text-white`}>{contador}</p>
          </div>
          <div className={`flex`}>
            <Primeiro>
              Componentes +
              <button onClick={incrementar} className={`rounded-md bg-purple-950 text-white p-2`}>Incrementar</button>
            </Primeiro>
            <Primeiro>
              Componentes -
              <button onClick={decrementar} className={`rounded-md bg-purple-950 text-white p-2`}>Decrementar</button>
            </Primeiro>
            <Primeiro>
              Componentes 0
              <button onClick={zerar} className={`rounded-md bg-purple-950 text-white p-2`}>Zerar</button>
            </Primeiro>
          </div>
        </div>
        <div className={`flex flex-wrap m-4 gap-4`}>
          <a href='#' className={`flex justify-center items-center text-white bg-purple-950 w-[100px] h-[50px] rounded-md`} onClick={() => router.push('/galeria')}>Imagens</a>
          <a href="#" className={`flex justify-center items-center text-white bg-purple-950 w-[100px] h-[50px] rounded-md`} onClick={() => router.push('/condicional')}>Condicional</a>
          <a href="#" className={`flex justify-center items-center text-white bg-purple-950 w-[100px] h-[50px] rounded-md`} onClick={() => router.push('/lista')}>Lista</a>
          <a href="#" className={`flex justify-center items-center text-white bg-purple-950 w-[100px] h-[50px] rounded-md`} onClick={() => router.push('/grid')}>Grid</a>
          <a href="#" className={`flex justify-center items-center text-white bg-purple-950 w-[100px] h-[50px] rounded-md`} onClick={() => router.push('/starWars')}>Star Wars</a>
          <a href="#" className={`flex justify-center items-center text-white bg-purple-950 w-[100px] h-[50px] rounded-md`} onClick={() => router.push('/contador')}>Contador</a>
        </div>
      </div>
    </Layout>
  );
}
