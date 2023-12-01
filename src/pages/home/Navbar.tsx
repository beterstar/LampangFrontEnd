import React, { useState } from 'react'
import { Box, styled, Typography } from '@mui/material'
import { useNavigate, useLocation, NavigateFunction } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux';

// COMPONENT 👇
import { colors } from '../../constants/colors'
import { RouteImage } from '../../assets/routeImage'

const LogoBox = styled(Box)({
    width: "100%",
    height: "80px",
    borderBottom: `1px solid ${colors.lampang_primary}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})
const MenuBox = styled(Box)({
    width: "100%"
})
type menuProps = {
    id: number
    menuName: string
    icon: string;
    path: string;
}
const MockMenu: menuProps[] = [
    {
        id: 1,
        menuName: "สถิติข้อมูล",
        icon: RouteImage.statisticsIcon,
        path: "/auth/statistics"
    },
    {
        id: 2,
        menuName: "ข้อมูลโครงการ",
        icon: RouteImage.projectInformation,
        path: "/auth/project-information"
    },
]

const Navbar: React.FC = () => {
    const navigate: NavigateFunction = useNavigate();
    const location = useLocation();

    const active = useSelector((state: any) => state.active);


    return (
        <motion.aside
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ stiffness: 100, ease: "backInOut" }}
            className={`h-screen w-[224px] ${active ? 'hidden' : 'block'} shadow-md`}>
            <LogoBox>
                <img src={RouteImage.login_logo} width={56} height={56} alt="logo" />
            </LogoBox>
            <MenuBox>
                {MockMenu.map((list: menuProps) => (
                    <ul onClick={() => navigate(list.path)} key={list.id} className={`${location.pathname === list.path ? 'bg-sub_primary' : ''} relative w-full h-[48px] px-[20px] cursor-pointer flex flex-col justify-center items-start group hover:bg-sub_primary`}>
                        <motion.li
                            initial={{ x: -30 }}
                            animate={{ x: 0 }}
                            transition={{ ease: "easeInOut", delay: .1, stiffness: 200 }}
                            className='flex justify-center items-center gap-x-2'>
                            <span
                                className={`${location.pathname === list.path ? 'after:w-[0.2rem] after:h-full after:bg-primary' : ''} after:absolute after:left-0 after:top-0`}
                            >
                                <img src={list.icon} alt="icon" />
                            </span>
                            <span>
                                <Typography
                                    className='text-primary'
                                    variant='body1'>{list.menuName}
                                </Typography></span>
                        </motion.li>
                    </ul>
                ))}
            </MenuBox>
        </motion.aside>
    )
}

export default Navbar