import React, { useContext, useState } from 'react'
import { newEditContext, newlistcontext } from '../App'
import { Button, Modal, Table } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { LuView } from 'react-icons/lu'
import { RiDeleteBin6Line } from 'react-icons/ri'

function Newtable() {
    const [List,setList] = useContext(newlistcontext)
    const newd = useNavigate()
    const newdata = () => {
    newd('/create')}

    const deleteRow = (e) => {
      const delId = e.target.value;
      let delIndex = null;
      // To loop through our list to find the index of the object with the id we clicked.
      List.forEach((row,index) => {
        if(row['id'] == delId){
        delIndex = index;
        }
      });
      // We remove the object from the ItemList
        List.splice(delIndex,1);
        alert("This will remove your data permenantly!");
        // We re-render table with the new list
        newd('/');
        }
  return (
    <div>
      <Table striped bordered hover style={{width:"1000px",margin:"60px",marginLeft:"100px"}}>
       <thead style = {{textAlign:"center"}}>
        <tr>
          <th style={{width:"250px"}}>ID</th>
          <th  style={{width:"250px"}}>Name</th>
          <th style={{width:"125px"}}>View</th>
          <th style={{width:"125px"}}>Delete</th>
        </tr>
      </thead>
      <tbody>
        {List.map((view)=>
        <tr key = {view.id}>
          <td>{view.id}</td>
          <td>{view.name}</td>
          <td><Link to={`/view/${view.id}`}><Button variant="outline-dark" value={view.id} style={{marginLeft:"55px"}} ><LuView/></Button></Link></td>
          <td><Button variant="outline-dark" value={view.id} onClick={deleteRow}style={{marginLeft:"55px"}}  ><RiDeleteBin6Line/></Button>{' '}</td>
        </tr>
        )}
        </tbody>
        </Table>
        <Button variant="secondary" size="lg" onClick={newdata} style={{marginLeft:"600px"}}>Create new</Button>
    </div>
  )
}

export default Newtable