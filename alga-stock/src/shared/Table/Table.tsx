import React from "react";
import './Table.scss'



declare interface TabHeaders{  
  key:string
  value:string
  right?:boolean
}

declare interface TableProps{
  headers:TabHeaders[]
  data:any[]
  enableActions?:boolean
  onDelete?: (item:any) => void 
  onDetail?: (item:any) => void
  onEdit?: (item:any) => void
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

const Table:React.FC<TableProps> = (props) =>{

  const [ organizedData, IndexedHeaders] = organizeData(props.data,props.headers)
console.table(organizedData)
    return(
        <table className="AppTable">
          <thead>
            <tr>
              {
                props.headers.map((header)=>{
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
                          <td
                          className={IndexedHeaders[item].right?'right':''}
                          >{row[item]}</td>
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