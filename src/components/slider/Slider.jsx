import React, { useState } from "react";
import './slider.scss';

export default function Slider ({ images }) {

    const [imagesIndex, setImagesIndex] = useState(0);

    function prevImage () {
        setImagesIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    function nextImage () {
        setImagesIndex((prevIndex) => (prevIndex === images.length -1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="slider">
            {images.length > 1 && (
                <>
                    <button className="arrow-left" onClick={prevImage}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="80" viewBox="0 0 320 512"><path fill="#2a5bfb" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
                    </button>
                    <button className="arrow-right" onClick={nextImage}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="80" viewBox="0 0 320 512"><path fill="#2a5bfb" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                    </button>
                    <div className="slider__counter">{imagesIndex + 1}/{images.length}</div>
                </>
            )}
            <div className="slider__container">   
                <div key={imagesIndex} className="slider__container--image">
                    <img src={images[imagesIndex]} alt="screenshot du site" />
                </div>
            </div>
        </div>
    ); 
};