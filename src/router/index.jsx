//React and Router
import {createBrowserRouter} from "react-router-dom";
import { createRef } from "react";
//Pages
import SearchPage from "../routes/SearchPage";
import RegisterPage from "../routes/RegisterPage";
import LoginForm from "../componets/Auth/LoginForm";
import ResetPasswordPage from "../routes/ResetPasswordPage";
import NotFoundPage from "../routes/NotFoundPage";
import AdminProtectedRoute from "../componets/Auth/AdminProtectedRoute";
import PublicLayout from "../layouts/PublicLayout";
import PrivateLayout from "../layouts/PrivateLayout";
import AdminPage from "../routes/AdminPage";
import HomePage from "../routes/HomePage";
import PreviewContent from "../componets/adminpage/PreviewContent";
import EntriesPage from "../componets/adminpage/EntriesPage";
import PostPage from "../routes/PostPage";
import TaggPage from "../routes/TaggPage";


  const routes = [
    {
      path: "/", 
      element: <HomePage/>,
      nodeRef: createRef()
    },
    {
      path: "/taggs/:tagg",   
      element: <TaggPage/>,
      nodeRef: createRef(),
    },
    {
      path: "/search",
      element: <SearchPage />,
      nodeRef: createRef(),
    },
    {
      path: "/post/:id", 
      element: <PostPage/>,
      nodeRef: createRef()
    },
    {
      path: "/register",
      element: <RegisterPage />,
      nodeRef: createRef(),
    },
    {
      path: "/login",
      element:  <LoginForm />,
      nodeRef: createRef(),
    },
    {
      path: "/resetpasword",
      element: <ResetPasswordPage/>,
      nodeRef: createRef(),
    },
  
  ]

  const routesAdmin = [
    {
      path: '/admin', 
      element: <AdminPage/>, 
      nodeRef: createRef()
    },
    {
      path: "/admin/preview", 
      element: <PreviewContent/>, 
      nodeRef: createRef(),
    },
    {
      path: "/admin/entries", 
      element: <EntriesPage/>, 
      nodeRef: createRef(),
      name: 'adminentries'
    }
  ]

  export const router = createBrowserRouter([
    {
      path: '/',
      element: <PublicLayout routes={routes}/>,
      children: routes.map((route) => ({
        index: route.path === '/',
        path: route.path === '/' ? undefined : route.path,
        element: route.element,
      })),
    },
    {
      path: '/admin',
      element: <AdminProtectedRoute> <PrivateLayout routes={routesAdmin}/></AdminProtectedRoute>,
      children: routesAdmin.map((route) => ({
        index: route.path === '/admin',
        path: route.path === '/admin' ? undefined : route.path,
        element: route.element,
      })),
    },
    {
      path: '/*',
      element: <NotFoundPage/>,
    }
  ])