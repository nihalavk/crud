import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Flipnav from './Flipnav'
import Flipcards from './Flipcards'
import Sellernav from './Sellernav'
import Sellerimage from './Sellerimage'
import Sellerstory from './Sellerstory'
import Fliplist from './Fliplist'
import Flipcarousel from './Flipcarousel'
import Flipfoot from './Flipfoot'
import Sellerfoot from './Sellerfoot'

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