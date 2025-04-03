import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from "./components/Menu";
import Busca from "./components/Busca";
import Main from "./components/Main";
import Footer from "./components/Footer";
import CategoriaProduto from "./pages/Categoria";


export default function AppRouter(){
    return (
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Main/>}>
            <Route index element={<Busca/>}/>
            <Route path='home' element={<Main />}/>
          </Route>
          <Route path='categoria/:id' element={<CategoriaProduto />}/>
          <Route path="*" />
        </Routes>
        <Footer />
      </BrowserRouter>
    )
} 