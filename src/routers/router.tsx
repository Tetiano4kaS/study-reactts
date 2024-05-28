import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import UserPage from "../pages/UserPage";
import PostPage from "../pages/PostPage";
import CommentPage from "../pages/CommentPage";
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
    {
        path: `/`, element: <MainLayout/>, errorElement: <NotFoundPage/>, children: [
            {path: 'users', element: <UserPage/>, children: [{path:':id/posts',element:<PostPage/>}]},
            {path: 'posts', element: <PostPage/>,children:[{path:':id/comments', element: <CommentPage/>}]},
            {path: 'comments', element: <CommentPage/>}
        ]
    }
]);

export {router};