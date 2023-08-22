import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import FirstPage from "../Pages/FirstPage/FirstPage";
import PrivateRoute from "./PrivateRoute";
import SecondPage from "../Pages/SecondPage/SecondPage";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: ([
            {
                path: '/',
                element: <FirstPage></FirstPage>
            },
            {
                path: '/second+page',
                element: <PrivateRoute><SecondPage></SecondPage></PrivateRoute>
            }
        ])
    }
]);
export default Route;