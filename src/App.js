import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from '../src/components/Header'
import Home from './pages/Home'
import Movimentacoes from './pages/Movimentacoes'


function App() {   

  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/movimentacoes/:data' exact element={<Movimentacoes />} />

          </Routes>          
          
        </div>

      </Router>
      
    </>    
    
  );
}

export default App;
