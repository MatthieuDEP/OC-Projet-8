import React from "react";
import "./hamburger.scss";

export default function Hamburger ({ isOpen }) {
    return(
        <div className="hamburger">
            <div className={`burger ${isOpen ? 'burger1' : '' }`} />
            <div className={`burger ${isOpen ? 'burger2' : '' }`} />
            <div className={`burger ${isOpen ? 'burger3' : '' }`} />
        </div>
    )
}