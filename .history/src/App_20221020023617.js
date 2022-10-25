import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Videos from './Pages/Videos';
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
function App() {
  return (
    <BrowserRouter>

      {/* this is header component  */}
      <Header />

      {/* routing is begin from here */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/videos/:videoId' element={<Videos />} />
      </Routes>

      {/* footer */}
      <Footer />
    </BrowserRouter>

  );
}

export default App;
