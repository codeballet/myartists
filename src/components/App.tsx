import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from ".";
import { UserContextProvider } from "../context/UserContextProvider";

export function App(): ReactElement {
    return (
        <UserContextProvider>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </UserContextProvider>
    );
}
