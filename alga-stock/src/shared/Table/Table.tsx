import React from "react";
import './Table.scss'
import Products from './Table.mockdata'

const headers:TabHeaders[] = [
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

function organizeData(data: any[], headers:TabHeaders[])
:[organizedItem[], IndexedHeaders]
{
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

  //console.table(organizedData)

  return [ organizedData, IndexedHeaders]

}

const Table = () =>{

  const [ organizedData, IndexedHeaders] = organizeData(Products,headers)
console.table(organizedData)
    return(
        <table className="AppTable">
          <thead>
            <tr>
              {
                headers.map((header)=>{
                  return(
                    <th
                    key={header.key}
                    className={header.right?'right':''}
                    >{header.value}</th>
                  )
                })
              }
            </tr>
          </thead>
          <tbody>            
              {
                organizedData.map((row,i)=>{
                  return(
                   <tr key={i}>
                    {
                      Object.keys(row)
                      .map(item=>{
                        return(
                          <td>{row[item]}</td>
                        )
                      })
                    }
                   </tr> 
                  )
                })
              }            
          </tbody>
        </table>
    )
}

export default Table