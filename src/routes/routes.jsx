import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Jobs from "./../Pages/Jobs/Jobs";
import Favourite from "../Pages/Favourite/Favourite";
import Private from "./Private";
import Erro from "./../Pages/Error/Erro";
import axios from "axios";
import JobDetails from "../Pages/Jobs/JobDetails/JobDetails";
import NetworkErrorPage from "../Pages/NetworkError/NetworkErro";
import Sign_up from "../Pages/Auth/Sign-up/Sign-up";
import Sign_in from "../Pages/Auth/sign-in/Sign-in";

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
            <NetworkErrorPage />;
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
            <NetworkErrorPage />;
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
          let response;
          try {
            response = await axios.get("http://localhost:9000/jobs");
          } catch (error) {
            <NetworkErrorPage />;
          }
          return response?.data;
        },
      },

      {
        path: "sign_up",
        element: <Sign_up />,
      },
      {
        path: "sign_in",
        element: <Sign_in/>,
      },
    ],
  },

  {
    path: "*",
    element: <Erro />,
  },
]);
