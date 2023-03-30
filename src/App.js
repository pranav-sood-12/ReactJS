// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';


function App() {
  const [mode,setMode]=useState("light")
  const [text,setText]=useState("Enable Dark Mode")

  const toggleMode=()=>
  {
    if(mode==="light")
    {
      setMode("dark")
      setText("Disable Dark Mode")
      document.body.style.backgroundColor='#0a1948';
    }
    else
    {
      setMode("light")
      setText("Enable Dark Mode")
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    
    <Navbar title="TextFormater" about="About-Formater" mode={mode} text={text} toggleMode={toggleMode}/>
    <div class="container">
    <TextForm heading="Enter the text below" mode={mode}/>
    {/* <About class="my-3"/> */}

    </div>
    </>
  );
}

export default App;
