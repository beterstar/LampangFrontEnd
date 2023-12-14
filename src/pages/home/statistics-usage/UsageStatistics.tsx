

import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MenuItem, Typography } from '@mui/material'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import moment from 'moment'

// COMPONENT
import * as styled from '../style/main.style'
import Header from '../Header'
import Navbar from '../Navbar'
import { RouteImage } from '../../../assets/routeImage'
import TableRowCommon from '../../../component/table/TableRowCommon'
import TableCustom from '../../../component/table/tableCustom'
import { ButtonContained, ButtonOutlined } from '../../../component/mui-custom/MuiCustom'
import InputDatePicker from '../../../component/input/inputDatePicker'
import FilterSelect from '../../../component/select/filterSelect'
import InputTextField from '../../../component/input/inputTextField'
import SearchIcon from '@mui/icons-material/Search';

let mockData = [
    {
        id: 1,
        date: "01/08/2566 11.59.59 น.",
        ip_address: "115.87.198.91",
        activity: "/api/v1.0/auth/logfile",
        user: "ปิยาพร รัตนาอาทิตย์",
        way: "GET",
        service: "Chrome"
    },
    {
        id: 2,
        date: "01/08/2566 11.59.59 น.",
        ip_address: "115.87.198.91",
        activity: "/api/v1.0/auth/logfile",
        user: "ปิยาพร รัตนาอาทิตย์",
        way: "GET",
        service: "Chrome"
    },
    {
        id: 3,
        date: "01/08/2566 11.59.59 น.",
        ip_address: "115.87.198.91",
        activity: "/api/v1.0/auth/logfile",
        user: "ปิยาพร รัตนาอาทิตย์",
        way: "GET",
        service: "Chrome"
    },
    {
        id: 4,
        date: "01/08/2566 11.59.59 น.",
        ip_address: "115.87.198.91",
        activity: "/api/v1.0/auth/logfile",
        user: "ปิยาพร รัตนาอาทิตย์",
        way: "GET",
        service: "Chrome"
    },
    {
        id: 5,
        date: "01/08/2566 11.59.59 น.",
        ip_address: "115.87.198.91",
        activity: "/api/v1.0/auth/logfile",
        user: "ปิยาพร รัตนาอาทิตย์",
        way: "GET",
        service: "Chrome"
    },
]


const UsageStatistics: React.FC = () => {
    const { t } = useTranslation();

    const navigate: NavigateFunction = useNavigate();

    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [pageLimit, setPageLimit] = useState<number>(5);
    const [totalPage, setTotalPage] = useState<number>(1);
    const [endDate, setEndDate] = useState<string>("");
    const [fiscalYear, setFiscalYear] = useState<number>(Number);
    const [allStatus, setAllStatus] = useState<number>(Number);
    const [search, setSearch] = useState<string>("");


    const headCells = [
        {
            id: "RANK", disablePadding: false, align: 'center', label:
                <div className='flex min-w-[98px] justify-center items-center gap-1'>
                    <Typography variant='h6'>
                        {t("ลำดับ")}
                    </Typography>
                    <span><img src={RouteImage.arrowTopBottom} alt="icon" /></span>
                </div>
        },
        {
            id: "DATE", disablePadding: false, align: "center", label:
                <div className='min-w-[195px] flex justify-center items-center gap-1'>
                    <Typography variant='h6'>
                        {t("วันที่")}
                    </Typography>
                    <span><img src={RouteImage.arrowTopBottom} alt="icon" /></span>
                </div>
        },
        {
            id: "IP_ADDRESS", disablePadding: false, align: "left", label:
                <div className='min-w-[141px] flex justify-center items-center gap-1'>
                    <Typography variant='h6'>
                        {t("IP Address")}
                    </Typography>
                    <span><img src={RouteImage.arrowTopBottom} alt="icon" /></span>
                </div>

        },
        {
            id: "ACTIVE_ACTIVITY", disablePadding: false, align: "left", label:
                <div className='min-w-[257px] flex justify-center items-center gap-1'>
                    <Typography variant='h6'>
                        {t("กิจกรรมที่ใช้งาน")}
                    </Typography>
                    <span><img src={RouteImage.arrowTopBottom} alt="icon" /></span>

                </div>

        },
        {
            id: "USER", disablePadding: false, align: "left", label:
                <div className='min-w-[195px] flex justify-center items-center gap-1'>
                    <Typography variant='h6'>
                        {t("ผู้ใช้งาน")}
                    </Typography>
                    <span><img src={RouteImage.arrowTopBottom} alt="icon" /></span>
                </div>

        },
        {
            id: "WAY", disablePadding: false, align: "left", label:
                <div className='min-w-[140px] flex justify-left pl-4 items-center gap-1'>
                    <Typography variant='h6'>
                        {t("วิธีการ")}
                    </Typography>
                    <span><img src={RouteImage.arrowTopBottom} alt="icon" /></span>
                </div>
        },
        {
            id: "SERVICE_POINT", disablePadding: false, align: "left", label:
                <div className='min-w-[140px] flex justify-left pl-4 items-center gap-1'>
                    <Typography variant='h6'>
                        {t("จุดบริการ")}
                    </Typography>
                    <span><img src={RouteImage.arrowTopBottom} alt="icon" /></span>
                </div>
        },
    ];

    const renderData = (objData: any, no: any) => {
        no = page * pageLimit - pageLimit + no + 1
        const { id, date, ip_address, activity, user, way, service } =
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
                    label: date,
                },
                {
                    option: "TEXT",
                    align: "center",
                    label: ip_address,
                },
                {
                    option: "TEXT",
                    align: "center",
                    disablePadding: true,
                    label: activity
                },
                {
                    option: "TEXT",
                    align: "center",
                    label: user,
                },
                {
                    option: "TEXT",
                    align: "center",
                    label: way,
                },
                {
                    option: "TEXT",
                    align: "center",
                    label: service,
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
                    <section className='w-full gap-3 flex items-start md:items-center flex-col  md:flex-row justify-between'>
                        <span>
                            <Typography className='text-primary' variant='h4'>
                                {t("สถิติการใช้งาน")}
                            </Typography>
                        </span>
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
                            {/* space */}
                            <span className='col-span-1'></span>
                            <span className='col-span-12 lg:col-span-2 flex justify-end gap-1 overflow-hidden'>
                                <span className='flex-1 self-end'>
                                    <FilterSelect
                                        headingNormal
                                        heading={t("รูปแบบการพิมพ์")}
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
                                </span>
                                <span className='w-auto flex flex-col self-end gap-2'>
                                    <Typography variant='subtitle1'>
                                        {t("ส่งออกเอกสาร")}
                                    </Typography>
                                    <ButtonOutlined
                                        endIcon={<img src={RouteImage.download} />}
                                        sx={{
                                            width: "100%",
                                            minWidth: "auto",
                                            maxWidth: "93px",
                                            height: "43.5px",
                                            backgroundColor: "inherit",
                                            color: "#000",
                                            border: `1px solid #E5E5E7`,
                                            '&:hover': {
                                                backgroundColor: "inherit"
                                            }
                                        }}
                                    >
                                        <Typography variant='body1'>
                                            Excel
                                        </Typography>
                                    </ButtonOutlined>
                                </span>
                            </span>
                        </article>
                    </section>

                    <section className='w-full mt-3' >
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
                        />
                    </section>
                </styled.Content>
            </styled.MainContainer>

        </styled.ContainerHome>
    )
}

export default UsageStatistics
