import React from "react";
import './card.scss'
import { Link } from "react-router-dom";

export default function Card ({ id, title, cover }) {
    return (
        <Link className="card" key={id} to={`/work/${id}`}>
            <h3 className="card__title">{title}</h3>
            <div className="card__image">
                <img src={cover} alt={title} />
            </div>
        </Link>
    );
};