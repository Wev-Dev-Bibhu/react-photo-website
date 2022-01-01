import React , {useState} from 'react'
import { NavLink } from 'react-router-dom'
import logo from './images/logo.svg'

export default function Navbar() {
    const [menuToggle, setMenuToggle] = useState('menu_toggle');
    const menuClick = ()=>{
        setMenuToggle('menu_toggle');
}
    const showMenu = ()=>{
        setMenuToggle('')
}
    return (
        <>
        <nav className={`nav ${menuToggle}`}>
        <div className="menu_btn" onClick={menuClick}>
        <div className="bar"></div>
        <div className="bar"></div>
        </div>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="links">
                <ul>
                    <li><NavLink activeClassName='active' onClick={menuClick} exact to="/">HOME</NavLink></li>
                    <li><NavLink activeClassName='active' onClick={menuClick} exact to="/collection">PORTFOLIO</NavLink></li>
                    <li><NavLink activeClassName='active' onClick={menuClick} exact to="/contact">CONTACT</NavLink></li>
                </ul>
            </div>
            <div className="nav_btns">
                <button>BOOK ONLINE</button>
            </div>
        </nav>
        <div className="menuShow" onClick={showMenu}>
            <div className="showBar"></div>
            <div className="showBar"></div>
            <div className="showBar"></div>
        </div>
        </>
    )
}
