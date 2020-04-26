import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/admooh-logo.png'

export const Navbar = () => (
  <nav>
    <section>
      <Link to="/"><img src={logo} alt="Admooh Logo" width={60}/></Link>
    </section>
  </nav>
)
