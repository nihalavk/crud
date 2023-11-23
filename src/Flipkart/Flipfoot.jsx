import React from 'react'
import './Flipfoot.css'
function Flipfoot() {
  return (
    <div>
      <div className='footer'  style={{display:"flex"}}>
        <div className='footer1'>
          <ul>
            <li><a href="About">About</a></li>
            <li><a href="Contact">Contact us</a></li>
            <li><a href="contact1">About us</a></li>
            <li><a href="career">Career</a></li>
            <li><a href="flipkart">Flipkart Sales</a></li>
            <li><a href="cleartip">Cleartips</a></li>
          </ul>
        </div>
        <div className='footer1'>
          <ul>
            <li><a href="help">Help</a></li>
            <li><a href="payment">Payment</a></li>
            <li><a href="shipping">Shipping</a></li>
            <li><a href="faq">FAX</a></li>
            <li><a href="report">Reportinfringment</a></li>
          </ul>
        </div>
        <div className='footer1'>
          <ul>
            <li><a href="consumer">Consumer Policy</a></li>
            <li><a href="cancel">Cancellation & returns</a></li>
            <li><a href="security">Security</a></li>
            <li><a href="site">Sitemap</a></li>
          </ul>
        </div>
        <div className='footer1'>
          <ul>
            <li><a href="social">Social</a></li>
            <li><a href="facebook">facebook</a></li>
            <li><a href="twitter">Twitter</a></li>
            <li><a href="youtube">Youtube</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Flipfoot