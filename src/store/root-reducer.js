import { combineReducers } from 'redux'

import { userReducer } from './user/user.reducer'
import { categoriesReducer } from './category.reducer.js/category.reducer'
import { cartReducer } from './cart/cart.reducer'

export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer
})