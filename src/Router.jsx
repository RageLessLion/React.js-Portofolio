import {createBrowserRouter} from "react-router-dom";
import App from "./App.jsx";
import {Experience} from "./components/Experience.jsx";
import Projects from "./Projects.jsx";

const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>
    },
    {
      path:'/projects',
      element:<Projects/>
    }
])

export default router;