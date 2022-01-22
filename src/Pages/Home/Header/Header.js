import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar bg="" style={{ backgroundColor: '#5b528b' }} variant="light" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">Daily Task</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} style={{ color: 'white' }} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} style={{ color: 'white' }} to="/addingTask">Add Task</Nav.Link>
                        <Nav.Link as={Link} style={{ color: 'white' }} to="/myTaskList">My Task list</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;