import React from 'react'
import { RouteImage } from '../../assets/routeImage'


type Props = {
    isRotate?: boolean;
    onClick?: () => void;
}

const Dropdown: React.FC = (props: Props) => {
    return (
        <div onClick={props.onClick} className='w-auto max-w-[18px] cursor-pointer'>
            <img className={`max-w-[18px] ${props.isRotate ? 'rotate-180' : 'rotate-0'}`} src={RouteImage.downArrow} alt="drop-down" />
        </div>
    )
}

export default Dropdown