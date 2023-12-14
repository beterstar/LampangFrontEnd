import React, { useState } from 'react'
import Header from '../Header'
import * as styles from '../style/main.style'
import Navbar from '../Navbar'
import { useTranslation } from 'react-i18next'
import { MenuItem, Typography, styled } from '@mui/material'
import BarChart from '../../../component/charts/BarChart'
import HorizontalChart from '../../../component/charts/HorizontalChart'
import FilterSelect from '../../../component/select/filterSelect'
import InputTextField from '../../../component/input/inputTextField'
import { ButtonOutlined } from '../../../component/mui-custom/MuiCustom'
import { RouteImage } from '../../../assets/routeImage'


const FilterBox = styled('section')({
    width: "100%",
    height: "auto",
})

const Statistics: React.FC = () => {
    const { t } = useTranslation();

    
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

    return (
        <styles.ContainerHome>
            <Navbar />
            <styles.MainContainer>
                <Header />
                <styles.Content>
                    <section>
                        <Typography className='text-primary' variant='h4'>
                            {t("สถิติข้อมูล")}
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
                    <main className='w-full h-auto md:h-full md:max-h-[427px] overflow-hidden flex gap-3 mt-8 flex-col md:flex-row'>
                        <section className='w-full md:max-w-[371px] min-h-[427px] h-auto'>
                            <BarChart className='h-full' maxWidth='341px' heading='แยกตามงบประมาณ' />
                        </section>
                        <section className='h-auto md:h-full min-h-[30rem] md:min-h-[427px] md:flex-1 md:overflow-auto'>
                            <HorizontalChart heading='แยกตามหน่วยงาน' className='h-full min-h-[10rem]' />
                        </section>
                    </main>
                </styles.Content>
            </styles.MainContainer>

        </styles.ContainerHome>
    )
}

export default Statistics
