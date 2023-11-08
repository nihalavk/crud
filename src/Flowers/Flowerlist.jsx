import React, { useContext } from 'react'
import { newcontextflower } from '../App'

function Flowerlist() {
    const [Flower,setFlower] = useContext(newcontextflower)

  return (

    <div style={{display:"flex",margin:"50px"}}>
        {Flower.map((list)=>
          <div style={{padding:"50px"}}>
            <img src={list.image} style={{height:"170px",width:"190px",borderRadius:"15px"}} />
            <h3 style={{textAlign:"center",margin:"10px",color:"gray"}}>{list.name}</h3>
            <h5 style={{textAlign:"center",margin:"10px",color:"gray"}}>{list.color}</h5>
          </div>
        )}
    </div>
  )
}

export default Flowerlist