import React from "react";
import './Table.scss'
import mockdate from './Table.mockdata'
import { jsxAttribute } from "@babel/types";
const headers = [
    {key:'nome',value:'Nome'},
    {key:'preco',value:'Preco'},
    {key:'estoque', value:'Estoque'}
]

const Table = () =>{
    return(
        <table className="AppTable">
          <thead>
            <tr>
            {
               headers.map(header=> <th key={header.key}>{header.value}</th>)
            }
            </tr>
          </thead>
          <tbody>
            {
                mockdate.map((atrb)=><tr>
                    <td key={atrb.id}>{atrb.nome}</td>
                    <td>{atrb.preco}</td>
                    <td className="right">{atrb.estoque}</td>
                </tr>)
            }
          </tbody>
        </table>
    )
}

export default Table