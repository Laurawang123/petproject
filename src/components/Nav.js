import React from 'react'
import { Link } from "react-router-dom"
import logo from "../images/logo.png"
import "../styles/Nav.css"

function Nav () {
  return (
    <div className="nav">
      <div className="leftNav">
        <img src={logo} />
        Paws & Kin
      </div>
      <div className="rightNav">
        <Link to="/">Home</Link>
        <Link to="/Services">Services</Link>
        <Link to="/Booking">Booking</Link>
        <Link to="/Login">Login</Link>

      </div>
    </div>
  )
}

export default Nav