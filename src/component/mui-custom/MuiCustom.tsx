import { Button, Select, TextField, styled } from "@mui/material";
import { colors } from "../../constants/colors";


export const TextFieldCustom = styled(TextField)({
    width: "100%",
    height: "46px",
    '.MuiOutlinedInput-notchedOutline': {
        borderRadius: "8px",
    },
    '.MuiInputBase-input': {
        padding: "0 0.5rem",
        height: "46px",
    }
})

export const ButtonCustom = styled(Button)({
    width: "100%",
    backgroundColor: colors.lampang_primary,
    borderRadius: "6px",
    padding: "12.67 12.67px",
    boxShadow: "0 1px 2px 0 rgba(0,0,0,0.04) !important",
    '&:hover': {
        backgroundColor: colors.lampang_primary,
        boxShadow: "0 2px 0px 0 rgba(0,0,0,0.12) !important"
    }
})


// BUTTON OUTLINED
export const ButtonOutlined = styled(Button)({
    height: '40px',
    width: "100%",
    minWidth: "97px",
    textTransform:"none",
    backgroundColor: colors.lampang_sub_primary,
    borderRadius: "8px",
    border: `1px solid ${colors.lampang_primary}`,
    '&:hover': {
        backgroundColor: colors.lampang_sub_primary,
        border: `1px solid ${colors.lampang_primary}`,
        boxShadow: "1px 3px 2px 1px rgba(0,0,0,0.12)"
    }
})

// BUTTON CONTAINED
export const ButtonContained = styled(Button)({
    height: '40px',
    width: "100%",
    minWidth: "97px",
    color: colors.white,
    backgroundColor: colors.lampang_primary,
    borderRadius: "8px",
    boxShadow: "none",
    '&:hover': {
        backgroundColor: colors.lampang_primary,
        border: `1px solid ${colors.lampang_primary}`,
        boxShadow: "1px 3px 2px 1px rgba(0,0,0,0.12)"
    }
})



// SELECT 
export const SelectCustom = styled(Select)({
    
})