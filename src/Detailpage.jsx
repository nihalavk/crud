import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { newcontextflower } from './App'
import { Button, Card } from 'react-bootstrap'

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
{        
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.image} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">{data.color}</Button>
      </Card.Body>
    </Card> }
       
    </div>
  )
}

export default Detailpage