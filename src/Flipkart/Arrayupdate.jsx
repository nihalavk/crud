import React, { useState } from 'react'
import { ListGroup } from 'react-bootstrap'

function Arrayupdate() {
const [myArray,setmyArray ] = useState(['item1','item2','item3'])
const handclick=()=>{
    const updatedArray=[...myArray]
    updatedArray[1]='updated item'
    setmyArray(updatedArray);

}
  return (
    <div>
        <button onClick={handclick}>update item</button>
        <ul>
            {myArray.map((item)=>(
             <li>{item}</li>
            ))}
            
        </ul>
    </div>
  )
}

export default Arrayupdate