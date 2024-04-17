import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// import picture from '../../images/logo.jpg';

export default function Header() {
    return (
        <header className="header">
            <Link to="/" className="header__logo">
                {/* <img src={picture} alt="logo Kasa" /> */}
            </Link>
            <nav className="navigation">
                <ul className="navigation__list">
                    <li className="navigation__item"><HashLink to="/#about" className="navigation__link">Présentation</HashLink></li>
                    <li className="navigation__item"><HashLink to="/#skills" className="navigation__link">Compétences</HashLink></li>
                    <li className="navigation__item"><HashLink to="/#works" className="navigation__link">Mes travaux</HashLink></li>
                </ul>
            </nav>
        </header>
    );
};