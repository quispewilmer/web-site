import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const ListMenu = ({variant}) => {
    return (
                <ul className={`main-menu__list ${variant ? "footer" : ""}`}>
                    <li className={`main-menu__item ${variant ? "footer" : ""}`}><NavLink to="/" exact activeClassName="selected" className="main-menu__link">Inicio</NavLink></li>
                    <li className={`main-menu__item ${variant ? "footer" : ""}`}><NavLink to="/nosotros"  activeClassName="selected" className="main-menu__link">Nosotros</NavLink></li>
                    <li className={`main-menu__item ${variant ? "footer" : ""}`}><NavLink to="/servicios"  activeClassName="selected" className="main-menu__link">Servicios</NavLink></li>
                    <li className={`main-menu__item ${variant ? "footer" : ""}`}><NavLink to="/contactenos" activeClassName="selected" className="main-menu__link">Contáctenos</NavLink></li>
                </ul>
    );
}

export default ListMenu;