import { navbarRouteImage } from "../assets/routeImage";

export type thirdMenuProps = {
    subThirdMenuId: number;
    subThirdMenuName: string;
    path: string;
}

export type subMenuProps = {
    subMenuId: number;
    subMenuName: string;
    path: string;
    subThirdMenu: thirdMenuProps[]
}

export type menuProps = {
    id: number
    menuName: string
    icon: string;
    path: string;
    subMenu: subMenuProps[];
}



export const Menu: menuProps[] = [
    {
        id: 1,
        menuName: "สถิติข้อมูล",
        icon: navbarRouteImage.statisticsIcon,
        path: "/auth/statistics",
        subMenu: []
    },
    {
        id: 2,
        menuName: "ข้อมูลโครงการ",
        icon: navbarRouteImage.projectInformation,
        path: "/auth/project-information",
        subMenu: []
    },
    {
        id: 3,
        menuName: "ติดตามสถานะโครงการ",
        icon: navbarRouteImage.projectStatus,
        path: "/auth/project-status",
        subMenu: []
    },
    {
        id: 4,
        menuName: "รายงาน",
        icon: navbarRouteImage.report,
        path: "/auth/report",
        subMenu: [
            {
                subMenuId: 5,
                subMenuName: "บ้ญชีครุภัณฑ์",
                path: "/auth/report/equipment-account",
                subThirdMenu: []
            },
            {
                subMenuId: 6,
                subMenuName: "ผลสัมฤทธิ์การดำเนินงาน",
                path: "/auth/report/operational-achievements",
                subThirdMenu: []
            },
            {
                subMenuId: 7,
                subMenuName: "ผลการใช้จ่ายงบประมาณ",
                path: "/auth/report/budget-spending",
                subThirdMenu: []
            },
            {
                subMenuId: 8,
                subMenuName: "ความสำเร็จของโครงการ",
                path: "/auth/report/project-success",
                subThirdMenu: []
            },
            {
                subMenuId: 9,
                subMenuName: "ความคืบหน้าโครงการ",
                path: "/auth/report/project-progress",
                subThirdMenu: []
            },
        ]
    },
    {
        id: 15,
        menuName: "สถิติการใช้งาน",
        icon: navbarRouteImage.usageStatistics,
        path: "/auth/usage-statistics",
        subMenu: []
    },
    {
        id: 16,
        menuName: "ตั้งค่า",
        icon: navbarRouteImage.setting,
        path: "/auth/setting",
        subMenu: [
            {
                subMenuId: 17,
                subMenuName: "ปีงบประมาณ",
                path: "/auth/setting/fiscal-year",
                subThirdMenu: [
                    {
                        subThirdMenuId: 18,
                        subThirdMenuName: "ยุทธศาสตร์",
                        path: "/"
                    },
                    {
                        subThirdMenuId: 19,
                        subThirdMenuName: "ประเภทภารกิจ",
                        path: "/"
                    },
                    {
                        subThirdMenuId: 20,
                        subThirdMenuName: "ความคืบหน้าโครงการ",
                        path: "/"
                    },
                    {
                        subThirdMenuId: 21,
                        subThirdMenuName: "การแจ้งเตือน",
                        path: "/"
                    },
                    {
                        subThirdMenuId: 22,
                        subThirdMenuName: "ประเภทโครงการ",
                        path: "/"
                    },
                ]
            },
            {
                subMenuId: 23,
                subMenuName: "แผนงาน",
                path: "/auth/setting/plan",
                subThirdMenu: []
            },
            {
                subMenuId: 24,
                subMenuName: "แหล่งที่มางบประมาณ",
                path: "/auth/setting/budget-source",
                subThirdMenu: []
            },
            {
                subMenuId: 25,
                subMenuName: "หน่วยงาน",
                path: "/auth/setting/agency",
                subThirdMenu: []
            },
            {
                subMenuId: 26,
                subMenuName: "ผู้ใช้งานระบบ",
                path: "/test",
                subThirdMenu: []
            },
            {
                subMenuId: 27,
                subMenuName: "กำหนดสิทธิ์",
                path: "/test",
                subThirdMenu: []
            },
            {
                subMenuId: 28,
                subMenuName: "ปรับแต่ง",
                path: "/auth/setting/customize",
                subThirdMenu: []
            },
        ]
    },
]