import React from 'react'
import './Flipcards.css'
import { Button, Card, Carousel } from 'react-bootstrap'

function Flipcards() {
    const item1=[{image1:"https://rukminim2.flixcart.com/image/200/200/kw9krrk0/dslr-camera/1/h/j/-original-imag8z5weagzztda.jpeg?q=70",discr1:"Camera",from:"From 169"},
             {image1:"https://rukminim2.flixcart.com/image/200/200/l4pxk7k0/usb-gadget/g/8/v/dlk5526cg-11-philips-original-imagfjxzfsgu7nvu.jpeg?q=70",discr1:"USB Gadgets",from:"Frome 179"},
             {image1:"https://rukminim2.flixcart.com/image/200/200/xif0q/printer/f/w/j/-original-imagtzvzjwffhzes.jpeg?q=70",discr1:"Printers",from:"From 3999"},
             {image1:"https://rukminim2.flixcart.com/image/200/200/xif0q/projector/m/m/m/-original-imagu892v92agucu.jpeg?q=70",discr1:"projectors",from:"9999"},
             {image1:"https://rukminim2.flixcart.com/image/200/200/xif0q/power-bank/d/a/f/-original-imagky3e8yp5ebvr.jpeg?q=70",discr1:"Powerbanks",from:"1299"},
             {image1:"https://rukminim2.flixcart.com/image/200/200/kpsnzww0/external-hard-drive/ssd/t/9/7/portable-ssd-sdssde30-1t00-g25-sandisk-original-imag3xx564jxpgrb.jpeg?q=70",discr1:"Sandisk",from:"From 699"},
             {image1:"https://rukminim2.flixcart.com/image/200/200/pendrive/utility-pendrive/y/3/f/sandisk-blade64-original-imadz5em37gghfkd.jpeg?q=70",discr1:"Pendrive",from:"From 899"}]
    
    
    const item2=[{image2:"https://rukminim2.flixcart.com/image/200/200/l111lzk0/cycle/m/r/e/xc-900-grey-lite-26-15-5-cradiac-21-gear-120-original-imagczuzpxeweczm.jpeg?q=70",discr2:"Geared cycle",shop:"up to 70% off"},
                {image2:"https://rukminim2.flixcart.com/image/200/200/l58iaa80/electric-cycle/i/y/f/-original-imagfykthgudy4qz.jpeg?q=70",discr2:"Electric cycle",shop:"up to 40% off"},
                {image2:"https://rukminim2.flixcart.com/image/200/200/k0plpjk0/remote-control-toy/9/g/k/4-function-remote-control-high-speed-big-racing-car-toy-funkey-original-imafkg33umd8dy93.jpeg?q=70",discr2:"Remote control toys",shop:"up to 80% off"},
                {image2:"https://rukminim2.flixcart.com/image/200/200/jk1grrk0/car-pressure-washer/j/c/m/06008a7af0-bosch-original-imaf7hd6bv8g3m6r.jpeg?q=70",discr2:"Car pressure washer",shop:"up to 65% off"},
                {image2:"https://rukminim2.flixcart.com/image/200/200/kdbzqfk0/bar/8/h/q/push-up-bar-0-8-long-ankaro-original-imafu9dmvdk3rzvy.jpeg?q=70",discr2:"Gym essentials",shop:"From 139"},
                {image2:"https://rukminim2.flixcart.com/image/200/200/l51d30w0/shopsy-sport-mat/p/w/s/anadi-01-yoga-mat-4-30-anadi-enterprise-15-original-imagfsxudxcm7r48.jpeg?q=70",discr2:"Yoga mat",shop:"from 159"},
                {image2:"https://rukminim2.flixcart.com/image/200/200/acoustic-guitar/e/y/y/dd-380c-blk-jixing-original-imaeff94e9tczafp.jpeg?q=70",discr2:"String instruments",shop:"up to 70% off"}]


    const item3=[{image3:"https://rukminim2.flixcart.com/image/200/200/kz5vwy80/helmet/o/4/k/-original-imagb8azfdthjhqr.jpeg?q=70",discr3:"Rider helmet",shop2:"From 699"},
                 {image3:"https://rukminim2.flixcart.com/image/200/200/k6fd47k0/nut-dry-fruit/p/z/7/200-100-natural-california-pouch-happilo-original-imafzvw2tcazeur6.jpeg?q=70",discr3:"Dry fruits",shop2:"up to 70% offer"},
                 {image3:"https://rukminim2.flixcart.com/image/200/200/xif0q/musical-toy/b/v/u/kids-37-key-piano-keyboard-with-recording-mic-mobile-charger-original-imagh4hcfz3ghdbd.jpeg?q=70",discr3:"Musical keybords",shop2:"up to 75% off"},
                 {image3:"https://rukminim2.flixcart.com/image/200/200/klzhq4w0/jam-spread/w/q/u/510-chocolate-peanut-butter-crunchy-510g-jar-nut-butter-original-imagyzpqqfaguxny.jpeg?q=70",discr3:"Food spread",shop2:"up to 70% off"},
                 {image3:"https://rukminim2.flixcart.com/image/200/200/ks6ef0w0/cereal-flake/q/w/h/1-oats-veggies-masala-oats-pouch-yogabar-original-imag5suhzvwy3xh4.jpeg?q=70",discr3:"Breakfast Cereal",shop2:"up to 80% off"},
                 {image3:"https://rukminim2.flixcart.com/image/200/200/krgohow0/learning-toy/1/a/h/mapology-ultimate-indian-combo-india-with-capitals-map-puzzle-original-imag59f2vyh63v9x.jpeg?q=70",discr3:"Learning and educational games",shop2:"up to 80% off"},
                 {image3:"https://rukminim2.flixcart.com/image/200/200/ki4w0i80-0/book/x/v/z/malgudi-days-original-imafyy3gpcytcewp.jpeg?q=70",discr3:"Fiction books",shop2:"up to 70% off"},
                 {image3:"https://rukminim2.flixcart.com/image/200/200/kcjexe80/honey/w/y/4/1-honey-saffola-original-imaftn9ppz2shxzg.jpeg?q=70",discr3:"Honey",shop2:"up to 65% off"}]


    const item4=[{image4:"https://rukminim2.flixcart.com/image/200/200/power-hand-tool-kit/v/v/g/gsb-500-re-kit-bosch-original-imaeg63dbybtqzfy.jpeg?q=70",discr4:"Power and hand toolkit",shop3:"From 399"},
                 {image4:"https://rukminim2.flixcart.com/image/200/200/k5e7o280/wall-clock/6/h/j/designer-wall-clock10-cw-ct-red25412-analog-ajanta-original-imafzyx3fdtf2hcb.jpeg?q=70",discr4:"Clocks",shop3:"up to 70% off"},
                 {image4:"https://rukminim2.flixcart.com/image/200/200/kirr24w0-0/wall-decoration/f/z/b/rafuf-wooden-intersecting-wall-shelves-set-of-8-black-white-8-original-imafyhg9dzdvyhnz.jpeg?q=70",discr4:"Wall decor items",shop3:"up to 70% off"},
                 {image4:"https://rukminim2.flixcart.com/image/200/200/kura1e80/pooja-thali-set/d/h/2/yes-kk-pooja-thli-sml-gold-kridaykraft-original-imag7t6v2qjjtbpw.jpeg?q=70",discr4:"Spiritual items",shop3:"up to 80% off"},
                 {image4:"https://rukminim2.flixcart.com/image/200/200/j5bceq80/diya/s/t/g/etl2042-etrendz-original-imaecayyx9nedubp.jpeg?q=70",discr4:"Diyas Candles and holders",shop3:"up to 70% off"},
                 {image4:"https://rukminim2.flixcart.com/image/200/200/ks4yz680/sticker/d/g/t/wall-stickers-wallpaper-home-decoration-whale-and-shaded-frames-original-imag5rvjdvrjdzgc.jpeg?q=70",discr4:"Stickers and wall papers",shop3:"up to 80% off"},
                 {image4:"https://rukminim2.flixcart.com/image/200/200/k0e66q80/plant-sapling/c/e/7/air-purifying-pothos-money-plant-with-imported-pot-1-water-original-imafk747aczgq6ze.jpeg?q=70",discr4:"Live plants",shop3:"From 159"},
                 {image4:"https://rukminim2.flixcart.com/image/200/200/kz065jk0/emergency-light/v/t/4/high-quality-60-high-bright-led-light-with-android-charging-original-imagb3v8h8zdm3q3.jpeg?q=70",discr4:"Emergency light",shop3:"up to 70% off"}]  
    
                 
   
  return (
    <div>
      <div className='container'>
        <h3 className='text'>Best of electronics</h3>
          <div className='items' style={{display:"flex"}}>
            {item1.map((display)=>
              <Card style={{ width: '28rem' }}>
                <div className='flipcardimg'>
                  <Card.Img src={display.image1} style={{height:"90px", width:"120px", margin:"50px"}}/>
                </div>
                <Card.Body >
                  <Card.Text style={{textAlign:"center"}}>
                    {display.discr1}
                  </Card.Text>
                    <Button variant="primary" style={{marginLeft:"40px"}}>{display.from}</Button>
                </Card.Body>
              </Card>
            )}
          </div>
     </div>
     <div className='container'>
      <h3 className='text'>Beauty,Food,Toys and more</h3>
        <div className='items' style={{display:"flex"}}>
          {item2.map((display)=>
            <Card style={{ width: '28rem' }}>
              <div className='flipcardimg'>
                <Card.Img src={display.image2} style={{height:"90px", width:"120px", margin:"50px"}}/>
              </div>
              <Card.Body >
                <Card.Text style={{textAlign:"center"}}>
                  {display.discr2}
                </Card.Text>
                  <Button variant="primary" style={{marginLeft:"40px"}}>{display.shop}</Button>
              </Card.Body>
            </Card>
          )}
        </div>
     </div>
     <div className='container'>
      <h3 className='text'>Sports,health care and more</h3>
        <div className='items' style={{display:"flex"}}>
          {item3.map((display)=>
            <Card style={{ width: '28rem' }}>
              <div className='flipcardimg'>
                <Card.Img src={display.image3} style={{height:"90px", width:"120px", margin:"50px"}}/>
              </div>
                <Card.Body >
                  <Card.Text style={{textAlign:"center"}}>
                    {display.discr3}
                  </Card.Text>
                    <Button variant="primary" style={{marginLeft:"40px"}}>{display.shop2}</Button>
                </Card.Body>
            </Card>
          )}
      </div>
     </div>
     <div className='container'>
      <h3 className='text'>Home & kitchen essentials</h3>
        <div className='items' style={{display:"flex"}}>
          {item4.map((display)=>
            <Card style={{ width: '28rem' }}>
              <div className='flipcardimg'>
                <Card.Img src={display.image4} style={{height:"90px", width:"120px", margin:"50px"}}/>
              </div>
                <Card.Body >
                <Card.Text style={{textAlign:"center"}}>
                  {display.discr4}
                </Card.Text>
                  <Button variant="primary" style={{marginLeft:"40px"}}>{display.shop3}</Button>
                </Card.Body>
            </Card>
        )}
      </div>
     </div>
    </div>
  )
}

export default Flipcards