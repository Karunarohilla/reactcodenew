import React, {useState} from "react";

export default function TextUtils(props){

    const [text, setText]=useState('Enter Text Here');

    const handleOnChange=(e)=>{
       setText(e.target.value) 
    }

    const hadleUpperCase=()=>{
        let newText=text.toUpperCase();
        setText(newText)
    }

    const handleLowerCase=()=>{
        let newText=text.toLowerCase();
        setText(newText)
    }

    return(
        <>
            <div className="container mt-4">
                <h2 style={{color: props.mode==='dark'?'white':'black'}}>TextUtils</h2>
                <textarea rows="10" cols="50" className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?'grey':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
                <button className="btn m-2" onClick={hadleUpperCase} style={{backgroundColor: props.mode==='dark'?'white':'black', color: props.mode==='dark'?'black':'white'}}>Convert to UpperCase</button>
                <button className="btn m-2" onClick={handleLowerCase} style={{backgroundColor: props.mode==='dark'?'white':'black', color: props.mode==='dark'?'black':'white'}}>Convert to LowerCase</button>

                <h2 style={{color: props.mode==='dark'?'white':'black'}}>Text Summary</h2>          
                <p style={{color: props.mode==='dark'?'white':'black'}}> You have entered {text.split(' ').length} and {text.length} letters.</p>
                <h3 style={{color: props.mode==='dark'?'white':'black'}}>Preview</h3>
                <p style={{color: props.mode==='dark'?'white':'black'}}>{text}</p>
            </div>

        </>
    );
}