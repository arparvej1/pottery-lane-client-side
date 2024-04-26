import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AllArtCraftItems from "../pages/AllCrafts/AllArtCraftItems/AllArtCraftItems";
import AddCraftItems from "../pages/AllCrafts/EditCraft/AddCraftItems";
import MyArtCraftList from "../pages/AllCrafts/MyArtCraft/MyArtCraftList";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Profile from "../pages/Profile/Profile";
import UpdateProfile from "../pages/Profile/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/all-art-craft',
        element: <PrivateRoutes><AllArtCraftItems></AllArtCraftItems></PrivateRoutes>
      },
      {
        path: '/add-art-craft',
        element: <PrivateRoutes><AddCraftItems></AddCraftItems></PrivateRoutes>
      },
      {
        path: '/my-art-craft',
        element: <PrivateRoutes><MyArtCraftList></MyArtCraftList></PrivateRoutes>
      },
      {
        path: '/profile',
        element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
      },
      {
        path: '/update-profile',
        element: <PrivateRoutes><UpdateProfile></UpdateProfile></PrivateRoutes>
      }
    ]
  },
]);

export default router;
