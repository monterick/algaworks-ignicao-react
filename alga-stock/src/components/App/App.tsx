import React, { useState } from 'react';

import Header from '../Header';
import Button from '../../shared/Button/Button';
import Container from '../../shared/Container';
import Form from '../../shared/Form';


import './App.css';
import Table from '../../shared/Table';
import Conteudo from '../../shared/Table/Table.mockdata'
import Input from '../../shared/Input';

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

       <Form title='Meu form' onSubmit={console.log}>
        <Input label="Nome" placeholder="nome teste"/>
        <Input label="Preço" placeholder="preço teste"/>
        <Input label="Estoque" placeholder="estoque teste"/>
        <Button>Submit</Button>
       </Form>
     
      </Container>
    </div>
  );
}

export default App;
