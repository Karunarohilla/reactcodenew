import React, { useState } from 'react';

export default function TextForm(props){
    const [text, setText]=useState('Enter Text here')

    const handleOnChange=(event)=>{
       setText(event.target.value)
    }

    const handleUpperCase=()=>{
        let newText=text.toUpperCase()
        setText(newText)
    }

    const handleLowerCase=()=>{
        let newText=text.toLowerCase()
        setText(newText)
    }

    return(
        <>
            <div className={`container ${props.mode}`} >
                <h3 className='my-4' style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h3>

                <textarea className='form-control' rows='6' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==="dark"?'white':'black'}}></textarea>
                <button className="btn my-3" onClick={handleUpperCase} style={{backgroundColor: props.mode==='dark'? 'white':'black', color: props.mode==='dark'?'black':'white'}}>Convert to UpperCase</button>
                <button className="btn m-3" onClick={handleLowerCase} style={{backgroundColor: props.mode==='dark'? 'white':'black', color: props.mode==='dark'?'black':'white'}}>Convert to LowerCase</button>
            

                <div className="container">
                    <h3 style={{color: props.mode=='dark'?'white':'black'}}>Text Summary</h3>
                    <p style={{color: props.mode=='dark'?'white':'black'}}>You have entered {text.split(" ").length} words, and {text.length} characters. </p>

                    <h4 style={{color: props.mode==='dark'?'white':'black'}}>Preview</h4>
                    <p style={{color: props.mode==='dark'?'white':'black'}}>{text}</p>
                </div>
            </div>
        </>
    );
}