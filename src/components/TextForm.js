
import React, {useState} from 'react'

export default function TextForm(props) {
    const handelUpClick=()=> {
        console.log("upperCase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handelOnchange=(event)=> {
        console.log("change occured");
        setText(event.target.value);
    }

    const [text,setText]=useState("");

  return (
    <div >
        <div class="mb-3"  style={{color: props.mode==='dark'?'white':'black'}}>
        <label for="myBox" class="form-label">{props.heading}</label>
        <textarea className="form-control" value={text} onChange={handelOnchange} style={{backgroundColor : props.mode==='dark'?'grey':'white' ,color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>

        <button className='btn btn-primary' onClick={handelUpClick}>Convert to upperCase</button>
    </div>
  )
}
