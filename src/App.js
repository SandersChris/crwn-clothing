import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Homepage from './pages/homepage/Homepage'
import ShopPage from './pages/shop/Shop'

function App() {
  return (
    <div>
      <Switch>
        {/* if you are navigating from index page (/) no slashes needed in MenuItem else you do need them */}
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
