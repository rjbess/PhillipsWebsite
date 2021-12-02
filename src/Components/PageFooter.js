import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

class PageFooter extends React.Component{
    render(){
        return(
            <MDBFooter color="brown darken-4" className="font-large pt-4 mt-4">
                    <MDBContainer fluid >
                        <MDBRow center>
                            <MDBCol xs>
                                <ul className="list">
                                    <li className="list-unstyled">Contact Details</li>
                                    <li className="list-unstyled">(07) 4751 6629</li>
                                    <li className="list-unstyled">0488 152 294</li>
                                    <li className="list-unstyled">phillipsbootrepairs@gmail.com</li>
                                </ul>
                            </MDBCol>
                            <MDBCol xs>
                                <ul>
                                    <li className="list-unstyled">
                                        <a href="/">Home</a>
                                    </li>
                                    <li className="list-unstyled">
                                        <a href="/services">Services</a>
                                    </li>
                                    <li className="list-unstyled">
                                        <a href="/gallery">Gallery</a>
                                    </li>
                                    <li className="list-unstyled">
                                        <a href="/contactus">Contact Us</a>
                                    </li>
                                </ul>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <div className="footer-copyright text-center py-3">
                        <MDBContainer fluid>
                            <MDBRow center>
                                <MDBCol>
                                    &copy; {new Date().getFullYear()} Copyright: <a>Bessell Computering</a>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </div>
            </MDBFooter>
        )
    }
}
export default PageFooter;