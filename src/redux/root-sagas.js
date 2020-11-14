import { all, call } from 'redux-saga/effects';
import { shopSagas } from './shop/shop.sagas';
import {usersSagas} from './user/user.sagas'
import {bagSagas} from './dropdown-cart-bag/bag.sagas';

export default function* rootSagas() {
    yield all([
        call(shopSagas), 
        call(usersSagas), 
        call(bagSagas)
    ])
}