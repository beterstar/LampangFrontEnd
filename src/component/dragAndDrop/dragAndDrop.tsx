import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { Button, Typography, styled } from "@mui/material";
import { RouteImage } from "../../assets/routeImage";
import { ButtonOutlined } from "../mui-custom/MuiCustom";
import { useTranslation } from "react-i18next";
import { notification } from "../../constants/notificationMessage";
import { colors } from "../../constants/colors";

const ContainerDragFile = styled('div')(({ theme }) => ({
  '.custom_style': {
    border: 'none',
    width: '100%',
    maxWidth: "100%",
    height: '100%',
    [theme.breakpoints.down('md')]: {
      minHeight: "170px",
      marginTop: '1rem'
    },
    'svg': {
      display: "none"
    },
    'div': {
      display: "none"
    },
  },
  backgroundImage: ` url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='11' ry='11' stroke='%23C1C3C7' stroke-width='4' stroke-dasharray='2%2c 8' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e")`,
  borderRadius: "10px",

}))
const BoxContainer = styled('div')(({ theme }) => ({
  padding: "17.5px 24px",
  width: "100%",
  height: "100%",
  position: "absolute",
  top: "0",
  left: "0",
  gap: "8px",
  [theme.breakpoints.down('md')]: {
    padding: "1rem 0.5rem",
    flexDirection: "column"
  }
}))

interface props {
  onUpload: (file: any) => void;
  multiple?: boolean;
  fileType?: string;
  disabled?: boolean;
  hoverTitle?: string;
  label?: string;
  required?: boolean;
  name?: string;
  onSizeError?: (errorText: string) => void;
  maxSize?: number;
  minSize?: number;
  onTypeError?: (file: any) => void;
  dropMessageStyle?: {};
  minHeight?: string;
  heading?: string;
  allCenter?: boolean
}

const FileDragAndDrop: React.FC<props> = (props: props) => {

  const { t } = useTranslation();
  const fileTypes: string[] = ["DOC", "DOCX", "XLSX", "PDF", "PNG", `${props.fileType}`];

  const [file, setFile] = useState<any>();

  const handleChange = (file: File) => {
    props.onUpload(file);
    setFile(file)
  };
  const handleDeleteFile = () => {
    props.onUpload(null)
    setFile(null)
  }

  const handleTypeError = () => {
    props.onTypeError && props.onTypeError("รูปแบบไฟล์ไม่ถูกต้อง .doc ,.docx , .xlsx or .pdf")
  }
  const handleOnSizeError = () => {
    props.onSizeError && props.onSizeError("ขนาดไฟล์ใหญ่เกินไป")
  }

  return (
    <>
      {props.heading && (
        <div className="w-full my-2">
          <Typography>{props.heading}</Typography>
        </div>
      )}
      <ContainerDragFile
        sx={{
          '.custom_style': {
            minHeight: props.allCenter ? props.minHeight : "80px",
          }
        }}
        style={{ minHeight: props.minHeight }}
        className="relative w-full h-auto">
        <FileUploader
          classes="drop_area drop_zone custom_style"
          onTypeError={handleTypeError}
          onSizeError={handleOnSizeError}
          required={props.required}
          label={props.label || "ลากหรือเลือกไฟล์เพื่ออัปโหลด"}
          hoverTitle={props.hoverTitle || ""}
          disable={props.disabled}
          multiple={props.multiple}
          handleChange={handleChange}
          name={props.name || "file"}
          types={fileTypes}
          maxSize={props.maxSize}
          minSize={props.minSize}
          dropMessageStyle={props.dropMessageStyle}
        />
        <BoxContainer
          className={`${!file && 'pointer-events-none'} flex items-center ${props.allCenter ? 'justify-center flex-col' : 'justify-between'}`}>
          <span className={`w-auto flex ${props.allCenter && 'flex-col justify-center items-center text-center gap-y-4'}`}>
            <div><img width={44} height={31} src={RouteImage.cloudIconUpload} alt="upload-file" /></div>
            <span className="flex flex-col ml-6">
              {file ? (
                <div className="mt-3 flex flex-col md:flex-row h-auto w-full justify-center items-center gap-4">
                  <Typography variant="body1">
                    {file?.name}
                  </Typography>
                </div>
              ) : (
                <>
                  <Typography variant="subtitle2">
                    {notification.file.dragName}
                  </Typography>
                  <Typography className="text-base_secondary" variant="subtitle2">
                    {notification.file.formatImg}
                  </Typography>
                </>
              )}
            </span>
          </span>
          <span className="flex w-auto gap-2">
            {file && (
              <Button sx={{ width: "85px", borderRadius: "10px", padding: '6px 8px' }} onClick={handleDeleteFile} variant="text" color="error">
                {t("BUTTON.DELETE")}
              </Button>
            )}
            <ButtonOutlined sx={{ maxWidth: "85px", border: `1px solid ${colors.primary_main}`, backgroundColor: colors.primary_sub_main }}>
              {t("UPLOAD_FILE")}
            </ButtonOutlined>
          </span>
        </BoxContainer>
      </ContainerDragFile>
    </>
  );
}

export default FileDragAndDrop;