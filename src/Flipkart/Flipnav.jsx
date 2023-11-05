import React from 'react'
import { BsCart2, BsSearch }from 'react-icons/bs'
import './Flipnav.css'
import { CiBank } from 'react-icons/ci'
import{ GoPerson } from 'react-icons/go'
import { Link } from 'react-router-dom'
import Sellernav from './Sellernav'
import Sellerimage from './Sellerimage'
import Sellerstory from './Sellerstory'

function Flipnav() {
  return (
    <div>
        <header> 
          <div className='row' style={{display:"flex"}}>
            <div className='logo' style={{display:"flex"}}>
              <div className='logoimage'>
              <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/flipkart-095e08.svg" alt="Explore plus" />
              </div>
                <div className='search'>
                  <BsSearch className='searchbtn'/>
                  <input type="text" placeholder='search for products,brands and more' className='texthold'/>
                </div>
                <div className='tabs'>
                <CiBank className='icons'/>
                <Link to={"/seller"}>Become a Seller</Link>
                <GoPerson className='icons'/>
                 <a href="login">Login</a>
                 <BsCart2 className='icons'/>
                 <a href="cart">Cart</a>
                 </div>
                 </div>
                </div>
        </header>
    </div>
  )
}

export default Flipnav