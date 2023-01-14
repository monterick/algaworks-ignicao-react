import React from 'react';

import Header from '../Header';
import Button from '../Button/Button';


import './App.css';

function TestComponent(){
  return <img width="20" src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Phone_icon.png" alt="jjj" />
}

//import ClassComponent from '../ClassComponent';

function App() {
  return (
    <div className="App">
      <Header title='AlgaStock'/>
      <div className='Container'>
       <Button appendIcon={<TestComponent/>} onClick={()=>window.alert("Opaa")}>Clique-me</Button>
      </div>
    </div>
  );
}

export default App;
