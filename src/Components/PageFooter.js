import React from "react";
import Nav from 'react-bootstrap/Nav'
import {Col, Container,  Row} from "react-bootstrap";
import styled from 'styled-components';

const Styles = styled.div`
  .container{
    background-color: #452712;
    color:gold;
    padding-top: 0.5em;
    position: relative;
    max-width: 100%;
  }
  .link {
    color:gold;
    &:hover{
      color:goldenrod;
    }
    padding: 0px !important;
  }
  .list{
    list-style-type: none;
    padding: 5px !important;
    margin: 10px !important;
  }
`

class PageFooter extends React.Component{
    render(){
        return(
            <Styles>
                <Container className="container" fluid>
                    <Row className="justify-content-md-center">
                        <Col xs lg="2">
                            <ul className="list">
                                <li>123 Fake Street</li>
                                <li>Jensen QLD 4818</li>
                                <li>fakeemail@fake.com</li>
                                <li>07 1234 5678</li>
                            </ul>
                        </Col>
                        <Col xs lg="2">
                            <ul className="list">
                                <li>
                                    <Nav.Item>
                                        <Nav.Link href="/" className="link">Home</Nav.Link>
                                    </Nav.Item>
                                </li>
                                <li>
                                    <Nav.Item>
                                        <Nav.Link href="/services" className="link">Services</Nav.Link>
                                    </Nav.Item>
                                </li>
                                <li>
                                    <Nav.Item>
                                        <Nav.Link href="/gallery" className="link">Gallery</Nav.Link>
                                    </Nav.Item>
                                </li>
                                <li>
                                    <Nav.Item>
                                        <Nav.Link href="/contactus" className="link">Contact Us</Nav.Link>
                                    </Nav.Item>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Styles>
        )
    }
}
export default PageFooter;