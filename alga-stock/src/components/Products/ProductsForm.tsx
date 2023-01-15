import React, { useState }  from "react";
import Button from "../../shared/Button/Button";
import Form from "../../shared/Form";
import Input from "../../shared/Input";
import { Product } from "../../shared/Table/Table.mockdata";

declare interface InitialFormState {
  id?: number
  nome: string
  preco: string
  estoque: string
}


export interface ProductCreator{
  nome:string,
  preco:number
  estoque:number
}

declare interface ProductFormProps{ 
  form?: Product 
  onSubmit:(product:ProductCreator)=>void
  onUpdate?: (product: Product) => void
}

const ProductsForm:React.FC<ProductFormProps> = (props) => {

  const initialFormState:InitialFormState = props.form? {
    id:props.form.id,
    nome:props.form.nome,
    preco:String(props.form.preco),
    estoque:String(props.form.estoque),
  }
  :
  {
    
    nome:'',
    preco:'',
    estoque:'',
  }

  const [form, setForm] = useState(initialFormState)

  const inputChancheHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    
    setForm({
      ...form,
      [name]:value
    })

  }


  const updateProduct = (product: InitialFormState) => {
    const productDto = {
      id: Number(product.id),
      nome: String(product.nome),
      preco: parseFloat(product.preco),
      estoque: Number(product.estoque)
    }

    props.onUpdate &&
      props.onUpdate(productDto)
  }

  const createProduct = (product: InitialFormState) => {
    const productDto = {
      nome: String(product.nome),
      preco: parseFloat(product.preco),
      estoque: Number(product.estoque)
    }

    props.onSubmit &&
      props.onSubmit(productDto)
  }

  
  const handleFormSubmit = () => {
    form.id
    ? updateProduct(form)
    : createProduct(form)
  
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