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
import SecondRoot from "../layouts/SecondRoot";
import ArtCraftItemsDetails from "../pages/AllCrafts/AllArtCraftItems/ArtCraftItemsDetails";
import UpdateCraftItems from "../pages/AllCrafts/EditCraft/UpdateCraftItems";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
    ]
  },
  {
    element: <SecondRoot></SecondRoot>,
    children: [
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
        path: '/art-craft/:itemId',
        element: <PrivateRoutes><ArtCraftItemsDetails></ArtCraftItemsDetails></PrivateRoutes>
      },
      {
        path: '/add-art-craft',
        element: <PrivateRoutes><AddCraftItems></AddCraftItems></PrivateRoutes>
      },
      {
        path: '/update-item',
        element: <PrivateRoutes><UpdateCraftItems></UpdateCraftItems></PrivateRoutes>
      },
      {
        path: '/my-art-craft',
        element: <PrivateRoutes><MyArtCraftList></MyArtCraftList></PrivateRoutes>,
        // loader: () => fetch(`https://assignment-10-server-side-olive.vercel.app/art-craft`)
        loader: () => fetch('http://localhost:5000/art-craft')
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
  }
]);

export default router;
