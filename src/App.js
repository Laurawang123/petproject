import React from 'react'
import './App.css'
import Nav from "./components/Nav"
import Home from "./components/Home"
import Footer from "./components/Footer"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Services from './components/Services'
import Booking from './components/Booking'
import Login from "./components/Login"

function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/Login" element={<Login />} />



        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;

