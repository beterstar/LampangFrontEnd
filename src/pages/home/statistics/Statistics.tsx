import React from 'react'
import Header from '../Header'
import * as styled from '../style/main.style'
import Navbar from '../Navbar'
import { useTranslation } from 'react-i18next'

const Statistics: React.FC = () => {
    const { t } = useTranslation();
    return (
        <styled.ContainerHome>
            <Navbar />
            <styled.MainContainer>
                <Header />
                <styled.Content>

                </styled.Content>
            </styled.MainContainer>

        </styled.ContainerHome>
    )
}

export default Statistics
