import React, { useContext } from 'react'
import { newcontextflower } from './App'

function Flowerlist() {
    const [Flower,setFlower] = useContext(newcontextflower)
  return (
    <div>
        {Flower.map((list)=>
        <>
        <h3>{list.name}</h3>
        <h5>{list.color}</h5>
        </>
        )}
    </div>
  )
}

export default Flowerlist