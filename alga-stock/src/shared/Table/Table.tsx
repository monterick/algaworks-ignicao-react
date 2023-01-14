import React from "react";
import './Table.scss'
import Products from './Table.mockdata'

const headers = [
  {key:'nome',value:'Nome'},
  {key:'preco',value:'Preço'},
  {key:'acoes',value:'Ações'},
  {key:'estoque',value:'Estoque',right:true}
]

declare interface TabHeaders{
  key:string
  value:string
  right?:boolean
}

type IndexedHeaders = {
  [key:string]:TabHeaders
}

type organizedItem = {
  [key:string]:any
}

function organizeData(data: any[], headers:TabHeaders[]){
  const IndexedHeaders:IndexedHeaders = {}
  
  headers.forEach((header)=>{
    IndexedHeaders[header.key] = { ...header }
  })
  //console.log(IndexedHeaders)

  const HeaderKeysInOrder = Object.keys(IndexedHeaders)

  //console.log(HeaderKeysInOrder)

  console.log(data)

  const organizedData = data.map((item)=>{
    const organizedItem:organizedItem = {}
    
    HeaderKeysInOrder.forEach(key=>{
      organizedItem[key] = item[key]
    })
    return organizedItem;
  })

  console.table(organizedData)

}

const Table = () =>{

  organizeData(Products,headers)

    return(
        <table className="AppTable">
          <thead>
            <tr>
              {
                headers.map((header)=>{
                  return(
                    <th>{header.value}</th>
                  )
                })
              }
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>dd</td>
            </tr>
          </tbody>
        </table>
    )
}

export default Table