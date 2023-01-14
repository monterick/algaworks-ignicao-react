import React from "react";
//import './Table.scss'

//proxima aula scss

const Table = () =>{
    return(
        <table>
          <thead>
            <th>Produto</th>
            <th>Preço</th>
            <th>Estoque</th>
          </thead>
          <tbody>
            <tr>
                <td>Maca</td>
                <td>5.51</td>
                <td>45</td>
            </tr>
            <tr>
                <td>Banana</td>
                <td>3.4</td>
                <td>100</td>
            </tr>
            <tr>
                <td>Melao</td>
                <td>5.52</td>
                <td>80</td>
            </tr>
          </tbody>
        </table>
    )
}

export default Table