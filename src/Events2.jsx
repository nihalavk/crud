import React, { useState } from 'react'

function Events2() {

    const [input,setinput] = useState({
        username:"",
        useremail:"",
        userage:""
    })
    const changefunc=(e)=>{
       const name=e.target.name;
       const value=e.target.value;
       setinput({...input,[name]:value})

    }
  return (
    <div>
      <label>Name:</label>
      <input type="text" value={input.username} name="username"onChange={changefunc}/>
      <br />
      <label>Email</label>
      <input type="email" value={input.useremail} name="useremail" onChange={changefunc} />
      <br />
      <label>Age</label>
      <input type="text" value={input.userage} name="userage" onChange={changefunc} />
      <br />

     <button onClick={(()=>alert(`name is ${input.username}\n email is ${input.useremail}\n age is ${input.userage}`))}>submit</button>


    </div>
  )
}

export default Events2