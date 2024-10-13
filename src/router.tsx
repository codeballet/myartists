import { createBrowserRouter, Outlet } from "react-router-dom";
import { App } from "./components";
import {
    AboutPage,
    AddWorkPage,
    EditPage,
    EditWorkPage,
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
        children: [
            {
                element: <HomePage />,
                errorElement: <ErrorPage />,
                index: true,
            },
            {
                element: (
                    <>
                        <Outlet />
                        <EditPage />
                    </>
                ),
                errorElement: <ErrorPage />,
                path: "edit",
                children: [
                    {
                        element: <AddWorkPage />,
                        errorElement: <ErrorPage />,
                        path: "add",
                    },
                    {
                        element: <EditWorkPage />,
                        errorElement: <ErrorPage />,
                        path: ":workId",
                    },
                ],
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
                element: <NotFoundPage />,
                path: "*",
            },
        ],
    },
]);
