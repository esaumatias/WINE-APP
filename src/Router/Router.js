import  React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import ProductDetail from '../Pages/ProductDetail/ProductDetail';

function Router() {
  return (
  	<Switch>
    	<Route exact path="/" component={ Home } />
			<Route exact path="/productDetail/:id" component={ ProductDetail } />
    </Switch>
  )
};

export default Router;