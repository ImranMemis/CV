import React from "react";
import './slider.css';
import leftArrow from "./Icons/left.png";
import rightArrow from "./Icons/right.png";

export default function BtnSlider({direction, moveSlide}){



    return(
        <button
            className={direction === "next" ? 'btn-slide next' : "btn-slide prev"}
            onClick={moveSlide}>
             <img alt="left" src={direction === "next" ? rightArrow : leftArrow}/>
        </button>
    )
}