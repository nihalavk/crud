import React, { useContext } from 'react'
import { Table } from 'react-bootstrap'
import { newcontextflower } from './App'

function Flowertable() {
    const [Flower,setFlower] = useContext(newcontextflower)

  return (

    <div>
      <Table striped bordered hover style={{width:"600px",marginLeft:"350px"}}>
        <thead style={{border:"1px solid gray"}}>
          <tr  style={{textAlign:"center"}}>          
            <th>Name</th>
            <th>Color</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody style={{border:"1px solid gray"}}>
          {Flower.map((table)=>
            <tr  style={{textAlign:"center"}}>
              <td>{table.name}</td>
              <td>{table.color}</td>
              <td><img src={table.image} style={{height:"100px",width:"120px",borderRadius:"15px"}}/></td>         
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default Flowertable