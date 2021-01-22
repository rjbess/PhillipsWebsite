import React from'react';
import {Jumbotron as Jumbo} from 'react-bootstrap';

import styled from 'styled-components';
import bannerXXL2 from '../Assests/mainBannerXXL2.jpg';
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
     -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
      filter: grayscale(50%);
      min-height: 200px;
    }
  }
  @media (min-width: 768px) {
    .jumbo {
      background: url(${bannerMD})no-repeat center center;
      -webkit-background-size: 100% 100%;
      -moz-background-size: 100% 100%;
      -o-background-size: 100% 100%;
      background-size: 100% 100%;
      -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
      filter: grayscale(50%);
      min-height: 300px;
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
      -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
      filter: grayscale(50%);
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
      -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
      filter: grayscale(50%);
      min-height: 500px;
    }
  }
  @media (min-width: 2000px) {
    .jumbo{
      background: url(${bannerXXL2})no-repeat center center;
      -webkit-background-size: 100% 100%;
      -moz-background-size: 100% 100%;
      -o-background-size: 100% 100%;
      background-size: 100% 100%;
      -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
      filter: grayscale(50%);
      min-height: 600px;
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