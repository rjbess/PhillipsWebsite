import React from 'react'
import {Container, Row} from "react-bootstrap";
import styled from 'styled-components';

const Styled = styled.div`
  .text {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    margin-bottom: 200px;
  }
`

class Home extends React.Component{
    render(){
        return(

                <Container className="container" fluid>
                    <Styled>
                        <Row className="text">
                            <h1>Our Story</h1>
                            <text>With over 6 decades experience.................................
                                ...............................................................
                                ...............................................................
                                ...............................................................
                                ...............................................................
                                ...............................................................
                                ...............................................................
                                ...............................................................
                                ...............................................................
                            </text>
                        </Row>
                    </Styled>
                </Container>

        );
    }

}
export default Home;