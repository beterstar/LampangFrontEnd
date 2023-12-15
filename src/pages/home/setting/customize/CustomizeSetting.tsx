import React from 'react'
import Header from '../../Header'
import * as styled from '../../style/main.style'
import Navbar from '../../Navbar'
import { useTranslation } from 'react-i18next'
import { Typography } from '@mui/material'
import { ButtonContained, ButtonOutlined } from '../../../../component/mui-custom/MuiCustom'
import { RouteImage } from '../../../../assets/routeImage'

// COMPONENT
import ImageTracking from '../../track-project-status/view-project/file/ImageTracking'


const CustomizeSetting: React.FC = () => {
    const { t } = useTranslation();

    const handleChangeImage = (data: any) => {
        console.log(data)
    }

    return (
        <styled.ContainerHome>
            <Navbar />
            <styled.MainContainer>
                <Header />
                <styled.Content>
                    <styled.TopicHeader>
                        <div>
                            <Typography className='text-primary' variant='h4'>
                                ปรับแต่ง
                            </Typography>
                        </div>
                        <span>
                            <ButtonOutlined
                                startIcon={<img src={RouteImage.addButton} />}>
                                <Typography className='text-primary'> {t("BUTTON.ADD")}</Typography>
                            </ButtonOutlined>
                            <ButtonContained>
                                <Typography>{t("BUTTON.SAVE")}</Typography>
                            </ButtonContained>
                        </span>
                    </styled.TopicHeader>
                    <section>
                        <ImageTracking
                            onChange={handleChangeImage}
                            disableHeading
                            heading='สัญลักษณ์'
                        />
                    </section>
                    <section className='mt-8'>
                        <ImageTracking
                            onChange={handleChangeImage}
                            disableHeading
                            heading='พื้นหลัง'
                        />
                    </section>
                </styled.Content>
            </styled.MainContainer>
        </styled.ContainerHome>
    )
}

export default CustomizeSetting