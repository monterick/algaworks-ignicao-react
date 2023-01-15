import React, { useState } from 'react';

import Header from '../Header';
import Container from '../../shared/Container';



import './App.css';
import Table from '../../shared/Table';
import Conteudo, { Product } from '../../shared/Table/Table.mockdata'
import ProductsForm, { ProductCreator } from '../Products/ProductsForm';


//import ClassComponent from '../ClassComponent';

function App() {



  const {Products, Readers} = Conteudo

  const [products, setProducts] = useState(Products)

  

  const handleProductSubmit = (product: ProductCreator)=>{

    setProducts([
      ...products,
      {
        id: Products.length + 1,
        ...product
      }
    ])
    console.log(products)
  }


  const handleProductUpdate = (newProduct: Product) => {
    setProducts(products.map(product =>
      product.id === newProduct.id
        ? newProduct
        : product
    ))
  }

  return (
    <div className="App">
      <Header title='AlgaStock'/>
      <Container>
      

        <Table 
        data={products}
        headers={Readers}
        /> 

      <ProductsForm onSubmit={handleProductSubmit} onUpdate={handleProductUpdate} form={products[2]} />
     
      </Container>
    </div>
  );
}

export default App;
