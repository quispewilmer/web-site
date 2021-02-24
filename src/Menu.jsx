import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Menu = () => {
    return (
        <div className="main-container">
            <nav className="main-menu">
                <Link to="/"><h1 className="logo">Your logo here</h1></Link>
                <ul className="main-menu__list">
                    <li className="main-menu__item"><NavLink to="/" exact activeClassName="selected" className="main-menu__link">Inicio</NavLink></li>
                    <li className="main-menu__item"><NavLink to="/nosotros"  activeClassName="selected" className="main-menu__link">Nosotros</NavLink></li>
                    <li className="main-menu__item"><NavLink to="/servicios"  activeClassName="selected" className="main-menu__link">Servicios</NavLink></li>
                    <li className="main-menu__item"><NavLink to="/contactenos" activeClassName="selected" className="main-menu__link">Contáctenos</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;