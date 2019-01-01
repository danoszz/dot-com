import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { Link } from "gatsby";

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    width: fit-content;
    min-height: 100%;
    padding-top: 20%;
    font-size: 60px;
`;

export default () => (
    <Layout>
        <TextContainer>
            <h1>Ruben</h1>
            <h1>Nijhuis</h1>
            <h2>Web developer</h2>
        </TextContainer>
    </Layout>
);
