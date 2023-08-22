import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Banner from './Banner';


function Navbars() {
    return (
        <div className='header_bg'>
            <Navbar expand="lg" className="bg justify-content-between container-fluid">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src='/assets/logo.png' className="d-inline-block align-top" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end align-items-center">
                        <Nav>
                            <Nav.Link href="#home" className='ms-4 nav_link_main'>Home</Nav.Link>
                            <Nav.Link href="#courses" className='ms-4 nav_link_main'>Courses</Nav.Link>
                            <Nav.Link href="#careers" className='ms-4 nav_link_main'>Careers</Nav.Link>
                            <Nav.Link href="#blog" className='ms-4 nav_link_main'>Blog</Nav.Link>
                            <Nav.Link href="#about" className='ms-4 nav_link_main'>About Us</Nav.Link>
                            <div>
                                <Button className="login_btn ms-5 " >Login</Button>
                                <Button className="sign_up">Sign Up</Button>
                            </div>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Banner/>
        </div>
    )
}

export default Navbars
