import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!","success")
    }

    const handleDownClick = ()=>{
        // console.log("Lowercase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!","success")
    }

    // const useUndoRedo = ()=>{
    //     let newText = text.reverse();
    //     setText(newText);
    // }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!","success")
    }

    const handleClearClick = ()=>{
        // console.log("Lowercase was clicked"+ text);
        let newText = '';
        setText(newText)
        props.showAlert("Text cleared!","success")
    }

    // const handleLightTheme = () => {
    //     document.querySelector('body').style.backgroundColor = "white";
    //     document.querySelector('body').style.color = "black";
    // }
    // const handleDarkTheme = () => {
    //     document.querySelector('body').style.backgroundColor = "black";
    //     document.querySelector('body').style.color = "white";
    // }

    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }
    const [text, setText] = useState("");
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>Convert to lowercase</button>
        {/* <button className="btn btn-primary mx-1" onClick={useUndoRedo}>UNDO Text</button> */}
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        {/* <button className="btn btn-primary mx-1" onClick={useUndoRedo}>REDO Text</button> */}
        {/* <button className="btn btn-primary mx-1" onClick={handleLightTheme}>Light Theme</button>
        <button className="btn btn-primary mx-1" onClick={handleDarkTheme}>Dark Theme</button> */}
    </div>
    <div className="container my-3">
        <h2>Your Text summary</h2>
        {/* <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p> */}
        <p>{text.split().filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
        <p>Take {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0? text: "Nothing to preview!"}</p>
    </div>
    </>
  )
}
