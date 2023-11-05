import React, { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import { newcontextflower } from './App'

function Flowercard() {
    const [Flower,setFlower] = useContext(newcontextflower)
  return (
    <div>
        {Flower.map((card)=>
        <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={card.image}/>
      <Card.Body>
        <Card.Title>{card.name}</Card.Title>
        <Button variant="primary">{card.color}</Button>
      </Card.Body>
    </Card>
    )}
    </div>
  )
}

export default Flowercard