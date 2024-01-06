import React,{useState} from "react";
// import up_animation from './up_animation.gif'
import './HoverAnimation.css'

export default function TextForm(props){
    const[text,setText] = useState("");
    const [displayText,setText1] = useState("");

    const onChangeHandler=(event)=>{
        setText(event.target.value);
    }
    const onUpClick=()=>{
        setText1(text.toUpperCase());
    }
    const onLoClick=()=>{
        setText1(text.toLowerCase());
    }
    const onClearHandler=()=>{
        document.getElementById("exampleFormControlTextarea1").value="";
        setText("");
    }
    
    // let readTime = text.split(" ").length * 0.008;
    return (
        <>
       
        <div className="heading-tab"> 
            <h5 className="text-white" align="left">{props.heading}</h5>
            <div className="btn-group" align="right" role="group" aria-label="Basic example" >
                <button type="button" className="btn btn-outline-success bg-success-subtle" onClick={onUpClick} >To Uppercase</button>
                <button type="button" className="btn btn-outline-success bg-success-subtle" onClick={onLoClick}>To lowercase</button>
                <button type="button" className="btn btn-outline-success bg-success-subtle" onClick={onClearHandler}>Clear Text</button>
            </div>
        </div>

        <div className="mb-5">
            <textarea className="form-control border-success-subtle" onChange={onChangeHandler} id="exampleFormControlTextarea1" rows="8"> </textarea>
            <div className="alert alert-success" role="alert" align="left">
                {displayText}
            </div>
            <div className="alert alert-success" role="alert" align="left">
                <h5>Your text Summary</h5>
                <hr/>
                <p>Word Count : {text==="" ? 0 : text.split(" ").length}</p>
                <p>Character Count : {text.length}</p>
                <p>{text.split(" ").length*0.008 < 1 ? text==="" ? 0+` Seconds Read` : text.split(" ").length*0.48+` Seconds Read`: text.split(" ").length*0.008+` Minutes Read`}</p>
            </div>
            <div className="alert alert-success" role="alert" align="left">
                <h5>Preview</h5>
                <hr/>
                <p>{text}</p>
            </div>
        </div>
        {/* <div className="button-container">

        <img src={up_animation} alt="Hover Animation" className="hover-animation"/>
        <button className="btn btn-outline-dark animated-button" onClick={onUpClick}><b>To UPPERCASE</b></button>
        <button className="btn btn-outline-dark " onClick={onLoClick}><b>To lowercase</b></button> 
        <button type="button" class="btn btn-outline-success-subtle">Light</button>
        </div> */}
        
        </>
    );
}