import React, { useState } from "react";
import Button from "../../shared/Button/Button";
import Form from "../../shared/Form";
import Input from "../../shared/Input";

const ProductsForm = () => {

  const initialForm = {
    nome:'',
    preco:'',
    estoque:''
  }  

  const [form, setForm] = useState(initialForm)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    const { name, value } = event.target
 
    setForm(
        { ...form,
            [name]:value  }
    )
    
  }

  return(
    <Form onSubmit={()=>console.log(form)} title="Formulario">
        <Input name="nome" onChange={handleInputChange} label="Nome" placeholder="nome teste" required />
        <Input name="preco" onChange={handleInputChange} label="Preço" placeholder="preço teste" required />
        <Input name="estoque" onChange={handleInputChange} label="Estoque" placeholder="estoque teste" required />
        <Button>Submit</Button>
    </Form>
  )
}

export default ProductsForm

