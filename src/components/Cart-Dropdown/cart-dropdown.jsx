import React from 'react';
import {connect} from 'react-redux';

import CustomButton from '../CustomButton/custom-button';
import CartItem from '../Cart-Item/cart-item';
import {selectCartItems} from '../../Redux/Cart/cart.selectors';

import './cart-dropdown.scss';


const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
