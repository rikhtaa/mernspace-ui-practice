import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LoginPage from "./pages/login/login";
import Dashboard from "./layouts/Dashboard";
import NonAuth from "./layouts/NonAuth";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
           { path: '',
            element: <Dashboard/>
           }
        ],
    },
    {
        path: '/auth',
        element: <NonAuth/>,
        children:[
            {
                path: 'login',
            element: <LoginPage/>,
        }
        ]
    },
])