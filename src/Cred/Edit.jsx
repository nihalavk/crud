import React, { useContext, useEffect, useState } from 'react'
import { newEditContext, newlistcontext } from '../App';
import { useNavigate, useParams } from 'react-router-dom';
import './Create.css'
import { Button } from 'react-bootstrap';

function Edit() {
    const newd = useNavigate();
    const [List,setList] = useContext(newlistcontext);
    const {Userid} = useParams();
    // const Userid1 = parseInt(Userid);
    const data = List.find((item) => item.id === Userid);
    const [editIndex,setEditIndex] = useContext(newEditContext);
    const [add,setAdd] = useState({
        id:data.id,
        name:data.name,
        age:data.age,
        place:data.place,
        email:data.email
    });

    const changedetls = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAdd({...add,[name]:value})
    };
      
    const saveData = () => {

      const update=List.map((edit)=>
        edit.id==Userid?{...edit,...add}:edit
      )
      setList(update)
      newd(`/view/${Userid}`)
      // console.log(add)
      // const updatedList = [...List];
      // updatedList[editIndex] = add;
      // setList(updatedList);
      // alert('Are you sure?');
      // newd(`/view/${Userid}`);
    };

  return (
    <div>
        <div className = 'formitems'>
        <h3 className = 'formhead'>Edit Data</h3>
        <label className = 'textvalues'>ID</label>
        <input type = "number" value = {add.id} name = 'id' onChange = {changedetls} className = 'inputtypes'  style = {{marginLeft:"45px"}}/>
        <br />
        <label className = 'textvalues'>NAME:</label>
        <input type = "text" value = {add.name} name = 'name' onChange = {changedetls} className = 'inputtypes'  style = {{marginLeft:"20px"}}/>
        <br />
        <label className='textvalues'>AGE:</label>
        <input type = "number" value = {add.age} name = 'age' onChange = {changedetls} className = 'inputtypes'  style = {{marginLeft:"35px"}}/>
        <br />
        <label className = 'textvalues'>PLACE:</label>
        <input type="text" value = {add.place} name = "place" onChange = {changedetls} className = 'inputtypes'  style = {{marginLeft:"25px"}}/>
        <br />
        <label className='textvalues'>E-mail:</label>
        <input type = "email" value = {add.email} name = 'email' onChange = {changedetls} className = 'inputtypes'  style = {{marginLeft:"30px"}}/>
        <br />
        <Button variant = "primary" onClick = {saveData} style = {{marginLeft:"250px",marginTop:"30px"}}>Submit</Button>{' '}
        </div>
    </div>
  )
}

export default Edit