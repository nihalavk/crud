import React from 'react'
import { useNavigate } from 'react-router-dom'

function Profile() {
    const addre=useNavigate()
  return (
    <div>
        <h2 onClick={()=>addre('/address')}>profilepage</h2>
    </div>
  )
}

export default Profile