import React, {Component} from 'react';
import styled from 'styled-components';
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import { colors } from '../../template/colors';

import nmdgrey from '../../photos/nmdr1grey.jpg';
import nmdblack from '../../photos/nmdr1black.jpg';
import adizero from '../../photos/adizerotakumi.jpg';
import deerupt from '../../photos/deerupt.jpg';

const ShoesBlock = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
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
const CustomAliceCarousel = styled(AliceCarousel)`
    width: 100%;
    height: 100%;
`;
const ItemCarousel = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    align-items: center;
    flex-direction: column;
`;
const Image = styled.img`
    width: 300px;
`;
const TypeOfBoots = styled.h2`
    font-size: 2rem;
    text-align: center;
    color: ${colors.black};
    padding: 20px 60px 0 60px;
    font-weight: 500;
`;
const PriceButtonBlock = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px 0 20px;
`;
const Price = styled.h2`
    text-align: left;
    font-size: 1.8rem;
    font-weight: 300;
`;
const Dolar = styled.span`
    color: ${colors.green};
    font-weight: 500;
    font-size: 2rem;
`;
const AddToCartButton = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    background-color: ${colors.green};
    color: ${colors.white};
    position: relative;
    ::after {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        content: '+';
        font-size: 3rem;
        font-weight: 600;
    }
`;
const PrevButton = styled.button`
    width: 80px;
    height: 80px;
    background-color: transparent;
    border: 2px solid ${colors.black};
    border-radius: 50%;
    position: absolute;
    bottom: 40px;
    left: 50px;
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
    position: absolute;
    bottom: 40px;
    right: 50px;
    ::after {
        font-family: "Font Awesome 5 Free";
        content: '\f054';
        font-size: 1.8rem;
        font-weight: 700;
        color: ${colors.black};
    }
`;

class Shoes extends Component {
    items = [
        {
            title: 'ADIDAS NMD_R1 PRIMEKNIT.',
            image: nmdgrey,
            price: 180,
        },
        {
            title: 'ADIDAS NMD_R1 PRIMEKNIT.',
            image: nmdblack,
            price: 210,
        },
        {
            title: 'ADIDAS DEERUPT S.',
            image: deerupt,
            price: 230,
        },
        {
            title: 'ADIDAS ADIZERO TAKUMI.',
            image: adizero,
            price: 260,
        },
    ];

    state = {
        shopItems:  this.items.map( item => (
            <ItemCarousel>
                <TypeOfBoots>{item.title}</TypeOfBoots>
                <Image src={item.image} />
                <PriceButtonBlock>
                    <Price><Dolar>$</Dolar> {item.price}</Price>
                    <AddToCartButton />
                </PriceButtonBlock>
            </ItemCarousel>
        )),
    };

    render() {



        return (
            <ShoesBlock>
                <CustomAliceCarousel ref={(el) => (this.Carousel = el)} buttonsDisabled={true} dotsDisabled={true} items={this.state.shopItems}>
                </CustomAliceCarousel>
                <PrevButton onClick={() => this.Carousel._slidePrev()} />
                <NextButton onClick={() => this.Carousel._slideNext()} />
            </ShoesBlock>
        );
    }
}

export default Shoes;
