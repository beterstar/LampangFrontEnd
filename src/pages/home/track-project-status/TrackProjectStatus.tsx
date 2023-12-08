import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MenuItem, Typography } from '@mui/material'
import { styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { RouteImage } from '../../../assets/routeImage'

// COMPONENT
import { ButtonOutlined } from '../../../component/mui-custom/MuiCustom'
import Header from '../Header'
import Navbar from '../Navbar'
import * as styles from '../style/main.style'
import InputTextField from '../../../component/input/inputTextField'
import FilterSelect from '../../../component/select/filterSelect'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import TableRowCommon from '../../../component/table/TableRowCommon'
import TableCustom from '../../../component/table/tableCustom'
import RangeCustom from '../../../component/ranges/RangeCustom'

const FilterBox = styled('section')({
    width: "100%",
    height: "auto",
})

let mockData = [
    {
        id: 1,
        project: "โครงการปรับปรุงสวนสาธารณะประตูเวียง",
        budget: 20000,
        disbursement_budget: 20000,
        subcategories: "-",
        work_period: "2 งวด",
        date: "11/10/2566 - 30/11/2567",
        agency: "เทศบาลนครลำปาง",
        percentage: 20,
        percentageName: "การออกแบบ/TOR"
    },
    {
        id: 2,
        project: "โครงการปรับปรุงสวนสาธารณะเขลางค์นคร",
        budget: 3000,
        disbursement_budget: 10000,
        subcategories: "-",
        work_period: "3 งวด",
        date: "11/10/2566 - 30/11/2567",
        agency: "เทศบาลนครลำปาง",
        percentage: 45,
        percentageName: "การออกแบบ/TOR"
    },
]


const TrackProjectStatus: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [page, setPage] = useState<number>(1);
    const [pageLimit, setPageLimit] = useState<number>(5);
    const [totalPage, setTotalPage] = useState<number>(5);

    const [fiscalYear, setFiscalYear] = useState<number>(Number);
    const [agency, setAgency] = useState<number>(Number);
    const [search, setSearch] = useState<string>("");
    const [strategic, setStrategic] = useState<number>(Number);
    const [tactics, setTactics] = useState<number>(Number);
    const [printFormat, setPrintFormat] = useState<number>(Number);
    const [plan, setPlan] = useState<number>(Number);
    const [typeProject, setTypeProject] = useState<number>(Number);
    const [typeOfMissionGroup, setTypeOfMissionGroup] = useState<number>(Number);
    const [budgetSource, setBudgetSource] = useState<number>(Number);
    const [projectStatus, setProjectStatus] = useState<number>(Number);

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
                <div className='min-w-[587px] flex justify-center items-center gap-1'>
                    <Typography variant='h6'>
                        {t("โครงการ")}
                    </Typography>
                    <span><img src={RouteImage.arrowTopBottom} alt="icon" /></span>
                </div>
        },
        {
            id: "BUDGET", disablePadding: false, align: "left", label:
                <div className='min-w-[135px] flex justify-center items-center gap-1'>
                    <Typography variant='h6'>
                        {t("งบประมาณ")}
                    </Typography>
                    <span><img src={RouteImage.arrowTopBottom} alt="icon" /></span>
                </div>

        },
        {
            id: "DISBURSEMENT_BUDGET", disablePadding: false, align: "left", label:
                <div className='min-w-[130px] flex justify-center items-center gap-1'>
                    <Typography variant='h6'>
                        {t("งบเบิกจ่าย")}
                    </Typography>
                    <span><img src={RouteImage.arrowTopBottom} alt="icon" /></span>
                </div>

        },
        {
            id: "SUBCATEGORIES", disablePadding: false, align: "left", label:
                <div className='min-w-[130px] flex justify-center items-center gap-1'>
                    <Typography variant='h6'>
                        {t("หมวดย่อย")}
                    </Typography>
                    <span><img src={RouteImage.arrowTopBottom} alt="icon" /></span>
                </div>

        },
        {
            id: "WORK_PERIOD", disablePadding: false, align: "left", label:
                <div className='min-w-[133px] flex justify-center items-center gap-1'>
                    <Typography variant='h6'>
                        {t("งวดงาน")}
                    </Typography>
                    <span><img src={RouteImage.arrowTopBottom} alt="icon" /></span>
                </div>

        },
        {
            id: "DATE", disablePadding: false, align: "left", label:
                <div className='min-w-[200px] flex justify-center items-center gap-1'>
                    <Typography variant='h6'>
                        {t("ระยะเวลาโครงการ")}
                    </Typography>
                    <span><img src={RouteImage.arrowTopBottom} alt="icon" /></span>
                </div>

        },
        {
            id: "AGENCY", disablePadding: false, align: "left", label:
                <div className='min-w-[220px] flex justify-center items-center gap-1'>
                    <Typography variant='h6'>
                        {t("หน่วยงาน")}
                    </Typography>
                    <span><img src={RouteImage.arrowTopBottom} alt="icon" /></span>
                </div>

        },
        {
            id: "STATUS", class: true, disablePadding: true, align: "left", label:
                <div className='min-w-[100px] md:min-w-[312px] flex justify-left pl-4 items-center gap-1'>
                    <Typography variant='h6'>
                        {t("สถานะ")}
                    </Typography>
                    <span><img src={RouteImage.arrowTopBottom} alt="icon" /></span>
                </div>
        },
    ];

    const renderData = (objData: any, no: any) => {
        no = page * pageLimit - pageLimit + no + 1
        const { id, project, budget, disbursement_budget, subcategories, work_period, date, agency, percentage, percentageName } =
            objData;

        const objRenderData = {
            key: id,
            id: no,
            obj: objData,
            columns: [
                {
                    option: "TEXT", align: "left", label: id
                },
                {
                    option: "TEXT", align: "left", label: project,
                },
                {
                    option: "PRICE", align: "center", label: budget,
                },
                {
                    option: "PRICE", align: "center", label: disbursement_budget,
                },
                {
                    option: "TEXT", align: "center", label: subcategories,
                },
                {
                    option: "TEXT", align: "center", label: work_period,
                },
                {
                    option: "TEXT", align: "center", label: date,
                },
                {
                    option: "TEXT", align: "center", label: agency,
                },
                {
                    option: "COMPONENT",
                    align: "center",
                    class: true,
                    component: (
                        <div className='w-full min-w-[100px] md:min-w-[312px] flex flex-col md:flex-row gap-y-3'>
                            <span className='text-base_secondary flex items-center flex-col mt-4 w-full'>
                                <RangeCustom num={percentage} />
                                <span>
                                    <Typography variant='subtitle1'>
                                        {percentageName}
                                    </Typography>
                                </span>
                            </span>
                            <span className='flex items-center gap-x-3'>
                                <RemoveRedEyeOutlinedIcon onClick={() => navigate('/auth/project-status/view', { state: id })} className='text-base_disable cursor-pointer' />
                                <button>
                                    <img src={RouteImage.editIcon} style={{ maxWidth: 24 }} alt='icons' />
                                </button>
                                <button>
                                    <img src={RouteImage.delete} style={{ maxWidth: 24 }} alt='icons' />
                                </button>
                            </span>
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
        <styles.ContainerHome>
            <Navbar />
            <styles.MainContainer>
                <Header />
                <styles.Content>
                    <section>
                        <Typography className='text-primary' variant='h4'>
                            {t("ติดตามสถานะโครงการ")}
                        </Typography>
                    </section>
                    {/* ROW 1 */}
                    <FilterBox className='grid grid-cols-10 gap-1 mt-8'>
                        <article className='col-span-10 md:col-span-5 lg:col-span-2'>
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
                        </article>
                        <article className='col-span-10 md:col-span-5 lg:col-span-2'>
                            <FilterSelect
                                headingNormal
                                heading={t("หน่วยงาน")}
                                renderValue={() => "ทั้งหมด"}
                                label={t('STATUS.LABEL')}
                                selectId="select-agency"
                                value={agency}
                                labelId="label-agency"
                                onchange={(event) => {
                                    const value = event.target.value
                                    value && setAgency(value)
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
                        </article>
                        <article className='col-span-10 md:col-span-5 lg:col-span-2'>
                            <InputTextField
                                value={search}
                                onchange={(e: any) => setSearch(e.target.value)}
                                headingNormal
                                heading='ค้นหาตามชื่อโครงการ'
                            />
                        </article>
                        <article className='col-span-10 md:col-span-5 lg:col-span-2'>
                            <FilterSelect
                                headingNormal
                                heading={t("ยุทธศาสตร์")}
                                renderValue={() => "ทั้งหมด"}
                                label={t('STATUS.LABEL')}
                                selectId="select-strategic"
                                value={strategic}
                                labelId="label-strategic"
                                onchange={(event) => {
                                    const value = event.target.value
                                    value && setStrategic(value)
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
                        </article>
                        <article className='col-span-10 md:col-span-5 lg:col-span-2'>
                            <FilterSelect
                                headingNormal
                                heading={t("กลยุทธ์")}
                                renderValue={() => "ทั้งหมด"}
                                label={t('STATUS.LABEL')}
                                selectId="select-tactics"
                                value={tactics}
                                labelId="label-tactics"
                                onchange={(event) => {
                                    const value = event.target.value
                                    value && setTactics(value)
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
                        </article>
                    </FilterBox>

                    {/* ROW 2 */}
                    <FilterBox className='grid grid-cols-10 mt-1 gap-1'>
                        <article className='col-span-10 md:col-span-5 lg:col-span-2'>
                            <FilterSelect
                                headingNormal
                                heading={t("แผนงาน")}
                                renderValue={() => "ทั้งหมด"}
                                label={t('STATUS.LABEL')}
                                selectId="select-plan"
                                value={plan}
                                labelId="label-plan"
                                onchange={(event) => {
                                    const value = event.target.value
                                    value && setPlan(value)
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
                        </article>
                        <article className='col-span-10 md:col-span-5 lg:col-span-2'>
                            <FilterSelect
                                headingNormal
                                heading={t("ประเภทโครงการ")}
                                renderValue={() => "ทั้งหมด"}
                                label={t('')}
                                selectId="select-typeProject"
                                value={typeProject}
                                labelId="label-typeProject"
                                onchange={(event) => {
                                    const value = event.target.value
                                    value && setTypeProject(value)
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
                        </article>
                        <article className='col-span-10 md:col-span-5 lg:col-span-2'>
                            <FilterSelect
                                headingNormal
                                heading={t("ประเภทกลุ่มภารกิจ (Clusters)")}
                                renderValue={() => "ทั้งหมด"}
                                label={t('')}
                                selectId="select-typeOfMissionGroup"
                                value={typeOfMissionGroup}
                                labelId="label-typeOfMissionGroup"
                                onchange={(event) => {
                                    const value = event.target.value
                                    value && setTypeOfMissionGroup(value)
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
                        </article>
                        <article className='col-span-10 md:col-span-5 lg:col-span-2'>
                            <FilterSelect
                                headingNormal
                                heading={t("แหล่งที่มางบประมาณ")}
                                renderValue={() => "ทั้งหมด"}
                                label={t('')}
                                selectId="select-typeOfMissionGroup"
                                value={budgetSource}
                                labelId="label-typeOfMissionGroup"
                                onchange={(event) => {
                                    const value = event.target.value
                                    value && setBudgetSource(value)
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
                        </article>
                        <article className='col-span-10 md:col-span-5 lg:col-span-2'>
                            <FilterSelect
                                headingNormal
                                heading={t("สถานะโครงการ")}
                                renderValue={() => "ทั้งหมด"}
                                label={t('')}
                                selectId="select-typeOfMissionGroup"
                                value={projectStatus}
                                labelId="label-typeOfMissionGroup"
                                onchange={(event) => {
                                    const value = event.target.value
                                    value && setProjectStatus(value)
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
                        </article>
                    </FilterBox>
                    {/* ROW 3 */}
                    <FilterBox className='mt-1'>
                        <article className='col-span-12 flex justify-start md:justify-end items-center gap-1'>
                            <span className='w-full max-w-[141px] self-end'>
                                <FilterSelect
                                    headingNormal
                                    heading={t("รูปแบบการพิมพ์")}
                                    renderValue={() => "ทั้งหมด"}
                                    label={t('STATUS.LABEL')}
                                    selectId="select-printFormat"
                                    value={printFormat}
                                    labelId="label-printFormat"
                                    onchange={(event) => {
                                        const value = event.target.value
                                        value && setPrintFormat(value)
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
                            <span className='w-full max-w-[93px] flex flex-col self-end gap-2'>
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
                        </article>
                    </FilterBox>

                    {/* TABLE */}
                    <FilterBox className='mt-8'>
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
                        />
                    </FilterBox>
                </styles.Content>
            </styles.MainContainer>

        </styles.ContainerHome>
    )
}

export default TrackProjectStatus
