import React, { useState } from 'react'
import { RouteImage } from '../../assets/routeImage'
import { Typography } from '@mui/material';
import { colors } from '../../constants/colors';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../../store/slice/navbarActive/navbarSlice';

type Props = {}

const Header: React.FC = (props: Props) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();


    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);


    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleToggle = () => {
        dispatch(toggle());
    };


    return (
        <>
            <main>
                <header
                    className={`w-full px-[44px] h-[80px] flex justify-between items-center border-b-[1px] border-primary`}>
                    <span className='cursor-pointer' onClick={handleToggle}>
                        <img width={32} height={32} src={RouteImage.berger} alt="sidebar" />
                    </span>
                    <section className='flex w-auto max-w-none md:max-w-[600px] h-[42px]'>
                        <article className='hidden md:flex flex-1 justify-start mr-3 items-center '>
                            <span><img src={RouteImage.book} alt="" /></span>
                            <span className='pl-1'>{t("คู่มือการใช้งาน")}</span>
                            <span className='pl-3'><img src={RouteImage.notification} alt="alarm" />

                            </span>
                        </article>
                        <article className='h-full w-auto'>
                            <div className='h-full border-[1px] border-light hidden md:block'></div>
                        </article>
                        <article className='flex justify-between items-center gap-x-2 w-auto ml-3'>
                            <div className='w-[50px] h-[30px] md:h-full rounded-[50%] bg-[#E5E5E7] flex justify-center items-center'>
                                <img src={RouteImage.user} alt="user" />
                            </div>
                            <div className='w-full max-w-none md:max-w-[238px] flex justify-start items-center'>
                                <div className='relative'>
                                    <Button
                                        sx={{ padding: "0", width: "auto", minWidth: "0" }}
                                        id="drop-down-header"
                                        aria-controls={open ? 'fade-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    >
                                        <div className='flex-col justify-start items-start hidden md:flex'>
                                            <span>
                                                <Typography className='text-primary' variant='body1'>{"ธฤติพันธ์ รัตนาประสิทธิ์"}
                                                </Typography>
                                            </span>
                                            <span>
                                                <Typography sx={{ fontSize: "12px", fontWeight: 300, color: colors.lampang_text_secondary }}>
                                                    เทศบาลนครลำปาง
                                                </Typography>
                                            </span>
                                        </div>
                                        <div className='ml-4'>
                                            <img src={RouteImage.downArrow} alt="" />
                                        </div>
                                    </Button>
                                    <Menu
                                        id="fade-menu"
                                        MenuListProps={{
                                            'aria-labelledby': 'drop-down-header',
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        TransitionComponent={Fade}
                                    >
                                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                                        <MenuItem onClick={handleClose}>My account</MenuItem>
                                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                                    </Menu>
                                </div>
                            </div>
                        </article>
                    </section>
                </header>
            </main>
        </>
    )
}

export default Header