import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { colors } from "../../constants/colors";
import HelperText from "./helperText";
import { Typography } from "@mui/material";
const CustomTextField = styled(TextField)<{ inputHeight?: any }>(
  ({ theme, inputHeight }) => ({
    width: "100%",
    ".MuiOutlinedInput-root": {
      height: inputHeight || 43,
      borderRadius: 6,
      "&:not(.Mui-disabled)": {
        backgroundColor: colors.white,
      },
      ".MuiOutlinedInput-notchedOutline, &.Mui-disabled .MuiOutlinedInput-notchedOutline":
      {
        top: "-5px !important",
        borderColor: `${colors.black_12}`,
      },
      "&:hover": {
        borderColor: `${colors.black_12}`,
        ".MuiOutlinedInput-notchedOutline": {
          borderColor: `${colors.black_12}`,
        },
      },
      "&.Mui-focused": {
        ".MuiOutlinedInput-notchedOutline": {
          borderColor: colors.themeMainColor,
        },
      },
      "&.Mui-error": {
        ".MuiOutlinedInput-notchedOutline": {
          border: `2px solid ${colors.red} !important`,
        },
      },
      ".MuiOutlinedInput-notchedOutline": {
        borderWidth: "1px !important",
      },
    },
    ".MuiInputLabel-root, .MuiInputLabel-root span": {
      fontSize: 16,
      color: `${colors.black_60} !important`,
      "&.MuiInputLabel-root": {
        paddingLeft: 1,
      },
      backgroundColor: "transparent !important",
      "&:before": {
        content: '""',
        position: "absolute",
        width: "100%",
        height: 3,
        top: "50.5%",
        zIndex: -1,
      },
      '&[data-shrink="true"]': {
        "&.Mui-focused": {
          color: `${colors.themeMainColor} !important`,
        },
        "&:before": {
          backgroundColor: colors.white,
        },
        span: {
          color: `${colors.red} !important`,
        },
      },
    },
    ".MuiOutlinedInput-input": {
      height: inputHeight || 43,
      fontSize: 16,
      color: `${colors.textPrimary} !important`,
      textOverflow: "ellipsis",
      "-webkit-text-fill-color": "unset !important",
      padding: "0 1rem",
      "&.Mui-disabled": {
        color: `${colors.black_60} !important`,
      },
      "&::placeholder": {
        opacity: 1,
        color: `${colors.black_60} !important`,
      },
    },
    "&.filed-error": {
      '.MuiInputLabel-root[data-shrink="true"], .MuiInputLabel-root[data-shrink="true"] span':
      {
        color: `${colors.red} !important`,
      },
    },
    "input[type=number]": {
      MozAppearance: "textfield",
      "-moz-appearance": "textfield",
    },
    "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
      marginLeft: "0.5rem",
    },
    "&.hide-control": {
      "input[type=number], input::-webkit-outer-spin-button, input::-webkit-inner-spin-button":
      {
        "-webkit-appearance": "none",
        appearance: "none",
        marginLeft: 0,
      },
    },
    ".MuiFormHelperText-root": {
      marginLeft: 0,
    },
  })
);

type InputProps = {
  onFocus?: (value: any) => void;
  onchange?: (value: any) => void;
  onkeyup?: (value: any) => void;
  onkeypress?: (value: any) => void;
  onblur?: (value: any) => void;
  required?: boolean;
  disabled?: boolean;
  variant?: any;
  size?: "medium" | "small";
  label?: any;
  value?: any;
  type?: string;
  helperText?: any;
  key?: any | "input-text";
  name?: any;
  id?: any;
  hookValue?: boolean;
  hideControl?: boolean;
  inputProps?: any;
  InputLabelProps?: any;
  inputTextAlign?: "left" | "center" | "right";
  style?: any;
  params?: any;
  inputHeight?: any;
  placeholder?: string;
  disabledAutoComplete?: boolean;
  heading?: string;
  headingAlign?: string;
  multiline?: boolean;
  maxRows?: any;
  headingNormal?: boolean;
};

export default function InputTextField(props: InputProps) {
  const shrink = props.value ? { shrink: true } : "";

  return (
    <>
      {props.heading && (
        <div
          className="pb-2"
          style={{ textAlign: "left" || props.headingAlign }}
        >
          <Typography variant={props.headingNormal ? 'subtitle1' : 'body1'}>
            {props.heading}{" "} {props.required && <span style={{ color: colors.red }}>*</span>}
          </Typography>
        </div>
      )}
      <CustomTextField
        inputHeight={props.inputHeight}
        id={props.id}
        key={`text-field-${props.key}`}
        sx={{
          ".MuiOutlinedInput-root": {
            backgroundColor: props.disabled ? colors.black_12 : "",
          },
          ...props.style,
        }}
        inputProps={{
          ...{ style: { textAlign: props.inputTextAlign || "left" } },
          ...props.inputProps,
          autoComplete: props.disabledAutoComplete ? "off" : "on",
        }}
        InputLabelProps={{
          ...props.InputLabelProps,
          key: props.key,
          ...shrink,
        }}
        className={`${props.helperText ? "filed-error" : ""} ${props.hideControl ? "hide-control" : ""
          }`}
        onFocus={props.onFocus}
        onChange={props.onchange}
        onBlur={props.onblur}
        onKeyUp={props.onkeyup}
        onKeyPress={props.onkeypress}
        variant={props.variant || "outlined"}
        required={props.required}
        name={props.name}
        value={props.value}
        label={props.label}
        disabled={props.disabled}
        multiline={props.multiline}
        maxRows={props.maxRows}
        type={props.type || "text"}
        error={props.helperText !== "" && props.helperText !== undefined}
        {...props.params}
        size={props.size || "small"}
        placeholder={props?.placeholder || ""}
        helperText={
          props.helperText ? <HelperText label={props.helperText} /> : ""
        }

      />
    </>
  );
}
