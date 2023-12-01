import React from "react";
import Login from "../../pages/auth/Login";

interface routes {
    key: string;
    path:string;
    labelName:string;
    component: React.ComponentType;
}


export const authRoute:routes[] = [
    {
        key:"LOGIN_PAGE",
        path:"/login",
        labelName:"Login",
        component:Login
    },
]