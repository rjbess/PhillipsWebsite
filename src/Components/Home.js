import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from "mdbreact";
import styled from 'styled-components';
import Photo from "../Assests/HomePhotos/frontColoured3.jpeg";
import Family from "../Assests/HomePhotos/family.jpg";
import OldBusiness from "../Assests/HomePhotos/oldBusiness.jpg";
import OldBusiness2 from "../Assests/HomePhotos/oldBusiness2.jpg";
import Peter from "../Assests/HomePhotos/peter.jpg";
import PhilipSign from "../Assests/HomePhotos/philipSign.jpg";
import './Home.css'

const Styled = styled.div`
  .col {
    display: flex;
    flex-direction: column;
    justify-items: center;
    justify-content: center;
    align-items: center;
    margin-bottom:10px;
  }
  .text{
    font-family:Times New Roman;
    margin-top:20px;
    margin-bottom:10px;
    text-align: justify;
  }
  @media (min-width: 100px){
    .text{
      font-size: 16px;
    }
  }
  @media (min-width: 992px){
    .text{
      font-size: 22px;
    }
  }
`

class Home extends React.Component{
    render(){
        return(
            <MDBContainer>
                <Styled>
                        <MDBRow>
                            <MDBCol className='col'>
                                <img src={Photo} className="img-fluid z-depth-2 rounded-circle"/>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol className='col'>
                                <div className="text" >
                                    Phil was born in Ingham Queensland in 1939; his parents immigrating to Australia from Giarre Sicily back in the early 1930’s.
                                </div>
                            </MDBCol>
                            <MDBCol>
                                <img src={Family} height={300}/>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol className='col'>
                                <img src={Peter} height={300}/>
                            </MDBCol>
                            <MDBCol className='col'>
                                <div className="text">
                                    Young Phil first started his shoe apprenticeship with his Uncle Peter.  Uncle Peter immigrated to Australia in the late 1940’s, as a trade qualified ‘new leather shoemaker & cobbler’. He learnt his trade from his father Giuseppe, the authentic Sicilian way. Once arriving to Ingham Queensland, Peter offered the small town his services, building a successful career. Phil then continued his craft with a locally owned business owner, Stan Oliver Shoe Repairs, located on Sturt Street, Townsville.
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol className='col'>
                                <div className="text">
                                    Around 1962, Phil began his own business: 24 Hour Boot & Shoe Repairs.  Phil worked from under his family home in Beatrice Street Aitkenvale for a few years, before moving into a business premises along the ‘Golden Mile’; or known today as, Ross River Road Aitkenvale.
                                </div>
                            </MDBCol>
                            <MDBCol className={'col'}>
                                <img src={OldBusiness} height={300}/>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol className='col'>
                                <div className="text">
                                    This shop—then owned by the Woolley sisters—is where Phil ran a successful shoe repair business for over 30 years.  It was simpler times back then, and Phil was able to achieve operating a small business without today’s luxuries of mobile phones, internet, email, or eftpos machines.  He serviced the entire Western, Northern and Far Northern Regions of Queensland, by delivering expert craftsmanship, offering affordable repairs, and good old fashion customer service.
                                </div>
                            </MDBCol>
                            <MDBCol className={'col'}>
                                <img src={OldBusiness2} height={300}/>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol className={'col'}>
                                <img src={PhilipSign} height={300}/>
                            </MDBCol>
                            <MDBCol className='col'>
                                <div className="text">
                                    Today Phil is retired, but still doing repairs for his community.  He is currently the long-time preferred repairer for Donohue’s Townsville.  Phil now offers his specialised services through this new online platform to anyone who seeks his craftsmanship.
                                </div>
                            </MDBCol>
                        </MDBRow>
                    {/*<MDBRow>
                            <MDBCol>
                               <MDBCarousel
                                   activeItem={1}
                                   length={5}
                                   showControls={true}
                                   showIndicators={true}
                                   className="z-depth-1"
                                   slide
                               >
                                   <MDBCarouselInner>
                                       <MDBCarouselItem itemId="1">
                                           <MDBView>
                                               <img
                                                   className=" d-block  img-fluid"
                                                   src={Family}
                                                   alt="First slide"
                                               />
                                           </MDBView>
                                       </MDBCarouselItem>
                                       <MDBCarouselItem itemId="2">
                                           <MDBView>
                                               <img
                                                   className="img-fluid"
                                                   src={OldBusiness}
                                                   alt="Second slide"
                                               />
                                           </MDBView>
                                       </MDBCarouselItem>
                                       <MDBCarouselItem itemId="3">
                                           <MDBView>
                                               <img
                                                   className="img-fluid"
                                                   src={OldBusiness2}
                                                   alt="Third slide"
                                               />
                                           </MDBView>
                                       </MDBCarouselItem>
                                       <MDBCarouselItem itemId="4">
                                           <MDBView>
                                               <img
                                                   className="img-fluid"
                                                   src={Peter}
                                                   alt="Fourth slide"
                                               />
                                           </MDBView>
                                       </MDBCarouselItem>
                                       <MDBCarouselItem itemId="5">
                                           <MDBView>
                                               <img
                                                   className="img-fluid"
                                                   src={PhilipSign}
                                                   alt="Fifth slide"
                                               />
                                           </MDBView>
                                       </MDBCarouselItem>
                                   </MDBCarouselInner>
                               </MDBCarousel>
                            </MDBCol>
                        </MDBRow>*/}
                </Styled>
            </MDBContainer>
        );
    }

}
export default Home;