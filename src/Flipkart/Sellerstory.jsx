import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Sellerstory.css'

function Sellerstory() {
    const story=[{image:"https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/sellers/Raju_yellow.webp",name:"Raju Lunawath",text:"aghdnsvfnsdgfbcvsndfdshdgnfszfzgfnbsvghsfdbvdbsznvd"},
    {image:"https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/sellers/Dinesh_yellow.webp",name:"Dines kumar",text:"bjkerskjehrzywwegruiuihdbxxnv,xdkjgd"},
    {image:"https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/sellers/Vinay_Garg_yellow.webp",name:"Vinay Garg",text:"jhfkerjsgtkjrsehjgrfjszdghfkjewrkjsdfh"}]


  return (
    <div>
        <div className='stories'>
            <div><h1 className='storyhead'>Seller Success Stories</h1></div>
            <div className='stori1'>
                <Carousel>
                  {story.map((show)=>
                  <Carousel.Item>
                  <img src={show.image}className='storimg'/>
                    <Carousel.Caption>
                     <h3 style={{color:"black",textAlign:"left"}}>{show.name}</h3>
                     <p style={{color:"black",textAlign:"left"}}>{show.text}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                    )}
                  </Carousel>
              

            </div>
        </div>
    </div>
  )
}

export default Sellerstory