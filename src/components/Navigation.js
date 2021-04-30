import React from "react";
import {Navbar,Nav} from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Navbar expand="lg" className="navigation">
        <Navbar.Brand className="brand"><Link to='/'>PAWSOME</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mr-2">
            <Nav.Link><Link to="/findmypet">Find My Pet</Link></Nav.Link>
            <Nav.Link><Link to="/adoption">Adoption</Link></Nav.Link>
            <Nav.Link><Link to="/explore">Explore</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
