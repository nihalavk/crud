import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { newcontextflower } from '../App'
import './Flowerhome.css'

function Flowerhome() {
    const [Flower,setFlower] = useContext(newcontextflower)
    
  return (
    <div>
      <div className='flowerhome'>
        {Flower.map((home)=>
          <div className='flowerhometags'>
            <ul>
              <li><Link to={`/detailpage/${home.id}`}>{home.name}</Link></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Flowerhome