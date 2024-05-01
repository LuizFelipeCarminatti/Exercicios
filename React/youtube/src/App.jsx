import './App.css';

import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos';
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional';
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'

export default () => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <div className='Cards'>
        <Card titulo="#1 Primeiro Componente" color="#ff85cb">
          <Primeiro />
        </Card>
        <Card titulo="#2 Com Parâmetro" color="#d96459">
          <ComParametro titulo="Naruto Shippuden" />
        </Card>
        <Card titulo="#3 Com Filhos" color="#008bba">
          <ComFilhos>
            <ul>
              <li>Felipe</li>
              <li>Luiz</li>
              <li>Cristiane</li>
              <li>Ivanir</li>
            </ul>
          </ComFilhos>
        </Card>
        <Card titulo="#4 Repetição" color="#e94c6f">
          <Repeticao />
        </Card>
        <Card titulo="#5 Condicional" color="#fa6900">
          <Condicional numero={10}></Condicional>
        </Card>
        <Card titulo="#6 Comunicação Direta" color="#4298b5">
          <Pai></Pai>
        </Card>
        <Card titulo="#7 Comunicação Indireta" color="#000">
          <Super></Super>
        </Card>
        <Card titulo="#8 Input" color="#9c0f5f">
          <Input></Input>
        </Card>
        <Card titulo="#9 Contador" color="#293e6a">
          <Contador></Contador>
        </Card>
        <Card titulo="#10 Mega-Sena" color="#73503c">
          <Mega qtdeNumeros={6}></Mega>
        </Card>
      </div>
    </div>
  );
}