import React from 'react';
import ListMenu from './ListMenu';
import {Link, NavLink} from 'react-router-dom';

const Footer = () => {
    return (
        <footer class="main-footer">
                <div className="main-footer__item">
                    <h1>Contact info</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quidem saepe ipsam, quisquam consequuntur, hic porro voluptatum laudantium totam eligendi, dolores inventore labore deleniti molestiae quis culpa sit quod qui?</p>
                </div>
                <div className="main-footer__item">
                    <ListMenu variant="footer"></ListMenu>
                </div>
                <div className="main-footer__item">
                    <Link to="/"><h1 className="logo">Your logo here</h1></Link>
                </div>
        </footer>
    );
}

export default Footer;