import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Nav = styled.nav`
    display: flex;
    flex-direction: row;

    position: fixed;
    bottom: 10%;
    left: 0;
    right: 0;
    color: black;
    margin: auto;
    width: fit-content;
    justify-content: space-between;

    a {
        margin: 0 10px;
    }
`;

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <Nav>
                <Link to="/About/">About</Link>
                <Link to="/Work/">Work</Link>
                <Link to="/Blog/">Blog</Link>
                <Link to="/Contact/">Contact</Link>
            </Nav>
        );
    }
}

export default Navbar;
