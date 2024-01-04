import React from "react";
import up_animation from './up_animation.gif'
import './HoverAnimation.css'
export default function TextForm(props){
    return (
        <>
        <h5 align="left">{props.heading}</h5>
        <div className="mb-5">
            <textarea className="form-control border-success-subtle" id="exampleFormControlTextarea1" rows="8"> </textarea>
        </div>
        <div className="button-container">

        <img src={up_animation} alt="Hover Animation" className="hover-animation"/>
        <button className="animated-button"><b>To UPPERCASE</b></button>
        </div>

        </>
    );
}