import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { AboutItem } from './pages/AboutItem';
import { NotFound } from './pages/NotFound';

function App() {

  return (
    <div >
      <header>
        <h1>Titulo do site</h1>
      </header>
      <hr />
      <div>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<About />} />
          <Route path='/sobre/:slug' element={<AboutItem/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>


      </div>
      <hr />
      <footer>
        Todos os direitos reservados.
      </footer>
    </div>
  )
}

export default App
