import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Apibutton() {
    const [first, setfirst] = useState([])
    const click=()=>{
        axios.get('https://dummyjson.com/products').then((display)=>{
            setfirst(display.data.products)
        })

    }
  return (
    <>
  
  <button onClick={click}>click</button>
    <div>
        <table>
            <thead style={{border:"1px solid black"}}>
                <tr>
                    <th  style={{border:"1px solid black"}}>title</th>
                    <th  style={{border:"1px solid black"}}>Brand</th>
                    <th  style={{border:"1px solid black"}}>category</th>
                </tr>
            </thead>
            <tbody >
                {first.map((display)=>
                <tr style={{border:"1px solid black"}}>
                    <td  style={{border:"1px solid black"}}>{display.title}</td>
                    <td  style={{border:"1px solid black"}}>{display.brand}</td>
                    <td  style={{border:"1px solid black"}}>{display.category}</td>
                </tr>
                )}
            </tbody>
        </table>
        
    </div>
    </>
  )
}

export default Apibutton