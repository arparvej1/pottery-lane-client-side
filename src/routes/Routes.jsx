import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AllArtCraftItems from "../pages/AllCrafts/AllArtCraftItems/AllArtCraftItems";
// import PrivateRoutes from "../pages/PrivateRoutes/PrivateRoutes";
import AddCraftItems from "../pages/AllCrafts/EditCraft/AddCraftItems";
import MyArtCraftList from "../pages/AllCrafts/MyArtCraft/MyArtCraftList";

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
      // {
      //   path: '/all-art-craft',
      //   element: <PrivateRoutes><AllArtCraftItems></AllArtCraftItems></PrivateRoutes>
      // },
      // {
      //   path: '/add-art-craft',
      //   element: <PrivateRoutes><AddCraftItems></AddCraftItems></PrivateRoutes>
      // },
      // {
      //   path: '/my-art-craft',
      //   element: <PrivateRoutes><MyArtCraftList></MyArtCraftList></PrivateRoutes>
      // }
    ]
  },
]);

export default router;
