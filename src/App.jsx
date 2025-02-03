import React from 'react'

import { Route, Routes, Navigate } from 'react-router-dom';

import { Home } from "./pages/Home";
import { Awards } from "./pages/Awards/Awards";
import { Projects } from "./pages/Projects/Projects";
import { Hobbies } from "./pages/Hobbies/Hobbies";
import { Contacts } from "./pages/Contacts/Contacts";

import { useState } from 'react'
import Menu from './components/menu'
import './App.css'

function App() {
  
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>  
    </>
  )
}

export default App
