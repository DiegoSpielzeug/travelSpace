import React from 'react';
import { Link } from 'react-router-dom';
import closeMenu from '../assets/shared/icon-close.svg';
import { SidebarData} from '../data/SidebarData';
import '../styles/navbar.css';


const Menu = ({sidebar,setSidebar,showSidebar}) => {
    return (
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
    );
};

export default Menu;