import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from './pages/Home'
import Service from './pages/Service'
import Videos from './pages/Video'
import Contact from './pages/Contact'
// import Footer from './components/Footer'
import Header from './components/Header'
import HomeVideo from './components/HomeVideo'
import HomeImage from './components/HomeImage'
import Album from './pages/Album'
import FooterTest from './components/FooterTest'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/footer" element={<Footer />} /> */}
          <Route path="/header" element={<Header />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/homevideo" element={<HomeVideo />} />
          <Route path="/video" element={<Videos />} />
          <Route path="/homeimage" element={<HomeImage />} />
          <Route path="/service" element={<Service />} />
          <Route path="/album" element={<Album />} />
          <Route path="/footertest" element={<FooterTest />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
