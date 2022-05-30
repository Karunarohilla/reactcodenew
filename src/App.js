// import Component from './Component';
import React, {useState} from 'react';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from './components/About';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {

  const [mode, setMode]=useState('light')

  const [alert, setAlert]=useState(null)

  
  
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey'
      setAlert('Indicates a successful or positive action.')
    }else{
      setMode('light')
      document.body.style.backgroundColor='white'
      setAlert('Indicates a Light or positive action.')
    }
  }

  return (
    <>
     {/* <Router> */}
      {/* <Component headname="code with harry ndv xm" /> */}
      <Navbar title="Navbar in React JS" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />     
          {/* <Routes> */}
            {/* <Route path='/' element={<About />} /> */}
            <About />
            {/* <Route path="/textutils" element={<TextForm heading="TextForm Utilities" mode={mode} />} /> */}
            {/* <TextForm heading="TextForm Utilities" mode={mode} /> */}
          {/* </Routes> */}
      {/* </Router>      */}
    </>
    
  );
}

export default App;
