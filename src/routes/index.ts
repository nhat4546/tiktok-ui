import { Following, Home, Profile } from "components/pages";

export const privateRoutes = [
    {
        path: "/",
        element: Home,
    },
    {
        path: "/following",
        element: Following,
    },
    {
        path: "/profile",
        element: Profile,
    },
];

export const publicRoutes = [
    {
        path: "/",
        element: "",
    },
];
