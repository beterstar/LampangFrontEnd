import { styled } from "@mui/material";
import { colors } from "../../../../constants/colors";

export const SectionStatusProject = styled('section')({
    boxShadow: "0 1px 3px 0 rgba(0,0,0,0.10),0 1px 2px -1px rgba(0,0,0,0.10)",
    width:'100%',
    height:'100%',
    display:'flex',
    backgroundColor:colors.white,
    gap:"0.75rem",
    flexDirection:"column",
    marginTop:"0.75rem",
    borderRadius:"0.75rem",
    padding:'12px',
    minHeight:'429px'
})