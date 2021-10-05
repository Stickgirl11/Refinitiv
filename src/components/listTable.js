
import React from 'react'
import { Table } from 'reactstrap'


const ListTable=({list=[]})=>{
    return(
            <Table striped>
                <thead>
                    <tr>
                        <th key={1}>#</th>
                        <th key={2}>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((el,i)=>{
                        return (
                            <tr key={'tr'+i}>
                                <th scope="row" key={'th'+i}>
                                    {i+1}
                                </th>
                                <td key={'td'+i}>
                                    {el}
                                </td>
                            </tr>
                        )})
                    }
                </tbody>
            </Table>
    )

}

export default ListTable