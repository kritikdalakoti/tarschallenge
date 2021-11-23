import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
 export default function TopBar() {
  React.useEffect(() => {});
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Navbar.Brand href="/home">Gallery App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home" >
            Home
          </Nav.Link>
          <Nav.Link
            href="/imagesearch"
            
          >
            Search
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
