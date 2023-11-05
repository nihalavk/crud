import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { newcontextflower } from './App'

function Flowerhome() {
    const [Flower,setFlower] = useContext(newcontextflower)
    
  return (
    <div>
        <ul>
            {Flower.map((home)=>
            <li><Link to={`/detailpage/${home.id}`}>{home.name}</Link></li>
            )}

        </ul>
    </div>
  )
}

export default Flowerhome