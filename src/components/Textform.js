import React, { useState } from 'react'


const Textform = (props) => {
  const handleUpClick = () => {
    console.log("upperCase was clicked" + text);
    const newText = text.toUpperCase();
    setText(newText) ;
  }

  const handleLowClick = () => {
    console.log("Lower was clicked" + text);
    const newText = text.toLowerCase();
    setText(newText) ;
  }
  const handleClear = () => {
    console.log("Handle clear was clicked" + text);
    const newText = '';
    setText(newText) ;
  }

  const handleCopy = () => {
    const text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleSpaces = () => {
    const newText= text.split(/[ ]+/);
    setText(newText.join(" "));
  }


  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const[text, setText] = useState("");
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handleLowClick}>Convert to lowercase</button>
        <button className='btn btn-primary mx-1' onClick={handleClear}>Clear text</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy text</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleSpaces}>Handle extra spaces</button>


    </div>
    <div className='container my-2'>
        <h2>Your text summary</h2>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Something to preview"}</p>
    </div>
     </>
  )
}

export default Textform