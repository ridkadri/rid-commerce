import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {auth} from '../../Firebase/firebase.utils';
import CartIcon from '../Cart-Icon/cart-icon';
import CartDropdown from '../Cart-Dropdown/cart-dropdown';
import {selectCartHidden} from '../../Redux/Cart/cart.selectors';
import {selectCurrentUser} from '../../Redux/User/user.selector';

import {ReactComponent as Logo} from '../../Assets/crown.svg';

import 
{
    HeaderContainer, 
    LogoContainer, 
    OptionsContainer, 
    OptionLink, 
} from './header.styles';


const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/contact'>CONTACT</OptionLink>
            {currentUser ? (
                <OptionLink as='div' onClick={()=>auth.signOut()}>
                    SIGN OUT
                </OptionLink>
            ) : (
                <OptionLink to='/signin'>SIGN IN</OptionLink>
            )}
            <CartIcon/>
        </OptionsContainer>
        {hidden ? null : <CartDropdown/>}
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
