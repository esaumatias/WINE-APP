import React, { useState, useContext } from "react";
import AppContext from '../../Context/AppContext';
import searchIcon from '../../Image/searchIcon.png';
import userIcon from '../../Image/userIcon.png';
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  CloseButton,
  Badge
} from "react-bootstrap";
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const { sumBag } = useContext(AppContext);

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
            <div className="containerIconsNav">
              {showSearch ? (
                <Form className="d-flex searchForm">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onClose={() => setShowSearch(false)} dismissible
                  />
                  <CloseButton onClick={() => setShowSearch(false)}/>
                </Form>
              ) : <button className="conteinerIcon" onClick={() => setShowSearch(true)}><img src={searchIcon} alt="buttonSearch" /></button>}
              <div className="conteinerIcon"><img src={userIcon} alt="buttonSearch" className="userIcon"/></div>
              <Link to="shoppingCart">
                <div className="conteinerIcon bag">
                  <div  className="shoppingBagIcon"></div>
                  <Badge bg="light" className="sumBag">1</Badge>
                </div>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Header;
