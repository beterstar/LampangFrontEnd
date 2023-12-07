import { useState, useEffect } from 'react';
import { Box, Menu, Button, TextField } from '@mui/material';
import { LocalizationProvider, StaticDateRangePicker } from '@mui/lab'
import { th } from 'date-fns/locale';
import _ from 'lodash'
import moment from 'moment'
import { styled } from '@mui/material/styles'
import EventIcon from '@mui/icons-material/Event';
import ClearIcon from '@mui/icons-material/Clear';
import { useTranslation } from 'react-i18next'
import { colors } from '../../constants/colors';
import useWindowSize from '../../utils/useWindowSize';
import InputTextField from './inputTextField';
import { DateAdapter } from '../../constants/datePicker';
import { toBuddhistYear } from '../../utils/common';

const CustomDateRangePicker = styled(Button)({
    backgroundColor: `${colors.transparent} !important`,
    '.MuiOutlinedInput-input': {
        paddingRight: '3rem !important',
    },
    'svg.icon-calendar': {
        color: colors.themeSecondColor,
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        right: '1rem'
    },
    '.icon-clear-value': {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        right: '1rem',
        color: colors.black_60
    },
    '.MuiFormHelperText-root.Mui-error': {
        position: 'absolute',
        bottom: '-24px'
    },
    '&.Mui-disabled': {
        'svg.icon-calendar': {
            color: colors.black_25
        }
    }
})

interface DateRangePickerType {
    value: string[]
    onchange: (val: any) => void
    onClear?: (val: any) => void
    required?: boolean
    key?: string
    label?: string
    disabled?: boolean
    helperText?: any
    placeholder?: string
    dateFormat?: string
    allowClear?: boolean
    inputHeight?: number
    heading?: string
    headingAlign?: any
    disablePadding?: boolean
}

export default function InputNewRangePicker(props: DateRangePickerType) {
    const { t } = useTranslation()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const [width] = useWindowSize()

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        if (_.isEmpty(props.value)) handleClose()
    }, [props.value]);

    return (
        <>
            {props.heading && (
                <div
                    className="pb-2"
                    style={{ textAlign: "left" || props.headingAlign }}
                >
                    {props.heading}{" "}
                    {props.required && <span style={{ color: colors.red }}>*</span>}
                </div>
            )}
            <CustomDateRangePicker
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                className={`w-full p-0 relative ${props.disabled ? 'pe-none' : ''} ${props.disabled ? 'Mui-disabled' : ''}`}
                onClick={handleClick}
                disableFocusRipple
                disableTouchRipple
                disableRipple
                disableElevation>
                <InputTextField
                    required={props?.required || false}
                    key={props.key}
                    name={props.key}
                    label={props.label}
                    helperText={props.helperText}
                    placeholder={props?.placeholder || `${t('START_DATE')}  »  ${t('END_DATE')}`}
                    disabled={props.disabled}
                    value={props.value[0] && props.value[1] && props.value[0] !== 'Invalid date' && props.value[1] !== 'Invalid date' ? `${toBuddhistYear(moment(props.value[0]), `${props.dateFormat || 'DD/MM/YYYY'}`)}  »  ${toBuddhistYear(moment(props.value[1]), `${props.dateFormat || 'DD/MM/YYYY'}`)}` : ''}
                    style={{ pointerEvents: 'none' }}
                    inputHeight={props?.inputHeight || 43}
                />
                {props.allowClear && !_.isEmpty(props.value) ? (
                    <ClearIcon
                        className='icon-clear-value cursor-pointer'
                        onClick={props.onClear} />) :
                    <EventIcon className='icon-calendar' />}
            </CustomDateRangePicker>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                className={'custom-range-date-picker-wrap'}>
                <LocalizationProvider dateAdapter={DateAdapter} locale={th}>
                    <StaticDateRangePicker
                        displayStaticWrapperAs="desktop"
                        calendars={width >= 768 ? 2 : 1}
                        value={props.value[0] && props.value[1] && props.value[0] !== 'Invalid date' && props.value[1] !== 'Invalid date' ? [moment(props.value[0]).toDate(), moment(props.value[1]).toDate()] : [null, null]}
                        onChange={props.onchange}
                        renderInput={(startProps, endProps) => (
                            <>
                                <TextField {...startProps} />
                                <Box sx={{ mx: 2 }}> to </Box>
                                <TextField {...endProps} />
                            </>
                        )}
                        className={`custom-popup-date-picker ${props.helperText ? 'custom-popup-date-picker-error' : ''}`}
                    />
                </LocalizationProvider>
            </Menu>
        </>
    )
}
