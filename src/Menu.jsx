import React from 'react';
import ListMenu from './ListMenu';
import {Link, NavLink} from 'react-router-dom';

const Menu = () => {
    return (
        <div className="main-container">
            <nav className="main-menu">
                <Link to="/"><h1 className="logo">Your logo here</h1></Link>
                <ListMenu></ListMenu>
            </nav>
        </div>
    );
}

export default Menu;