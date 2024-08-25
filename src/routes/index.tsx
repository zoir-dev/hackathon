/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Main = lazy(() => import("../layouts/main"))

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <Main />,
        children: [
            {

            }
        ]
    }
]