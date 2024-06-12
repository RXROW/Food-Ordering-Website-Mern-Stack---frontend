import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/home/Home';
import MenuShop from './pages/shop/MenuShop';
 

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="menu" element={<MenuShop />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
