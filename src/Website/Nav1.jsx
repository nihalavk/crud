import React from 'react'
import { Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import './Nav1.css'
import { Link, useNavigate } from 'react-router-dom'

function Nav1() {

  // const history=useNavigate();
  // const sample=()=>{
  //   history('/abc');
  // }
  return (
    <div>
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Shop Here</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='menubar' href="#action1">Men</Nav.Link>
            <Nav.Link className='menubar' href="#action2">Women</Nav.Link>
            <NavDropdown title="Kids" style={{color:"red"}}>
              <NavDropdown.Item className='menubar' href="#action3">Boys</NavDropdown.Item>
              <NavDropdown.Item className='menubar' href="#action4">
                Girls
              </NavDropdown.Item > 
              <NavDropdown.Item className='menubar' href="#action5">
                New born
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='menubar' href="#action6">Materials</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control 
              type="search"
              placeholder="Search here..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Link to="/about">ABOUT</Link>
    {/* <button onClick={sample}>click</button> */}
    
    </div>
  )
}

export default Nav1