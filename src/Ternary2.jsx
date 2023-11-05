import React, { useState } from 'react'
import './Ternary.css'
function Ternary2() {
    const [showText,setshowText] = useState(false)
    const [blackbackground, setblackbackground] = useState(false)

    const handletoggle=()=>{
        setshowText(!showText)
        setblackbackground(!blackbackground)
    }
  return (
    <div className={blackbackground ? "black-bg" : "white-bg"}>
        {showText ? <h1>darkmode</h1>: <h1>white mode</h1>}
        <button on onClick={handletoggle}>{showText?"whitemode":"darkmode"}</button>

    </div>
  )
}

export default Ternary2