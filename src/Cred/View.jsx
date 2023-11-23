import React, { useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { newEditContext, newlistcontext } from '../App'
import './Create.css'
import { Button } from 'react-bootstrap';
import { CiEdit } from 'react-icons/ci';


function View() {

    const [List,setList] = useContext(newlistcontext);
    const [editIndex,setEditIndex] = useContext(newEditContext);
    const {Userid}=useParams();
    // const Userid1=parseInt(Userid);
    const data=List.find((item)=>item.id===Userid);
    const newd=useNavigate();
    const edit=(e)=>{
      List.forEach((row,index) => {
       if(row['id'] == e.target.value){
        setEditIndex(index);
       }
      });
      newd('/edit');
    }
  return (
    <div>
      <div className='formitems'>
      <h3 className='formhead'>Details of Candidates</h3>
      <div style={{display:"flex"}}>
        <div className='formid'>
          <ul>
            <li>ID</li>
            <li>Name</li>
            <li>Age</li>
            <li>Place</li>
            <li>Email</li>
          </ul>
        </div>
        <div className='formid1'>
          <ul>
            <li>{data.id}</li>
            <li>{data.name}</li>
            <li>{data.age}</li>
            <li>{data.place}</li>
            <li>{data.email}</li>
          </ul>
        </div>
        </div>
        <div><Link to={`/edit/${data.id}`}><Button variant="primary" style={{marginLeft:"350px",marginTop:"30px"}}><CiEdit/></Button></Link></div>
      </div>
    </div>
  );
}

export default View