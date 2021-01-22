import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

class PageFooter extends React.Component{
    render(){
        return(
            <MDBFooter color="brown darken-4" className="font-large pt-4 mt-4">
                    <MDBContainer fluid >
                        <MDBRow center>
                            <MDBCol xs lg="2">
                                <ul className="list">
                                    <li className="list-unstyled">123 Fake Street</li>
                                    <li className="list-unstyled">Jensen QLD 4818</li>
                                    <li className="list-unstyled">fakeemail@fake.com</li>
                                    <li className="list-unstyled">07 1234 5678</li>
                                </ul>
                            </MDBCol>
                            <MDBCol xs lg="2">
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
                                        <a href="/contactus">Contact Uss</a>
                                    </li>
                                </ul>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <div className="footer-copyright text-center py-3">
                        <MDBContainer fluid>
                            &copy; {new Date().getFullYear()} Copyright: <a>Bessell Computering</a>
                        </MDBContainer>
                    </div>
            </MDBFooter>
        )
    }
}
export default PageFooter;