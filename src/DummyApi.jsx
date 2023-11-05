import React from 'react'
import axios, {} from 'axios'
function DummyApi() {

    axios.get('https://dummyjson.com/products').then((display)=>{
        console.log(display);
    })
  return (
    <div></div>
  )
}

export default DummyApi