import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducers from 'store/reducers';

const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

// @ts-ignore
window.store = store;
