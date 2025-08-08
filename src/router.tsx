import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LoginPage from "./pages/login/login";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/auth/login',
        element: <LoginPage/>
    },
])