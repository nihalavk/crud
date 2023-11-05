import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import './DummyApi3.css'

function DummyApi3() {
    const [first, setfirst] = useState([])
   
    useEffect(() => {
     axios.get('https://dummyjson.com/products').then((display)=>
     {
        setfirst(display.data.products)
        console.log(display)
     })
    }, [])
    

    
  return (
    <div>
       <div className='apistyle'>
    {first.map((display)=>
    <div className='apistyle1'>
        <Card style={{ width: '18rem' }}>
        <Card.Body style={{height:"550px"}}>
        <Card.Title>{display.title}</Card.Title>
        <Card.Img variant="top" src={display.images[0]} />

        <Card.Text>
          {display.description}
        </Card.Text>
        <Button variant="primary">{display.brand}</Button>
      </Card.Body>
      
    
    </Card>
    </div>


    )}
        
        </div>
      

    </div>
  )
}

export default DummyApi3