import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const nav=useNavigate()

    const change=()=>{
        nav('/location')

    }
  return (
    <div>
        <h1>Home Page</h1>
        <button onClick={change}>click me</button>
    </div>
  )
}

export default Home