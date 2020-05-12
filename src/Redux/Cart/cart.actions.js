import {CartActionTypes} from './cart.types';

const toggleCartHidden = cart => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export default toggleCartHidden;