import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ApiAsync2() {
    const [data, setdata] = useState([])
    useEffect(() => {
      getdata();
    }, [])
    const getdata=async()=>
    {
        let value=await axios.get('https://dummyjson.com/products')
        console.log(value.data);
        setdata(value.data.products)
    }
    
  return (
    <div>
         {data.map((show)=>
            <>
            <h4>Brand:{show.brand}</h4>
            <h6>Category:{show.category}</h6>
            </>
        )}
    </div>
  )
}

export default ApiAsync2