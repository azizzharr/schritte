import React, { Component } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import "./header.css"


class Header extends Component {

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img className="imgScr" src="C:\Users\User\Desktop\Projects\erster\public\Логотип Эрсте Шритте.jpg" alt=""/> 
            Erste Schritte</Navbar.Brand>
          <Nav className="ml-auto">
            <Link className="link" to="/home">Ferienjob</Link>
            <Link className="link" to="/ausbildung">Ausbildung</Link>
            <Link className="link" to="/features">Features</Link>
            <Link className="link" to="/au-pair">Au-pair</Link>
            <Link className="link" to="/FSJ">FSJ , FÖD</Link>
            
          </Nav>
        </Container>
      </Navbar>
    )
  }
}
export default Header;