import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Sign from "../Pages/Auth/Sigin/Sign";
import Jobs from "./../Pages/Jobs/Jobs";
import Favourite from "../Pages/Favourite/Favourite";
import Signin from "../Pages/Auth/signin/Signin";
import Private from "./Private";
import Erro from "./../Pages/Error/Erro";
import axios from "axios";
import JobDetails from "../Pages/Jobs/JobDetails";
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
          let response1;
          try {
            response1 = await axios.get("http://localhost:9000/jobs");
          } catch (error) {
            console.log(error);
          }
          return response1?.data;
        },
      },
      {
        path: "/jobs/:id",
        element: <JobDetails />,
        loader: async ({ params }) => {
          let response;
          try {
            response = await axios.get(
              `http://localhost:9000/jobs/${params.id}`
            );
          } catch (error) {
            console.log(error);
          }
          return response?.data;
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
