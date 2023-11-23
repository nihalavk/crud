import React, { useContext, useState } from 'react'
import { newlistcontext } from '../App';
import { useNavigate } from 'react-router-dom';
import './Create.css'
import { Button, Modal } from 'react-bootstrap';

function Create() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(saveData);
  const handleShow = () => setShow(true);

    const newd=useNavigate()
    const [List,setList] = useContext(newlistcontext)
    const [add,setAdd] = useState({
        id:"",
        name:"",
        age:"",
        place:"",
        email:""     
    })

      const changedetls=(e)=>{
        console.log(e.target.value);
        const name = e.target.name;
        const value = e.target.value;
        setAdd({...add,[name]:value})
    }

    const saveData=()=>{
      // console.log(add)
      if(add.name,add.age,add.id,add.place,add.email== ''){
        alert("Please enter valid details");
      } 
      else {
        setList([...List,add]);
        newd('/')
      }
    }

  return (
    <div>
        <div className='formitems'>
        <h3 className='formhead'>Enter your Details</h3>
        <label className='textvalues'>ID:</label>
        <input type="number" value={add.id} name='id' onChange={changedetls}  className='inputtypes' style={{marginLeft:"50px"} }/>
        <br />
        <label className='textvalues'>NAME:</label>
        <input type="text" value={add.name} name='name' onChange={changedetls} className='inputtypes' style={{marginLeft:"20px"}}/>
        <br />
        <label className='textvalues'>AGE:</label>
        <input type="number" value={add.age} name='age' onChange={changedetls} className='inputtypes' style={{marginLeft:"35px"}}/>
        <br />
        <label className='textvalues'>PLACE:</label>
        <input type="text" value={add.place} name="place" onChange={changedetls} className='inputtypes' style={{marginLeft:"25px"}}/>
        <br />
        <label className='textvalues'>E-mail:</label>
        <input type="email" value={add.email} name='email' onChange={changedetls}  className='inputtypes'style={{marginLeft:"30px"}}/>
        <br />
        <Button variant="primary" onClick={handleShow}  style={{marginLeft:"300px",marginTop:"30px"}}>SUBMIT</Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Body>Ready to submit?</Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>Yes</Button>
        </Modal.Footer>
        </Modal>
        </div>
    </div>
  )
}

export default Create