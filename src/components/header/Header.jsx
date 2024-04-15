import React from 'react';
import './header.scss';
import { Link, NavLink } from 'react-router-dom';
// import picture from '../../images/logo.jpg';

export default function Header() {
    return (
        <header className="header">
            <Link to="/" className="header__logo">
                {/* <img src={picture} alt="logo Kasa" /> */}
            </Link>
            <nav className="navigation">
                <ul className="navigation__list">
                    <li className="navigation__item"><NavLink to="/" className="navigation__link">Présentation</NavLink></li>
                    <li className="navigation__item"><NavLink to="/skills" className="navigation__link">Compétences</NavLink></li>
                    <li className="navigation__item"><NavLink to="/works" className="navigation__link">Mes travaux</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};