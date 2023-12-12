import React, { useCallback } from 'react'
import { TextareaAutosize, Typography } from '@mui/material'
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { colors } from '../../constants/colors';
import { styled } from '@mui/system';


interface Props {
    onChange: (data: any) => void;
    value: string;
    placeholder?: string;
    heading?: string;
    required?: boolean;
}

const InputTextArea = (props: Props) => {
    const blue = {
        100: '#DAECFF',
        200: '#b6daff',
        400: '#3399FF',
        500: '#007FFF',
        600: '#0072E5',
        900: '#003A75',
    };

    const grey = {
        50: '#F3F6F9',
        100: '#E5EAF2',
        200: '#DAE2ED',
        300: '#C7D0DD',
        400: '#B0B8C4',
        500: '#9DA8B7',
        600: '#6B7A90',
        700: '#434D5B',
        800: '#303740',
        900: '#1C2025',
    };

    const Textarea = styled(BaseTextareaAutosize)(
        ({ theme }) => `
        width: 100%;
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 8px 12px;
        border-radius: 8px;
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    
        &:hover {
          border-color: ${colors.themeMainColor};
        }
    
        // firefox
        &:focus-visible {
          outline: 0;
        }
      `,
    );
    const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        props.onChange(e.target.value);
    }, [props.onChange]);

    return (
        <>
            {props.heading && (
                <span className='my-2'>
                    <Typography className='flex'>
                        {props.heading} {props.required && <div className='text-danger ml-1'>*</div>}
                    </Typography>
                </span>
            )}
            <div className='border-[1px] border-[rgba(0,0,0,0.12)] rounded-[6px] '>
                <Textarea
                    required={props.required}
                    value={props.value}
                    sx={{ zIndex: 10 }}
                    onChange={handleChange}
                    maxRows={4}
                    aria-label="maximum height"
                    placeholder={props.placeholder || ""}
                />
            </div>
        </>
    )
}

export default InputTextArea