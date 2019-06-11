import React from 'react';
import styled from 'styled-components';
import { colors } from './template/colors';
import { BrowserRouter as Router, Route} from "react-router-dom";

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


const App = () => (

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

);

export default App;
