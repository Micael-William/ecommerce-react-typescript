import React from 'react';
import Menu from './components/Menu';
import Busca from './components/Busca';
import Main from './components/Main';
import './index.css';
import AppRouter from './routes';

function App() {
  return (
    <div className="App">
     <AppRouter />
    </div>
  );
}

export default App;
