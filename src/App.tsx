import React from 'react';
import './App.css';
import {Login} from './components/Login/Login';
import {SuperComponents} from "./components/SuperComponents/SuperComponents";

const App = () => {
    return (
        <div className="App">
            <Login/>
            <SuperComponents/>
        </div>
    );
}

export default App;
