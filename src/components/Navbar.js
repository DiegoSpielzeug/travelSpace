import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';
import iconMenu from '../assets/shared/icon-hamburger.svg';

import '../styles/navbar.css';
import Menu from './Menu';
import MenuTablet from './MenuTablet';
import useWindowSize from '../hook/useWindowSize';

const Navbar = () => {

    const {width} = useWindowSize();
    const [ sidebar, setSidebar ] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    
    console.log(width)

    return (
        <div className='all-nav'>
            <div className="navbar">
                <Link to="/" className="logo">
                    <img src={logo}  alt={'logo'}/>
                </Link>

                <Link to="#" className="menu-bars">
                    <img src={iconMenu} onClick={showSidebar} alt={'menu-bars'}/>
                </Link>
            </div>

            <div className='menu-content'>
               { width < 768 ? <Menu sidebar={sidebar} setSidebar={setSidebar} showSidebar={showSidebar}/> : <MenuTablet/> }
            </div>
        </div>
    );
};

export default Navbar;