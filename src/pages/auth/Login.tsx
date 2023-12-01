import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Typography, Checkbox } from '@mui/material';
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'

// COMPONENT 👇
import * as styles from './styles/login.style'
import { RouteImage } from '../../assets/routeImage';
import { ButtonCustom, TextFieldCustom } from '../../component/mui-custom/MuiCustom';
import { colors } from '../../constants/colors';


type loginProps = {
    username: string;
    password: string;
}

const Login: React.FC = () => {
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors } } = useForm<loginProps>({
        defaultValues: {
            username: "",
            password: ""
        }
    });
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

    return (
        <styles.Container>
            <styles.MainBox>
                <styles.LoginBox
                    initial={{ x: 200 }}
                    animate={{ x: 0 }}
                    transition={{ type: "spring", stiffness: 100, ease: "backInOut", bounce: 0.25 }}
                >
                    <div className='flex justify-center items-center'>
                        <img src={RouteImage.login_logo} alt='logo' />
                    </div>
                    <div className='mt-[36px]'>
                        <Typography variant='h4' component="h1">{t("ระบบสารสนเทศเพื่อการติดตามและประเมินผลโครงการ")}</Typography>
                        <Typography variant='h4' component="h1" >
                            {t(" (E-Monitoring and Evaluation)")}
                        </Typography>
                    </div>
                    <div className='mt-[36px] flex flex-col'>
                        <span>
                            <Typography component="p">
                                {t("LOGIN.EMAIL_OR_USERNAME")}
                            </Typography>
                            <motion.div
                                className='mt-[8px]'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: .5 }}
                            >
                                <TextFieldCustom
                                    InputProps={{
                                        startAdornment: (
                                            <img src={RouteImage.login_username_icon} />
                                        )
                                    }}
                                />
                            </motion.div>
                        </span>
                        <span className='mt-[16px]'>
                            <Typography component="p">
                                {t("LOGIN.PASSWORD")}
                            </Typography>
                            <motion.div
                                className='mt-[8px]'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: .5 }}
                            >
                                <TextFieldCustom
                                    type={isShowPassword ? 'text' : 'password'}
                                    InputProps={{
                                        startAdornment: (
                                            <img src={RouteImage.login_password_icon} />
                                        ),
                                        endAdornment: (
                                            <img className={`${isShowPassword ? 'opacity-1' : 'opacity-[.5]'}`} onClick={() => setIsShowPassword(!isShowPassword)} src={RouteImage.login_eye_icon} />
                                        )
                                    }}
                                />
                            </motion.div>
                        </span>
                        <span className='w-full flex justify-between items-center mt-[16px]'>
                            <motion.div className='flex justify-center items-center'>
                                <Checkbox sx={{ color: colors.lampang_primary }} />
                                <Typography component="p">
                                    {t("LOGIN.REMEMBER_PASSWORD")}
                                </Typography>
                            </motion.div>
                            <motion.div className='cursor-pointer'>
                                <Typography sx={{ color: colors.lampang_text_secondary, '&:hover': { color: "#000" } }} component="p">
                                    {t("LOGIN.FORGOT_PASSWORD")}
                                </Typography>
                            </motion.div>
                        </span>
                        <span className='w-full mt-[36px]'>
                            <ButtonCustom variant='contained' sx={{ height: "48px" }} fullWidth>
                                {t("LOGIN.LOGIN")}
                            </ButtonCustom>
                        </span>
                    </div>
                </styles.LoginBox>
            </styles.MainBox>
        </styles.Container>
    )
}

export default Login
