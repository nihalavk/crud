import React, { useState } from 'react'

function Ternarytask() {
    const [task, setTask] = useState(false)



  return (
    <div>
        {task? <h1>hello</h1>:""}
        <button onClick={()=>setTask(!task)}>click</button>



    </div>
  )
}

export default Ternarytask