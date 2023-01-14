import React from "react";
import './Table.scss'

const Table = () =>{
    return(
        <table className="AppTable">
          <thead>
            <th>Produto</th>
            <th>Preço</th>
            <th className="right">Estoque</th>
          </thead>
          <tbody>
            <tr>
                <td>Maca</td>
                <td>5.51</td>
                <td className="right">45</td>
            </tr>
            <tr>
                <td>Banana</td>
                <td>3.4</td>
                <td className="right">100</td>
            </tr>
            <tr>
                <td>Melao</td>
                <td>5.52</td>
                <td className="right">80</td>
            </tr>
          </tbody>
        </table>
    )
}

export default Table