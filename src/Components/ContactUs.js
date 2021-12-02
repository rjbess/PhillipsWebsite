import React from 'react'
import { MDBCard, MDBCardBody, MDBContainer, MDBRow, MDBCol, MDBCardTitle , MDBCardText  } from "mdbreact";
import styled from 'styled-components';

const Styled = styled.div`
  .text {
    font-family:Times New Roman;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    margin-bottom:20px;
  }
  @media (min-width: 100px){
    .text{
      font-size: 20px;
    }
  }
  @media (min-width: 992px){
    .text{
      font-size: 24px;
    }
  }
`

class ContactUs extends React.Component{
    render(){
        return(
            <MDBContainer>
                <Styled>
                    <MDBRow center>
                        <MDBCol md='4' className={'col'}>
                            <MDBCard>
                                <MDBCardBody cascade className='text-center'>
                                    <MDBCardTitle className='card-title'>
                                        <strong>How to Get a Hold</strong>
                                    </MDBCardTitle>
                                    <MDBCardText>
                                        Please be aware that Phillip is a retired man, repairing as a passion.
                                        As such he might not always be available to contact (He is probably out fishing).<br></br><br></br>
                                        Calls are the preferred communication method.
                                        Please call between 7:00am to 8:30am or 5:00pm to 7:00pm Monday to Friday.<br></br><br></br>
                                        If that isn't possible then please send us an email
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol md='4' className={'col'}>
                            <MDBCard>
                                <MDBCardBody cascade className='text-center'>
                                    <MDBCardTitle className='card-title'>
                                        <strong>Contact Details</strong>
                                    </MDBCardTitle>
                                    <MDBCardText>
                                        <ul>
                                            <li>Phone Number: (07) 4751 6629</li>
                                            <li>Mobile Number: 0483 153 294</li>
                                            <li>Email: phillipsbootrepairs@gmail.com</li>
                                        </ul>
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                            <br></br>
                            <MDBCard>
                                <MDBCardBody cascade className='text-center'>
                                    <MDBCardTitle className='card-title'>
                                        <strong>Pricing</strong>
                                    </MDBCardTitle>
                                    <MDBCardText>
                                        Prices will be determined upon reviewing the job in person.
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </Styled>
            </MDBContainer>
        );
    }

}
export default ContactUs;