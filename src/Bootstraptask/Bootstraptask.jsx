import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'

function Bootstraptask() {
  return (
    <div>
      <div style={{backgroundColor:"skyblue",height:"800px"}} >
        <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home" style={{marginLeft:"100px",color:"white",fontFamily:"cursive"}}>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{marginLeft:"400px"}}>
            <Nav.Link href="#home" style={{color:"white"}}>Home</Nav.Link>
            <Nav.Link href="#link"  style={{color:"white"}}>Link</Nav.Link>
            <Nav.Link href="#link"  style={{color:"white"}}>Link</Nav.Link>
            <Nav.Link href="#link"  style={{color:"white"}}>Link</Nav.Link>
            <Nav.Link href="#link"  style={{color:"white"}}>Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
      <h1 style={{textAlign:"center",fontFamily:"fantasy",padding:"20px",paddingTop:"200px", color:"white"}}>Bootstrap 4 Navbar</h1>
      <p style={{textAlign:"center", paddingTop:"33px", color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, necessitatibus accusantium enim</p>
      <button style={{marginLeft:"600px",width:"100px",height:"30px", color:"white",backgroundColor:"yellow",border:"1px solid skyblue"}}>submit</button>
    </div>
    </div>
    </div>
  )
}

export default Bootstraptask