import React, { useEffect, useRef } from 'react'
import { Box, Typography, styled } from '@mui/material'
import { motion } from 'framer-motion'
import { ButtonContained } from '../mui-custom/MuiCustom'
import { useTranslation } from 'react-i18next'

const Container = styled(Box)({
    backdropFilter: "blur(3px)"
})

const BoxModal = styled(motion.div)(({ theme }) => ({
    zIndex: "99999",
    width: '100%',
    height: '100%',
    backgroundColor: "#fff",
    padding: "40px 32px 40px 32px",
    borderRadius: "8px",
    margin: "0 1rem",
    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.10) , 0 2px 4px -2px rgba(0,0,0,0.10)",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down('md')]: {
        padding: "24px 5px"
    }
}))


type Props = {
    heading: string;
    maxWidth?: string;
    maxHeight?: string;
    alignHeader?: 'left' | 'center' | 'right' | 'justify' | 'start';
    onCancel?: (set: boolean) => void
    component: React.ReactElement;
    enableSaveButton?: boolean;
    onClick?: () => void
}

const ModalCustom = (props: Props) => {
    const containerRef = useRef<any>(null);
    const { t } = useTranslation();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                if (props.onCancel) {
                    props.onCancel(false);
                }
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [props.onCancel]);


    return (
        <Container className='fixed w-screen h-screen border-2 z-[999] flex justify-center items-center'>
            <BoxModal
                className='relative'
                drag
                dragTransition={{ min: 0, max: 100 }}
                initial={{ y: -150 }}
                animate={{ y: 0 }}
                transition={{ ease: "linear", stiffness: 200 }}
                ref={containerRef}
                style={{
                    maxWidth: props.maxWidth ? props.maxWidth : "616px",
                    maxHeight: props.maxHeight ? props.maxHeight : "542px"
                }}
            >
                <span className='w-full'>
                    <Typography
                        className={`text-primary ${props.alignHeader && `text-${props.alignHeader}`}`}
                        variant='h4'>
                        {props.heading}
                    </Typography>
                </span>
                <span className='w-full'>
                    {props.component}
                </span>
                {props.enableSaveButton && (
                    <span className='w-full flex justify-center items-center'>
                        <ButtonContained
                            sx={{maxWidth:"90px",marginTop:"32px"}}
                            onClick={props.onClick}
                        >
                            {t("BUTTON.SAVE")}
                        </ButtonContained>
                    </span>
                )}

            </BoxModal>
        </Container>
    )
}

export default ModalCustom