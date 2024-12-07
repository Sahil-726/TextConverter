 import {useState} from 'react';
// import PropTypes from 'prop-types';
export default function TextForm(props) {
    const [text,setText]=useState("");
    const[originalText,setOriginalText]=useState("");
    
    const handle=(event)=>{
        console.log("On change");
        setText(event.target.value);
        setOriginalText(event.target.value);
    }
    
    const remove=()=>{
        let newText= text.split(/\s+/);
        setText(newText.join(" "));
        props.mno("Extra space is removed", "danger")
    }
    const copy=()=>{
        navigator.clipboard.writeText(text);
        props.mno("Text is copied","danger");
    }
    const removeAll=()=>{
        setText("");
        props.mno("Blank space is created", "danger");
    }
   
    const change=()=>{
        console.log("UpperCase is  clicked");
         let newText=text.toUpperCase();
        setText(newText);
        props.mno("UpperCase of Text is done","danger");
        
    }
    const changeTo=()=>{
        console.log("lowercase is clicked");
        let newE=text.toLowerCase();
        setText(newE);
        props.mno("LowerCase of Text is done","danger");
    }
    const changeToStandard=()=>{
        setText(originalText);
        props.mno("Original Text is done", "danger");
    }
    
    return (
        <>
        <div className="form-floating " >
          <textarea className="form-control" style={{backgroundColor:props.rrst==="dark"? "#12243f":"white", color:props.rrst==="dark"?"white":"black"}} value={text} onChange={handle} id="box"></textarea>
          <label htmlFor="floatingTextarea " >{props.label}</label>
        </div>
        <button className="btn btn-primary my-1" onClick={change} >Convert To Uppercase</button>
        <button className="btn btn-success mx-4" onClick={changeTo}>Convert To Lowercase</button>
        <button className="btn btn-danger " onClick={changeToStandard}>Default Form</button>
        <button className="btn btn-warning mx-4" onClick={copy}>Copy Text</button>
        <button className="btn btn-info"onClick={remove}>Remove Extra Space</button>
        <button className="btn btn-secondary mx-4" onClick={removeAll}>Blank Space</button>
        <div className="container"  style={{color:props.rrst==="dark"?"white":"black"}}>
            <h2>Text Summary</h2>
            <p>Total {text.split(/\s+/).length  -1} words and {text.length} characters.</p>
        </div>
        </>
    );
}

