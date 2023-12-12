import { styled } from "@mui/material";
import { colors } from "../../../../../constants/colors";
import { motion } from "framer-motion";

export const SectionStatusProject = styled(motion.section)({
    boxShadow: "0 1px 3px 0 rgba(0,0,0,0.10),0 1px 2px -1px rgba(0,0,0,0.10)",
    width:'100%',
    height:'100%',
    display:'flex',
    backgroundColor:colors.white,
    gap:"0.75rem",
    flexDirection:"column",
    marginTop:"0.75rem",
    borderRadius:"0.75rem",
    padding:'12px'
})


export const ProjectProgressReportBox = styled('section')({
    width:"100%",
    display:'flex',
    flexDirection:"column",
    justifyContent:"flex-start",
    padding:"12px",
    alignItems:"start",
    borderRadius:"8px",
    backgroundColor:colors.white

})