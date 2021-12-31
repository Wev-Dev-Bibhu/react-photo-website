import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './images/logo.svg'

export default function Navbar() {
    return (
        <nav className='nav'>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="links">
                <ul>
                    <li><NavLink activeClassName='active' exact to="/">HOME</NavLink></li>
                    <li><NavLink activeClassName='active' exact to="/collection">PORTFOLIO</NavLink></li>
                    <li><NavLink activeClassName='active' exact to="/contact">CONTACT</NavLink></li>
                </ul>
            </div>
            <div className="nav_btns">
                <button>BOOK ONLINE</button>
            </div>
        </nav>
    )
}
