import React, { useState } from 'react'
import { LuHeading1 } from 'react-icons/lu'

function Ternary() {
    const [showText,setshowText]  = useState(false)
  return (
    <div>
        {showText ? <h1>this is the text to show</h1> : ""}
        <button onClick={()=>setshowText(!showText)}>{showText ?"hide" : "show"}</button>
    </div>
  )
}

export default Ternary