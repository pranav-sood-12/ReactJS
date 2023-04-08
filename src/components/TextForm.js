
import React, {useState} from 'react'

export default function TextForm(props) {
    const handelUpClick=()=> {
        console.log("upperCase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPERCASE","success");
    }
    const handelOnchange=(event)=> {
        console.log("change occured");
        setText(event.target.value);
    }

    const [text,setText]=useState("");
    const [myStyle,setMyStyle]=useState({backgroundColor:'#182a45',color:'white'});

    

  return (
    <div >
        <div className="mb-3">
        <label for="myBox" className="form-label" style={{color: props.mode==='dark'?'white':'black'}}>{props.heading} </label>
        <textarea className="form-control" value={text} onChange={handelOnchange} style={{backgroundColor : props.mode==='dark'?'grey':'white' ,color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>

        <button id="panda" className='btn' onClick={handelUpClick} style={myStyle} >Convert to upperCase</button>
    </div>
  )
}
