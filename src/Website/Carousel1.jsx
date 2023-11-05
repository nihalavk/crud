import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Carousel1.css'

function Carousel1() {
  return (
    <div>
         <Carousel fade>
      <Carousel.Item >
        <div className='image'>
        < img src="https://cdn.shopify.com/s/files/1/0752/5289/products/1652_720x@2x.jpg?v=1568898760"  height='500px' width='35%' />
        </div>
        <Carousel.Caption > 
          <h3 className='caption'>Shop your favorite here</h3>
          <p  className='cntnt'>huge collection of women's party wear,and casual wear</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
      <div className='image'>
        <img src="https://www.stylesgap.com/wp-content/uploads/2015/06/Latest-Men-Party-Wear-Formal-Dresses-Collection-2015-2016-2.jpg" height='500px' width='35%'  />
        </div>
        <Carousel.Caption >
          <h3 className='caption'> get ready with us!!!</h3>
          <p  className='cntnt'>Master piece collections of men for all occations</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
      <div className='image'>
      <img src="https://image.rakuten.co.jp/windyshop/cabinet/dress/img63191165.jpg" height='500px' width='35%' />
      </div>
        <Carousel.Caption >
          <h3 className='caption'>Your kids looks better with us</h3>
          <p  className='cntnt'>
            Grand collection of all type dresses...get ready your kids with us!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Carousel1