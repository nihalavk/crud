import axios from 'axios'
import React, { useState } from 'react'

function ApiAsync() {

    const [data, setdata] = useState([])
    const getdata=async()=>
    {
        let value=await axios.get('https://dummyjson.com/products')
        console.log(value.data);
        setdata(value.data.products)
    }
  return (
    <div>
        <button onClick={getdata}>click</button>
        {data.map((show)=>
            <>
            <h4>Brand:{show.brand}</h4>
            <h6>Category:{show.category}</h6>
            </>
        )}
    </div>
  )
}

export default ApiAsync