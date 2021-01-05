import React, { Component } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import "./header.css"


class Header extends Component {

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="navbar" href="/">
            <img className="imgScr" src="https://downloader.disk.yandex.ru/preview/78ad0ccd1197e03a8a1ef471b649c9df0b1b145938aad1fef4cfb4b74b177c75/5feaff51/wd9C1VFgZfak2VJNY10jpILRG0temasEhU8YMm8z-p4vR-ndAiWQzi7N5IuWQ1ws83AGQ3AdT_Dz8ILnqcmYEw%3D%3D?uid=0&filename=%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%20%D0%AD%D1%80%D1%81%D1%82%D0%B5%20%D0%A8%D1%80%D0%B8%D1%82%D1%82%D0%B5.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048" alt=""/> 
            Erste Schritte</Navbar.Brand>
          <Nav className="ml-auto">
            <Link className="link" to="/home">Ferienjob</Link>
            <Link className="link" to="/ausbildung">Ausbildung</Link>
            <Link className="link" to="/praktikum">Praktikum</Link>
            <Link className="link" to="/au-pair">Au-pair</Link>
            <Link className="link" to="/FSJ">FSJ , FÖD</Link>
            <Link className="link" to="/medizin">medizin</Link>
            <Link className="link" to="/Landwirtschaft">Landwirtschaft</Link>
            
          </Nav>
        </Container>
      </Navbar>
    )
  }
}
export default Header;