import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Afaculdade from './pages/Afaculdade';
import DpoLgpd from './pages/DpoLgpd';
import Inicial from './pages/Inicial';
import Noticias from './pages/Noticias';
import VisualizaNoticia from './pages/VisualizaNoticia';
import './styles/styles.css';
import NoticiasAxios from './pages/NoticiasAxios';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <header>
          <img src='uniesp.jpg' width={100} height={100} alt="Uniesp logo"/>
          <h1>Uniesp</h1>
        </header>
        <Navbar/>
        <main>
          <Routes>
            <Route path='/' element={<Inicial />} />
            <Route path='/a-faculdade' element={<Afaculdade />} />
            <Route path='/dpo-lgpd' element={<DpoLgpd />} />
            <Route path='/noticias' element={<NoticiasAxios />} />
            <Route path='/visualiza-noticia/:id' element={<VisualizaNoticia/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;