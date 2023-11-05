import React, { useEffect, useState } from 'react'

function Useffect() {
    const [first, setfirst] = useState("hello")
    useEffect(() => {
        alert("hello welcome...")
     
    }, [first])
    
  return (
    <div>
        <button onClick={()=>setfirst("hope")}>change</button>
        <h1>{first}</h1>

    </div>
  )
}

export default Useffect