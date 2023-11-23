import React, { useState } from 'react'

function Events() {

    const [input, setinput] = useState("")
    const [email,setemail] = useState("")
    const [age,setage] = useState("")

    const changefunc=((e)=>{
        setinput(e.target.value)
        console.log(e);
    })

    const changemail=((e)=>{
          setemail(e.target.value)
          console.log(e);
    })

    const changeage=((e)=>{
          setage(e.target.value)
          console.log(e);
    })

    const submitfunc=(()=>{
          document.getElementById("display").innerHTML=`Name:${input} email:${email} age:${age}`
    })


  return (
    
    <div id='display'>
        <label>Name:</label>
        <input type="text" value={input} onChange={changefunc} />
        <br></br>
        <br></br>
        <label>Email:</label>
        <input type="email" value={email} onChange={changemail} />
        <br></br>
        <br></br>
        <label> Age:</label>
        <input type="text" value={age} onChange={changeage}/>
        <br></br>
        <br></br>
        {/* <button onClick={(()=>alert(`name is ${input}\n email is ${email}\n age is ${age}`))}>submit</button> */}
        <button onClick={submitfunc}>submit</button>
    </div>
  )
}

export default Events