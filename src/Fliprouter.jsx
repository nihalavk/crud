import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Flipnav from './Flipkart/Flipnav'
import Flipcards from './Flipkart/Flipcards'
import Sellernav from './Flipkart/Sellernav'
import Sellerimage from './Flipkart/Sellerimage'
import Sellerstory from './Flipkart/Sellerstory'
import Fliplist from './Flipkart/Fliplist'
import Flipcarousel from './Flipkart/Flipcarousel'
import Flipfoot from './Flipkart/Flipfoot'
import Sellerfoot from './Flipkart/Sellerfoot'

function Fliprouter() {
  return (
    <div>
         <BrowserRouter>
        <Routes>
            <Route path='/'element={<><Flipnav/><Fliplist/><Flipcarousel/><Flipcards/><Flipfoot/></>}/>
            <Route path='/seller'element={<><Sellernav/><Sellerimage/> <Sellerstory/><Sellerfoot/></>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Fliprouter