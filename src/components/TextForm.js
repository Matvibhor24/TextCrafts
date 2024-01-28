import React,{useState} from "react";
// import up_animation from './up_animation.gif'
import './TextForm.css'
import icon from './copy_icon.png';
// import FunctionButtonBar from "./FunctionButtonBar";

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
    const convertToTitleCase = () => {
        setDisplayBoxVisible(true);
        const titleCaseText = text.replace(/\w\S*/g, (word) =>
          word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
    );
        setText1(titleCaseText);
      };
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
    const reverseText = () => {
        setDisplayBoxVisible(true);
        const reversedText = text.split('').reverse().join('');
        setText1(reversedText);
    }
    const onRemoveSpaceHandler=()=>{
        setDisplayBoxVisible(true);
        let newText = text.split(" ");
        setText1(newText.join(" "));
    }
    const removeSpecialCharacters = () => {
        setDisplayBoxVisible(true);
        const textWithoutSpecialChars = text.replace(/[^\w\s]/gi, '');
        setText1(textWithoutSpecialChars);
      }
    // let readTime = text.split(" ").length * 0.008;
    return (
        <>
        <div className="comp_container">
            <div className={`heading-tab text-${props.mode==='light'?'black':'white'}`}>
                <h5>{props.heading}</h5>
                {/* <FunctionButtonBar/> */}
            <div className={`btn-group bg-${props.mode==='light'?'success-subtle':'success'} btn-outline-success shadow-lg rounded`} align="right" role="group" aria-label="Basic example" >
                <button type="button" disabled={text===""} className="btn " onClick={onUpClick} >To Uppercase</button>
                <button type="button" disabled={text===""} className="btn " onClick={onLoClick}>To lowercase</button>
                <button type="button" disabled={text===""} className="btn " onClick={convertToTitleCase}>To Titlecase</button>
                <button type="button" disabled={text===""} className="btn " onClick={onClearHandler}>Clear Text</button>
                <button type="button" disabled={text===""} className="btn " onClick={onRemoveSpaceHandler}>Remove Extra spaces</button>
                <button type="button" disabled={text===""} className="btn " onClick={removeSpecialCharacters}>Remove Special Characters</button>
                <button type="button" disabled={text===""} className="btn " onClick={reverseText}>Reverse Text</button>
            </div>
            </div>

            <div className={`mb-5 `}>
            <textarea className={`form-control bg-${props.mode==='light'?'white':'dark-subtle'} shadow p-3 mb-5 rounded`} value={text} onChange={onChangeHandler} id="exampleFormControlTextarea1" placeholder="Type here or Copy your text here..." rows="8"> </textarea>
            <div className={`display-box container shadow p-3 mb-5 rounded my-3 alert bg-${props.mode==='light'?'success-subtle':'success'} ${displayBoxVisible ? 'd-block' : 'd-none'} text-${props.mode==='light'?'black':'white'}`} role="alert" align="left">
                <button className="image-button" onClick={onCopyHandler} style={{border:"none",background:"transparent",cursor: "pointer"}}>
                    <img src={icon} alt="hii" />
                </button>
                {/* <button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button> */}
                <p>{displayText}</p>
            </div>
            <div className={`alert bg-${props.mode==='light'?'success-subtle':'success'} shadow p-3 mb-5 rounded my-3 text-${props.mode==='light'?'black':'white'}`} role="alert" align="left">
                <h5>Your text Summary</h5>
                <hr className="border-black border-2"/>
                <p>Word Count : {text==="" ? 0 : text.split(/[ ]+/).join(" ").split(" ").length}</p>
                <p>Character Count : {text.length}</p>
                <p>{text.split(" ").length*0.008 < 1 ? text==="" ? 0+` Seconds Read` : text.split(" ").length*0.48+` Seconds Read`: text.split(" ").length*0.008+` Minutes Read`}</p>
            </div>
            <div className={`alert bg-${props.mode==='light'?'success-subtle':'success'} shadow p-3 mb-5  rounded text-${props.mode==='light'?'black':'white'}`} role="alert" align="left">
                <h5>Preview</h5>
                <hr className="border-black border-2"/>
                <p>{text===""?"Type or copy text above to preview.":text}</p>
            </div>
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