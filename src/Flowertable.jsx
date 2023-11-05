import React, { useContext } from 'react'
import { Table } from 'react-bootstrap'
import { newcontextflower } from './App'

function Flowertable() {
    const [Flower,setFlower] = useContext(newcontextflower)
  return (
    <div>
         <Table striped bordered hover>
      <thead>
        <tr>
          
          <th>Name</th>
          <th>Color</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            {Flower.map((table)=>
          <>
          <td>{table.name}</td>
          <td>{table.color}</td>
          <td><img src={table.image}/></td>
          </>
          )}
        </tr>
        </tbody>
        </Table>
    </div>
  )
}

export default Flowertable