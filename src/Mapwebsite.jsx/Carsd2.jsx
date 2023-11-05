import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './Card2.css'

function Carsd2() {

    const cards=[{name:"footwear",text:"grab the deal today",image:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages4.fanpop.com%2Fimage%2Fphotos%2F23500000%2Fawesome-womens-shoes-23559466-120-120.jpg&f=1&nofb=1&ipt=6be8ec3de2eb040d75b67cceaec4857cfc70d59590a5b5cd9e167d647ca7e3b2&ipo=images",submit:"search"},
                 {name:"cosmetics",text:"do your things",image:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F2016%2F06%2FMakeup-Kit-Products-PNG-Image-180x180.png&f=1&nofb=1&ipt=59ca64f8c8665c26f6328aca7d1a8b78c377eaf0b8bbbc69d5068b0df4b16501&ipo=images",submit:"search"},
                 {name:"accessories",text:"offer for minimum days",image:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.chinawholesalegift.com%2Fpic6%2F2014-1%2F20%2Flpic-power-banks-for-charging-mobile-phones-ipad-iphone-and-portable-gadgets-10405785595.jpg&f=1&nofb=1&ipt=c7b0e43d842eedc857b4271e03ec53ae02b7b1daa638db95f131ce532925032d&ipo=images",submit:"search"}]
  return (
    <div>
        <div className='carditems' style={{display:"flex"}}>
        {cards.map((crditm)=>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={crditm.image} />
        <Card.Body>
          <Card.Title>{crditm.name}</Card.Title>
          <Card.Text>
           {crditm.text}
          </Card.Text>
          <Button variant="primary">{crditm.submit}</Button>
        </Card.Body>
      </Card>
        )}
        </div>
    </div>
  )
}

export default Carsd2