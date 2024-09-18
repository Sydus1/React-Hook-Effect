"Made by: Juan Jose Sierra - 202013642"
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ImageViewer from './components/ImageViewer';
import Mascotas from './components/Mascotas';
import Detail from './components/detail';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/mascotas/:mascotaId" element={<Detail />} />
        <Route path="/mascotas" element={<Mascotas />} />
        <Route path="/" element={<ImageViewer />} />
      </Routes>
    </div>
  );
}

export default App;
