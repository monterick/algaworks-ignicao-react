import React, { useState } from 'react';

import Header from '../Header';
import Button from '../../shared/Button/Button';
import Container from '../../shared/Container';


import './App.css';
import Input from '../../shared/Input';


function TestComponent(){
  return <img width="20" src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Phone_icon.png" alt="jjj" />
}

//import ClassComponent from '../ClassComponent';

function App() {

  const [street, setStreet] = useState('');

  return (
    <div className="App">
      <Header title='AlgaStock'/>
      <Container>
       <Button appendIcon={<TestComponent/>} onClick={()=>window.alert("Opaa")}>Clique-me</Button>
       <Input label="Street" placeholder='15 de piracicaba' value={street} 
       onChange={e => setStreet(e.target.value)}
       />
      </Container>
    </div>
  );
}

export default App;
