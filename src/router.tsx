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
    WorkDetailsPage,
} from "./pages";
import { dataLoader } from "./loaders/dataLoader";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        id: "app",
        loader: dataLoader,
        children: [
            {
                element: <HomePage />,
                errorElement: <ErrorPage />,
                index: true,
            },
            {
                element: <EditPage />,
                errorElement: <ErrorPage />,
                path: "edit",
            },
            {
                element: <MinePage />,
                errorElement: <ErrorPage />,
                path: "mine",
            },
            {
                element: <FindPage />,
                errorElement: <ErrorPage />,
                path: "find",
            },
            {
                element: <LoginPage />,
                errorElement: <ErrorPage />,
                path: "login",
            },
            {
                element: <AboutPage />,
                errorElement: <ErrorPage />,
                path: "about",
            },
            {
                element: <WorkDetailsPage />,
                errorElement: <ErrorPage />,
                path: "work/:workId",
            },
            {
                element: <NotFoundPage />,
                path: "*",
            },
        ],
    },
]);
