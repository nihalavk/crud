import React, { useState } from 'react'
 import { RxCross1 } from 'react-icons/rx'

function Ternarytask2() {
    const [showimage, setshowimage] = useState(false)
    const [showmark, setshowmark] = useState(false)
    const click=()=>{
        setshowimage(!showimage)  
        setshowmark(!showmark) 
    }
  return (
    <div>
        <button onClick={click}>buttonclick</button>
        <div style={{display:"flex"}}>
            {showimage ? <div><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.1XMLaDVNyfHhj4PYZIKK0gAAAA%26pid%3DApi&f=1&ipt=d54bfb7818dbfc24f85440619344de0596d22afce1a41a247a1e4aa9f786c146&ipo=images"/></div> :""}
            <showmark onClick={click}>{showmark ? <div><RxCross1/></div> :""}</showmark>
        </div>
    </div>
  )
}

export default Ternarytask2