import React, { useState }  from "react";
import Button from "../../shared/Button/Button";
import Form from "../../shared/Form";
import Input from "../../shared/Input";


const initialFormState = {
  nome:'',
  preco:'',
  estoque:''
}



export interface ProductCreator{
  nome:string,
  preco:number
  estoque:number
}

declare interface ProductFormProps{
  onSubmit:(product:ProductCreator)=>void
}

const ProductsForm:React.FC<ProductFormProps> = (props) => {

  const [form, setForm] = useState(initialFormState)

  const inputChancheHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    
    setForm({
      ...form,
      [name]:value
    })

  }

  const handleFormSubmit = () => {
    const productDto = {
      nome: String(form.nome),
      preco: parseFloat(form.preco),
      estoque: Number(form.estoque)
    }
    props.onSubmit(productDto)
    setForm(initialFormState)
  }


  return(
    <Form 
    onSubmit={handleFormSubmit}
    title="Formulario"
    >
       <Input value={form.nome} name="nome" label="Nome" onChange={inputChancheHandler} placeholder="Nome" required />
       <Input value={form.preco} name="preco" label="Preço" onChange={inputChancheHandler} placeholder="Preço" required />
       <Input value={form.estoque} name="estoque" label="Estoque" onChange={inputChancheHandler} placeholder="Estoque" required />
       <Button>Enviar</Button>
    </Form>
  )

}

export default ProductsForm