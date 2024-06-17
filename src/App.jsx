import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "./index.css";
import Applayout from "./layouts/App-layout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import SearchPage from "./pages/SearchPage";
import SingleGif from "./pages/SingleGif";
import Favorite from "./pages/Favorite";
import GifProvider from "./context/Gif-context";

 
const router= createBrowserRouter([
  {
    element: <Applayout />,

    children:[
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "/:category",
        element:<Category/>
      },
      {
        path: "/search/:query",
        element:<SearchPage/>
      },
      {
        path: "/:type/:slug",
        element:<SingleGif/>
      },
      {
        path: "/favorites",
        element:<Favorite/>
      },

    ]
  }
])






const App = () => {
  return (
   
   <GifProvider>
   <RouterProvider  router={router}/>
   </GifProvider>
  )
}

export default App
