import React from 'react'
import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { NavigateFunction, useNavigate } from 'react-router-dom'


// COMPONENT
import * as styled from '../style/main.style'
import Header from '../Header'
import Navbar from '../Navbar'
import { colors } from '../../../constants/colors'
import { ButtonCustom } from '../../../component/mui-custom/MuiCustom'
import { RouteImage } from '../../../assets/routeImage'

const ProjectInformation: React.FC = () => {
    const { t } = useTranslation();
    const navigate:NavigateFunction = useNavigate();

    return (
        <styled.ContainerHome>
            <Navbar />
            <styled.MainContainer>
                <Header />
                <styled.Content>
                    <div className='w-full gap-3 flex items-start md:items-center flex-col  md:flex-row justify-between'>
                        <span>
                            <Typography className='text-primary' variant='h4'>
                                {t("ข้อมูลโครงการ")}
                            </Typography>
                        </span>
                        <span>
                            <ButtonCustom
                                onClick={()=>navigate('/auth/project-information/create')}
                                startIcon={<img src={RouteImage.plusButton} />}
                                style={{
                                    width: "139px",
                                    border: `1px solid ${colors.lampang_primary}`,
                                    color: colors.lampang_primary,
                                    backgroundColor: colors.lampang_sub_primary
                                }}
                            >
                                {t("สร้างโครงการ")}
                            </ButtonCustom>
                        </span>
                    </div>
                </styled.Content>
                <button></button>
            </styled.MainContainer>
        </styled.ContainerHome>
    )
}

export default ProjectInformation