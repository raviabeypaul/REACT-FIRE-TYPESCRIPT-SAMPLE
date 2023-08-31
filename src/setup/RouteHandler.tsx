import React, { useEffect } from "react";
import { Routes, useLocation, useNavigate,Route} from "react-router-dom";

import { ROUTES } from "./Routes";

export const RouteHandler = () => {
    // let navigate = useNavigate();
    return (<>
        <Routes  >
            {ROUTES.map(route => (
                <Route path={route.path} Component={route.component as any} key={route.path} />
            )
            )}
        </Routes>
 
    </>)
}
