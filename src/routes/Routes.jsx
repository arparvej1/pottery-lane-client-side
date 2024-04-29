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
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import SelectedSubCategory from "../pages/AllCrafts/AllCategory/SelectedSubCategory";

// const myApiURL = import.meta.env.VITE_VERCEL_API;
const myApiURL = `http://localhost:5000`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch(`${myApiURL}/art-craft`)
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
        element: <AllArtCraftItems></AllArtCraftItems>
      },
      {
        path: '/art-craft/:itemId',
        element: <PrivateRoutes><ArtCraftItemsDetails></ArtCraftItemsDetails></PrivateRoutes>,
        loader: () => fetch(`${myApiURL}/art-craft`)
        // loader: () => fetch('http://localhost:5000/art-craft')
      },
      {
        path: '/add-art-craft',
        element: <PrivateRoutes><AddCraftItems></AddCraftItems></PrivateRoutes>
      },
      {
        path: '/update-item/:itemId',
        element: <PrivateRoutes><UpdateCraftItems></UpdateCraftItems></PrivateRoutes>,
        loader: () => fetch(`${myApiURL}/art-craft`)
      },
      {
        path: '/my-art-craft',
        element: <PrivateRoutes><MyArtCraftList></MyArtCraftList></PrivateRoutes>,
        loader: () => fetch(`${myApiURL}/art-craft`)
      },
      {
        path: '/sub-category/:category',
        element: <PrivateRoutes><SelectedSubCategory></SelectedSubCategory></PrivateRoutes>,
        loader: () => fetch(`${myApiURL}/art-craft`)
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
