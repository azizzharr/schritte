import React, { Component } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import "./header.css"
import ersteschritte from "../pictures/ersteschritte.jpg"


class Header extends Component {

  render() {
    return (
      <Navbar className="head" bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand className="navbar" href="/">
            <img className="imgScr" src={ersteschritte} alt=""/> 
            Erste Schritte</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="link" to="/home">Ferienjob</Link>
            <Link className="link" to="/ausbildung">Ausbildung</Link>
            <Link className="link" to="/praktikum">Praktikum</Link>
            <Link className="link" to="/au-pair">Au-pair</Link>
            <Link className="link" to="/FSJ">FSJ , FÖD</Link>
            <Link className="link" to="/medizin">medizin</Link>
            <Link className="link" to="/Landwirtschaft">Landwirtschaft</Link>
            
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}
export default Header;