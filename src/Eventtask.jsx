import React, { useState } from 'react'

function Eventtask() {
    const [input,setinput] = useState("")

    const changefunc=((e)=>{
        setinput(e.target.value)
    })

    const submitfunc=(()=>{
        document.getElementById("show").innerHTML=`content:${input}`
    })

    const clearfunc=(()=>{
        setinput("")
    })
    const length=input.length
    const word=input.split(" ").length
  return (
    <div  id='show'>
        <label>Type here</label>
        <input type="text area" value={input} onChange={changefunc}  style={{margin:"10px",width:"500px",height:"100px"}}/>
        <br />
        <button onClick={submitfunc} style={{margin:"10px"}}>show</button>
        <button onClick={clearfunc} style={{marginLeft:"20px",margin:"10px"}}>clear</button>
        <div >
        <h4>number of letters:{length}</h4>
        <h4>number of words:{word}</h4>
        </div>
    </div>
  )
}

export default Eventtask