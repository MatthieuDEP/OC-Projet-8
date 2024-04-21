import React from "react";
import './skill.scss'

export default function Skill ({ title, logo, styles = '' }) {
    return (
        <div className={`skill ${styles}`}>
            <img className="skill__logo" src={logo} alt={title} />
            <span className="skill__title">{title}</span>
        </div>
    )
};