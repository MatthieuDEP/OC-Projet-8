import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Header() {
    return (
        <header className="header">
            <Link to="/" className="header__logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill='white'><path d="M384 96V320H64L64 96H384zM64 32C28.7 32 0 60.7 0 96V320c0 35.3 28.7 64 64 64H181.3l-10.7 32H96c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H277.3l-10.7-32H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm464 0c-26.5 0-48 21.5-48 48V432c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H528zm16 64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H544c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H544c-8.8 0-16-7.2-16-16zm32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
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