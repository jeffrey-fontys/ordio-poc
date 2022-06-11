import { Container } from "react-bootstrap";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../Assets/logo.png";

const Logo = () => (
    <img src={logo} alt="logo" width="40px"></img>
)

const NavigationComponent = () => {

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/"><Logo /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationComponent;
