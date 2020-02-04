import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Homepage from './pages/homepage/Homepage'

const Hats = () => {
  return (
    <div>
      hats
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        {/* if you are navigating from index page (/) no slashes needed in MenuItem else you do need them */}
        <Route exact path='/shop/hats' component={Hats} />
        <Route exact path='/' component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
