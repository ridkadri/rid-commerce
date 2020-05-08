import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Homepage from './pages/Homepage/homepage';
import ShopPage from './pages/Shop/shop';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  )
}

export default App;