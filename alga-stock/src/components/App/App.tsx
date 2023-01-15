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

  const [products, setProducts] = useState(Products)

  console.log(products)

  const handleProductSubmit = (product: ProductCreator)=>{
    console.log(product)
    setProducts([
      ...products,
      {
        id: Products.length + 1,
        ...product
      }
    ])
    console.log(products)
  }

  const [street, setStreet] = useState('');
  const bbn = 1
  return (
    <div className="App">
      <Header title='AlgaStock'/>
      <Container>
      

        <Table 
        data={products}
        headers={Readers}
        /> 

      <ProductsForm onSubmit={handleProductSubmit} />
     
      </Container>
    </div>
  );
}

export default App;
