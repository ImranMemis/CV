import './App.css';
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import AboutPage from "./Pages/AboutPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ContactPage from "./Pages/ContactPage";

const router = createBrowserRouter(
[
    {
        path: "/",
        element: <Home/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/projects",
        element: <ProjectsPage/>
    },
    {
        path: "/about",
        element: <AboutPage/>
    },
    {
        path: "/contact",
        element: <ContactPage/>
    },

]
)

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
