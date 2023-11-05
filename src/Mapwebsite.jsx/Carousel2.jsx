import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Carousel2.css'

function Carousel2() {

const carousel2=[{name:"womens",text:"look elegent",image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flh3.googleusercontent.com%2F-w-vj8zhs9sk%2FWtsrbrEnwUI%2FAAAAAAAAdXU%2FBcxGl8WGWr04BgPpJzzrrjNnBveAWOOVQCHMYCw%2Fs0%2Fafrican-women-fashion-styles0951.jpg&f=1&nofb=1&ipt=438d28c9e88fe36f6a24b4e1eb67bd413bc9a8158c763974b2ef1419d0e17cd9&ipo=images"},
                 {name:"men",text:"style the way",image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%3Fid%3DOIP.rT_K08E37By85x1xfs3EIAHaIr%26pid%3DApi&f=1&ipt=4f8486bedb824a7e3732d19829e82e8a4ce017e3df78084a33b315fb55454081&ipo=images"},
                 {name:"kids",text:"butterflies",image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mahiber.com%2Fimages%2Fcom_hikashop%2Fupload%2Fvendor17%2Fkids_2.jpg&f=1&nofb=1&ipt=f1a07ec68f6fb14b21caaee66964888b2c3deefe7846b050c18e130f03dfb4e4&ipo=images"}]



  return (
    <div>
        <Carousel>
            {carousel2.map((items)=>
             <Carousel.Item>
            <div className='crsl2img'>
                 <img src={items.image}/>
            </div>
             <Carousel.Caption>
                  <h3 style={{color:"black"}}>{items.name}</h3>
                  <p style={{color:"black"}}>{items.text}</p>
             </Carousel.Caption>
             </Carousel.Item>
             )}
        </Carousel>
    </div>
  )
}

export default Carousel2