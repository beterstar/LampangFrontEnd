import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined'
import { colors } from '../../constants/colors'
import { styled } from '@mui/material/styles'

const CustomHelperText = styled('div')(({ theme }) => ({
  display: 'flex',
  svg: {
    marginTop: 4
  },
  path: {
    fill: colors.statusInactiveColor
  },
  span: {
    color: colors.statusInactiveColor,
    fontSize: 12,
    paddingLeft: 4
  }
}))

type HelperTextProps = {
  label: string
  props?: any
}
export default function HelperText(props: HelperTextProps) {
  return (
    <CustomHelperText {...props.props}>
      <ErrorOutlinedIcon sx={{ fontSize: 13 }} /> <span>{props.label}</span>
    </CustomHelperText>
  )
}
