import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleClear = ()=>{
        setText('');
        props.showAlert("Text cleared", "success");
    }

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const handleCopy = ()=>{
        var text = document.getElementById('myText');
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard", "success");
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces", "success");
    }

    // text = "new text"; wrong way to change the state
    // setText('new text'); correct way to change the state
    return (
        <>
            <div className='container mt-5'>
                <div className="mb-3">
                    <h1>{props.textHeading}</h1>
                    <textarea className="form-control" id="myText" rows="10" value={text} onChange={handleOnChange} placeholder='Enter text here...' style={{backgroundColor: props.mode === 'light'?'white':'gray', color: props.mode === 'light'?'black':'white'}}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-secondary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-danger mx-1" onClick={handleClear}>Clear Text</button>
                <button className="btn btn-warning mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-info mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
            </div>
            <div className="container my-5">
                <h1>Your text summary:</h1>
                <p>{text.split(" ").length - 1} words and {text.length} characters.</p>
                <p>{0.008 * (text.split(" ").length - 1)} Minutes read.</p>
                <h2 className='mt-5'>Preview:</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
