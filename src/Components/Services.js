import React from 'react'
import { MDBCard, MDBCardBody, MDBContainer, MDBRow, MDBCol,  MDBCardImage, MDBCardTitle , MDBCardText  } from "mdbreact";
import styled from 'styled-components';
import Photo1 from "../Assests/ServicesPhotos/soleRepair.jpg"
import Photo2 from "../Assests/ServicesPhotos/custom sandals.jpg"
import Photo3 from "../Assests/ServicesPhotos/stitching & Patching.png"
import Photo5 from "../Assests/ServicesPhotos/photo5.jpg"
import Photo6 from "../Assests/ServicesPhotos/photo6.jpg"
import Photo8 from "../Assests/ServicesPhotos/photo8.jpg"
import Photo9 from "../Assests/ServicesPhotos/photo9.jpg"

const Styled=styled.div`
  .col{
    margin-bottom: 1em;
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
                                    <strong>Sole Replacement</strong>
                                </MDBCardTitle>
                                <MDBCardText>
                                    Sed ut hjgjhkgjkhjkhujk
                                    khghjgbhjbjkjhhkl
                                    ijhijiuyhuihuiohuih
                                    jhbhujbhjbhbhubhub
                                    jihbhjbhjbhjbhjbjhk
                                    jhvbhgjgbvhjgbhjbhjb
                                    hjguhguyghuyhgyuhguyh
                                    jhkiuihiuhiuhiou
                                    jhguhguhgbuyhgyuighyu
                                    jhvbuhgvyuggftyftyufgiuy
                                    hgivyguigyutgyugyuigyu
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
                                    Sed ut hjgjhkgjkhjkhujk
                                    khghjgbhjbjkjhhkl
                                    ijhijiuyhuihuiohuih
                                    jhbhujbhjbhbhubhub
                                    jihbhjbhjbhjbhjbjhk
                                    jhvbhgjgbvhjgbhjbhjb
                                    hjguhguyghuyhgyuhguyh
                                    jhkiuihiuhiuhiou
                                    jhguhguhgbuyhgyuighyu
                                    jhvbuhgvyuggftyftyufgiuy
                                    hgivyguigyutgyugyuigyu

                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md='4' className={'col'}>
                        <MDBCard>
                            <MDBCardImage
                                className='card-img-top'
                                src={Photo3}
                                alt='stitching'
                            />

                            <MDBCardBody cascade className='text-center'>
                                <MDBCardTitle className='card-title'>
                                    <strong>Stitching & Patching</strong>
                                </MDBCardTitle>
                                 <MDBCardText>
                                    Sed ut perspiciatis unde omnis iste natus sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam.{' '}
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                <MDBRow center>
                    <MDBCol md='4'className={'col'}>
                        <MDBCard>
                            <MDBCardImage
                                className='card-img-top'
                                src='https://mdbcdn.b-cdn.net/img/Photos/Others/men.jpg'
                                alt='man'
                            />

                            <MDBCardBody cascade className='text-center'>
                                <MDBCardTitle className='card-title'>
                                    <strong>Lining Repair</strong>
                                </MDBCardTitle>
                                <MDBCardText>
                                    Sed ut perspiciatis unde omnis iste natus sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam.{' '}
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md='4' className={'col'}>
                        <MDBCard>
                            <MDBCardImage
                                className='card-img-top'
                                src='https://mdbcdn.b-cdn.net/img/Photos/Others/men.jpg'
                                alt='man'
                            />

                            <MDBCardBody cascade className='text-center'>
                                <MDBCardTitle className='card-title'>
                                    <strong>Belts & Buckles</strong>
                                </MDBCardTitle>
                                <MDBCardText>
                                    Sed ut perspiciatis unde omnis iste natus sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam.{' '}
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md='4' className={'col'}>
                        <MDBCard>
                            <MDBCardImage
                                className='card-img-top'
                                src='https://mdbcdn.b-cdn.net/img/Photos/Others/men.jpg'
                                alt='man'
                            />

                            <MDBCardBody cascade className='text-center'>
                                <MDBCardTitle className='card-title'>
                                    <strong>Heel Replacement</strong>
                                </MDBCardTitle>
                                <MDBCardText>
                                    Sed ut perspiciatis unde omnis iste natus sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam.{' '}
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md='4' className={'col'}>
                        <MDBCard>
                            <MDBCardImage
                                className='card-img-top'
                                src='https://mdbcdn.b-cdn.net/img/Photos/Others/men.jpg'
                                alt='man'
                            />

                            <MDBCardBody cascade className='text-center'>
                                <MDBCardTitle className='card-title'>
                                    <strong>Bag Repair</strong>
                                </MDBCardTitle>
                                <MDBCardText>
                                    Sed ut perspiciatis unde omnis iste natus sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam.{' '}
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md='4' className={'col'}>
                        <MDBCard>
                            <MDBCardImage
                                className='card-img-top'
                                src='https://mdbcdn.b-cdn.net/img/Photos/Others/men.jpg'
                                alt='man'
                            />

                            <MDBCardBody cascade className='text-center'>
                                <MDBCardTitle className='card-title'>
                                    <strong>Zipper Repair</strong>
                                </MDBCardTitle>
                                <MDBCardText>
                                    Sed ut perspiciatis unde omnis iste natus sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam.{' '}
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md='4' className={'col'}>
                        <MDBCard>
                            <MDBCardImage
                                className='card-img-top'
                                src='https://mdbcdn.b-cdn.net/img/Photos/Others/men.jpg'
                                alt='man'
                            />

                            <MDBCardBody cascade className='text-center'>
                                <MDBCardTitle className='card-title'>
                                    <strong>Chap Repair</strong>
                                </MDBCardTitle>
                                <MDBCardText>
                                    Sed ut perspiciatis unde omnis iste natus sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam.{' '}
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