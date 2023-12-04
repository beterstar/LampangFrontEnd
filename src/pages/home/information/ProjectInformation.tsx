import React, { useState } from 'react'
import { MenuItem, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { NavigateFunction, useNavigate } from 'react-router-dom'


// COMPONENT
import SearchIcon from '@mui/icons-material/Search';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import * as styled from '../style/main.style'
import Header from '../Header'
import Navbar from '../Navbar'
import { colors } from '../../../constants/colors'
import { ButtonContained, ButtonCustom, ButtonOutlined } from '../../../component/mui-custom/MuiCustom'
import { RouteImage } from '../../../assets/routeImage'
import moment from 'moment'
import InputDatePicker from '../../../component/input/inputDatePicker'
import FilterSelect from '../../../component/select/filterSelect'
import InputTextField from '../../../component/input/inputTextField'
import TableCustom from '../../../component/table/tableCustom';
import TableRowCommon from '../../../component/table/TableRowCommon';

let mockData = [
    {
        id: 1,
        project: "โครงการปรับปรุงสวนสาธารณะประตูเวียง",
        budget: 20000,
        status: "บันทึกร่าง"
    },
    {
        id: 2,
        project: "โครงการปรับปรุงสวนสาธารณะเขลางค์นคร",
        budget: 3000,
        status: "บันทึกร่าง"
    },
]

const ProjectInformation: React.FC = () => {
    const { t } = useTranslation();
    let lang = 'th'

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
            id: "PROJECT", disablePadding: false, align: "center", label:
                <div className='flex justify-center items-center gap-1'>
                    <Typography variant='h6'>
                        {t("โครงการ")}
                    </Typography>
                    <span><img src={RouteImage.arrowTopBottom} alt="icon" /></span>
                </div>
        },
        {
            id: "BUDGET", disablePadding: false, align: "left", label:
                <div className='flex justify-center items-center gap-1'>
                    <Typography variant='h6'>
                        {t("งบประมาณ")}
                    </Typography>
                    <span><img src={RouteImage.arrowTopBottom} alt="icon" /></span>
                </div>

        },
        {
            id: "BUDGET",
            disablePadding: false,
            align: "left", label: <Typography variant='h6'>{t("สถานะ")}</Typography>
        },
        { id: "BUDGET", disablePadding: false, align: "left", label: "" },
    ];

    const renderData = (objData: any, no: any) => {
        no = page * pageLimit - pageLimit + no + 1
        const { id, project, budget, status } =
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
                    label: project,
                },
                {
                    option: "PRICE",
                    align: "center",
                    label: budget,
                },
                {
                    option: "COMPONENT",
                    align: "left",
                    component:
                        <div className='relative right-0 top-0'>
                            <Typography variant='body1'>
                                {status}
                            </Typography>
                        </div>
                },
                {
                    option: "COMPONENT",
                    align: "right",
                    width: 50,
                    component: <DeleteOutlineIcon />
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
                                {t("ข้อมูลโครงการ")}
                            </Typography>
                        </span>
                        <span>
                            <ButtonCustom
                                onClick={() => navigate('/auth/project-information/create')}
                                startIcon={<img src={RouteImage.plusButton} />}
                                style={{
                                    width: "139px",
                                    border: `1px solid ${colors.lampang_primary}`,
                                    color: colors.lampang_primary,
                                    backgroundColor: colors.lampang_sub_primary
                                }}
                            >
                                {t("สร้างโครงการ")}
                            </ButtonCustom>
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
                    <section className='w-full mt-3'>
                        <TableCustom
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
                            tableMinWidth={1024}
                        // tableFixedWidth
                        />
                    </section>
                </styled.Content>
            </styled.MainContainer>
        </styled.ContainerHome >
    )
}

export default ProjectInformation