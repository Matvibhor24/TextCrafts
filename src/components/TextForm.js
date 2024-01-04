import React,{useState} from "react";
import up_animation from './up_animation.gif'
import './HoverAnimation.css'

export default function TextForm(props){
    const[text,setText] = useState("default state - text");

    const onChangeHandler=(event)=>{
        setText(event.target.value);
    }
    const onClickHandler=()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    return (
        <>
        <h5 align="left">{props.heading}</h5>
        <div className="mb-5">
            <textarea className="form-control border-success-subtle" onChange={onChangeHandler} id="exampleFormControlTextarea1" rows="8"> </textarea>
            <div className="alert alert-success" role="alert" align="left">
                {text}
            </div>
        </div>
        <div className="button-container">

        <img src={up_animation} alt="Hover Animation" className="hover-animation"/>
        <button className="btn btn-outline-dark animated-button" onClick={onClickHandler}><b>To UPPERCASE</b></button>
        {/* <button type="button" class="btn btn-outline-success-subtle">Light</button> */}
        </div>

        </>
    );
}