export interface Product{
    id:number
    nome:string
    preco:number
    estoque:number
}

const Products:Product[] = [
   {
    id:1,
    nome:'Desentortador de vidro',
    preco:20,
    estoque:35
   },
   {
    id:2,
    nome:'Rolamento',
    preco:87,
    estoque:5
   },
   {
    id:3,
    nome:'Parafuso sext 3/4',
    preco:1.5,
    estoque:800
   }

]

export default Products