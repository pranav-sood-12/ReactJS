// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode,setMode]=useState("light")
  const [text,setText]=useState("Enable Dark Mode")
  const [alert,setAlert]=useState(null)

  const showAlert=(message,type)=>
  {
    setAlert({
      message:message,
      type:type
    })
    
    // auto dismissing the alert
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode=()=>
  {
    try{
      var panda = document.getElementById('panda');
     
      if(mode==="light")
      {
        setMode("dark")
        setText("Disable Dark Mode")
          panda.style.backgroundColor = '#ffffff';
          panda.style.color = '#000000';
        document.body.style.backgroundColor='#0a1948';
        showAlert("Dark mode has been enabled","success");
       }
       else
       {
         setMode("light")
         setText("Enable Dark Mode")
       document.body.style.backgroundColor='white';
         panda.style.backgroundColor = '#0a1948';
         panda.style.color = '#ffffff';
       showAlert("Light mode has been enabled","success");
       
     }
    }catch(e){
      if(mode==="light")
      {
        setMode("dark")
        setText("Disable Dark Mode")
        document.body.style.backgroundColor='#0a1948';
        showAlert("Dark mode has been enabled","success");
       }
       else
       {
         setMode("light")
         setText("Enable Dark Mode")
       document.body.style.backgroundColor='white';
       showAlert("Light mode has been enabled","success");
       console.log("alert");
    }
  }}
  return (
    <>
    <Router>
    <Navbar title="TextFormater" about="About-Formater" mode={mode} text={text} toggleMode={toggleMode} />
    {/* <Alerts alertText="This is alert" alert={alert} /> */}
    <div class="container">
    <Routes>
    <Route path="/about" element={<About />}>
    </Route>
    <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
    </Route>
    </Routes>
    </div>
    </Router>
    </>
  );
}



export default App;
