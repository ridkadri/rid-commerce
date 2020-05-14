import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {auth} from '../../Firebase/firebase.utils';
import CartIcon from '../Cart-Icon/cart-icon';
import CartDropdown from '../Cart-Dropdown/cart-dropdown';
import {selectCartHidden} from '../../Redux/Cart/cart.selectors';
import {selectCurrentUser} from '../../Redux/User/user.selector';


import {ReactComponent as Logo} from '../../Assets/crown.svg';


import './header.scss';

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {currentUser ? (
                <div className='option' onClick={()=>auth.signOut()}>
                    SIGN OUT
                </div>
            ) : (
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
            )}
            <CartIcon/>
        </div>
        {
            hidden ? null :
            <CartDropdown/>
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
