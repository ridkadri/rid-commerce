import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Homepage from './pages/Homepage/homepage';
import ShopPage from './pages/Shop/shop';
import SignInAndSignUpPage from './pages/Sign-In-and-Sign-Up/sign-in-and-sign-up';
import Header from './components/Header/header';

import {auth} from './Firebase/firebase.utils';

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    )
  }
}

export default App;