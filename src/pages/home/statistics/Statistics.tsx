import React from 'react'
import Header from '../Header'
import * as styled from '../style/main.style'
import Navbar from '../Navbar'
import { useTranslation } from 'react-i18next'
import { Typography } from '@mui/material'
import { colors } from '../../../constants/colors'
import { ButtonCustom } from '../../../component/mui-custom/MuiCustom'
import { RouteImage } from '../../../assets/routeImage'

const Statistics: React.FC = () => {
    const { t } = useTranslation();
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
                                startIcon={<img src={RouteImage.plusButton} />}
                                style={{
                                    width:"139px",
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
            </styled.MainContainer>

        </styled.ContainerHome>
    )
}

export default Statistics
