import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';
import iconMenu from '../assets/shared/icon-hamburger.svg';
import closeMenu from '../assets/shared/icon-close.svg';
import { SidebarData} from '../data/SidebarData';
import '../styles/navbar.css';

const Navbar = () => {

    const [ sidebar, setSidebar ] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className="navbar">
                <Link to="/" className="logo">
                    <img src={logo}  alt={'logo'}/>
                </Link>

                <Link to="#" className="menu-bars">
                    <img src={iconMenu} onClick={showSidebar} alt={'menu-bars'}/>
                </Link>
            </div>

            <div className='menu-content'>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items'>
                        <li className='navbar-toggle'>
                            <Link to='#'>
                                <img src={closeMenu} onClick={showSidebar} alt={'menu-bars'}/>
                            </Link>
                        </li>
                        {
                            SidebarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path} onClick={showSidebar} className='link-menu'>
                                            {item.num}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Navbar;