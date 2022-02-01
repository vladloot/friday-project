import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {loginReducer} from './reducers/loginReducer';

export const rootReducer = combineReducers({
    loginReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));