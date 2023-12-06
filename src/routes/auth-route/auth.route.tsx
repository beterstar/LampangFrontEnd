import React from "react";
import Login from "../../pages/auth/Login";

interface routes {
    key: string;
    path:string;
    labelNameEn: string;
    labelNameTh:string;
    component: React.ComponentType;
}


export const authRoute:routes[] = [
    {
        key:"LOGIN_PAGE",
        path:"/login",
        labelNameEn:"Login",
        labelNameTh:"ลงชื่อเข้าใช้",
        component:Login
    },
]