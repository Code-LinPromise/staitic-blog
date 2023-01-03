import {
    createHashRouter,Navigate
} from "react-router-dom";
import Home from "../pages/Home";
import Links from "../pages/Links";
import About from "../pages/About";
import Projects from "../pages/Projects";
import LayoutTopNav from "../pages/LayoutTopNav";

export const router = createHashRouter([
    {
        path: "/",
        element:(<Navigate to="/home"/>)
    },
    {
        path:"/",
        element:<LayoutTopNav/>,
        children:[
            {
                path:"/home",
                element:<Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/links",
                element: <Links/>
            },
            {
                path: "/projects",
                element: <Projects/>
            },
        ]
    },

]);