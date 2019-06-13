import React from 'react';
import styled from 'styled-components';
import { colors } from './template/colors';
import { BrowserRouter as Router, Route} from "react-router-dom";

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Nav from './components/Nav/Nav';
import Shoes from './components/Shoes/Shoes';
import Clothing from './components/Clothing/Clothing';
import Accessories from './components/Accessories/Accessories';
import Lookbook from './components/Lookbook/Lookbook';
import Shopcart from './components/Shopcart/Shopcart';


const AppBlock = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${colors.background};
`;

const defaultState = {
    cart: [],
    fullPrice: 0,
    id: 0,
};

function reducer(state = defaultState, action) {
    switch(action.type) {
        case 'ADD TO CART':
            return {
                ...state,
                cart: [...state.cart, action.item],
                fullPrice: state.fullPrice + action.price,
                id: state.id + 1,
            };
        case 'REMOVE FROM CART':
            return Object.assign({}, state, {
                cart: [...state.cart.filter(item => item.id !== action.id)],
                fullPrice: state.fullPrice - action.price,
            });
        default: {
            return state;
        }
    }

}

const store = createStore(reducer);

const App = () => (

    <Provider store={store}>
        <Router>
            <AppBlock>
                <Nav />
                <Route exact path="/" component={Shoes} />
                <Route path={"/clothing"} component={Clothing} />
                <Route path={"/accessories"} component={Accessories} />
                <Route path={"/lookbook"} component={Lookbook} />
                <Route path={"/shopcart"} component={Shopcart} />
            </AppBlock>
        </Router>
    </Provider>

);

export default App;
