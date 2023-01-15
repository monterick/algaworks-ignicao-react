import React, { useState } from 'react';

import Header from '../Header';
import Container from '../../shared/Container';



import './App.css';
import Table from '../../shared/Table';
import Conteudo from '../../shared/Table/Table.mockdata'
import ProductsForm, { ProductCreator } from '../Products/ProductsForm';


//import ClassComponent from '../ClassComponent';

function App() {

  const {Products, Readers} = Conteudo

  console.log(Conteudo)

  const handleProductSubmit = (product: ProductCreator)=>{
    console.log(product)
  }

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

      <ProductsForm onSubmit={handleProductSubmit} />
     
      </Container>
    </div>
  );
}

export default App;
