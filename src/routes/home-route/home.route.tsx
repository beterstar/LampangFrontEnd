import Statistics from "../../pages/home/statistics/Statistics";
import ProjectInformation from "../../pages/home/information/ProjectInformation";
import CreateProjectInformation from "../../pages/home/information/CreateProjectInformation";
import TrackProjectStatus from "../../pages/home/track-project-status/TrackProjectStatus";
import UsageStatistics from "../../pages/home/statistics-usage/UsageStatistics";

interface routes {
    key: string;
    path: string;
    labelNameEn: string;
    labelNameTh: string;
    component: React.ComponentType;
}


export const homeRoute: routes[] = [
    {
        key: "HOME_STATISTICS",
        path: "/auth/statistics",
        labelNameEn: "Statistics",
        labelNameTh: "สถิติข้อมูล",
        component: Statistics
    },

    {
        key: "HOME_PROJECT_INFORMATION",
        path: "/auth/project-information",
        labelNameEn: "Project information",
        labelNameTh: "ข้อมูลโครงการ",
        component: ProjectInformation
    },
    {
        key: "HOME_PROJECT_INFORMATION-CREATE-PROJECT",
        path: "/auth/project-information/create",
        labelNameEn: "Create project information",
        labelNameTh: "สร้างโปรเจค",
        component: CreateProjectInformation
    },
    {
        key: "HOME_PROJECT_TRACK_PROJECT_STATUS",
        path: "/auth/project-status",
        labelNameEn: "Track project status",
        labelNameTh: "ติดตามสถานะโครงการ",
        component: TrackProjectStatus
    },
    {
        key: "HOME_PROJECT_TRACK_PROJECT_STATUS",
        path: "/auth/usage-statistics",
        labelNameEn: "Track project status",
        labelNameTh: "สถิติการใช้งาน",
        component: UsageStatistics
    },

]