import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CartItem from '../Cart-Item/cart-item';
import {selectCartItems} from '../../Redux/Cart/cart.selectors';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../Redux/Cart/cart.actions';

import {
    CartDropdownContainer,
    CartDropdownButton,
    EmptyMessageContainer,
    CartItemsContainer
  } from './cart-dropdown.styles';


  const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
