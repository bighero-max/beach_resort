import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import {FaAlignRight} from 'react-icons/all';

const Navbar=()=>{
    const [isOpen,setOpen]=useState(false)
    const handleToggle=()=>{
        setOpen(!isOpen)
    }
    return(
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to='/'>
                        <img src={logo} alt="Beach resort"/>
                    </Link>
                    <button className="nav-btn" onClick={handleToggle}>
                        <FaAlignRight className='nav-icon'/>
                    </button>
                </div>
                <ul className={isOpen?'nav-links show-nav':'nav-links'}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/rooms'>Rooms</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;