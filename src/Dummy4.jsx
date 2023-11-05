import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Carousel } from 'react-bootstrap'
import './DummyApi3.css'
function Dummy4() {
    const [first, setfirst] = useState([])
    useEffect(() => {
      axios.get('https://dummyjson.com/products').then((display)=>
      {
        setfirst(display.data.products)
        console.log(display);
      })
    }, [])
    
  return (
    <div>
        <div className='apistyle'>
        {first.map((display)=>
            <div className='apistyle1'>
                <Card style={{ width: '18rem' }}>
                    <Carousel>
                        {first.map((display)=>
                            <Carousel.Item  className='apisyle2'>
                            <img src={display.images[0,1,2]} style={{height:"200px",width:"186000px"}}/>
                                <Carousel.Caption>
                                {/* <h3>First slide label</h3> */}
                                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                        )}
                    </Carousel>
                        {/* <Card.Img variant="top" src={display.images[0]} style={{height:"80px",width:"50px"}} /> */}
                        <Card.Body>
                            <Card.Title>{display.title}</Card.Title>
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

export default Dummy4