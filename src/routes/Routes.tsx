import React from "react";
import { authRoute } from "./auth-route/auth.route";


interface routes {
    key: string;
    path: string;
    labelName: string;
    component: React.ComponentType;
}



export const RoutesComponent: routes[] = [
    ...authRoute
]