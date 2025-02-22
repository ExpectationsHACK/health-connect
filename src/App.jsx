import React from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom"
import Index from "../src/components/landing-page/Index"
import SymptomsAnalysis from "./components/form/SymptomsAnalysis"
import Signup from "../src/components/Auth/Signup"
import Patient from "../src/components/Dashboard/Patient"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/patient/signup" element={<Signup/>}/>
      <Route path="/patient" element={<SymptomsAnalysis/>}/>
      <Route path="/patient/dashboard" element={<Patient/>}/>
    </Routes>
  )
}

export default App
