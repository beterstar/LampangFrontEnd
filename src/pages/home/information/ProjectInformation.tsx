import React from 'react'
import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux';

// COMPONENT
import * as styled from '../style/main.style'
import Header from '../Header'
import Navbar from '../Navbar'

const ProjectInformation: React.FC = () => {
    const { t } = useTranslation();
    const booleanValue = useSelector((state: any) => state.active);


    return (
        <styled.ContainerHome>
            <Navbar />
            <styled.MainContainer>
                <Header />
                <styled.Content>
                    <p> status : {booleanValue ? "true" : "false"}</p>
                </styled.Content>
                <button></button>
            </styled.MainContainer>
        </styled.ContainerHome>
    )
}

export default ProjectInformation