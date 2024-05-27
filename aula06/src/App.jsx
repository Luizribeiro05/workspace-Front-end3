import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Afaculdade from './pages/Afaculdade'
import DpoLgpd from './pages/DpoLgpd'
import Inicial from './pages/Inicial'
import Noticias from './pages/Noticias'


const App = () => {
  return (
    <>
    <BrowserRouter>
    <img src='uniesp.jpg' />
    <h1>Titulo da Pagina</h1>
    <Routes>
      <Route path='/' element={<Inicial />} />
      <Route path='/a-faculdade' element={<Afaculdade />} />
      <Route path='/dpo-lgpd' element={<DpoLgpd />} />
      <Route path='/noticias' element={<Noticias />} />
    </Routes>
    </BrowserRouter>
    <div>App</div>
    </>
 )
}

export default App