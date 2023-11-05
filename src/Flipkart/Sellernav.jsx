import React from 'react'
import './Sellernav.css'

function Sellernav() {
  return (
    <div>
        <div className='topnav'>
            <p>Existing Seller? Explore our product recommendations with Dhamaka Selection</p>
        </div>
        <header>
               
                <div className='sellitems' style={{display:"flex"}}>  
                <div className='sellogo'>
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/flipkart-095e08.svg" alt="seller hub" />
               </div>
                   <div className='innersell'><a href="sell online">Sell Online</a>
                    <ul>
                        <li><a href="create">Create Account</a></li>
                        <li><a href="products">List Products</a></li>
                        <li><a href="storage">Storage & Shipping</a></li>
                        <li><a href="payment">Receive Payment</a></li>
                        <li><a href="help">Help & Support</a></li>
                    </ul>
                    </div>
                    <div className='innersell'><a href="fees">Fees & Commisions</a>
                    <ul>
                        <li><a href="payment">Payment cycle</a></li>
                        <li><a href="fee">Fee Type</a></li>
                        <li><a href="gross margin">Calculate Gross Margin</a></li>
                    </ul>
                    </div>
                    <div className='innersell'><a href="grow">Grow</a>
                    <ul>
                        <li><a href="badge">FAssuared badge</a></li>
                        <li><a href="tools">Insights & Tools</a></li>
                        <li><a href="ads">Flipkart Ads</a></li>
                        <li><a href="shoping">Shopping Festivals</a></li>
                        <li><a href="service">Service Partners</a></li>
                    </ul>
                    </div>
                    <div className='innersell'><a href="lern">Lern</a>
                    <ul>
                        <li><a href="faq">FAQs</a></li>
                        <li><a href="story">Seller Succes Stories</a></li>
                        <li><a href="blog">Seller Blogs</a></li>
                    </ul>
                    </div>
                    <div className='innersell'><a href="shop">Shopsy</a></div>
                <div className='sellogin' style={{display:"flex"}}>
                    <div className='innersell'><a href="login">Login</a></div>
                    <button>Start Selling</button>
                </div>
                </div>
            
        </header>
    </div>
  )
}

export default Sellernav