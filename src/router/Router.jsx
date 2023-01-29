import {createBrowserRouter} from "react-router-dom"
import App from "../App";
import Error404 from "../components/webpages/Error404"
import Home from "../components/webpages/Home"
import Projects from "../components/webpages/Projects";
import WebVideos from "../components/webpages/WebVideos";


const router = createBrowserRouter([
    {
        path:"/",
        element: <App />,
        errorElement: <Error404 />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path:"/projects",
                element: <Projects />
            },
            {
                path:"/videos",
                element: <WebVideos />
            }
        ]
    }
])


export default router;