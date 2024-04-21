import React from "react";
import './about.scss';

export default function About() {
    return (
        <section className="about" id="about">
            <div className="about__creator">
                <h1 className="about__creator--name">Matthieu DEPRET</h1>
                <p className="about__creator--job">Développeur Web</p>
            </div>
            <h2 className="about__title">Présentation</h2>
            <div className="about__details">
                <div className="about__details--texts">
                    <p className="about__details--textA">Passionné par l'informatique depuis mon premier ordinateur, j'ai d'abord approché le développement web de façon autodidacte, après quelques années en tant qu'opticien j'ai décidé de me reconvertir et de suivre une formation chez OpenClassRooms afin de renforcer mes connaissances et de devenir développeur web professionnel.</p>
                    <p className="about__details--textB">Je suis spécialisé en Javascript, plus particulièrement sur la stack MERN : MongoDB, Express, React, NodeJS.</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="#2a5bfb"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>
            </div>
        </section>
    );
};