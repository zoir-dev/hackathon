/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Main = lazy(() => import("../layouts/main"))

const Home = lazy(() => import("../pages/home"))
const Applications = lazy(() => import("../pages/applications"))
const Chat = lazy(() => import("../pages/chat"))
const Statistics = lazy(() => import("../pages/statistics"))
const News = lazy(() => import("../pages/news"))


export const routes: RouteObject[] = [
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "applications",
                element: <Applications />
            },
            {
                path: "chat",
                element: <Chat />
            },
            {
                path: "statistics",
                element: <Statistics />
            },
            {
                path: "news",
                element: <News />
            }
        ]
    }
]