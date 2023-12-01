import Statistics from "../../pages/home/statistics/Statistics";

interface routes {
    key: string;
    path: string;
    labelName: string;
    component: React.ComponentType;
}


export const authRoute: routes[] = [
    {
        key: "Home_Statistics",
        path: "/login",
        labelName: "Statistics",
        component: Statistics
    },
]