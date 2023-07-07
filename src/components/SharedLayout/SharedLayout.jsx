import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header, Navigation, Link } from "./SharedLayout.styled";

export const SharedLayout = () => {
    return (
        <>
        <Header>
                <Navigation>
                    <Link to="/" end>Home</Link>
            <Link to="/movies">Movies</Link>
                </Navigation>
            </Header>
            <Suspense fallback={<div>Loading page... </div>}>
                <Outlet />
            </Suspense>
        </>
    );
};
