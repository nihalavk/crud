import React, { useState } from 'react'

function Ternarytask3() {

    const [show, setshow] = useState("")
    const [num,setnum]= useState(0)
    const click=(()=>{
        setshow(!show)
    })
    const incr=(()=>{
        setnum(num+1)
        if (num >= 10){
            alert("stop")}
    })
    
  return (
    <div>
        <button onClick={click}>{show?"hide":"show"}</button>
        {show?<><h1>numbers : {num}</h1><button onClick={incr}>increment</button></>:""}     
    </div>
  )
}

export default Ternarytask3