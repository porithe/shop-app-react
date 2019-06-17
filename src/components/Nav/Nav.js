import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { colors } from '../../template/colors';


const NavBlock = styled.nav`
    width: 100%;
    height: 60px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (min-width: 481px) and (max-width: 767px) {
        height: 70px;
  
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        height: 100px;
    }
    @media (min-width: 1025px) and (max-width: 1280px) {
        height: 140px;
    }
    @media (min-width: 1281px) {
        height: 180px;
    }
`;

const LogoType = styled.h1`
    margin-left: 20px;
    font-size: 2rem;
    color: ${colors.grey};
    position: relative;
    z-index: 1;
    ::after {
        content: '';
        position: absolute;
        bottom: 0px;
        left: 50%;
        transform: translateX(-50%);
        width: 110px;
        height: 18px;
        background-color: ${colors.green};
        z-index: -1;
    }
    @media (min-width: 420px) and (max-width: 480px) {
        font-size: 2.5rem;
        ::after {
            width: 130px;
            height: 22px;
        }
    }
    @media (min-width: 481px) and (max-width: 767px) {
          margin-left: 30px;
          font-size: 3rem;
         ::after {
             width: 160px;
             height: 24px;
         }
          
    }
    @media (min-width: 768px)  and (max-width: 1024px){
        margin-left: 20px;
        font-size: 3rem;
        ::after {
             width: 160px;
             height: 26px;
         }
    }
    @media (min-width: 1025px) and (max-width: 1280px) {
        margin-left: 50px;
        font-size: 3.3rem;
        ::after {
             width: 180px;
             height: 28px;
         }
    }
    @media (min-width: 1281px) {
        margin-left: 80px;
        font-size: 3.7rem;
        ::after {
             width: 205px;
             height: 34px;
         }
    }
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
    height: 270px;
    padding-top: 55px;
    transition: .3s;
    z-index: 3;
    @media (min-width: 768px) {
        position: relative;
        top: auto;
        right: auto;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding-top: 0;
        background-color: transparent;
        width: auto;
    }
`;
const StyledLink = styled(Link)`
    color: ${colors.white};
    text-decoration: none;
    padding: 10px;
    font-size: 1.7rem;
    @media (min-width: 768px) {
        color: ${colors.black};
        font-weight: 300;
        position: relative;
        ::after {
            position: absolute;
            content: '';
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 0%;
            height: 3px;
            background-color: ${colors.green};
            transition: .3s;
        }
        :hover::after {
            width: 100%;
        }
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 1.6rem;
    }
    @media (min-width: 1025px) and (max-width: 1280px) {
        font-size: 2rem;
        margin: 0 5px 0 5px;
    }
    @media (min-width: 1281px) {
        font-size: 2.4rem;        
        margin: 0 10px 0 10px;
    }
`;
const MenuIcon = styled.span`
    position: absolute;
    top: 8px;
    right: 10px;
    font-size: 2.6rem;
    color: ${colors.black};
    padding: 5px;
    @media (min-width: 768px) {
        display: none;
    }
    @media (min-width: 481px) and (max-width: 767px) {
        top: 10px; 
    }
`;
const ExitIcon = styled.span`
    position: absolute;
    top: 8px;
    right: 10px;
    font-size: 2.6rem;
    color: ${colors.white};
    padding: 5px;
    @media (min-width: 768px) {
        display: none;
    }
    @media (min-width: 481px) and (max-width: 767px) {
        top: 10px; 
    }
`;
const ShopCart = styled(Link)`
    position: absolute;
    top: 12px;
    right: 65px;
    font-size: 2rem;
    color: ${colors.black};
    padding: 5px;
    text-decoration: none;
    @media (min-width: 481px) and (max-width: 767px) {
        top: 13px; 
    }
    @media (min-width: 768px) {
        position: relative;
        top: auto;
        right: auto;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
  
        margin-right: 20px;
        font-size: 2.2rem;
    }
    @media (min-width: 1025px) and (max-width: 1280px) {
        margin-right: 60px;
        font-size: 2.6rem;
    }
    @media (min-width: 1281px) {
        margin-right: 100px;
        font-size: 3rem;
    }

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
                    <StyledLink onClick={hideNav} to={"/"}>shoes</StyledLink>
                    <StyledLink onClick={hideNav} to={"/clothing"}>clothing</StyledLink>
                    <StyledLink onClick={hideNav} to={"/accessories"}>accessories</StyledLink>
                    <StyledLink onClick={hideNav} to={"/watches"}>watches</StyledLink>
                </Links>

                <ShopCart to={"/shopcart"} className="fas fa-shopping-cart"></ShopCart>

            </NavBlock>
        )
    }
}

export default Nav;
