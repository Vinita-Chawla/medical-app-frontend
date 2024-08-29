import {combineReducers, configureStore} from "@reduxjs/toolkit"
import cartSlice from "./slices/cartSlice";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
import wishlistSlice from "./slices/wishlistSlice";


const persistConfig = {
    key:"root",
    whitelist:["cart","wishlist"],
    storage
}

const reducer = combineReducers({
    cart: cartSlice,
    wishlist:wishlistSlice
})

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer:persistedReducer
})

export const persistor = persistStore(store)