import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Formulario from './components/Formulario'
import Usuario from './components/Usuario'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Formulario />}/>
        <Route path="/usuario/:id" element={<Usuario />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
