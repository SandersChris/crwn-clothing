import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css'

import Homepage from './pages/homepage/Homepage'
import ShopPage from './pages/shop/Shop'
import Header from './components/header/Header'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        {/* if you are navigating from index page (/) no slashes needed in MenuItem else you do need them */}
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
