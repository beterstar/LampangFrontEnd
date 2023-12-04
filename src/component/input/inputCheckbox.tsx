import { Checkbox, FormControlLabel, Tooltip } from '@mui/material'

/** ICON  */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faMinus } from '@fortawesome/free-solid-svg-icons'

import { styled } from '@mui/material/styles'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { colors } from '../../constants/colors';


const CustomFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
    // alignItems: 'start !important',
    // '.MuiFormControlLabel-label': {
    //   paddingTop: 6
    // }
}))

const CheckboxCustom = styled(Checkbox)(({ theme }) => ({
    '&.MuiCheckbox-root': {
        boxShadow: 'none !important',
        background: 'transparent !important',
        mixBlendMode: 'unset',
        width: 'auto !important',
        border: 'none !important'
    },
    'input': {
        zIndex: 5
    },
    '.checkbox': {
        position: 'relative',
        width: '1.25rem',
        height: '1.25rem',
        background: colors.white,
        color: colors.white,
        borderRadius: '.25rem',
        border: `1px solid ${colors.lightGray}`
    },
    '.checkbox.isChecked': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    '.checkbox.isChecked::before': {
        content: '""',
        position: 'absolute',
        width: '1.25rem',
        height: '1.25rem',
        borderRadius: '0.125rem',
        background: colors.themeMainColor,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 0
    },
    '.checkbox.isChecked svg': {
        zIndex: 1,
        fontSize: '16px'
    },
    '.hover-none-bg:hover': {
        background: 'transparent'
    }
}))

type CheckboxProps = {
    onChange?: (value: any) => void
    label?: string
    checked?: boolean
    indeterminate?: boolean
    id?: string
    className?: string
    disabled?: boolean
    value?: string
    type?: 'button' | 'reset' | 'submit'
    style?: any
    name?: string
    info?: string
    styleInfo?: any
}

export default function InputCheckbox(props: CheckboxProps) {
    return (
        (!props.label && (
            <CheckboxCustom
                {...props}
                icon={<div className="checkbox"></div>}
                checkedIcon={
                    <div className="checkbox isChecked">
                        <FontAwesomeIcon icon={faCheck} />
                    </div>
                }
                indeterminateIcon={
                    <div className="checkbox isChecked">
                        <FontAwesomeIcon icon={faMinus} />
                    </div>
                }
            />
        )) || (
            <>
                <CustomFormControlLabel
                    name={props.name}
                    className={props.className}
                    control={
                        <CheckboxCustom
                            {...props}
                            icon={<div className="checkbox"></div>}
                            checkedIcon={
                                <div className="checkbox isChecked">
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                            }
                            indeterminateIcon={
                                <div className="checkbox isChecked">
                                    <FontAwesomeIcon icon={faMinus} />
                                </div>
                            }
                        />
                    }
                    label={
                        <>
                            {props.label}
                            {props.info && (
                                <Tooltip title={props.info} placement="top">
                                    <InfoOutlinedIcon className='ml-2' sx={{ fontSize: '16px', marginTop: '-4px', ...props.styleInfo }} />
                                </Tooltip>
                            ) || <></>}
                        </>
                    }
                    sx={{ ...props.style }} />
            </>
        )
    )
}
