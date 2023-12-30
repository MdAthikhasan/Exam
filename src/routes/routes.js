import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Auth/Log in/Login";
import Sign from "../Pages/Auth/Sigin/Sign";
import Erro from "../Pages/Error/Erro";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact ",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Sign />,
      },
    ],
  },

  {
    path: "*",
    element: <Erro />,
  },
]);
