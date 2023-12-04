import React, { useEffect, useState } from 'react'
import { Box, styled, Typography } from '@mui/material'
import { useNavigate, useLocation, NavigateFunction } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

// COMPONENT 👇
import { colors } from '../../constants/colors'
import { RouteImage } from '../../assets/routeImage'
import { setBoolean } from '../../store/action';

const LogoBox = styled(Box)({
    width: "100%",
    height: "80px",
    borderBottom: `1px solid ${colors.lampang_primary}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})
const MenuBox = styled('ul')({
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
    const dispatch = useDispatch();

    const active = useSelector((state: any) => state.active);


    useEffect(() => {
        const handleResize = () => {
            dispatch(setBoolean(window.innerWidth < 400))
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [active]);


    return (
        <motion.aside
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ stiffness: 100, ease: "backInOut" }}
            className={`min-h-screen z-30 bg-white ${active ? 'w-[224px]' : 'w-[4.3rem]'} duration-200 shadow-md`}
        >
            <LogoBox>
                <img src={RouteImage.login_logo} width={56} height={56} alt="logo" />
            </LogoBox>
            <MenuBox>
                {MockMenu.map((list: menuProps, index: number) => (
                    <NavLink to={list.path} key={list.id} className={`${location.pathname === list.path || location.pathname.includes(list.path) ? 'bg-sub_primary' : ''} relative group w-full h-[48px] px-[20px] cursor-pointer flex flex-col justify-center items-start group hover:bg-sub_primary`}>
                        <motion.div
                            initial={{ x: -30 }}
                            animate={{ x: 0 }}
                            transition={{ ease: "easeInOut", delay: .2, stiffness: 200 }}
                            className='flex justify-center items-center gap-x-2'>
                            <div
                                className={`${location.pathname === list.path || location.pathname.includes(list.path) ? 'after:opacity-100' : ''} w-full after:opacity-0 after:w-[0.2rem] after:h-full after:bg-primary after:absolute after:left-0 after:top-0 duration-200`}>
                                <img src={list?.icon}
                                    width="20"
                                    height="20"
                                    style={{ maxWidth: '20px', height: 'auto' }}
                                    alt="icons"
                                />
                            </div>
                            <motion.div>
                                <Typography
                                    style={{ transitionDelay: `${index + 4}00ms` }}
                                    className={`text-primary whitespace-pre duration-500 ${!active && 'opacity-0 translate-x-28 overflow-hidden'}`}
                                    variant='body1'>
                                    {list.menuName}
                                </Typography>
                                <Typography
                                    className={`${active && 'hidden'} group-hover:w-fit group-hover:left-14 group-hover:px-2 group-hover:py-1 duration-200 absolute top-1/2 translate-x-4 translate-y-[-50%] bg-white text-[#000] left-48 drop-shadow-md w-0 overflow-hidden px-0 py-0 h-auto font-semibold whitespace-pre rounded-md`}
                                    variant='body1'>
                                    {list?.menuName}
                                </Typography>
                            </motion.div>
                        </motion.div>
                    </NavLink>
                ))}
            </MenuBox>
        </motion.aside>
    )
}

export default Navbar