import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './App.css';

import Homepage from './pages/Homepage/homepage';
import ShopPage from './pages/Shop/shop';
import SignInAndSignUpPage from './pages/Sign-In-and-Sign-Up/sign-in-and-sign-up';
import CheckoutPage from './pages/Checkout/checkout';

import Header from './components/Header/header';


import {auth, createUserProfileDocument} from './Firebase/firebase.utils';
import {setCurrentUser} from './Redux/User/user.actions';
import {selectCurrentUser} from './Redux/User/user.selector';


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  
  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route 
            exact 
            path='/signin' 
            render={()=> 
              this.props.currentUser ? (
                <Redirect to ='/' />
              ) : (
                <SignInAndSignUpPage/>
              )
              }
          />
        </Switch>
      </div>
    )
  }
}

//when we made user signed in redirect to homepage
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);