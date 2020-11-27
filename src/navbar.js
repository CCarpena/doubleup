import React from 'react';
import {withRouter} from 'react-router-dom';
import {Dropdown, Navbar, Nav, NavDropdown} from 'react-bootstrap';

function NavBar(props) {
    return (
     <div>
     <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary" expand="lg">
        <Navbar.Brand className="nv-brand" href="/">Double UPPP</Navbar.Brand>
        <NavDropdown.Divider />
        <Navbar.Toggle aria-controls="basic-navbar-nav navbar-right"/>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto nav-content-left">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/play">Play</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
     </div>
    );
}

export default withRouter(NavBar);