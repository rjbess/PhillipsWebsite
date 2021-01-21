import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar{
    background-color: #452712;
    margin-bottom: 0px;
  }
  .navbar-brand,.navbar-nav .link {
    color:gold;
    &:hover{
      color:goldenrod;
    }
  }
  .navbar-toggle{
  border-color: gold !important;
  }  
`

class NavigationBar extends React.Component{
    render(){
        return(
            <Styles>
                <Navbar expand="md">
                    <Navbar.Brand href="/">NQ Leather <br/>& Shoe Repair</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Item>
                                <Nav.Link href="/" className="link">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/services" className="link">Services</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/gallery" className="link">Gallery</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/contactus" className="link">Contact Us</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Styles>
        )
    }

}
export default NavigationBar;