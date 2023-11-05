import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DummyApi2() {
    const [first, setfirst] = useState([])
    useEffect(() => {
     axios.get('https://dummyjson.com/products').then((display)=>
     {
        setfirst(display.data.products)
     })
    }, [])
    
  return (
    <div>
        {first.map((display)=>
        <>
        <h1>{display.brand}</h1>
        <h5>{display.category}</h5>
        </>)}
    </div>
  )
}

export default DummyApi2