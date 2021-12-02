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
    font-family:Times New Roman;
    margin-top:20px;
    font-size: 24px;
  }
`

class NoMatch extends React.Component{
    render(){
        return(
            <Container className="container" fluid>
                <Styled>
                        <div className={"text"}>
                            Sorry page not found.
                        </div>
                </Styled>
            </Container>
        );
    }

}
export default NoMatch;