import React from "react";
import { authRoute } from "./auth-route/auth.route";
import { homeRoute } from "./home-route/home.route";


interface routes {
    key: string;
    path: string;
    labelNameEn: string;
    labelNameTh: string;
    component: React.ComponentType;
}



export const RoutesComponent: routes[] = [
    ...authRoute,
    ...homeRoute
]