import React from "react";
import './skill.scss'

export default function Skill ({ title, logo }) {
    return (
        <div className="skill">
            <img className="skill__logo" src={logo} alt={title} />
            <span className="skill__title">{title}</span>
        </div>
    )
};