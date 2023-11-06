import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { newcontextflower } from './App'
import { Button, Card } from 'react-bootstrap'
import './Detailpage.css'

function Detailpage() {
    const [Flower,setFlower] = useContext(newcontextflower)
// console.log(Flower);
    const {Userid} = useParams()
    // console.log(Userid);
    const Userid1=parseInt(Userid)
     const data=Flower.find(item=>item.id===Userid1)
    //  console.log(data);

  return (
    <div>
      <div className='flowertag'>
        <div className='flowertag1'>
          <img src={data.image} style={{height:"150px",width:"150px",borderRadius:"150px"}} />
        </div>
        <div className='flowertag2'>
           <h2>{data.name}</h2>
           <p>{data.text}</p>
        </div>
      </div>
       
    </div>
  )
}

export default Detailpage