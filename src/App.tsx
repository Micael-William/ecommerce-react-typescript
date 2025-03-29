import React from 'react';
import Menu from './components/Menu';
import Busca from './components/Busca';
import './index.css';
import Formulario from './components/Formulario';
import Imagens from './components/SecaoImagens';

function App() {
  return (
    <div className="App">
      <Menu />
      <Busca>
        <Formulario method='POST' />
      </Busca>
      <Imagens />
    </div>
  );
}

export default App;
