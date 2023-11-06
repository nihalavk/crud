import React, { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import { newcontextflower } from './App'
import { Link } from 'react-router-dom'

function Flowercard() {
    const [Flower,setFlower] = useContext(newcontextflower)

  return (

    <div style={{display:"flex"}}>
      {Flower.map((card)=>
        <Card style={{ width: '16rem',marginLeft:"60px"}}>
          <Card.Img variant="top" src={card.image}  style={{height:"210px",width:"255px",borderRadius:"9px"}}/>
          <Card.Body>
            <Card.Title style={{textAlign:"center",fontFamily:"cursive",fontWeight:"500px"}}>{card.name}</Card.Title>
            <Card.Text style={{textAlign:"center"}}>
              {card.short}
            </Card.Text>
            
            <Button variant="primary" style={{textAlign:"center",marginLeft:"40px"}}><Link to={`/detailpage/${card.id}`}>{card.name}</Link></Button>
            
          </Card.Body>
        </Card>
    )}
    </div>
  )
}

export default Flowercard