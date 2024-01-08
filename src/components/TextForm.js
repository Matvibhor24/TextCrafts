import React,{useState} from "react";
// import up_animation from './up_animation.gif'
import './TextForm.css'
import icon from './copy_icon.png';

export default function TextForm(props){
    const[text,setText] = useState("");
    const [displayText,setText1] = useState("");
    const [displayBoxVisible,setDisplayBoxVisible] = useState(false);

    const onChangeHandler=(event)=>{
        setText(event.target.value);
        setDisplayBoxVisible(false);
        // setText1("");
    }
    const onUpClick=()=>{
        setDisplayBoxVisible(true);
        setText1(text.toUpperCase());
    }
    const onLoClick=()=>{
        setDisplayBoxVisible(true);
        setText1(text.toLowerCase());
    }
    const onClearHandler=()=>{
        setDisplayBoxVisible(false);
        document.getElementById("exampleFormControlTextarea1").value="";
        setText("");
        setText1("");
    }
    const onCopyHandler=()=>{
        // document.getElementById("display-box").select();
        navigator.clipboard.writeText(displayText);
        alert("copied to clipboard!");
    }
    const onRemoveSpaceHandler=()=>{
        setDisplayBoxVisible(true);
        let newText = text.split(" ");
        setText1(newText.join(" "));
    }
    // let readTime = text.split(" ").length * 0.008;
    return (
        <>

        <div className="heading-tab">
            <h5 align="left">{props.heading}</h5>
            <div className="btn-group" align="right" role="group" aria-label="Basic example" >
                <button type="button" className="btn btn-outline-success bg-success-subtle" onClick={onUpClick} >To Uppercase</button>
                <button type="button" className="btn btn-outline-success bg-success-subtle" onClick={onLoClick}>To lowercase</button>
                <button type="button" className="btn btn-outline-success bg-success-subtle" onClick={onClearHandler}>Clear Text</button>
                {/* <button type="button" className="btn btn-outline-success bg-success-subtle" onClick={onCopyHandler}>Copy Text</button> */}
                <button type="button" className="btn btn-outline-success bg-success-subtle" onClick={onRemoveSpaceHandler}>Remove Extra spaces</button>
            </div>
        </div>

        <div className="mb-5">
            <textarea className="form-control border-success-subtle" value={text} onChange={onChangeHandler} id="exampleFormControlTextarea1" placeholder="Type here or Copy your text here..." rows="8"> </textarea>
            <div className={`display-box alert alert-success ${displayBoxVisible ? 'd-block' : 'd-none'}`} role="alert" align="left">
                <p>{displayText}</p>
                <button className="image-button" align="right" onClick={onCopyHandler} style={{border:"none",background:"transparent",cursor: "pointer"}}>
                    <img src={icon} alt="hii" align="right"/>
                </button>
            </div>
            <div className="alert alert-success" role="alert" align="left">
                <h5>Your text Summary</h5>
                <hr/>
                <p>Word Count : {text==="" ? 0 : text.split(/[ ]+/).join(" ").split(" ").length}</p>
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