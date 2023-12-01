import { Button } from '@mui/material'
import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'


type Props = {}

const Home: React.FC = (props: Props) => {
    const navigate: NavigateFunction = useNavigate();
    return (
        <div className='flex justify-center items-center mt-20'>
            <Button variant='contained' onClick={() => navigate('/login')}>
                Login Page
            </Button>
        </div>
    )
}

export default Home