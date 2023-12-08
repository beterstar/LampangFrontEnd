import { Box } from '@mui/system'
import FirstPageIcon from '@mui/icons-material/FirstPage'
import IconButton from '@mui/material/IconButton'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import LastPageIcon from '@mui/icons-material/LastPage'
import Paper from '@mui/material/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableFooter from '@mui/material/TableFooter'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import { TableSortLabel } from '@material-ui/core'
import { colors } from '../../constants/colors'
import { makeStyles } from '@material-ui/core'
import { useTheme } from '@mui/material/styles'
import { Dropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Code from '@mui/icons-material/Code'
import { Typography, styled } from '@mui/material'


// ICON
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';

/** TRANSLATION*/
import { useTranslation } from 'react-i18next'
import InputCheckbox from '../input/inputCheckbox'
import { numberFormat } from '../../utils/common'


const useStyles = makeStyles((theme) => ({
    sticky: {
        position: "sticky",
        right: 0,
        zIndex: 2,
        background: "white",
        boxShadow: "5px 2px 5px grey",
        filter: "drop-shadow(-4px 10px 16px rgba(0,0,0,0.10))",
        [theme.breakpoints.down('lg')]: {
            borderTop: `1px solid ${colors.themeMainColor} !important`,
        },
        [theme.breakpoints.up('lg')]: {
            borderTop: `none !important`,
        },
    },
    root: {
        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.borderInput
        }
    },
    table: {
        border: '1px solid transparent',
        '& .MuiTableBody-root': {
            '& .MuiTableCell-root': {
                verticalAlign: 'top',
                paddingTop: 16,
                paddingBottom: 8,
                '&.update-by': {
                    paddingBottom: 0
                }
            }
        },
        // BG CONTENT
        '& $td': {
            // backgroundColor:"#F8F9FB !important"
        }
    },
    header: {
        borderRight: `1px solid ${colors.themeMainColor} !important`,
        borderLeft: `1px solid ${colors.themeMainColor} !important`,
        color: `${colors.white} !important`,
        '& $th': {
            backgroundColor: colors.themeMainColor,
            color: `${colors.white} !important`,
            padding: 15
        },
        '& .MuiTableCell-root.MuiTableCell-head': {
            color: `${colors.white} !important`,
            fontSize: 16,
            fontWeight: 500,
            border: 'none',
            '&.MuiTableCell-alignRight': {
                flexDirection: 'row'
            }
        },
        '& .MuiTableSortLabel-root': {
            color: `${colors.white} !important`
        },
        '& .MuiTableSortLabel-root:hover, & .MuiTableSortLabel-active': {
            color: `${colors.white} !important`,
            fontWeight: 600
        },
        '& .MuiTableSortLabel-root.MuiTableSortLabel-active.MuiTableSortLabel-root.MuiTableSortLabel-active .MuiTableSortLabel-icon': {
            color: `${colors.white} !important`
        }
    },
    body: {
        '&.sm-data-table': {
            borderRight: `1px solid ${colors.lightGray} !important`,
            borderLeft: `1px solid ${colors.lightGray} !important`,
            height: 'auto'
        },
        '& .MuiTableCell-root': {
            borderBottomColor: `${colors.lightGray} !important`,
            fontSize: 16
        },
        '& .MuiTableRow-root:hover .MuiTableCell-root, .MuiTableRow-root-active .MuiTableCell-root': {
            background: colors.extraLightGray
        }
    },
    pagination: {
        border: 'none !important',
        paddingRight: '0 !important',
        '& p': {
            margin: 0,
            color: colors.textLightGray
        },
        '& .MuiTablePagination-select': {
            fontSize: '14px',
            color: colors.textPrimary
        }
    },
    dropdown: {
        '& .MuiCheckbox-root': {
            margin: '-9px 0'
        }
    },
    dropdownToggle: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        color: `${colors.white} !important`,
        boxShadow: 'none !important',
        '&:focus, &:hover, &:active': {
            boxShadow: 'none !important',
        }
    },
    dropdownToggleShow: {
        backgroundColor: `${colors.white} !important`,
        zIndex: 5,
        '&:hover': {
            backgroundColor: `${colors.white} !important`
        },
        [theme.breakpoints.up('lg')]: {
            left: '-35px !important'
        }
    },
    iconButton: {
        // border: `1px solid ${colors.themeMainColor} !important`,
        color: `${colors.black}  !important`,
        margin: '2.5px !important',
        '&.MuiButtonBase-root:not(.Mui-disabled)': {
            opacity: 1
        },
        borderRadius: '4px !important',
        width: 29.7,
        height: 29.7,
        fontSize: '16px !important',
        '&.Mui-disabled': {
            opacity: 0.7
        },
        '&.MuiButtonBase-root.active': {
            // backgroundColor: `${colors.themeMainColor}  !important`,
            border: `1px solid #E5E5E7`,
            color: `${colors.themeMainColor}`
            // color: `${colors.white}  !important`
        },
        '&.MuiButtonBase-root:hover': {
            backgroundColor: `${colors.themeMainColor}  !important`,
            color: `${colors.white}  !important`
        },
        '&.MuiButtonBase-root.active $svg': {
            color: `${colors.white}  !important`,
            width: 29.7,
            height: 29.7
        }
    }
}))

export function TablePaginationActions(props: any) {
    const theme = useTheme()
    const classes = useStyles()
    const { t } = useTranslation();

    const { count, page, rowsPerPage, onPageChange } = props

    const handleFirstPageButtonClick = (event: any) => {
        onPageChange(event, 1)
    }

    const handleBackButtonClick = (event: any) => {
        onPageChange(event, page - 1)
    }

    const handleNextButtonClick = (event: any) => {
        onPageChange(event, page + 1)
    }

    const handleLastPageButtonClick = (event: any) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage)))
    }

    const handleGoPageButtonClick = (event: any, page: number) => {
        onPageChange(event, page)
    }

    const renderPage = (countPage: number) => {
        const htmlPageNo: any = []
        let arrayPage: number[] = [1, 2, 3, countPage]
        if (page > 3) {
            if (page !== countPage) arrayPage = [page - 1, page, page + 1, countPage]
            else if (page === countPage) arrayPage = [page - 2, page - 1, page, countPage]
        }
        for (let index = 0; index < countPage; index++) {
            const pageRun: number = (index + 1)
            if (arrayPage.includes(pageRun))
                htmlPageNo.push(
                    <IconButton className={`${classes.iconButton} ${index + 1 === page ? 'active' : ''}`} onClick={(e) => handleGoPageButtonClick(e, index + 1)} aria-label={String(index + 1)}>
                        <div>{index + 1}</div>
                    </IconButton>
                )
            else if ((pageRun === 2 && !arrayPage.includes(pageRun)) || (pageRun === countPage - 1 && !arrayPage.includes(pageRun)))
                htmlPageNo.push(
                    <IconButton className={`${classes.iconButton} ${index + 1 === page ? 'active' : ''}`} aria-label={String(index + 1)}>
                        <div>...</div>
                    </IconButton>
                )
        }
        return htmlPageNo
    }

    return (
        <Box className='flex items-center justify-end gap-1' sx={{ flexShrink: 0, ml: 2.5 }}>
            {/* <IconButton className={classes.iconButton} onClick={handleFirstPageButtonClick} disabled={page === 1} aria-label="หน้าแรก">
                {theme.direction === 'rtl' ? <LastPageIcon fontSize="small" /> : <FirstPageIcon fontSize="small" />}
            </IconButton> */}
            <IconButton className={classes.iconButton} onClick={handleBackButtonClick} disabled={page === 1} aria-label="ก่อนหน้า">
                {theme.direction === 'rtl' ? <EastIcon fontSize="small" /> : <WestIcon fontSize="small" />}
            </IconButton>
            <div>{t("BUTTON.PREVIOUS")}</div>
            {renderPage(Math.ceil(count / rowsPerPage))}
            <div>{t("BUTTON.NEXT_TABLE")}</div>
            <IconButton
                sx={{}}
                className={classes.iconButton} onClick={handleNextButtonClick} disabled={page >= Math.ceil(count / rowsPerPage)} aria-label="ต่อไป">
                {theme.direction === 'rtl' ? <WestIcon fontSize="small" /> : <EastIcon fontSize="small" />}
            </IconButton>
            {/* <IconButton className={classes.iconButton} onClick={handleLastPageButtonClick} disabled={page >= Math.ceil(count / rowsPerPage)} aria-label="สุดท้าย">
                {theme.direction === 'rtl' ? <FirstPageIcon fontSize="small" /> : <LastPageIcon fontSize="small" />}
            </IconButton> */}
        </Box>
    )
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired
}

export default function TableCustom(props: any) {
    const { t } = useTranslation()
    const classes = useStyles()

    const rowCount = props.rowCount || 0
    const page = props.page || 1
    const pageLimit = props.pageLimit
    const sortBy = props.sortBy
    const sortType = props.sortType
    const headCells = props.headCells
    const rowsData = props.rowsData
    const emptyRows = 0
    const handleRequestSort = (event: any, property: any) => {
        const isAsc = sortBy === property && sortType === 'ASC'
        props.onSort(property, isAsc ? 'DESC' : 'ASC')
    }

    const createSortHandler = (property: any) => (event: any) => {
        handleRequestSort(event, property)
    }
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        props.setPageLimit(parseInt(event.target.value, 10))
        props.setPage(1)
    }

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        props.setPage(newPage)
    }

    const defaultLabelDisplayedRows = () => {
        const from = page * pageLimit - pageLimit + 1
        const to = page * pageLimit
        const count = Number(rowCount)
        // return `${numberFormat(from, 0, 0)}-${count <= to ? numberFormat(count, 0, 0) : numberFormat(to, 0, 0)} ${t('PAGINATION.LIST')} ${t('PAGINATION.FROM')} ${numberFormat(count, 0, 0)} ${t('PAGINATION.LIST')}`
        return `${t("PAGINATION.QUANTITY")} ${numberFormat(count, 0, 0)}`
    }

    return (
        <>
            <TableContainer component={Paper} className={`${props.customScroll ? 'custom-scroll' : ''}`} style={{ boxShadow: 'none', minHeight: 'calc(100% - 65px)', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
                <Table size="small" className={`${classes.table}`} sx={{ minWidth: props.tableMinWidth ? props.tableMinWidth : 650, tableLayout: props.tableFixedWidth ? 'fixed' : 'auto' }}>
                    <TableHead className={classes.header}>
                        <TableRow>
                            {props.headCells.map((headCell: any) =>
                                headCell.label === 'CHECKBOX' ? (
                                    <TableCell key={headCell.id} align="center" padding={headCell.disablePadding ? 'none' : 'none'} sx={{ width: headCell.width ? headCell.width : 'auto' }}>
                                        <Dropdown className={classes.dropdown}>
                                            <InputCheckbox onChange={headCell.onCheckAll} value="checkAll" indeterminate={headCell.indeterminate} checked={headCell.checked} />
                                            <Dropdown.Toggle variant="link" bsPrefix="p-0" className={classes.dropdownToggle} disabled={headCell.disableDropdown}>
                                                <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className={classes.dropdownToggleShow}>
                                                {headCell.values.map(
                                                    (objVal: any, i: number) =>
                                                        (objVal.option === 'STATUS_ACTIVE' && <Dropdown.Item onClick={headCell.onActive}>{objVal.label}</Dropdown.Item>) ||
                                                        (objVal.option === 'STATUS_INACTIVE' && <Dropdown.Item onClick={headCell.onInactive}>{objVal.label}</Dropdown.Item>) ||
                                                        (objVal.option === 'DIVIDER' && <Dropdown.Divider />) ||
                                                        (objVal.option === 'COMPONANT' && objVal.label) ||
                                                        (objVal.option === 'DELETE' && (
                                                            <Dropdown.Item onClick={props.onDelete}>
                                                                <FontAwesomeIcon icon={faTrashAlt} />
                                                                <span className="ml-2">{objVal.label}</span>
                                                            </Dropdown.Item>
                                                        ))
                                                )}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </TableCell>
                                ) : (
                                    <TableCell
                                        key={headCell.id}
                                        align={headCell.align ? headCell.align : headCell.id === 'updatedBy' || headCell.id === 'action' || headCell.id === 'status' || headCell.id === 'no' || false ? 'center' : headCell.id === 'price' ? 'right' : 'left'}
                                        padding={headCell.disablePadding ? 'none' : 'none'}
                                        sortDirection={sortBy === headCell.id ? sortType.toLowerCase() : false}
                                        className={headCell?.class ? classes.sticky : ''}
                                        sx={{ width: headCell.width ? headCell.width : 'auto' }}
                                        colSpan={headCell.colSpan || 1}
                                    >
                                        {headCell.sortable ? (
                                            <TableSortLabel active={sortBy === headCell.id} direction={sortBy === headCell.id ? sortType.toLowerCase() : 'asc'} onClick={createSortHandler(headCell.id)} hideSortIcon>
                                                {headCell.label || t(headCell.labelKey)}
                                                {sortBy !== headCell.id && <Code className={'m-1'} sx={{ fontSize: '16px !important', transform: 'rotate(90deg)' }} />}
                                            </TableSortLabel>
                                        ) : (
                                            headCell.label || t(headCell.labelKey)
                                        )}
                                    </TableCell>
                                )
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody className={`sm-data-table ${classes.body}`}>
                        {rowsData}
                        {!rowsData.length && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell className="text-center align-middle py-2 cell-empty" colSpan={props.headCells.length}>
                                    {props.textEmptyData ? props.textEmptyData : t('STATUS.NOT_FOUND')}
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            {!props.hidePagination && (
                <div className='flex justify-between items-center overflow-auto'>
                    <div className='w-auto'>
                        <Typography variant='body2' >
                            {defaultLabelDisplayedRows()}
                        </Typography>
                    </div>
                    <TablePagination
                        component="div"
                        className={classes.pagination}
                        rowsPerPageOptions={[5, 10, 25, 100]}
                        colSpan={headCells.length}
                        count={rowCount || 0}
                        rowsPerPage={pageLimit}
                        page={page}
                        labelRowsPerPage={t('PAGINATION.QTY_PER_PAGE')}
                        // labelRowsPerPage={t('')}
                        SelectProps={{
                            inputProps: {
                                // 'aria-label': 'จำนวนต่อหน้า'
                            },
                            native: true
                        }}
                        labelDisplayedRows={defaultLabelDisplayedRows}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        ActionsComponent={TablePaginationActions}
                        sx={{ flex: 'none' }}
                    />
                </div>
            )}
        </>
    )
}
TableCustom.propTypes = {
    page: PropTypes.number.isRequired,
    pageLimit: PropTypes.number.isRequired,
    sortBy: PropTypes.string.isRequired,
    sortType: PropTypes.oneOf(['ASC', 'DESC']).isRequired,
    rowCount: PropTypes.number || 0,
    headCells: PropTypes.array.isRequired,
    rowsData: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    setPageLimit: PropTypes.func.isRequired,
    setPage: PropTypes.func.isRequired,
    customScroll: PropTypes.bool,
    verticalAlign: PropTypes.oneOf(['top', 'middle']),
    textEmptyData: PropTypes.string,
    hidePagination: PropTypes.bool,
    tableFixedWidth: PropTypes.bool,
    tableMinWidth: PropTypes.number
}


export interface ITablePaginationMiniCustomProps {
    count: number
    page: number
    rowsPerPage: number
    rowCount: number
    pageLimit: number
    headCells: any[]
    onPageChange: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void
    setPageLimit: (val: any) => void
    setPage: (val: number) => void
}

const TablePaginationMini = styled(TablePagination)(({ theme }) => ({
    '& .MuiTablePagination-selectLabel': { display: 'none' },
    '& .MuiInputBase-root': { display: 'none' },
    [theme.breakpoints.down('sm')]: {
        '& .MuiTablePagination-displayedRows': { display: 'none' }
    },
}))

export function TablePaginationMiniCustom(props: ITablePaginationMiniCustomProps) {
    const { t } = useTranslation()
    const classes = useStyles()
    const rowCount = props.rowCount || 0
    const page = props.page || 1
    const pageLimit = props.pageLimit

    const headCells = props.headCells

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        props.setPageLimit(parseInt(event.target.value, 10))
        props.setPage(1)
    }

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        props.setPage(newPage)
    }

    const defaultLabelDisplayedRows = () => {
        const from = page * pageLimit - pageLimit + 1
        const to = page * pageLimit
        const count = Number(rowCount)
        // return `${numberFormat(from, 0, 0)} - ${count <= to ? numberFormat(count, 0, 0) : numberFormat(to, 0, 0)} ${t('PAGINATION.LIST')} ${t('PAGINATION.FROM')} ${numberFormat(count, 0, 0)} ${t('PAGINATION.LIST')}`
        return `${numberFormat(count, 0, 0)}`
    }

    return (
        <div className='grid-flow-row w-full'>
            <TablePaginationMini
                className={classes.pagination}
                rowsPerPageOptions={[10, 25, 50, 100]}
                colSpan={headCells.length}
                count={rowCount || 0}
                rowsPerPage={pageLimit}
                page={page}
                labelRowsPerPage="จำนวนต่อหน้า"
                SelectProps={{
                    inputProps: {
                        // 'aria-label': 'จำนวนต่อหน้า'
                    },
                    native: true
                }}
                labelDisplayedRows={defaultLabelDisplayedRows}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
            />
        </div>
    )
}

