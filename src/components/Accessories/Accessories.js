import React, {Component} from 'react';
import styled from 'styled-components';
import AliceCarousel from 'react-alice-carousel';
import "../alice-carousel.css";
import { colors } from '../../template/colors';

import { connect } from 'react-redux';
import bag3d from "../../photos/bag3d.jpg";
import classicbag from "../../photos/classicbag.jpg";
import melangebackpack from "../../photos/melangebackpack.jpg";
import powerbackpack from "../../photos/powerbackpack.jpg";
import trefoilbag from "../../photos/trefoilbag.jpg";


const AccessoriesBlock = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (min-width: 481px) and (max-width: 767px) {
        height: calc(100vh - 70px);
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        height: calc(100vh - 100px);
    }
    @media (min-width: 1025px) and (max-width: 1280px) {
        height: calc(100vh - 140px);
    }
    @media (min-width: 1281px) {
        height: calc(100vh - 180px);
    }
`;
const ItemCarousel = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Image = styled.img`
    width: 180px;
    @media (min-width: 481px) and (max-width: 630px) {
        width: 250px;
    }
    @media (min-width: 631px) and (max-width: 767px) {
        width: 280px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 350px;  
    }
    @media (min-width: 1025px) and (max-width: 1280px) {
        width: 400px;
    }
    @media (min-width: 1281px) {
        width: 430px;
    }
`;
const TextBlock = styled.div`
    width: 240px;
    padding: 10px;
    text-align: center;
    @media (min-width: 481px) and (max-width: 767px) {
        width: 250px;
  
    }
    @media (min-width: 768px) {
        width: auto;
        padding-top: 30px;
    }
`;
const TextAccessories = styled.h2`
    font-size: 2rem;
    text-align: center;
    color: ${colors.black};
    font-weight: 500;
    @media (min-width: 481px) and (max-width: 767px) {
        font-size: 2.3rem;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 2.7rem; 
    }
    @media (min-width: 1025px) and (max-width: 1280px) {
        font-size: 3.1rem;
    }
    @media (min-width: 1281px) {
        font-size: 3.1rem;
    }
    @media (min-width: 1281px) and (min-height: 900px) {
        font-size: 4rem;
    }
`;
const PriceButtonBlock = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px 0 20px;
    @media (min-width: 768px) {
        padding: 0;
        width: 85%;
    }
    @media (min-width: 1281px) {
        margin-bottom: 100px;
    }
`;
const Price = styled.h2`
    text-align: left;
    font-size: 1.8rem;
    font-weight: 300;
    @media (min-width: 481px) and (max-width: 767px) {
        font-size: 2rem;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 2.3rem; 
    }
    @media (min-width: 1025px) and (max-width: 1280px) {
        font-size: 2.6rem;
    }
    @media (min-width: 1281px) {
        font-size: 2.9rem;
    }
`;
const Dolar = styled.span`
    color: ${colors.green};
    font-weight: 500;
    font-size: 2rem;
    @media (min-width: 481px) and (max-width: 767px) {
        font-size: 2.3rem;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 2.7rem; 
    }
    @media (min-width: 1025px) and (max-width: 1280px) {
        font-size: 3.1rem;
    }
    @media (min-width: 1281px) {
        font-size: 3.5rem;
    }
`;
const AddToCartButton = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    background-color: ${colors.green};
    color: ${colors.white};
    position: relative;
    cursor: pointer;
    ::after {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        content: '\f067';
        font-size: 1.7rem;
        font-weight: 600;
        font-family: "Font Awesome 5 Free";
    }
    @media (min-width: 481px) and (max-width: 767px) {
        width: 60px;
        height: 60px;
        ::after {
            font-size: 2.2rem;
        }
    }
    @media (min-width: 768px) {
        width: 220px;
        height: 55px;
        border-radius: 25px 25px;
        background-color: ${colors.background};
        color: ${colors.green};
        border: 2px solid ${colors.green};
        transition: .3s;
        ::after {
            content: 'Add to cart';
            font-family: 'Montserrat', sans-serif;
            font-size: 1.7rem;
            width: 220px;
        }
        :hover {
            box-shadow: 0 0 7px 0 ${colors.green};
        }
    }
`;
const Buttons = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    padding: 0 50px 0 50px;
    @media (min-width: 768px) {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
`;
const PrevButton = styled.button`
    width: 80px;
    height: 80px;
    background-color: transparent;
    border: 2px solid ${colors.black};
    border-radius: 50%;
    cursor: pointer;
    ::after {
        font-family: "Font Awesome 5 Free";
        content: '\f053';
        font-size: 1.8rem;
        font-weight: 700;
        color: ${colors.black};
    }
    
`;
const NextButton = styled.button`
    width: 80px;
    height: 80px;
    background-color: transparent;
    border: 2px solid ${colors.black};
    border-radius: 50%;
    cursor: pointer;
    ::after {
        font-family: "Font Awesome 5 Free";
        content: '\f054';
        font-size: 1.8rem;
        font-weight: 700;
        color: ${colors.black};
    }
`;

class Accessories extends Component {

    items = [
        {
            title: 'ADIDAS GEOMETRIC BAG.',
            image: bag3d,
            price: 49,
        },
        {
            title: 'ADIDAS TREFOIL BAG.',
            image: trefoilbag,
            price: 19,
        },
        {
            title: 'ADIDAS CLASSIC BAG.',
            image: classicbag,
            price: 19,
        },
        {
            title: 'ADIDAS MELANGE BACKPACK.',
            image: melangebackpack,
            price: 69,
        },
        {
            title: 'ADIDAS LOADSPRING BACKPACK.',
            image: powerbackpack,
            price: 79,
        },
    ];

    state = {
        shopItems:  this.items.map( item => (
            <ItemCarousel>
                <TextBlock>
                    <TextAccessories>{item.title}</TextAccessories>
                </TextBlock>
                <Image src={item.image} />
                <PriceButtonBlock>
                    <Price><Dolar>$</Dolar> {item.price}</Price>
                    <AddToCartButton onClick={() => this.addToCart(item)} />
                </PriceButtonBlock>
            </ItemCarousel>
        )),
        id: 0,
    };

    addToCart = (item) => {

        const itemObj = {
            title: item.title,
            price: item.price,
            id: this.props.id,
        };
        console.log(this.props.id);
        this.props.dispatch({
            type: 'ADD TO CART',
            item: itemObj,
            price: item.price,
        });
    };

    render() {
        return (
            <AccessoriesBlock>
                <AliceCarousel ref={(el) => (this.Carousel = el)} buttonsDisabled={true} dotsDisabled={true} items={this.state.shopItems}>
                </AliceCarousel>
                <Buttons>
                    <PrevButton onClick={() => this.Carousel._slidePrev()} />
                    <NextButton onClick={() => this.Carousel._slideNext()} />
                </Buttons>
            </AccessoriesBlock>
        );
    }
}

function mapStateToProps(state){
    return {
        cart: state.cart,
        id: state.id,
    }
}

export default connect(mapStateToProps)(Accessories);
