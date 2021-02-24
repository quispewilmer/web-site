import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Menu = () => {
    return (
        <nav className="main-menu">
            <ul className="main-menu__list">
                <li className="main-menu__item"><NavLink to="/" exact activeClassName="selected">Inicio</NavLink></li>
                <li className="main-menu__item"><NavLink to="/nosotros"  activeClassName="selected">Nosotros</NavLink></li>
                <li className="main-menu__item"><NavLink to="/servicios"  activeClassName="selected">Servicios</NavLink></li>
                <li className="main-menu__item"><NavLink to="/contactenos" activeClassName="selected">Contáctenos</NavLink></li>
            </ul>
        </nav>
    );
}

export default Menu;