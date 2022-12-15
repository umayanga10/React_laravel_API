import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header() {
    let user = JSON.parse(localStorage.getItem('user-info'))
    const navigateTo = useNavigate();

    function logOut() {
       localStorage.clear();
       navigateTo('/register')
    }
   
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto navbar_warapper">
                <Link to="/add">Add Product</Link>
                <Link to="/update">Update Product</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </Nav>
            <Nav>
                <NavDropdown title={user && user.name}>
                    <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
    )
}

export default Header;