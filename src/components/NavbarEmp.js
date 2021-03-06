import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

const NavbarEmp = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand >Appeness</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/dashboard">Dashboard</Link>
            </NavItem>&nbsp; &nbsp; &nbsp;
            <NavItem>
              <Link to="/employee/list">EmployeeList</Link>
            </NavItem>
              </Nav>
              <Link to="/login">Login</Link>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarEmp;