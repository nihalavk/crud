import React from 'react'
import './Fliplist.css'

function Fliplist() {
  return (
    <div>
        <div className='fliplist' style={{display:"flex"}}>
            <div className='flip1'>
                <img src="https://rukminim1.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100" />
                <div className='flipitem'>
                <a href='grocerry'>Grocerry</a>
                </div>
            </div>
            <div className='flip1'>
                <img src="https://rukminim1.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100" />
                <div className='flipitem'>
                <a href='mobiles'>Mobiles</a>
                </div>
            </div>
            <div className='flip1'>
                <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100" />
                <div className='flipitem'>
                <a href='fashion'>Fashion</a>
                </div>
                <div className='innerflip'>
                <ul>
                    <li><a href="men">Men</a></li>
                    <li><a href="women">Women</a></li>
                    <li><a href="kids">Kids</a></li>
                </ul>
                </div>
                
            </div>
            <div className='flip1'>
                <img src="https://rukminim1.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100" />
                <div className='flipitem'>
                <a href='electronics'>Electronics</a>
                </div>
                <div className='innerflip'>
                <ul>
                    <li><a href="audio">Audio</a></li>
                    <li><a href="vedio">Vedio</a></li>
                    <li><a href="game">Gaming</a></li>
                </ul>
                </div>
            </div>
            <div className='flip1'>
                <img src="https://rukminim1.flixcart.com/flap/64/64/image/ab7e2b022a4587dd.jpg?q=100" />
                <div className='flipitem'>
                <a href='home'>Home and furmiture</a>
                </div>
                <div className='innerflip'>
                <ul>
                    <li><a href="kitchen">Kitchen & dining</a></li>
                    <li><a href="bathrooom">Bathroom decor</a></li>
                    <li><a href="tools">Tools and utility</a></li>
                </ul>
                </div>
            </div>
            <div className='flip1'>
                <img src="https://rukminim1.flixcart.com/flap/64/64/image/0ff199d1bd27eb98.png?q=100" />
                <div className='flipitem'>
                <a href='appliances'>Appliances</a>
                </div>
            </div>
            <div className='flip1'>
                <img src="https://rukminim1.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100" />
                <div className='flipitem'>
                <a href='travel'>Travel</a>
                </div>
            </div>
            <div className='flip1'>
                <img src="https://rukminim1.flixcart.com/flap/64/64/image/dff3f7adcf3a90c6.png?q=100" />
                <div className='flipitem'>
                <a href='beauty'>Beauty,toys and more</a>
                </div>
                <div className='innerflip'>
                <ul>
                    <li><a href="beauty">beauty and personal</a></li>
                    <li><a href="toys">Toys and school supplyes</a></li>
                    <li><a href="book">books</a></li>
                </ul>
                </div>
            </div>
            <div className='flip1'>
                <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/05d708653beff580.png?q=100" />
                <div className='flipitem'>
                <a href='2wheeler'>Two wheeler</a>
                </div>
                <div className='innerflip'>
                <ul>
                    <li><a href="petrol">Petrol vehicle</a></li>
                    <li><a href="electric">Electric vehicle</a></li>
                </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Fliplist