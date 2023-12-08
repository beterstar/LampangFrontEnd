import { Dropdown } from 'react-bootstrap'
import { TableCell, TableRow, makeStyles } from '@material-ui/core'
import { faCircle, faEdit, faEllipsisH, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { dateTimeToView } from '../../utils/date.utils'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'

/** CONSTANT */
import { colors } from '../../constants/colors'

/** TRANSLATION*/
import { useTranslation } from 'react-i18next'
import InputCheckbox from '../input/inputCheckbox'
import { numberFormat } from '../../utils/common'

// IMAGE
import Meatball from './meatball'
import dropdownEdit from './dropdownEdit.svg'
import dropdownTrash from './dropdownTrash.svg'

const DropdownMenu = styled(Dropdown.Menu)(({ theme }) => ({}))
const TableCellLink = styled(TableCell)(({ theme }) => ({
    '&:hover': { color: colors.themeMainColor, textDecoration: 'underline', cursor: 'pointer' }
}))
const TableRowCustom = styled(TableRow)<{ rowLink?: boolean }>(({ theme, rowLink }) => ({
    '& td': { verticalAlign: 'middle !important' },
    '&.row-link:hover  td:not(.no-link)': {
        color: colors.themeMainColor, textDecoration: 'underline', cursor: 'pointer'
    }
}))

export const DropdownItem = styled(Dropdown.Item)(({ theme }) => ({
    color: colors.textPrimary,
    '&  span': {
        fontSize: '16px !important',
    },
    '&:hover': {
        backgroundColor: colors.green_06,
        color: colors.themeMainColor
    }
}))

const useStyles = makeStyles((theme) => ({
    sticky: {
      position: "sticky",
      right: 0,
      zIndex: 2,
      background: "white",
      boxShadow: "5px 2px 5px grey",
      filter: "drop-shadow(-4px 10px 16px rgba(0,0,0,0.10))"
    }
  }))

type TableRowCommonProps = {
    key: string
    id: string
    obj: any
    columns: any
    rowSelect?: boolean
    rowLink?: boolean
    onactive?: (val: any) => any
    oninactive?: (val: any) => any
    onedit?: (val: any) => void
    ondelete?: (val: any) => void
    onCheck?: (val: any) => void
    onClick?: (e: any, val: any) => void
    ondebtpayment?: (val: any) => void
    ondocumentdetail?: (val: any) => void
    onprint?: (val: any) => void
    onreason?: (val: any) => void
    onqrcode?: (val: any) => void
    onbank?: (val: any) => void
    onreqCertificate?: (val: any) => void
    classes?: string
}

export default function TableRowCommon(props: TableRowCommonProps) {
    const { t } = useTranslation()
    const classes = useStyles();

    return (
        <TableRowCustom key={props.key} className={`${props.rowSelect ? 'MuiTableRow-root-active' : ''} ${props.rowLink ? 'row-link' : ''} ${props.classes}`} style={{ height: 'auto' }} >
            {props.columns.map((column: any) => {
                return (
                    (column.option === 'TEXT' && (
                        <TableCell className={`${column.class} text`} align={column.align || 'left'} scope="row" onClick={(e) => props.onClick && props.onClick(e, props.obj)} style={{ ...column.style }}>
                            {column.label}
                        </TableCell>
                    )) ||
                    (column.option === 'PRICE' && (
                        <TableCell className={`${column.class} text`} align={column.align || 'left'} scope="row" onClick={(e) => props.onClick && props.onClick(e, props.obj)} style={{ ...column.style }}>
                            {numberFormat(column.label)}
                        </TableCell>
                    )) ||
                    (column.option === 'STATUS' && (
                        <TableCell className="status" align={column.align || 'left'} onClick={(e) => props.onClick && props.onClick(e, props.obj)} style={{ ...column.style }}>
                            <FontAwesomeIcon icon={faCircle} color={column.label === 'ACTIVE' ? colors.success : colors.danger} />
                            <span className="ml-2">{t(`STATUS.${column.label}`)}</span>
                        </TableCell>
                    )) ||
                    (column.option === 'UPDATE_BY' && (
                        <TableCell align={column.align || 'left'} className="update-by no-link" style={{ ...column.style }}>
                            <Box className={`position-relative text-center text-ellipsis ${column.align === 'center' ? 'mx-auto' : ''}`} sx={{ bottom: '8px' }}>
                                {column.label.updatedBy}
                                <br />
                                <span style={{ color: colors.textLightGray }}>{dateTimeToView(column.label.updatedAt, false)}</span>
                            </Box>
                        </TableCell>
                    )) ||
                    (column.option === 'ACTION' && (
                        <TableCell align={column.align || 'left'} className="action" style={{ ...column.style, width: column?.width || 160 }}>
                            <Dropdown>
                                <Dropdown.Toggle variant="link" bsPrefix="p-0  " className="btn-table-action text-black-50 shadow-none">
                                    <Meatball />
                                </Dropdown.Toggle>
                                <DropdownMenu className="dropdown-table-action position-fixed">
                                    {column.values.map((objVal: any, i: number) => {
                                        return (
                                            (objVal.option === 'STATUS_ACTIVE' && (
                                                <DropdownItem onClick={props.onactive} disabled={objVal.disabled}>
                                                    {objVal.label}
                                                </DropdownItem>
                                            )) ||
                                            (objVal.option === 'STATUS_INACTIVE' && (
                                                <DropdownItem onClick={props.oninactive} disabled={objVal.disabled}>
                                                    {objVal.label}
                                                </DropdownItem>
                                            )) ||
                                            (objVal.option === 'DIVIDER' && <Dropdown.Divider style={{ backgroundColor: 'transparent', borderColor: colors.lightGray, opacity: 1 }} />) ||
                                            (objVal.option === 'COMPONANT' && objVal.label) ||
                                            (objVal.option === 'EDIT' && (
                                                <DropdownItem onClick={props.onedit} disabled={objVal.disabled}>
                                                    <img src={dropdownEdit} className="align-baseline" />
                                                    <span className="ml-2 align-text-bottom">{objVal.label}</span>
                                                </DropdownItem>
                                            )) ||
                                            (objVal.option === 'DELETE' && (
                                                <DropdownItem onClick={props.ondelete} disabled={objVal.disabled}>
                                                    <img src={dropdownTrash} className="align-baseline" />
                                                    <span className="ml-2 align-text-bottom">{objVal.label}</span>
                                                </DropdownItem>
                                            )) ||
                                            (objVal.option === 'DEBTPAYMENT' && (
                                                <DropdownItem onClick={props.ondebtpayment} disabled={objVal.disabled}>
                                                    {objVal.label}
                                                </DropdownItem>
                                            )) ||
                                            (objVal.option === 'DOCUMENTDETAIL' && (
                                                <DropdownItem onClick={props.ondocumentdetail} disabled={objVal.disabled}>
                                                    {objVal.label}
                                                </DropdownItem>
                                            )) ||
                                            (objVal.option === 'PRINT' && (
                                                <DropdownItem onClick={props.onprint} disabled={objVal.disabled}>
                                                    {objVal.label}
                                                </DropdownItem>
                                            ))
                                            ||
                                            (objVal.option === 'REASON' && (
                                                <DropdownItem onClick={props.onreason} disabled={objVal.disabled}>
                                                    {objVal.label}
                                                </DropdownItem>
                                            ))
                                            ||
                                            (objVal.option === 'QRCODEPAYMENT' && (
                                                <DropdownItem onClick={props.onqrcode} disabled={objVal.disabled}>
                                                    {objVal.label}
                                                </DropdownItem>
                                            ))
                                            ||
                                            (objVal.option === 'BANKPAYMENT' && (
                                                <DropdownItem onClick={props.onbank} disabled={objVal.disabled}>
                                                    {objVal.label}
                                                </DropdownItem>
                                            ))
                                            ||
                                            (objVal.option === 'REQUESTCERTIFICATE' && (
                                                <DropdownItem onClick={props.onreqCertificate} disabled={objVal.disabled}>
                                                    {objVal.label}
                                                </DropdownItem>
                                            ))
                                        )
                                    })}
                                </DropdownMenu>
                            </Dropdown>
                        </TableCell>
                    )) ||
                    (column.option === 'COMPONENT' && (
                        <TableCell className={`${column.class ? classes.sticky : ''}`} align={column.align || 'left'} style={{ ...column.style, width: column?.width || 160, textDecoration: 'none' }}>
                            {column.component}
                        </TableCell>
                    )) ||
                    (column.option === 'CHECKBOX' && (
                        <TableCell align={column.align || 'left'} style={{ ...column.style }}>
                            <InputCheckbox onChange={props.onCheck} value={column.label} checked={props.rowSelect} className="hover:bg-none" />
                        </TableCell>
                    )) || (column.option === 'MERGE' && (
                        <TableCell align={column.align || 'left'} colSpan={column.colSpan} onClick={(e) => props.onClick && props.onClick(e, props.obj)} style={{ ...column.style }}></TableCell>
                    ))
                )
            })}
        </TableRowCustom>
    )
}
