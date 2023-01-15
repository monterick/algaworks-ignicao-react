import React, { useState } from 'react';

import Header from '../Header';
import Button from '../../shared/Button/Button';
import Container from '../../shared/Container';


import './App.css';
import Table from '../../shared/Table';
import Conteudo from '../../shared/Table/Table.mockdata'

//import ClassComponent from '../ClassComponent';

function App() {

  const {Products, Readers} = Conteudo

  console.log(Conteudo)

  const [street, setStreet] = useState('');
  const bbn = 1
  return (
    <div className="App">
      <Header title='AlgaStock'/>
      <Container>
 
        <Table 
        data={Products}
        headers={Readers}
        /> 
     
      </Container>
    </div>
  );
}

export default App;
