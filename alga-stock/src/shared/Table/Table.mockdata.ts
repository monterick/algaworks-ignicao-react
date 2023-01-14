export interface Product{
    id:number
    nome:String
    preco:number
    estoque:number
}

const Products:Product[] = [
  {
    id:1,
    nome:"Banana",
    preco:4.5,
    estoque:70
  },
  {
    id:2,
    nome:"Mamao",
    preco:7,
    estoque:100
  },
  {
    id:3,
    nome:"maça",
    preco:3.99,
    estoque:70
  }

 ]

 export default Products