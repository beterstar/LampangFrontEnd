import Header from '../../Header'
import * as styled from '../../style/main.style'
import Navbar from '../../Navbar'
import { useTranslation } from 'react-i18next'
import { MenuItem, Typography } from '@mui/material'
import InputDatePicker from '../../../../component/input/inputDatePicker'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import moment from 'moment'
import FilterSelect from '../../../../component/select/filterSelect'
import InputTextField from '../../../../component/input/inputTextField'
import TableCustom from '../../../../component/table/tableCustom'
import { RouteImage } from '../../../../assets/routeImage'
import TableRowCommon from '../../../../component/table/TableRowCommon'
import { motion } from 'framer-motion'
import { ButtonOutlined } from '../../../../component/mui-custom/MuiCustom'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { useState } from 'react'


let mockData = [
    {
        id: 1,
        rank: 1,
        report: "โครงการทั้งหมด",
        count: 200
    },
    {
        id: 2,
        rank: 1.1,
        report: "โครงการที่ดำเนินการแล้วเสร็จ",
        count: 120
    },
    {
        id: 3,
        rank: 1.2,
        report: "โครงการที่อยู่ระหว่างดำเนินการ",
        count: 20
    },
    {
        id: 4,
        rank: 1.3,
        report: "โครงการที่ยังไม่ได้ดำเนินการ",
        count: 182
    },
    {
        id: 5,
        rank: 1.4,
        report: "โครงการที่ยกเลิก",
        count: 29
    },
    {
        id: 6,
        rank: 2,
        report: "ความสำเร็จตามระยะเวลาของแผนการคำเนินงาน",
        count: 20
    },

]


const ProjectSuccess = () => {
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
            id: "COUNT", disablePadding: false, align: "right", label:
                <Typography className='p-3' variant='h6'>
                    {t("จำนวน")}
                </Typography>
        },
    ];


    const renderData = (objData: any, no: any) => {
        no = page * pageLimit - pageLimit + no + 1
        const { id, rank, report, count } =
            objData;

        const objRenderData = {
            key: id,
            id: no,
            obj: objData,
            columns: [
                { option: "TEXT", align: "left", label: rank },
                {
                    option: "TEXT",
                    align: "left",
                    label: report,
                },
                {
                    option: "TEXT",
                    align: "right",
                    label: count,
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
                                {"รายงานการแสดงผลความสำเร็จของโครงการ"}
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
                                            heading={t("สถานะ")}
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

export default ProjectSuccess
