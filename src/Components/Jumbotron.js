import React from'react';
import {Jumbotron as Jumbo} from 'react-bootstrap';
import styled from 'styled-components';
import bannerXXL from '../Assests/mainBannerXXL.jpg';
import bannerXL from '../Assests/mainBannerXL.jpg';
import bannerLG from '../Assests/mainBannerLG.jpg';
import bannerMD from '../Assests/mainBannerMD.jpg';
import bannerSM from '../Assests/mainBannerSM.jpg';

const Styles = styled.div`
  
  @media (min-width: 100px) {
    .jumbo {
      background: url(${bannerSM})no-repeat fixed center;
      background-size: cover;
      height:400px;
      position:relative;
    }
  }
  @media (min-width: 768px) {
    .jumbo {
      background: url(${bannerMD})no-repeat fixed center;
      background-size: cover;
      height:400px;
      position:relative;
    }
  }

  /* Medium devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    .jumbo{
      background: url(${bannerLG})no-repeat fixed center;
      background-size: cover;
      height:400px;
      position:relative;
    }
  }

  /* Large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    .jumbo{
      background: url(${bannerXL})no-repeat fixed center;
      background-size: cover;
      height:400px;
      position:relative;
    }
  }
  @media (min-width: 2000px) {
    .jumbo{
      background: url(${bannerXXL})no-repeat fixed center;
      background-size: cover;
      height:400px;
      position:relative;
    }
  }
 `;

class Jumbotron extends React.Component{

    render(){
        return(
            <Styles>
                <Jumbo className="jumbo">
                </Jumbo>
            </Styles>
        )
    }

}
export default Jumbotron;