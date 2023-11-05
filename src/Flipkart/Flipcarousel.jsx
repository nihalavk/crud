import React from 'react'
import { Carousel } from 'react-bootstrap'

function Flipcarousel() {

    const slide=[{image:"https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/2dc3aafcc8afbaf8.jpg?q=20",name:"grab"},
    {image:"https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/dd7f425c6a2fa49a.jpg?q=20",name:"grab"},
    {image:"https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b91142ce378acb54.jpg?q=20",name:"grab"}]


  return (
    <div>
        <div className='flipcaro'>
              <Carousel>
              {slide.map((view)=>
              <Carousel.Item>
                <img src={view.image} />
              </Carousel.Item>
                )}
              </Carousel>
          
        </div>
    </div>
  )
}

export default Flipcarousel