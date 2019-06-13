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
    margin-bottom: 20px;
    padding-bottom: 20px;
    width: 330px;
    min-height: 300px;
    border: 2px solid ${colors.black};
    @media (min-width: 310px) and (max-width: 340px) {
        width: 310px;
    }
`;
const CostBlock = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 15px;
    position: relative;
    ::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 70%;
        height: 1px;
        background-color: ${colors.black};
    }
`;
const PriceText = styled.h2`
    font-weight: 400;
    color: ${colors.black};
    font-size: 1.8rem;
    padding-left: 15px;
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
    font-weight: 600;
    padding-right: 5px;
`;
const Item = styled.div`
    width: 100%;
    height: 65px;
    position: relative;
    padding: 0 10px 0 17px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    ::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 85%;
        height: 1px;
        background-color: ${colors.black};
    }
`;
const ItemName = styled.h2`
    font-size: 1.2rem;
    font-weight: 400;
`;
const RemoveButton = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    cursor: pointer;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    ::before {
        content: '';
        position: absolute;
        height: 2px;
        width: 30px;
        left: 0;
        top: 15px;
        background-color: ${colors.black};
        transform: rotate(45deg);
    }
    ::after {
        content: '';
        position: absolute;
        height: 2px;
        width: 30px;
        right: 0;
        top: 15px;
        background-color: ${colors.black};
        transform: rotate(135deg);
    }
`;

class Shopcart extends Component {



    removeItem = (item) => {
        this.props.dispatch({
            type: "REMOVE FROM CART",
            id: item.id,
            price: item.price,
        });
    };



    render() {


        return (
            <ShopcartBlock>
                <Cart>
                    <CostBlock>
                        <PriceText>Cart value: </PriceText>
                        <PriceBlock><Dolar>$</Dolar>
                            <Cost>{this.props.fullPrice}</Cost>
                        </PriceBlock>
                    </CostBlock>
                    <Item>
                        <ItemName>NMD_R1 PRIMEKNIT.</ItemName>
                        <RemoveButton />
                    </Item>
                    {
                        this.props.cart.map( item => (
                            <Item key={item.id}>
                                <ItemName>{item.title.substring(7)}</ItemName>
                                <RemoveButton onClick={() => this.removeItem(item)} />
                            </Item>
                        ))
                    }
                </Cart>
            </ShopcartBlock>
        );
    }
}

function mapStateToProps(state){
    return {
        cart: state.cart,
        fullPrice: state.fullPrice,
    }
}

export default connect(mapStateToProps)(Shopcart);
