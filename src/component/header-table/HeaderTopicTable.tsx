import { Typography } from '@mui/material'
import React from 'react'
import { RouteImage } from '../../assets/routeImage';

type Props = {
    text: string;
    align: 'start' | 'center' | 'end',
    minWidth?: string;
}

const HeaderTopicTable = (props: Props) => {
    return (
        <div
            style={{minWidth:props.minWidth ? props.minWidth : '150px'}}
            className={`flex justify-${props.align ? props.align : 'start'} items-center gap-1`}>
            <Typography variant='h6'>
                {props.text}
            </Typography>
            <span>
                <img src={RouteImage.arrowTopBottom} alt="icon" />
            </span>
        </div>
    )
}

export default HeaderTopicTable