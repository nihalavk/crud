import React from 'react'
import { useNavigate } from 'react-router-dom'

function Location() {
    const back=useNavigate()

  return (
    <div onClick={()=>back(-1)}>Location</div>
  )
}

export default Location