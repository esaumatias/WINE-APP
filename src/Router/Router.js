import  React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import ProductDetail from '../Pages/ProductDetail/ProductDetail';
import ShoppingCart from '../Pages/ShoppingCart/ShoppingCart';

function Router() {
  return (
  	<Switch>
    	<Route exact path="/" component={ Home } />
			<Route exact path="/productDetail/:id" component={ ProductDetail } />
      <Route exact path="/shoppingCart" component={ ShoppingCart } />
    </Switch>
  )
};

export default Router;