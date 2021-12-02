import React from 'react'
import { MDBCard, MDBCardBody, MDBContainer, MDBRow, MDBCol,  MDBCardImage, MDBCardTitle , MDBCardText  } from "mdbreact";
import styled from 'styled-components';
import Photo1 from "../Assests/ServicesPhotos/IMG_1132.jpg"
import Photo2 from "../Assests/ServicesPhotos/custom sandals.jpg"
import Photo3 from "../Assests/ServicesPhotos/photo5.jpg"
import Photo4 from "../Assests/ServicesPhotos/HandbagRepair.jpg"
import Photo5 from "../Assests/ServicesPhotos/leatherReapairTwo.jpg"

const Styled=styled.div`
  .col{
    margin-bottom: 1em;
  }
  .card{
    min-height: 545px;
    min-width: 200px;
  }
`

class Services extends React.Component{
    render(){
        return(
            <MDBContainer>
                <Styled>
                    <MDBRow center>
                        <MDBCol md='4' className={'col'}>
                            <MDBCard>
                                <MDBCardImage
                                    className='card-img-top'
                                    src={Photo1}
                                    alt='soleShoes'
                                />
                                <MDBCardBody cascade className='text-center'>
                                    <MDBCardTitle className='card-title'>
                                        <strong>Boots, Shoes and Stilettos</strong>
                                    </MDBCardTitle>
                                    <MDBCardText>
                                        Expert in all aspects of foot ware repair to to get you back in your favourite
                                        pair of shoes. Services included:
                                        <ul>
                                            <br></br>
                                            <li>Sole Replacement</li>
                                            <li>Heel Replacement</li>
                                            <li>Elastic Repair</li>
                                            <li>Toe Piece Replacement</li>
                                            <li>Zipper Repair</li>
                                            <li>Spoke Alterations</li>
                                            <li>Stretching and Resizing</li>
                                        </ul>
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol md='4' className={'col'}>
                            <MDBCard>
                                <MDBCardImage
                                    className='card-img-top'
                                    src={Photo4}
                                    alt='stitching'
                                />
                                <MDBCardBody cascade className='text-center'>
                                    <MDBCardTitle className='card-title'>
                                        <strong>Handbags and Wallets</strong>
                                    </MDBCardTitle>
                                    <MDBCardText>
                                        Specialising in the delicate repair of all handbags and wallets; material
                                        or leather. Services include:
                                        <ul>
                                            <br></br>
                                            <li>Lining Repair</li>
                                            <li>Stitching and Tears</li>
                                            <li>Rivets, Buckles + Studs Replacement</li>
                                            <li>Strap Replacement</li>
                                            <li>Zipper Repair</li>
                                            <li>Alterations</li>
                                        </ul>
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol md='4' className={'col'}>
                            <MDBCard>
                                <MDBCardImage
                                    className='card-img-top'
                                    src={Photo5}
                                    alt='man'
                                />
                                <MDBCardBody cascade className='text-center'>
                                    <MDBCardTitle className='card-title'>
                                        <strong>Leather</strong>
                                    </MDBCardTitle>
                                    <MDBCardText>
                                        Whether it be Leather Jackets, Chaps, Bags, Gloves, Pants or Vests.
                                        We offer a wide range of leather repair including:
                                        <ul>
                                            <br></br>
                                            <li>Leather Patching</li>
                                            <li>Lining Repair</li>
                                            <li>Zipper Replacements</li>
                                            <li>Stitching and Patching</li>
                                            <li>Size Alterations</li>
                                            <li>Motorbike Leathers</li>
                                            <li>Cowboy Chaps</li>
                                        </ul>
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow center>
                        <MDBCol md='4' className={'col'}>
                            <MDBCard>
                                <MDBCardImage
                                    className='card-img-top'
                                    src={Photo3}
                                    alt='man'
                                />
                                <MDBCardBody cascade className='text-center'>
                                    <MDBCardTitle className='card-title'>
                                        <strong>Canvas Material</strong>
                                    </MDBCardTitle>
                                    <MDBCardText>
                                        Not just limited to leather, we are able to repair a wide range
                                        of canvas material such as:
                                        <ul>
                                            <br></br>
                                            <li>Tarps</li>
                                            <li>Trampolines</li>
                                            <li>Car Covers</li>
                                            <li>Canvas Bags</li>
                                            <li>Golf Bags Bags</li>
                                        </ul>
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol md='4' className={'col'}>
                            <MDBCard>
                                <MDBCardImage
                                    className='card-img-top'
                                    src={Photo2}
                                    alt='customSandals'
                                />
                                <MDBCardBody cascade className='text-center'>
                                    <MDBCardTitle className='card-title'>
                                        <strong>Custom Sandals</strong>
                                    </MDBCardTitle>
                                    <MDBCardText>
                                        Expertly crafted handmade leather sandals to custom fit
                                        your feet. Made of high quality leather design for maximum comfort
                                        and extreme durability.

                                        <ul>
                                            <br></br>
                                            <li>Durable</li>
                                            <li>Comfortable</li>
                                            <li>Precise Fit</li>
                                        </ul>

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
export default Services;