import Statistics from "../../pages/home/statistics/Statistics";
import ProjectInformation from "../../pages/home/information/ProjectInformation";
import CreateProjectInformation from "../../pages/home/information/CreateProjectInformation";

interface routes {
    key: string;
    path: string;
    labelName: string;
    component: React.ComponentType;
}


export const homeRoute: routes[] = [
    {
        key: "HOME_STATISTICS",
        path: "/auth/statistics",
        labelName: "Statistics",
        component: Statistics
    },

    {
        key: "HOME_PROJECT_INFORMATION",
        path: "/auth/project-information",
        labelName: "Project information",
        component: ProjectInformation
    },
    {
        key: "HOME_PROJECT_INFORMATION-CREATE-PROJECT",
        path: "/auth/project-information/create",
        labelName: "Create project information",
        component: CreateProjectInformation
    }
]