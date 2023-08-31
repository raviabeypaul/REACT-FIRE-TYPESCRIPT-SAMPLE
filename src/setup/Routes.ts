import Notes  from "../pages/notes";
import {Signin}  from "../pages/signin";
interface RoutesProps {
    path : string;
    protected : boolean;
    component ?: React.FC | React.Component
}


export const ROUTES : RoutesProps[] = [
    {
    path: '/',
    protected: false,
    component: Signin
    },
    {
        path: '/notes',
        protected: true,
        component: Notes
    }
]
