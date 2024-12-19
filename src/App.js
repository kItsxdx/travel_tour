import React from 'react'
import './App.css';

function App(){
  const WhatInput = (<input type="text"/>);
  const Wherebutton = (<button>ปุ่มกดโง่</button>);
  return(
    <dir classname = "App">
      <h1>TEST Working</h1>
      <p>{WhatInput}</p>
      <p>{Wherebutton}</p>
    </dir>
  ); 
}

export default App
