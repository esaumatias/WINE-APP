import React from "react";
import {
  Container,
  Button,
  Navbar,
  Nav,
  Form,
  FormControl,
} from "react-bootstrap";

function Header() {
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
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Header;
