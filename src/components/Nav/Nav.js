import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { colors } from '../../template/colors';


const NavBlock = styled.nav`
    width: 100%;
    height: 100px;
    position: relative;
`;

const LogoType = styled.h1`
    
`;
const Links = styled.div`
    background-color: ${colors.black};
    position: fixed;
    top: 0;
    right: ${props => props.theme};
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 250px;
    padding-top: 55px;
    transition: .3s;
`;
const StyledLink = styled(Link)`
    color: ${colors.white};
    text-decoration: none;
    padding: 10px;
    font-size: 1.4rem;
    text-transform: uppercase;
`;
const MenuIcon = styled.span`
    position: absolute;
    top: 3px;
    right: 10px;
    font-size: 2.6rem;
    color: ${colors.black};
    padding: 5px;
`;
const ExitIcon = styled.span`
    position: absolute;
    top: 3px;
    right: 10px;
    font-size: 2.6rem;
    color: ${colors.white};
    padding: 5px;
`;

const theme = {
    show: '0',
    hide: '-100%',
};


class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
    }


    render() {


        const hideNav = () => {
            this.setState({
                show: false,
            });
            console.log('kliked');
        };
        const showNav = () => {
            this.setState({
                show: true,
            });
        };

        const themeLinks = () => {
            if (this.state.show === true) {
                return theme.show;
            }
            else {
                return theme.hide;
            }
        };


        return (
            <NavBlock>
                <LogoType>WEAR</LogoType>

                <MenuIcon className="fas fa-bars" onClick={showNav}></MenuIcon>

                <Links theme={themeLinks}>
                    <ExitIcon className="fas fa-times" onClick={hideNav}></ExitIcon>
                    <StyledLink to={"/"}>shoes</StyledLink>
                    <StyledLink to={"/clothing"}>clothing</StyledLink>
                    <StyledLink to={"/accessories"}>accessories</StyledLink>
                    <StyledLink to={"/lookbook"}>lookbook</StyledLink>
                </Links>

            </NavBlock>
        )
    }
}

export default Nav;
