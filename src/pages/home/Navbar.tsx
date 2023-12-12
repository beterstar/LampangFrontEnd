import React, { useEffect, useState } from 'react'
import { Box, styled, Typography } from '@mui/material'
import { useNavigate, useLocation, NavigateFunction } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

// COMPONENT 👇
import { colors } from '../../constants/colors'
import { RouteImage } from '../../assets/routeImage'
import { setFalse } from '../../store/slice/navbarActive/navbarSlice';
import { Menu, menuProps, subMenuProps, thirdMenuProps } from '../../utils/Menu';

const LogoBox = styled(Box)(({ theme }) => ({
    width: "100%",
    height: "80px",
    borderBottom: `1px solid ${colors.lampang_primary}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down('mobileXl')]: {
        justifyContent: 'flex-end',
        padding: "0 1rem",
        'div': {
            'img': {
                display: "none"
            }
        },
        'span': {
            display: "block"
        }
    }
}))

const MenuBox = styled('ul')({
    width: "100%"
})
const NavBar = styled('nav')({

})


const Navbar: React.FC = () => {
    const navigate: NavigateFunction = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const active = useSelector((state: any) => state.navbar.value)
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [selectMenu, setSelectMenu] = useState<number>(Number);

    const handleToggleMenu = (menuId: number) => {
        setOpenMenu(!openMenu)
        setSelectMenu(menuId)
    }


    useEffect(() => {
        const handleResize = () => {
            dispatch(setFalse())
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [active]);

    useEffect(() => {
        setOpenMenu(!openMenu)
    }, [selectMenu])

    return (
        <motion.aside
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ stiffness: 100, ease: "backInOut" }}
            className={`min-h-screen z-30 bg-white ${active ? 'w-[224px]' : 'w-[4.3rem]'} ${!active && 'hidden'} duration-200 shadow-md`}
        >
            <LogoBox>
                <div>
                    <img src={RouteImage.login_logo} width={56} height={56} alt="logo" />
                </div>
                <span className='block md:hidden'>
                    <CloseIcon className='cursor-pointer' onClick={() => dispatch(setFalse())} />
                </span>
            </LogoBox>
            <MenuBox>
                {Menu.map((list: menuProps, index: number) => (
                    <Box className='relative' key={list.id}>
                        <NavBar onClick={() => {
                            if (list.subMenu.length > 0) {
                                if (list.id === 4) {
                                    navigate(list.path)
                                    handleToggleMenu(list.id)
                                } else {
                                    handleToggleMenu(list.id)
                                }
                            } else {
                                navigate(list.path)
                            }
                        }
                        }
                            className={`${location.pathname === list.path || location.pathname.includes(list.path) ? 'bg-sub_primary' : ''} relative group w-full h-[48px] px-[20px] cursor-pointer flex flex-col justify-center items-start group hover:bg-sub_primary`}>
                            <motion.div
                                initial={{ x: -30 }}
                                animate={{ x: 0 }}
                                transition={{ ease: "easeInOut", delay: .2, stiffness: 200 }}
                                className='flex justify-between w-full items-center gap-x-2'>
                                <div
                                    className={`${location.pathname === list.path || location.pathname.includes(list.path) ? 'after:opacity-100 duration-300 delay-200' : ''} w-auto after:opacity-0 after:w-[0.2rem] after:h-full after:bg-primary after:absolute after:left-0 after:top-0 duration-200`}>
                                    <img src={list?.icon}
                                        width="20"
                                        height="20"
                                        style={{ maxWidth: '20px', height: 'auto' }}
                                        alt="icons"
                                    />
                                </div>
                                <motion.div className='relative text-start w-full'>
                                    <Typography
                                        style={{ transitionDelay: `${index + 4}00ms` }}
                                        className={`text-primary whitespace-pre duration-500 ${!active && 'opacity-0 translate-x-28 overflow-hidden'}`}
                                        variant='body1'>
                                        {list.menuName}
                                    </Typography>
                                    <Typography
                                        className={`${active && 'hidden'} group-hover:w-fit group-hover:left-2 group-hover:px-2 group-hover:py-1 duration-200 absolute top-1/2 translate-x-4 translate-y-[-50%] bg-white text-[#000] left-48 drop-shadow-md w-0 overflow-hidden px-0 py-0 h-auto font-semibold whitespace-pre rounded-md`}
                                        variant='body1'>
                                        {list?.menuName}
                                    </Typography>
                                </motion.div>
                                <motion.div className={`${active ? 'block' : 'hidden'}`}>
                                    {list.subMenu.length > 0 && (
                                        <Box
                                            className={`w-auto ${openMenu && list.id === selectMenu && 'rotate-180'}`}>
                                            <img style={{ maxWidth: 20 }} className='max-w-20' src={RouteImage.downArrow} alt="icons" />
                                        </Box>
                                    )}
                                </motion.div>
                            </motion.div>

                        </NavBar>
                        {/* submenu 👇 */}
                        <div className='w-full relative flex flex-col' >
                            {openMenu && selectMenu === list.id && list.subMenu.map((subMenu: subMenuProps) => (
                                <>
                                    <motion.ul
                                        onClick={() => navigate(subMenu.path)}
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ stiffness: 200, delay: .1 }}
                                        className={`${!active && 'hidden'} h-auto w-full cursor-pointer hover:bg-sub_primary`} key={subMenu.subMenuId}>
                                        <li className='pl-12 py-3 pt-3'>
                                            <Typography className='text-primary whitespace-pre' variant='body1'>
                                                {subMenu.subMenuName}
                                            </Typography>
                                        </li>
                                    </motion.ul>

                                    {/* third menu 👇 */}
                                    {subMenu.subThirdMenu?.map((thirdMenu: thirdMenuProps) => (
                                        <motion.ul
                                            initial={{ y: -100, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ stiffness: 200, delay: .1 }}
                                            className='h-auto w-full cursor-pointer hover:bg-sub_primary'
                                            key={thirdMenu.subThirdMenuId}>
                                            <li className={`${!active && 'hidden'} pl-16 py-3 pt-3 flex items-center justify-start gap-x-2`}>
                                                <Typography className='text-primary' variant='body1'>
                                                    <img style={{ maxWidth: "24px" }} src={RouteImage.list} alt="list" />
                                                </Typography>
                                                <Typography className='text-primary' variant='body1'>
                                                    {thirdMenu.subThirdMenuName}
                                                </Typography>
                                            </li>
                                        </motion.ul>
                                    ))}
                                </>
                            ))}
                        </div>



                    </Box>
                ))
                }
            </MenuBox >
        </motion.aside >
    )
}

export default Navbar