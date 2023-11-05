import React from 'react'
import { useNavigate } from 'react-router-dom'

function Usenav() {
    const nav=useNavigate()
    const func=()=>{
        nav(-1)
    }
  return (
    <div>
        <div>
            <h1 onClick={func}>about page</h1>
        </div>
    </div>
  )
}

export default Usenav