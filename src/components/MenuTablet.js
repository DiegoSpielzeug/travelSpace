import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData} from '../data/SidebarData';
import '../styles/navbar.css';


const MenuTablet = ({showSidebar}) => {
    return (
        <nav className='nav-menu-tab'>
         <ul className='nav-menu-items'>
            {
                SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path} onClick={showSidebar} className='link-menu'>
                                <span>{item.title}</span>
                                <span className='hover-line'></span>
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    </nav>
    );
};

export default MenuTablet;