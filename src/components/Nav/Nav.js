import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Nav = () => (
    <nav>
        <Link to={"/"}>shoes</Link>
        <Link to={"/clothing"}>clothing</Link>
        <Link to={"/accessories"}>accessories</Link>
        <Link to={"/lookbook"}>lookbook</Link>
    </nav>
);

export default Nav;
