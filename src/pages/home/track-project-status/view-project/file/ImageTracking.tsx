import { Box, Button, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { colors } from '../../../../../constants/colors';

type Props = {}

const ImageContainer = styled('div')({
    width: "100%",
    height: '100%',
    minHeight: "189px",
    backgroundImage: ` url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='11' ry='11' stroke='%23C1C3C7' stroke-width='4' stroke-dasharray='2%2c 8' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e")`,
    borderRadius: "10px",
    marginTop: "0.5rem",
    display: "flex",
    padding: '12px',
    gap: "8px",
    flexWrap: "wrap"
})

const ImageTracking = (props: Props) => {

    const [fileImage, setFileImage] = useState<File[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            if (files.length > 1) {
                // setFileImage((prev: any) => ([...prev, ...files]));
            } else {
                setFileImage((prev: any) => ([...prev, files[0]]));

            }
        }
        event.target.value = ""
    };

    const handleDeleteFile = (index: number) => {
        const filterDelete = fileImage.filter((list: any, i: number) => i !== index);
        setFileImage(filterDelete)
    }


    return (
        <section className='w-full mt-1'>
            <article>
                <Typography className='text-primary' variant='h5'>
                    {"รูปภาพ"}
                </Typography>
            </article>
            <article>
                <ImageContainer>
                    {fileImage && fileImage.map((list: any, index: number) => (
                        <Box className="flex flex-col flex-wrap">
                            <div className='w-[140px] h-[140px] border-2 object-cover overflow-hidden rounded-lg'>
                                {list && (<img className='w-full' src={URL.createObjectURL(list)} alt="" />)}
                            </div>
                            <div className='flex gap-1'>
                                <Typography>{list?.name?.substring(0, 10)}</Typography>
                                <Button
                                    onClick={() => handleDeleteFile(index)}
                                    sx={{ color: colors.lampang_text_secondary, width: '10px', padding: "0" }}
                                    startIcon={<HighlightOffIcon />}>
                                </Button>
                            </div>
                        </Box>
                    ))}
                    <label htmlFor="upload-image-project-status" className='w-full max-w-[140px] h-full cursor-pointer' >
                        <div className='w-full max-w-[140px] bg-light h-full min-h-[140px] flex justify-center items-center rounded-xl'>
                            <AddCircleOutlineIcon sx={{ fontSize: "7rem", color: "#C1C3C7" }} className='w-full' />
                        </div>
                        <div>
                            เพิ่มรูปภาพ
                        </div>
                    </label>

                </ImageContainer>
                <input onChange={handleFileChange} multiple accept="image/*" id='upload-image-project-status' className='hidden' type="file" />
            </article>
        </section>
    )
}

export default ImageTracking