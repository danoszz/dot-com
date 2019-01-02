import React from "react";
import NavBar from "./NavBar";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #___gatsby {
        height: 100%;
        width: 100%;
    }

    #___gatsby > * {
        height: 100%;
        width: 100%;
    }
`;

const Container = styled.div`
    min-height: 100%;
    width: 100%;
`;

const LeftPanel = styled.div`
    background-color: #ff3434;
    height: 100%;
    width: 50%;
    display: inline-block;
    position: static;
`;

const RightPanel = styled.div`
    background-color: #e4e4e4;
    height: 100%;
    width: 50%;
    display: inline-block;
    position: static;
`;

const PanelContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    z-index: -100;
`;

const WhiteBorder = styled.div`
    width: 97%;
    height: 94%;
    border: 10px white solid;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -99;
`;

const ChildContainer = styled.div`
    height: 100%;
    padding: 5%;
`;

class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "hello"
        };
    }

    render() {
        return (
            <Container>
                <GlobalStyle />
                <ChildContainer>{this.props.children}</ChildContainer>
                <PanelContainer>
                    <LeftPanel />
                    <RightPanel />
                </PanelContainer>
                <NavBar />
                <WhiteBorder />
            </Container>
        );
    }
}

export default Layout;
