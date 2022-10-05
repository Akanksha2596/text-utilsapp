import React, { useState } from 'react'


const Textform = (props) => {
  const handleUpClick = () => {
    console.log("upperCase was clicked" + text);
    const newText = text.toUpperCase();
    setText(newText) ;
    props.showAlert("converted to UpperCase", "success");
  }

  const handleLowClick = () => {
    console.log("Lower was clicked" + text);
    const newText = text.toLowerCase();
    setText(newText) ;
    props.showAlert("converted to LowerCase", "success");

  }
  const handleClear = () => {
    console.log("Handle clear was clicked" + text);
    const newText = '';
    setText(newText) ;
    props.showAlert("Text cleared", "success");

  }

  const handleCopy = () => {
    const text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success");

  }

  const handleSpaces = () => {
    const newText= text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed", "success");

  }


  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const[text, setText] = useState("");
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark' ? 'white' :'#003153'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' :'white', color:props.mode === 'dark' ? 'white' :'#003153'}} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to uppercase</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleLowClick}>Convert to lowercase</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleClear}>Clear text</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy text</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleSpaces}>Handle extra spaces</button>
    </div>
    <div className='container my-2' style={{color: props.mode === 'dark' ? 'white' :'#003153'}}>
        <h2>Your text summary</h2>
        <p>{text.split(' ').filter((element) =>{return element.length !== 0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Something to preview"}</p>
    </div>
     </>
  )
}

export default Textform