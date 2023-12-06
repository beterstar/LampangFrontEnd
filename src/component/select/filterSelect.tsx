import { styled } from '@mui/material/styles'
import { FormControl, Select, MenuItem, Typography } from '@mui/material'
import './style.css'
import _ from 'lodash'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

/** TRANSLATION */
import { useTranslation } from 'react-i18next'
import { colors } from '../../constants/colors'

type BasicSelectProps = {
    labelId: string
    selectId: string
    label?: string
    value?: any
    onchange?: (value: any) => void
    renderValue?: (value: any) => void
    options: any
    fullWidth?: boolean
    multiple?: boolean
    required?: boolean
    formControlClass?: any
    register?: any
    name?: any
    style?: any
    helperText?: string
    formControlStyle?: any
    disabled?: boolean
    classesOption?: string
    inputHeight?: number
    heading?: string
    headingAlign?: 'center' | 'left' | 'right',
    headingNormal?:boolean
}

const StyledFilterSelect = styled(Select)<{ inputHeight?: number }>(({ theme, inputHeight }) => ({
    height: inputHeight || '43px',
    background: colors.white,
    '& .MuiSelect-select': {
        padding: '0 1rem'
    },
    '& .MuiInputBase-root': {
        height: '100%',
        borderRadius: 6,
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderRadius: 6,
        top: '-5px !important',
        borderColor: colors.borderInput,
        legend: {
            width: 0
        }
    },
    '& .MuiSvgIcon-root': {
        color: colors.black
    },
    '& fieldset, &.Mui-focused fieldset': {
        borderColor: `${colors.black_12} !important`
    },
    '& svg': {
        position: 'absolute',
        fontSize: '16px',
        right: '0.625rem'
    },
    '& [aria-expanded="true"] + input + svg': {
        transform: 'rotate(180deg)'
    },
    '&.Mui-disabled': {
        '.MuiOutlinedInput-notchedOutline': {
            backgroundColor: colors.black_12
        },
        '.MuiSelect-select': {
            color: colors.black_60,
            '-webkit-text-fill-color': 'unset'
        }
    },
    '&.Mui-focused': {
        '.MuiOutlinedInput-notchedOutline': {
            borderWidth: '1px !important'
        },
    }
}))

const CustomFormControl = styled(FormControl)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        // maxWidth: 285,
        '&.not-max-width': { maxWidth: 9999 }
    }
}))

export default function FilterSelect(props: BasicSelectProps) {
    const { t } = useTranslation()
    return (
        <>
            {props.heading &&
                <div className='pb-2 flex gap-1' style={{ textAlign: 'left' || props.headingAlign }}>
                    <Typography variant={props.headingNormal ? 'subtitle1' : 'body1'}>
                        {props.heading}
                    </Typography> {props.required && <p className='text-text_danger'>*</p>}
                </div>
            }
            <CustomFormControl className={`${props.formControlClass}`} size="small" margin="none" fullWidth={props.fullWidth !== undefined ? props.fullWidth : true} disabled={props.disabled} sx={{ ...props.formControlStyle }}>
                <StyledFilterSelect
                    MenuProps={{
                        classes: { paper: `style-filter-select-search custom-scroll ${props.classesOption} style-select-doctors` },
                        PaperProps: {
                            sx: {
                                '.MuiMenuItem-root': {
                                    '&:hover': {
                                        backgroundColor: `${colors.green_06} !important`,
                                        color: colors.themeMainColor
                                    }
                                },
                            },
                        },
                    }}
                    inputHeight={props.inputHeight}
                    style={{ ...props.style }}
                    {...props.register}
                    name={props.name}
                    labelId={props.labelId}
                    id={props.selectId}
                    value={props.value}
                    renderValue={props.renderValue}
                    label={props.label}
                    onChange={props.onchange}
                    multiple={props.multiple || false}
                    IconComponent={() => <KeyboardArrowDownIcon />}
                    disabled={props.disabled}
                    required={props.required}
                >
                    {!_.isEmpty(props.options) ? (
                        props.options
                    ) : (
                        <MenuItem
                            value={''}
                            className="pe-none text-center"
                            sx={{
                                '&.text-center': {
                                    justifyContent: 'center !important',
                                    paddingTop: '0 !important',
                                    paddingBottom: '0 !important'
                                }
                            }}>
                            {t('STATUS.NOT_FOUND')}
                        </MenuItem>
                    )}
                </StyledFilterSelect>
            </CustomFormControl>
        </>
    )
}
