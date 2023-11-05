import React from 'react'
import './Cards1.css'
import { Button, Card } from 'react-bootstrap'

function Cards1() {
  return (
    <div>
        <div className='box' style={{display:'flex'}}>
    <Card style={{ width: '18rem' }}>
      <img src="https://c.pxhere.com/photos/9b/2c/fashion_footwear_shoes-973087.jpg!d" height='150px' width='260px' />
      <Card.Body>
        <Card.Title>Footwear</Card.Title>
        <Card.Text>
          grab your shoes today with 50% off
        </Card.Text>
        <Button variant="primary">Shop now</Button>
      </Card.Body>
    </Card> 
    <Card style={{ width: '18rem' }}>
      <img src="https://thedydyshop.com/wp-content/uploads/2020/05/Fashion-Accessories-1024x538.jpg" height='150px' width='260px'  />
      <Card.Body>
        <Card.Title>Accessories</Card.Title>
        <Card.Text>
          Make different everything and feel different the way you  are!
        </Card.Text>
        <Button variant="primary">Shop now</Button>
      </Card.Body>
    </Card> 
    <Card style={{ width: '18rem' }}>
      <img src="https://bleuwire.com/wp-content/uploads/2019/03/laptop-accessories-1024x694.jpg" height='150px' width='260px' />
      <Card.Body>
        <Card.Title>Electronic accessories</Card.Title>
        <Card.Text>
          Get your new devices now with amazing prices!!! 
        </Card.Text>
        <Button variant="primary">Shop now</Button>
      </Card.Body>
    </Card> 
    <Card style={{ width: '18rem' }}>
      <img src="https://2.bp.blogspot.com/-IXgTr6Vx_Yc/UOwGJbFo3QI/AAAAAAAAAoo/XerpIjTkHq8/s1600/f2.jpg" height='150px' width='260px' />
      <Card.Body>
        <Card.Title>Ladies Sandals</Card.Title>
        <Card.Text>
          Get ready with our new fashion items now with 40% off
        </Card.Text>
        <Button variant="primary">Shop now</Button>
      </Card.Body>
    </Card> 
</div>
    </div>
  )
}

export default Cards1