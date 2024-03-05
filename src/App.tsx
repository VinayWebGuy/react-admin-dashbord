import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Menu from "./components/Menu/Menu"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home";
import User from "./pages/User/User";
import Footer from "./components/Footer/Footer";
import Product from "./pages/Product/Product";
import Login from "./pages/Login/Login";
import "./styles/global.scss"

function App() {
  const Layout = () => {
    return (
    <div className="main">
      <Navbar/>
      <div className="container">
        <div className="menuContainer">
          <Menu/>
        </div>
        <div className="contentContainer">
          <Outlet/>
        </div>
      </div>
      <Footer/>
    </div>
    )
  }
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "users",
        element: <User/>
      },
      {
        path: "products",
        element: <Product/>
      }
    ]
  },
  {
    path: "login",
    element: <Login/>
  }
])  


  return <RouterProvider  router={router}/>
}

export default App
