

import React from 'react'
import Header from '../Header'
import * as styled from '../style/main.style'
import Navbar from '../Navbar'
import { useTranslation } from 'react-i18next'
import { Typography } from '@mui/material'

const UsageStatistics: React.FC = () => {
    const { t } = useTranslation();
    return (
        <styled.ContainerHome>
            <Navbar />
            <styled.MainContainer>
                <Header />
                <styled.Content>
                    <section>
                        <Typography variant='h4'>
                            สถิติการใช้งาน
                        </Typography>
                    </section>
                </styled.Content>
            </styled.MainContainer>

        </styled.ContainerHome>
    )
}

export default UsageStatistics
