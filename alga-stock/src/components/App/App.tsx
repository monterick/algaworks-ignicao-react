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
  const bbn = 1
  return (
    <div className="App">
      <Header title='AlgaStock'/>
      <Container>
    <ul>
       {
        ['Banana','Maçã','Jaca'].map((name,index)=>{
          return(
            <li key={index}>{name}</li>
          )
        })
       }

       </ul>
       
      </Container>
    </div>
  );
}

export default App;
