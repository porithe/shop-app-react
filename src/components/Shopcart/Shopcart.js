import React, {Component} from 'react';
import {connect} from "react-redux";
import styled from 'styled-components';
import { colors } from '../../template/colors';

const ShopcartBlock = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
`;

const Cart = styled.div`
    margin-top: 40px;
    width: 300px;
    min-height: 300px;
    border: 2px solid ${colors.black};
`;
const CostBlock = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 10px;
    position: relative;
    ::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
        height: 1px;
        background-color: ${colors.black};
    }
`;
const PriceText = styled.h2`
    font-weight: 400;
    color: ${colors.black};
    font-size: 1.8rem;
    padding-left: 10px;
`;
const PriceBlock = styled.div`
    display: flex;
    align-items: center;
`;
const Cost = styled.h2`
    color: ${colors.black};
    font-size: 1.8rem;
    font-weight: 400;
`;
const Dolar = styled.span`
    color: ${colors.green};
    font-size: 2.2rem;
    font-weight: 700;
    padding-right: 5px;
`;

class Shopcart extends Component {


    render() {


        return (
            <ShopcartBlock>
                <Cart>
                    <CostBlock>
                        <PriceText>Cart value: </PriceText>
                        <PriceBlock><Dolar>$</Dolar><Cost>340</Cost></PriceBlock>
                    </CostBlock>
                </Cart>
            </ShopcartBlock>
        );
    }
}

function mapStateToProps(state){
    return {
        cart: state.cart,
    }
}

export default connect(mapStateToProps)(Shopcart);
