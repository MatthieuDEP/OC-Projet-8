import React from 'react';
import './footer.scss';
// import logo from '../../images/logoWhite.svg';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__logo">
                <img src="#" alt="logo linkedin" />
                <img src="#" alt="logo email" />
                <img src="#" alt="logo github" />
            </div>
            <p className="footer__text">© 2024 Matthieu DEPRET. Tous droits réservés.</p>
        </footer>
    );
};