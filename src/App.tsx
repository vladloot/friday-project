import React from 'react';
import './App.css';
import {Login} from './components/Login/Login';
import {SuperComponents} from "./components/SuperComponents/SuperComponents";
import {Route, Routes} from "react-router-dom";
import {NewPassword} from "components/NewPassword/NewPassword";
import {NotFoundPage} from "components/NotFoundPage/NotFoundPage";
import {PasswordRecovery} from "components/PasswordRecovery/PasswordRecovery";
import {Profile} from "components/Profile/Profile";
import {Registration} from "components/Registration/Registration";

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="login" element={<Login/>}/>
                <Route path="password" element={<NewPassword/>}/>
                <Route path="404" element={<NotFoundPage/>}/>
                <Route path="password-recovery" element={<PasswordRecovery/>}/>
                <Route path="profile" element={<Profile/>}/>
                <Route path="registration" element={<Registration/>}/>
                <Route path="super-components" element={<SuperComponents/>}/>
            </Routes>
        </div>
    );
}

export default App;
