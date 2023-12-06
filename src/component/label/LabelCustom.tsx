import { Typography } from '@mui/material'
import React from 'react'

type Props = {
    text: string;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'subtitle1' | 'subtitle2';
    className?: string;
    isRequired?: boolean;
}

const LabelCustom = (props: Props) => {
    return (
        <div className={`w-full flex ${props.className} `}>
            <Typography variant={props.variant || 'body1'}>
                {props.text}
            </Typography>
            {props.isRequired && (
                <Typography className='text-danger pl-1'>*</Typography>
            )}
        </div>
    )
}

export default LabelCustom