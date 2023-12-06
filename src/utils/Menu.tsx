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
                subMenuId: 1,
                subMenuName: "ทดสอบ",
                path: "/",
                subThirdMenu: []
            }
        ]
    },
    {
        id: 5,
        menuName: "สถิติการใช้งาน",
        icon: navbarRouteImage.usageStatistics,
        path: "/auth/usage-statistics",
        subMenu: []
    },
    {
        id: 6,
        menuName: "ตั้งค่า",
        icon: navbarRouteImage.setting,
        path: "/auth/setting",
        subMenu: [
            {
                subMenuId: 1,
                subMenuName: "ปีงบประมาณ",
                path: "/",
                subThirdMenu: [
                    {
                        subThirdMenuId: 1,
                        subThirdMenuName: "ยุทธศาสตร์",
                        path: "/"
                    },
                    {
                        subThirdMenuId: 2,
                        subThirdMenuName: "ประเภทภารกิจ",
                        path: "/"
                    },
                    {
                        subThirdMenuId: 3,
                        subThirdMenuName: "ความคืบหน้าโครงการ",
                        path: "/"
                    },
                    {
                        subThirdMenuId: 4,
                        subThirdMenuName: "การแจ้งเตือน",
                        path: "/"
                    },
                    {
                        subThirdMenuId: 5,
                        subThirdMenuName: "ประเภทโครงการ",
                        path: "/"
                    },
                ]
            },
            {
                subMenuId: 2,
                subMenuName: "แผนงาน",
                path: "/",
                subThirdMenu: []
            },
            {
                subMenuId: 3,
                subMenuName: "แหล่งที่มางบประมาณ",
                path: "/",
                subThirdMenu: []
            },
            {
                subMenuId: 4,
                subMenuName: "หน่วยงาน",
                path: "/",
                subThirdMenu: []
            },
            {
                subMenuId: 5,
                subMenuName: "ผู้ใช้งานระบบ",
                path: "/",
                subThirdMenu: []
            },
            {
                subMenuId: 6,
                subMenuName: "กำหนดสิทธิ์",
                path: "/",
                subThirdMenu: []
            },
            {
                subMenuId: 7,
                subMenuName: "ปรับแต่ง",
                path: "/",
                subThirdMenu: []
            },
        ]
    },
]