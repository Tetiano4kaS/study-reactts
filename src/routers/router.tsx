import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import UserPage from "../pages/UserPage";
import PostPage from "../pages/PostPage";
import CommentPage from "../pages/CommentPage";

const router = createBrowserRouter([
    {
        path: `/`, element: <MainLayout/>, children: [
            {path: 'users', element: <UserPage/>, children: [{path: ":id",element:<PostPage/>}]},
            {path: 'posts', element: <PostPage/>},
            {path: 'comments', element: <CommentPage/>}
        ]
    }
]);

export {router};