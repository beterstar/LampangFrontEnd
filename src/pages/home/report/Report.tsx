import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MenuItem, Typography } from '@mui/material'
import moment from 'moment'
import { NavigateFunction, useNavigate, Link } from 'react-router-dom'

// COMPONENT
import * as styled from '../style/main.style'
import Header from '../Header'
import Navbar from '../Navbar'
import InputDatePicker from '../../../component/input/inputDatePicker'
import FilterSelect from '../../../component/select/filterSelect'
import InputTextField from '../../../component/input/inputTextField'
import SearchIcon from '@mui/icons-material/Search';
import TableCustom from '../../../component/table/tableCustom'
import TableRowCommon from '../../../component/table/TableRowCommon'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { RouteImage } from '../../../assets/routeImage'
import { ButtonContained } from '../../../component/mui-custom/MuiCustom'

type Props = {}



let mockData = [
    {
        id: 1,
        report: "รายงานบัญชีครุภัณฑ์",
        path: "/auth/report/equipment-account"
    },
    {
        id: 2,
        report: "รายงานการแสดงผลสัมฤทธิ์การดำเนินงาน",
        path: "/auth/report/operational-achievements"
    },
    {
        id: 3,
        report: "รายงานผลการใช้จ่ายงบประมาณ",
        path: "/auth/report/budget-spending"
    },
    {
        id: 4,
        report: "รายงานการแสดงผลความสำเร็จของโครงการ",
        path: "/auth/report/project-success"
    },
    {
        id: 5,
        report: "รายงานความคืบหน้าโครงการ สถานะแถบสีได้อย่างน้อย 5 ระดับ",
        path: "/auth/report/project-progress"
    },

]


const Report: React.FC<Props> = (props: Props) => {
    const { t } = useTranslation();
    const navigate: NavigateFunction = useNavigate();

    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [pageLimit, setPageLimit] = useState<number>(5);
    const [totalPage, setTotalPage] = useState<number>(2);
    const [endDate, setEndDate] = useState<string>("");
    const [fiscalYear, setFiscalYear] = useState<number>(Number);
    const [allStatus, setAllStatus] = useState<number>(Number);
    const [search, setSearch] = useState<string>("");



    const headCells = [
        {
            id: "RANK", disablePadding: false, align: 'left', label:
                <div className='flex justify-start items-center gap-1'>
                    <Typography variant='h6'>
                        {t("ลำดับ")}
                    </Typography>
                    <span><img src={RouteImage.arrowTopBottom} alt="icon" /></span>
                </div>
        },
        {
            id: "PROJECT", disablePadding: false, align: "left", label:
                <div className='flex justify-start items-center gap-1'>
                    <Typography variant='h6'>
                        {t("รายงาน")}
                    </Typography>
                    <span><img src={RouteImage.arrowTopBottom} alt="icon" /></span>
                </div>
        },
        {
            id: "STATUS", disablePadding: false, align: "left", label: ""
        },
    ];

    const renderData = (objData: any, no: any) => {
        no = page * pageLimit - pageLimit + no + 1
        const { id, report, path } =
            objData;

        const objRenderData = {
            key: id,
            id: no,
            obj: objData,
            columns: [
                { option: "TEXT", align: "left", label: id },
                {
                    option: "TEXT",
                    align: "left",
                    label: report,
                },
                {
                    option: "COMPONENT",
                    align: "center",
                    component: (
                        <div className='text-left h-full w-full flex'>
                            <Link to={path} className='flex gap-x-3'>
                                <RemoveRedEyeOutlinedIcon className='text-base_disable cursor-pointer' />
                                <Typography>{t("BUTTON.VIEW")}</Typography>
                            </Link>
                        </div >
                    ),
                },
            ],
        };
        return <TableRowCommon
            {...objRenderData}
        />;
    };



    return (
        <styled.ContainerHome>
            <Navbar />
            <styled.MainContainer>
                <Header />
                <styled.Content>
                    <section>
                        <Typography className='text-primary' variant='h4'>
                            {"รายงาน"}
                        </Typography>
                    </section>
                    <section className='w-full mt-8'>
                        <article className='grid grid-cols-12 gap-x-1 gap-y-2'>
                            <span className='col-span-12 lg:col-span-2 self-end'>
                                <InputDatePicker
                                    headingNormal
                                    inputName='startProject'
                                    inputHeight={42}
                                    dateFormat="DD/MM/YYYY"
                                    key={"END_DATE_PROJECT"}
                                    value={endDate}
                                    placeholder={t('ระบุวันที่')}
                                    onClear={() => setEndDate("")}
                                    onChange={(e: any) => {
                                        setEndDate(moment(e).format("YYYY-MM-DD"))
                                    }}
                                    allowClear
                                    heading={t("ถึงวันที่")}
                                />
                            </span>
                            <span className='col-span-12 lg:col-span-2 self-end'>
                                <FilterSelect
                                    headingNormal
                                    heading={t("ปีงบประมาณ")}
                                    renderValue={() => "ทั้งหมด"}
                                    label={t('STATUS.LABEL')}
                                    selectId="select-fiscal-year"
                                    value={fiscalYear}
                                    labelId="label-fiscal-year"
                                    onchange={(event) => {
                                        const value = event.target.value
                                        value && setFiscalYear(value)
                                    }}
                                    options={[
                                        <MenuItem key="1" value={1}>
                                            {t('2555')}
                                        </MenuItem>,
                                        <MenuItem key="2" value={2}>
                                            {t('2554')}
                                        </MenuItem>
                                    ]}
                                />
                            </span>
                            <span className='col-span-12 lg:col-span-5 flex justify-start items-end gap-x-1 gap-y-2 flex-wrap lg:flex-nowrap'>
                                <div className='flex-1'>
                                    <FilterSelect
                                        headingNormal
                                        heading={t("สถานะ")}
                                        renderValue={() => "ทั้งหมด"}
                                        label={t('STATUS.LABEL')}
                                        selectId="select-fiscal-year"
                                        value={allStatus}
                                        labelId="label-fiscal-year"
                                        onchange={(event) => {
                                            const value = event.target.value
                                            value && setAllStatus(value)
                                        }}
                                        options={[
                                            <MenuItem key="1" value={1}>
                                                {t('2555')}
                                            </MenuItem>,
                                            <MenuItem key="2" value={2}>
                                                {t('2554')}
                                            </MenuItem>
                                        ]}
                                    />
                                </div>
                                <div className='w-full lg:w-auto'>
                                    <InputTextField
                                        headingNormal
                                        onchange={(e: any) => setSearch(e.target.value)}
                                        value={search}
                                        heading={t("ค้นหาตามชื่อเอกสาร")}
                                        onFocus={() => setIsFocused(true)}
                                        onblur={() => setIsFocused(false)}
                                    />
                                </div>
                                <div>
                                    <ButtonContained
                                        startIcon={<SearchIcon />}
                                        sx={{ maxWidth: "83px", height: "42px" }}>
                                        <Typography variant='body1'>
                                            ค้นหา
                                        </Typography>
                                    </ButtonContained>
                                </div>
                            </span>
                        </article>
                    </section>
                    <section className='w-full mt-3'>
                        <TableCustom
                            customScroll
                            page={page}
                            pageLimit={pageLimit}
                            sortBy=""
                            sortType="ASC"
                            headCells={headCells}
                            rowCount={totalPage}
                            rowsData={mockData && mockData.map((data: any, i: any) => {
                                return renderData(data, i)
                            })}
                            onSort={() => { }}
                            setPageLimit={(value: number) => setPageLimit(value)}
                            setPage={(value: number) => setPage(value)}
                            hidePagination
                        />
                    </section>
                </styled.Content>
            </styled.MainContainer>

        </styled.ContainerHome>
    )
}

export default Report
