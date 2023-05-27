import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from './pages/Home'
import Service from './pages/Service'
import Video from './pages/Video'
import Contact from './pages/Contact'
import Header from './components/Header'
import Album from './pages/Album'
import Footer from './components/Footer'
import Album1 from './components/Albums/Album1'
import Album2 from './components/Albums/Album2'
import Album3 from './components/Albums/Album3'
import Picture from './components/ServicePackage/Picture'
import Filming from './components/ServicePackage/Filming'
import Flycam from './components/ServicePackage/Flycam'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/albums" element={<Album />} />
          <Route path="/videos" element={<Video />} />
          <Route path="/albums/album1" element={<Album1 />} />
          <Route path="/albums/album2" element={<Album2 />} />
          <Route path="/albums/album3" element={<Album3 />} />
          <Route path="/ServicePackage/Picture" element={<Picture />} />
          <Route path="/ServicePackage/Filming" element={<Filming />} />
          <Route path="/ServicePackage/Flycam" element={<Flycam />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
