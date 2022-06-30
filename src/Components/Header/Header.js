import React, { useState } from "react";
import searchIcon from '../../Image/searchIcon.png';
import userIcon from '../../Image/userIcon.png';
import shoppingBagIcon from '../../Image/shoppingBagIcon.png';
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  CloseButton
} from "react-bootstrap";

function Header() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src="https://d2duuy9yo5pldo.cloudfront.net/dashboard-resources/wine/e90faa36-9670-4bd4-a063-8818d3f9d20e.png"
              alt="logo"
              style={{ width: '120px'}}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#Clube">Clube</Nav.Link>
              <Nav.Link href="#Loja">Loja</Nav.Link>
              <Nav.Link href="#Produtores">Produtores</Nav.Link>
              <Nav.Link href="#Ofertas">Ofertas</Nav.Link>
              <Nav.Link href="#Eventos">Eventos</Nav.Link>
            </Nav>
            {showSearch ? (
              <Form className="d-flex">
              <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onClose={() => setShowSearch(false)} dismissible
                />
                <CloseButton onClick={() => setShowSearch(false)}/>
              </Form>
            ) : <button onClick={() => setShowSearch(true)}><img src={searchIcon} alt="buttonSearch" /></button>}
            <div><img src={userIcon} alt="buttonSearch" /></div>
            <div><img src={shoppingBagIcon} alt="buttonSearch" /></div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Header;
