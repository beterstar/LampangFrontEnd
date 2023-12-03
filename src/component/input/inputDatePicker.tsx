import { Box } from '@mui/material'
import { LocalizationProvider, DesktopDatePicker } from '@mui/lab'
import { th } from 'date-fns/locale'
import _ from 'lodash'
import moment from 'moment'
import { styled } from '@mui/material/styles'
import ClearIcon from '@mui/icons-material/Clear'
import { colors } from '../../constants/colors'
import InputTextField from './inputTextField'
import { DateAdapter } from '../../constants/datePicker'
import { toBuddhistYear } from '../../utils/common'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const CustomDatePicker = styled(Box)(({ theme }) => ({
    '.MuiOutlinedInput-input': {
        '-webkit-text-fill-color': 'unset !important',
        paddingRight: '3rem !important',
        '&::placeholder': {
            color: colors.black_60,
            opacity: 1
        }
    },
    '.MuiInputAdornment-root': {
        height: 'auto',
        width: 'max-content',
        margin: 0,
        '.MuiButtonBase-root': {
            margin: 0,
            color: colors.themeSecondColor,
            '&.Mui-disabled': {
                color: colors.disabledGray
            },
        },
    },
    '&.has-textfield': {
        '&.date-picker-error': {
            marginBottom: '24px'
        },
        '.MuiFormControl-root': {
            pointerEvents: 'none'
        },
        '.MuiButtonBase-root': {
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            left: 0,
            width: '100%',
            height: 0,
            backgroundColor: `${colors.transparent} !important`,
            justifyContent: 'flex-end',
            padding: '1rem',
            '.MuiTouchRipple-root': {
                display: 'none !important'
            }
        },
        '.MuiInputAdornment-root': {
            '.MuiButtonBase-root': {
                '&.Mui-disabled': {
                    color: colors.black_25
                },
            },
        },
        '&.allow-clear-value': {
            '.MuiInputAdornment-root': {
                '.MuiButtonBase-root': {
                    opacity: 0
                }
            }
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
    }
}))

export enum PICKER_VIEWS {
    DAY = 'day',
    MONTH = 'month',
    YEAR = 'year'
}

interface DatePickerType {
    value: any
    onChange: (val: any) => void
    onClear?: (val: any) => void
    required?: boolean
    disabledTextField?: boolean
    key?: string
    inputName?: string
    label?: string
    disabled?: boolean
    views?: PICKER_VIEWS[]
    helperText?: any
    placeholder?: string
    dateFormat?: string
    allowClear?: boolean
    inputHeight?: number
    renderDay?: (date: any, selectedDates: any, pickersDayProps: any) => any
    disableFuture?: boolean
    disablePast?: boolean
    disableToday?: boolean
    heading?: string
    headingAlign?: any
}

export default function InputDatePicker(props: DatePickerType) {
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
            <LocalizationProvider dateAdapter={DateAdapter} locale={th}>
                <DesktopDatePicker
                    components={{
                        OpenPickerIcon: ({ className, onClick }) => (
                            <KeyboardArrowDownIcon
                                className={className}
                                onClick={onClick}
                                style={{ color: colors.black, fontSize: '1rem' }}
                            />
                        ),
                    }}
                    value={props.value ? props.value : ''}
                    onChange={props.onChange}
                    renderInput={({ inputRef, inputProps, InputProps }) => (
                        <CustomDatePicker ref={inputRef} className={`${!props.disabledTextField ? `has-textfield ${props.allowClear && props.value ? 'allow-clear-value' : ''}` : ''} ${props.helperText ? 'date-picker-error' : ''} relative w-full`}>
                            {!props.disabledTextField &&
                                <InputTextField
                                    {...inputProps}
                                    required={props?.required || false}
                                    key={props.key}
                                    name={props.inputName || ''}
                                    label={props.label}
                                    helperText={props.helperText}
                                    placeholder={props?.placeholder || ''}
                                    inputHeight={props?.inputHeight || 43}
                                    disabled={props.disabled}
                                    value={props.value ? toBuddhistYear(moment(props.value), `${props.dateFormat || 'DD/MM/YYYY'}`) : ''}
                                    style={{ pointerEvents: props.allowClear && props.value ? 'none' : 'auto' }}
                                />
                            }
                            {InputProps?.endAdornment}
                            {props.allowClear && props.value ? <ClearIcon className='icon-clear-value cursor-pointer' onClick={props.onClear} /> : <></>}
                        </CustomDatePicker>
                    )}
                    views={!_.isEmpty(props.views) ? props.views : [PICKER_VIEWS.YEAR, PICKER_VIEWS.MONTH, PICKER_VIEWS.DAY]}
                    PopperProps={{
                        className: `custom-popup-date-picker ${props.helperText ? 'custom-popup-date-picker-error' : ''}`,
                        placement: "bottom-start"
                    }}
                    disabled={props.disabled}
                    renderDay={props.renderDay}
                    disableFuture={props.disableFuture}
                    maxDate={props.disableToday ? moment().subtract(1, 'days').toDate() : null}
                    disablePast={props.disablePast}
                />
            </LocalizationProvider>
        </>
    )
}
