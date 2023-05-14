import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from './pages/Home'
import Service from './pages/Service'
import Videos from './pages/Video'
import Contact from './pages/Contact'
import Header from './components/Header'
import HomeVideo from './components/HomeVideo'
import HomeImage from './components/HomeImage'
import Album from './pages/Album'
import Footer from './components/Footer1'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/header" element={<Header />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/homevideo" element={<HomeVideo />} />
          <Route path="/video" element={<Videos />} />
          <Route path="/homeimage" element={<HomeImage />} />
          <Route path="/service" element={<Service />} />
          <Route path="/album" element={<Album />} />
          <Route path="/footer" element={<Footer />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
