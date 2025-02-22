import React from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom"
import Index from "../src/components/landing-page/Index"
import Patient from "../src/components/form/Patient"



function App() {
  return (
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/patient" element={<Patient/>}/>
    </Routes>
  )
}

export default App
