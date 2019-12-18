import {createStore, applyMiddleware, combineReducers} from 'redux';

import thunk from 'redux-thunk';

import userReducer from "./modules/user/reducer";
import contactReducer from "./modules/contact/reducer";
import bitcoinReducer from "./modules/bitcoin/reducer";

const rootReducer = combineReducers({
    userStore: userReducer,
    contactStore: contactReducer,
    bitcoinStore: bitcoinReducer
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store