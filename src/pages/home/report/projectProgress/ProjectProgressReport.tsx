import Header from '../../Header'
import * as styled from '../../style/main.style'
import Navbar from '../../Navbar'
import { useTranslation } from 'react-i18next'
import { Typography } from '@mui/material'

const ProjectProgressReport = () => {
    const { t } = useTranslation();
    return (
        <styled.ContainerHome>
            <Navbar />
            <styled.MainContainer>
                <Header />
                <styled.Content>
                    <section>
                        <Typography variant='h4'>
                            ความคืบหน้าโครงการ
                        </Typography>
                    </section>
                </styled.Content>
            </styled.MainContainer>

        </styled.ContainerHome>
    )
}

export default ProjectProgressReport
