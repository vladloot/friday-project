import {Route, Routes} from "react-router-dom";
import {publicRoutes} from "routes/routes";
import React, {FC} from "react";

export const AppRouter: FC = () => {
    return (
        <Routes>
            {publicRoutes.map(route =>
                <Route key={route.path} path={route.path} element={<route.element/>}/>
            )}
        </Routes>
    );
};