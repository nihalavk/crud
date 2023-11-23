import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NewFlower() {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" style={{marginLeft:"550px",fontFamily:"sans-serif"}}>
                  <Nav.Link><Link to='/home' style={{textDecoration:"none",color:"black"}}>Home</Link></Nav.Link>
                  <Nav.Link><Link to='/list'  style={{textDecoration:"none",color:"black"}}>List</Link></Nav.Link>
                  <Nav.Link><Link to='/table'  style={{textDecoration:"none",color:"black"}}>Table</Link></Nav.Link>
                  <Nav.Link><Link to='/card'  style={{textDecoration:"none",color:"black"}}>Card</Link></Nav.Link>
                </Nav>
              </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  )
}

export default NewFlower