import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CustomButton from '../CustomButton/custom-button';
import CartItem from '../Cart-Item/cart-item';
import {selectCartItems} from '../../Redux/Cart/cart.selectors';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../Redux/Cart/cart.actions';

import './cart-dropdown.scss';


const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {cartItems.length ? (
            cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))
        ) : (
            <span className='empty-message'>Your cart is empty</span>
        )}
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>
        GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
