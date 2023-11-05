import React from 'react'
import { useNavigate } from 'react-router-dom'

function Address() {
    const nav=useNavigate()
  return (
    <div><h1 onClick={()=>nav('/home')}>Address page</h1></div>
  )
}

export default Address