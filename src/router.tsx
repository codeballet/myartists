import { createBrowserRouter } from "react-router-dom";
import { App } from "./components";
import {
    AboutPage,
    EditPage,
    ErrorPage,
    FindPage,
    HomePage,
    LoginPage,
    MinePage,
    NotFoundPage,
} from "./pages";
import { dataLoader } from "./loaders/dataLoader";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        id: "app",
        loader: dataLoader,
        errorElement: <ErrorPage />,
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
