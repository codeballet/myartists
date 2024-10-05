import { createBrowserRouter } from "react-router-dom";
import { App } from "./components";
import {
    AboutPage,
    EditPage,
    FindPage,
    HomePage,
    LoginPage,
    MinePage,
    NotFoundPage,
} from "./pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                element: <HomePage />,
                index: true,
            },
            {
                element: <EditPage />,
                path: "edit",
            },
            {
                element: <MinePage />,
                path: "mine",
            },
            {
                element: <FindPage />,
                path: "find",
            },
            {
                element: <LoginPage />,
                path: "login",
            },
            {
                element: <AboutPage />,
                path: "about",
            },
            {
                element: <NotFoundPage />,
                path: "*",
            },
        ],
    },
]);
