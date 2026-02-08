import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout"; // Header + Nav + Footer
import Home from "./pages/Home";
import About from "./pages/about/About";
import MissionVision from "./pages/about/Missionvission";
import DirectorMessage from "./pages/about/Directormsg";
import Contact from "./pages/contact/Contact";
import Research from "./pages/Research/Research";
import Current from "./pages/Research/Current";
import Completed from "./pages/Research/Completed";
import Future from "./pages/Research/Future";
import Areas from "./pages/Research/Area";
import Facilities from "./pages/Research/Facilities";
import Notice from "./pages/Notice/Notice";
import Publications from "./pages/publications/Publications";
import People from "./pages/people/People";
import Committee from "./pages/people/Committee";
import Staff from "./pages/people/Staff";
import Events from "./pages/events/Events";
import Seminar from "./pages/events/Seminar";
import Workshop from "./pages/events/Workshop";
import Conference from "./pages/events/Conference";
import Training from "./pages/events/Training";
export default function App() {
  // Create the router inside App.jsx
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // shared layout with Header, Nav, Footer
      children: [
        { path: "", element: <Home /> },       // "/" → Home page
         {
      path: "about",
      element: <About />,
      children: [
          { path: "mission-vision", element: <MissionVision /> },
          { path: "director-message", element: <DirectorMessage /> },
          { path: "", element: <MissionVision /> }, // default tab
        ],
      },
      { path: "contact", element: <Contact /> }, 
      { path: "research",
        element: <Research />,
        children: [
          {path: "", element: <Current/>},
          {path: "current", element: <Current/>},
          {path: "completed", element: <Completed/>},
          {path: "future", element: <Future/>},
          {path: "areas", element: <Areas />},
          {path: "facilities", element: <Facilities/>},

        ]
      },
      {path: "notice", element: <Notice/>},
      {path: "publications", element: <Publications/>},
      {path: "people",
       element: <People/>,
      children:[
        {path:"", element:<Committee/>},
         {path:"committee", element:<Committee/>},
          {path:"staff", element:<Staff/>},

      ]
      },
         {path: "events",
      element: <Events/>,
      children:[
        {path: "", element: <Seminar/>},
        {path:"seminar", element:<Seminar/>},
        {path:"workshop", element:<Workshop/>},
        {path:"conference", element:<Conference/>},
        {path:"training", element:<Training/>},
      ]
    },
      ],
    },

  ]);

  // Render the SPA router
  return <RouterProvider router={router} />;
}
