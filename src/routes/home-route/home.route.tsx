import Statistics from "../../pages/home/statistics/Statistics";
import ProjectInformation from "../../pages/home/information/ProjectInformation";
import CreateProjectInformation from "../../pages/home/information/CreateProjectInformation";
import TrackProjectStatus from "../../pages/home/track-project-status/TrackProjectStatus";
import UsageStatistics from "../../pages/home/statistics-usage/UsageStatistics";
import ViewTrackProjectStatus from "../../pages/home/track-project-status/view-project/ViewTrackProjectStatus";

// รายงาน
import Report from '../../pages/home/report/Report'
import EquipmentAccount from "../../pages/home/report/equipmentAccount/EquipmentAccount";
import ReportShowingOperational from "../../pages/home/report/operational/ReportShowingOperational";
import BudgerSpendingReport from "../../pages/home/report/budgetSpending/BudgetSpendingReport";
import ProjectSuccess from "../../pages/home/report/projectSuccess/ProjectSuccess";
import ProjectProgressReport from "../../pages/home/report/projectProgress/ProjectProgressReport";

interface routes {
    key: string;
    path: string;
    labelNameEn: string;
    labelNameTh: string;
    component: React.ComponentType;
}


export const homeRoute: routes[] = [
    // สถิติข้อมูล
    {
        key: "HOME_STATISTICS",
        path: "/auth/statistics",
        labelNameEn: "Statistics",
        labelNameTh: "สถิติข้อมูล",
        component: Statistics
    },

    // ข้อมูลโครงการ
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


    // รายงาน
    {
        key: "HOME_PROJECT_REPORT",
        path: "/auth/report",
        labelNameEn: "Report information",
        labelNameTh: "รายงาน",
        component: Report
    },
    {
        key: "HOME_PROJECT_REPORT_EQUIPMENT_ACCOUNT",
        path: "/auth/report/equipment-account",
        labelNameEn: "EquipmentAccount",
        labelNameTh: "บัญชีครุภัณฑ์",
        component: EquipmentAccount
    },
    {
        key: "HOME_PROJECT_REPORT_SHOWING_OPERATIONAL",
        path: "/auth/report/operational-achievements",
        labelNameEn: "ReportShowingOperational",
        labelNameTh: "ผลสัมฤทธิ์การดำเนินงาน",
        component: ReportShowingOperational
    },
    {
        key: "HOME_PROJECT_REPORT_BUDGET_SPENDING",
        path: "/auth/report/budget-spending",
        labelNameEn: "BudgetSpendingReport",
        labelNameTh: "รายงานผลการใช้จ่ายงบประมาณ",
        component: BudgerSpendingReport
    },
    {
        key: "HOME_PROJECT_REPORT_PROJECT_SUCCESS",
        path: "/auth/report/project-success",
        labelNameEn: "ProjectSuccess",
        labelNameTh: "ความสำเร็จของโครงการ",
        component: ProjectSuccess
    },
    {
        key: "HOME_PROJECT_REPORT_PROJECT_PROGRESS",
        path: "/auth/report/project-progress",
        labelNameEn: "ProjectProgressReport",
        labelNameTh: "รายงานความคืบหน้าโครงการ",
        component: ProjectProgressReport
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
        path: "/auth/project-status/view",
        labelNameEn: "Track project status",
        labelNameTh: "ติดตามสถานะโครงการ",
        component: ViewTrackProjectStatus
    },
    {
        key: "HOME_PROJECT_TRACK_PROJECT_STATUS",
        path: "/auth/usage-statistics",
        labelNameEn: "Track project status",
        labelNameTh: "สถิติการใช้งาน",
        component: UsageStatistics
    },

]