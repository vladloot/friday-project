import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import {store} from '../store/store';
import AppRouter from './AppRouter';
import Header from '../components/Header/Header';
import './App.css'

const App = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <Header/>
                <AppRouter/>
            </Provider>
        </HashRouter>
    );
};

export default App;
