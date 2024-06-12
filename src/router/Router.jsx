import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import MenuShop from "../pages/shop/MenuShop";
import Home from "../pages/home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "/", // This should be a different path, for example: "/home"
        element: <Home/>,
      },
      {
        path: "/menu", // This could be a different path, for example: "/menu"
        element: <MenuShop/>,
      }
    ]
  },
]);

export default router;
