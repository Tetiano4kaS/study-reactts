import {createBrowserRouter} from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import CarsPage from "../pages/CarsPage";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>,
        children: [{index: true, element: <AuthPage/>},
            {path: 'cars', element: <CarsPage/>}]
    }
])

export {router}