import {all, call} from 'redux-saga/effects';

import {shopSagas} from './Shop/shop.saga';
import { userSaga } from './User/user.saga';
import {cartSagas} from './Cart/cart.saga';

export default function* rootSaga() {
    yield all([
        call(shopSagas), 
        call(userSaga),
        call(cartSagas)
    ]);
}