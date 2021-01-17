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
      background: url(${bannerSM})no-repeat center center;
      -webkit-background-size: 100% 100%;
      -moz-background-size: 100% 100%;
      -o-background-size: 100% 100%;
      background-size: 100% 100%;
      min-height: 400px;
    }
  }
  @media (min-width: 768px) {
    .jumbo {
      background: url(${bannerMD})no-repeat center center;
      -webkit-background-size: 100% 100%;
      -moz-background-size: 100% 100%;
      -o-background-size: 100% 100%;
      background-size: 100% 100%;
      min-height: 400px;
    }
  }

  /* Medium devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    .jumbo{
      background: url(${bannerLG})no-repeat center center;
      -webkit-background-size: 100% 100%;
      -moz-background-size: 100% 100%;
      -o-background-size: 100% 100%;
      background-size: 100% 100%;
      min-height: 400px;
    }
  }

  /* Large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    .jumbo{
      background: url(${bannerXL})no-repeat center center;
      -webkit-background-size: 100% 100%;
      -moz-background-size: 100% 100%;
      -o-background-size: 100% 100%;
      background-size: 100% 100%;
      min-height: 400px;
    }
  }
  @media (min-width: 2000px) {
    .jumbo{
      background: url(${bannerXXL})no-repeat center center;
      -webkit-background-size: 100% 100%;
      -moz-background-size: 100% 100%;
      -o-background-size: 100% 100%;
      background-size: 100% 100%;
      min-height: 400px;
    }
  }
 `;

class Jumbotron extends React.Component{

    render(){
        return(
            <Styles>
                <Jumbo className="jumbo" fluid>
                </Jumbo>
            </Styles>
        )
    }

}
export default Jumbotron;