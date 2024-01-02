import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
// import Login from "../Pages/Auth/Log in/Login";
import Sign from "../Pages/Auth/Sigin/Sign";
// import Erro from "../Pages/Error/Erro";
import Jobs from "./../Pages/Jobs/Jobs";
import Favourite from "../Pages/Favourite/Favourite";
import Signin from "../Pages/Auth/signin/Signin";
import Private from "./Private";
import JobDetails from "../Pages/Jobs/jobDetails";
// import axios from "axios";
// import { Favourite } from "../Pages/Favourite/Favourite";
import Erro from "./../Pages/Error/Erro";
import axios from "axios";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: (
          <Private>
            <Jobs />
          </Private>
        ),
        loader: async () => {
          let response;
          try {
            response = await axios.get("http://localhost:9000/jobs");
          } catch (error) {
            console.log(error);
          }

          return response.data;
        },
      },
      {
        path: "jobs/:id",
        element: <JobDetails />,
        loader: async ({ params }) => {
          let response = await axios.get(
            `http://localhost:9000/jobs/${params.id}`
          );
          return response.data;
        },
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "favourite",
        element: <Favourite />,
        loader: async () => {
          let response = await axios.get("http://localhost:9000/jobs");
          return response.data;
        },
      },

      {
        path: "sign",
        element: <Sign />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
    ],
  },

  {
    path: "*",
    element: <Erro />,
  },
]);
