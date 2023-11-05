import React from 'react'
import './Sellerimage.css'

function Sellerimage() {
  const Seller=[{image:"https://static-assets-web.flixcart.com/fk-sp-static/images/crore_users_revamp.svg"},{text:"45 crore+ Flipkart customers"},
  {image:"https://static-assets-web.flixcart.com/fk-sp-static/images/wallet-icon.svg"},{text:"7* days secure & regular payments"},
  {image:"https://static-assets-web.flixcart.com/fk-sp-static/images/low-cost-icon.svg"},{text:"Low cost of doing business"},
  {image:"https://static-assets-web.flixcart.com/fk-sp-static/images/seller-support-icon.svg"},{text:"One click Seller Support"},
  {image:"https://static-assets-web.flixcart.com/fk-sp-static/images/shopping-bag-icon.svg"},{text:"Access to The Big Billion Days & more"},]
  return (
    <div>
        <div className='sellimage'>
            <img src="https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/banner/Desktop_sell.webp"/>
            <h1 className='selltext'>Sell Online With Flipkart</h1>
        </div>
        <div className='flipsell' style={{display:"flex"}}>
         {Seller.map((show)=>
         <>
           <div className='flipsell1' style={{display:""}}><img src={show.image} /></div>
           <div className='flipsell1'><h6 style={{textAlign:"center"}}>{show.text}</h6></div>
           </>
         )}
        </div>
    </div>
  )
}

export default Sellerimage