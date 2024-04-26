import React from 'react'
import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Navbarhappycake = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-info">
        <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Link className="text-black text-decoration-none m-2" to="/"><h5>🏡Home</h5></Link>
                <Link className="text-black text-decoration-none m-2" to="/contact"><h5>📓Contact</h5></Link>
              </Nav>
              <Nav>
                <Navbar.Brand className='text-black'><h3>Happy Cake 🍰</h3></Navbar.Brand>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    )
}

export default Navbarhappycake