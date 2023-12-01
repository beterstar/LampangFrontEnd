import Statistics from "../../pages/home/statistics/Statistics";
import ProjectInformation from "../../pages/home/information/ProjectInformation";

interface routes {
    key: string;
    path: string;
    labelName: string;
    component: React.ComponentType;
}


export const homeRoute: routes[] = [
    {
        key: "Home_Statistics",
        path: "/auth/statistics",
        labelName: "Statistics",
        component: Statistics
    },
    {
        key: "Home_PROJECT_INFORMATION",
        path: "/auth/project-information",
        labelName: "Project information",
        component: ProjectInformation
    },
    
]