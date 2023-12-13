import React, { useState } from 'react'
import Header from '../../Header'
import * as styled from '../../style/main.style'
import Navbar from '../../Navbar'
import { useTranslation } from 'react-i18next'
import { MenuItem, Typography, Checkbox } from '@mui/material'
import InputDatePicker from '../../../../component/input/inputDatePicker'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import moment from 'moment'
import FilterSelect from '../../../../component/select/filterSelect'
import InputTextField from '../../../../component/input/inputTextField'
import TableCustom from '../../../../component/table/tableCustom'
import { RouteImage } from '../../../../assets/routeImage'
import TableRowCommon from '../../../../component/table/TableRowCommon'
import { motion } from 'framer-motion'
import LabelCustom from '../../../../component/label/LabelCustom'
import { ButtonOutlined } from '../../../../component/mui-custom/MuiCustom'
import HeaderTopicTable from '../../../../component/header-table/HeaderTopicTable'


let mockData = [
    {
        id: 1,
        fiscalYear: "2556",
        plan: "แผนงานอุตสาหกรรมและการโยธา",
        period: "ก.พ. 66 - เม.ย. 66",
        agency: "เทศบาลนครลำปาง",
        project: "โครงการปรับปรุงถนนและทางเท้าถนนบุญวาทย์(ค่ายทหาร) ตั้งแต่บ้านเลขที่ 12/7 จนสุดเขตเทศบาลนครลำปาง",
        receive: 1300000,
        budget: 7877300,
        remaining: 300000,
        periodTwo: "22 ก.ย. 65",
        performance: "PENDING",
        operationPlan: "DISABLE",
        reason: "มีภารกิจจากกรณีฝนตกหนักและน้ำท่วม ต้นไม้ล้ม วาตภัย อุทกภัย"
    },
    {
        id: 2,
        fiscalYear: "2556",
        plan: "แผนงานอุตสาหกรรมและการโยธา",
        period: "ก.พ. 66 - เม.ย. 66",
        agency: "เทศบาลนครลำปาง",
        project: "โครงการปรับปรุงถนนและทางเท้าถนนบุญวาทย์(ค่ายทหาร) ตั้งแต่บ้านเลขที่ 12/7 จนสุดเขตเทศบาลนครลำปาง",
        receive: 130000,
        budget: 78700,
        remaining: 300000,
        periodTwo: "22 ก.ย. 65",
        performance: "PENDING",
        operationPlan: "DISABLE",
        reason: "มีภารกิจจากกรณีฝนตกหนักและน้ำท่วม ต้นไม้ล้ม วาตภัย อุทกภัย"
    },

]


const EquipmentAccount = () => {
    const { t } = useTranslation();
    const navigate: NavigateFunction = useNavigate();

    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [pageLimit, setPageLimit] = useState<number>(5);
    const [totalPage, setTotalPage] = useState<number>(2);
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");
    const [fiscalYear, setFiscalYear] = useState<number>(Number);
    const [search, setSearch] = useState<string>("");

    const [valueProps, setValueProps] = useState<number[]>([]);


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
            id: "FISCAL_YEAR", disablePadding: false, align: "center", label: <HeaderTopicTable minWidth='145px' text='ปีงบประมาณ' align='center' />
        },
        {
            id: "PLAN", disablePadding: false, align: "left", label: <HeaderTopicTable minWidth='134px' text='แผนงาน' align='center' />
        },
        {
            id: "PERIOD", disablePadding: false, align: "left", label: <HeaderTopicTable minWidth='118px' text='ระยะเวลา' align='center' />
        },
        {
            id: "AGENCY", disablePadding: false, align: "center", label: <HeaderTopicTable minWidth='160px' text='หน่วยงาน' align='center' />
        },
        {
            id: "PROJECT", disablePadding: false, align: "center", label: <HeaderTopicTable minWidth='170px' text='โครงการ' align='center' />
        },
        {
            id: "RECEIVE", disablePadding: false, align: "center", label: <HeaderTopicTable minWidth='170px' text='ได้รับ' align='center' />
        },
        {
            id: "DISBURSEMENT_BUDGET", disablePadding: false, align: "center", label: <HeaderTopicTable minWidth='170px' text='เบิกจ่าย' align='center' />
        },
        {
            id: "REMAINING", disablePadding: false, align: "center", label: <HeaderTopicTable minWidth='170px' text='คงเหลือ' align='center' />
        },
        {
            id: "PERIOD_TWO", disablePadding: false, align: "left", label: <HeaderTopicTable minWidth='170px' text='ระยะเวลา' align='center' />
        },
        {
            id: "PLAN", disablePadding: false, align: "left", label: <HeaderTopicTable minWidth='170px' text='ผลการดำเนินงาน' align='center' />
        },
        {
            id: "PLAN", disablePadding: false, align: "left", label: <HeaderTopicTable minWidth='170px' text='แผนการดำเนินงาน' align='center' />
        },
        {
            id: "PLAN", disablePadding: false, align: "left", label: <HeaderTopicTable minWidth='300px' text='เหตุผล' align='center' />
        },
    ];

    const renderData = (objData: any, no: any) => {
        no = page * pageLimit - pageLimit + no + 1
        const { id, fiscalYear, plan, period, agency, project, receive, budget, remaining, periodTwo, performance, operationPlan,reason } =
            objData;

        const objRenderData = {
            key: no,
            id: id,
            obj: objData,
            columns: [
                { option: "TEXT", align: "left", label: id },
                {
                    option: "TEXT",
                    align: "center",
                    label: fiscalYear,
                },
                {
                    option: "TEXT",
                    align: "left",
                    label: plan,
                },
                {
                    option: "TEXT",
                    align: "center",
                    label: period,
                },
                {
                    option: "TEXT",
                    align: "center",
                    label: agency,
                },
                {
                    option: "TEXT",
                    align: "left",
                    label: project,
                },
                {
                    option: "PRICE",
                    align: "center",
                    label: receive,
                },
                {
                    option: "PRICE",
                    align: "center",
                    label: budget,
                },
                {
                    option: "PRICE",
                    align: "center",
                    label: remaining,
                },
                {
                    option: "TEXT",
                    align: "center",
                    label: periodTwo,
                },
                {
                    option: "TEXT",
                    align: "center",
                    label:
                        <ul>
                            {performance === "PENDING" && <li className='text-text_primary'><Typography >{"อยู่ระหว่างดำเนินการ"}</Typography></li>}
                            {performance === "DISABLE" && <li className='text-danger'><Typography >{"ไม่เป็นไปตามแผน"}</Typography></li>}
                            {performance === "SUCCESS" && <li className='text-danger'><Typography >{"เสร็จสมบูรณ์"}</Typography></li>}
                        </ul>
                },
                {
                    option: "TEXT",
                    align: "center",
                    label:
                        <ul>
                            {operationPlan === "PENDING" && <li className='text-text_primary'><Typography >{"อยู่ระหว่างดำเนินการ"}</Typography></li>}
                            {operationPlan === "DISABLE" && <li className='text-danger'><Typography >{"ไม่เป็นไปตามแผน"}</Typography></li>}
                            {operationPlan === "SUCCESS" && <li className='text-danger'><Typography >{"เสร็จสมบูรณ์"}</Typography></li>}
                        </ul>
                },
                {
                    option: "TEXT",
                    align: "center",
                    label: reason,
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
                    <motion.div
                        initial={{ x: 100 }}
                        animate={{ x: 0 }}
                        transition={{ ease: "backInOut", stiffness: 100 }}
                        className='w-full h-auto'>
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
                                        value={startDate}
                                        placeholder={t('ระบุวันที่')}
                                        onClear={() => setEndDate("")}
                                        onChange={(e: any) => {
                                            setStartDate(moment(e).format("YYYY-MM-DD"))
                                        }}
                                        allowClear
                                        heading={t("ตั้งแต่วันที่")}
                                    />
                                </span>
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
                                <span className='col-span-12 lg:col-span-4 flex justify-start items-end gap-x-1 gap-y-2 flex-wrap lg:flex-nowrap'>
                                    <div className='flex-1'>
                                        <FilterSelect
                                            headingNormal
                                            heading={t("ยุทธศาสตร์")}
                                            renderValue={() => "ทั้งหมด"}
                                            label={t('STATUS.LABEL')}
                                            selectId="select-fiscal-year"
                                            value={[]}
                                            labelId="label-fiscal-year"
                                            multiple
                                            onchange={(event) => {
                                                const value = event.target.value
                                                value && setValueProps(value)
                                            }}
                                            options={[
                                                <MenuItem key="1" value={1}>
                                                    <Checkbox />ทั้งหมด
                                                </MenuItem>,
                                                <MenuItem key="1" value={1}>
                                                    <Checkbox />ยุทธศาสตร์ที่ 1
                                                </MenuItem>,
                                                <MenuItem key="2" value={2}>
                                                    <Checkbox />ยุทธศาสตร์ที่ 2
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
                                </span>
                                <span className='col-span-12 md:col-span12 lg:col-span-2 flex justify-start items-center gap-1'>
                                    <div className='flex-1 self-end'>
                                        <FilterSelect
                                            headingNormal
                                            heading={t("รูปแบบการพิมพ์")}
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
                                                    {t('รายเดือน')}
                                                </MenuItem>,
                                                <MenuItem key="2" value={2}>
                                                    {t('รายวัน')}
                                                </MenuItem>
                                            ]}
                                        />
                                    </div>
                                    <div className='w-auto flex flex-col self-end gap-2'>
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
                                    </div>
                                </span>

                            </article>
                        </section>
                        <section className='w-full my-4 flex justify-between items-center'>
                            <span>
                                <LabelCustom
                                    text='ยุทธศาสตร์ที่ 1 พัฒนาระบบนิเวศของเมืองเพื่อไปสู่เมืองน่าอยู่ (Livable City)'
                                />
                            </span>
                            <span>
                                <button>
                                    <img src={RouteImage.downArrow} alt="icons" />
                                </button>
                            </span>
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
                    </motion.div>
                </styled.Content>
            </styled.MainContainer>

        </styled.ContainerHome>
    )
}

export default EquipmentAccount
