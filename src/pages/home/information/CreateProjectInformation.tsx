import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import moment from 'moment'
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';

// TYPE
import { typeDisbursement, projectProgress, Project, createProjectProps } from './type/project.type';

// COMPONENT
import * as styled from '../style/main.style'
import Navbar from '../Navbar'
import Header from '../Header'
import FilterSelect from '../../../component/select/filterSelect'
import InputDatePicker from '../../../component/input/inputDatePicker'
import InputTextField from '../../../component/input/inputTextField'
import { MenuItem, Typography } from '@mui/material'
import { ButtonOutlined, ButtonContained } from '../../../component/mui-custom/MuiCustom'
import { colors } from '../../../constants/colors'
import { RouteImage } from '../../../assets/routeImage'
import Dropdown from '../../../component/dropdown/Dropdown';
import LabelCustom from '../../../component/label/LabelCustom';

// TABS
import { projectTabsProps, indicatorTabsProps, CustomTabPanel, IndicatorCustomTabPanel, CustomTab } from './tabs/createProjectsTabs';

// STORE
// import { addProject } from '../../../store/slice/projectSlice/projectSlice';
// import * as setFormState from '../../../store/slice/projectSlice/projectSlice'


type Props = {}



const CreateProjectInformation = (props: Props) => {
    // CONSTANT 👇
    const { t } = useTranslation();
    const dispatch = useDispatch();
    // const formState = useSelector((state: any) => state.project)

    // console.log(formState)

    // STATE 👇
    const [isDisbursement, setIsDisbursement] = useState<boolean>(false);
    const [projectTabs, setProjectTabs] = useState<number>(0);
    const [indicatorTabs, setIndicatorTabs] = useState<number>(0);
    const [selectedTypeProject, setSelectedTypeProject] = useState<number>(1)

    const [formState, setFormState] = useState<createProjectProps>({
        agencyId: 0,
        fiscalYear: 0,
        strategy: 0,
        tacticsId: 0,
        plan: 0,
        startProject: "",
        endProject: "",
        projectNameId: 0,
        detailProject: "",
        projects: [
            {
                projectProgress: [
                    {
                        endProject: "",
                        startProject: ""
                    }
                ],
                disbursement: [
                    {
                        date: "",
                        outstandingBudget: "",
                        totalBudget: "",
                        totalDisbursement: ""
                    }
                ]
            }
        ],


        project: [{
            typeProjectId: 0,
            typeGroupQuestId: 0,
            startProject: "",
            endProject: ""
        }],
        disbursement: [{
            date: "",
            totalBudget: "",
            totalDisbursement: "",
            outstandingBudget: "",
        }]
    })

    const handleChangeProjectTabs = (event: React.SyntheticEvent, newValue: number) => setProjectTabs(newValue)
    const handleChangeIndicatorTabs = (event: React.SyntheticEvent, newValue: number) => setIndicatorTabs(newValue)

    const handleAddDisbursement = () => {
        let newRow: typeDisbursement = {
            date: "",
            totalBudget: "",
            totalDisbursement: "",
            outstandingBudget: "",
        }
        // setFormState((prev: createProjectProps) => {
        //     return ({ ...prev, disbursement: [...prev.disbursement, newRow] });
        // })
    }

    const handleAddProject = () => {
        let projectData: Project = {
            projectProgress: [
                {
                    endProject: "",
                    startProject: ""
                }
            ],
            disbursement: [
                {
                    date: "",
                    outstandingBudget: "",
                    totalBudget: "",
                    totalDisbursement: ""
                }
            ]
        }

        // dispatch(addProject(projectData));
    };
    // const handleAddProjectProgress = () => {
    //     let data: projectProgress = {
    //         endProject: "",
    //         startProject: ""
    //     }
    //     dispatch(setFormState.addProjectProgress(data))
    // }
    // const handleStartDateChange = (newStartDate: string) => {
    //     dispatch(setFormState.changeProjectProgress({ startProject: newStartDate }));
    // };

    // const handleEndDateChange = (newEndDate: string) => {
    //     dispatch(setFormState.changeProjectProgress({ endProject: newEndDate }));
    // };


    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(formState)
    }

    console.log(selectedTypeProject)

    return (
        <styled.ContainerHome>
            <Navbar />
            <styled.MainContainer>
                <Header />
                <styled.Content>
                    <form onSubmit={handleSubmit}>
                        <motion.section
                            className='flex flex-col gap-y-[20px]'
                            initial={{ x: 100 }}
                            animate={{ x: 0 }}
                            transition={{ duration: .4, delay: .1 }}>
                            <article className='w-full gap-3 flex items-start md:items-center flex-col  md:flex-row justify-between'>
                                <span>
                                    <Typography className='text-primary' variant='h4'>
                                        {t("สร้างโครงการ")}
                                    </Typography>
                                </span>
                                <span className='flex flex-wrap md:flex-nowrap gap-1 gap-y-2'>
                                    <ButtonOutlined variant='outlined'>
                                        <Typography className='text-primary' variant='body1'>
                                            {t("BUTTON.SAVE_DRAFT")}
                                        </Typography>
                                    </ButtonOutlined>
                                    <ButtonContained type='submit' variant='contained'>
                                        <Typography variant='body1'>
                                            {t("BUTTON.SAVE")}
                                        </Typography>
                                    </ButtonContained>
                                    <ButtonContained
                                        sx={{
                                            backgroundColor: colors.lampang_button_secondary,
                                            '&:hover': {
                                                backgroundColor: colors.lampang_button_secondary,
                                                border: `1px solid ${colors.lampang_button_secondary}`
                                            }
                                        }}
                                        variant='contained'>
                                        <Typography variant='body1'>
                                            {t("BUTTON.PUBLISH")}
                                        </Typography>
                                    </ButtonContained>
                                </span>
                            </article>
                            <article className='grid grid-cols-12 gap-2 mt-8'>
                                <div className='col-span-12'>
                                    <FilterSelect
                                        required
                                        heading={t("หน่วยงาน")}
                                        renderValue={() => "เทศบาลนครลำปาง"}
                                        label={t('STATUS.LABEL')}
                                        selectId="select-status"
                                        value={formState.agencyId}
                                        labelId="label-status"
                                        onchange={(event) => {
                                            const value = event.target.value
                                            // value && dispatch(setFormState.setAgencyId(value))
                                        }}
                                        options={[
                                            <MenuItem key="1" value={1}>
                                                {t('เทศบาลนครลำปาง')}
                                            </MenuItem>,
                                            <MenuItem key="2" value={2}>
                                                {t('เทศบาลนครลำปู')}
                                            </MenuItem>
                                        ]}
                                        disabled
                                    />
                                </div>
                            </article>
                            <article className='grid grid-cols-12 gap-2'>
                                <div className='col-span-12 md:col-span-3'>
                                    <FilterSelect
                                        required
                                        heading={t("ปีงบประมาณ")}
                                        renderValue={() => "2556"}
                                        label={t('STATUS.LABEL')}
                                        selectId="select-fiscal-year"
                                        value={formState.fiscalYear}
                                        labelId="label-fiscal-year"
                                        onchange={(event) => {
                                            const value = event.target.value
                                            // value && dispatch(setFormState.setFiscalYear(value))
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
                                <div className='col-span-12 md:col-span-9'>
                                    <FilterSelect
                                        required
                                        heading={t("ยุทธศาสตร์")}
                                        renderValue={() => "เลือก"}
                                        label={t('STATUS.LABEL')}
                                        selectId="select-setStrategy"
                                        value={formState.strategy}
                                        labelId="label-setStrategy"
                                        onchange={(event) => {
                                            const value = event.target.value
                                            // value && setFormState({ ...formState, ['strategy']: value })
                                        }}
                                        options={[
                                            <MenuItem key="1" value={1}>
                                                {t('เลือก1')}
                                            </MenuItem>,
                                            <MenuItem key="2" value={2}>
                                                {t('เลือก2')}
                                            </MenuItem>
                                        ]}
                                    />
                                </div>
                            </article>
                            <article className='grid grid-cols-12 gap-2'>
                                <div className='col-span-12 lg:col-span-5'>
                                    <FilterSelect
                                        required
                                        heading={t("กลยุทธ์")}
                                        renderValue={() => "เลือก"}
                                        label={t('STATUS.LABEL')}
                                        selectId="select-tacticsId"
                                        value={formState.tacticsId}
                                        labelId="label-tacticsId"
                                        onchange={(event) => {
                                            const value = event.target.value
                                            // value && setFormState({ ...formState, ['tacticsId']: value })
                                        }}
                                        options={[
                                            <MenuItem key="1" value={1}>
                                                {t('เทศบาลนครลำปาง')}
                                            </MenuItem>,
                                            <MenuItem key="2" value={2}>
                                                {t('เทศบาลนครลำปู')}
                                            </MenuItem>
                                        ]}
                                    />
                                </div>
                                <div className='col-span-12 lg:col-span-3'>
                                    <FilterSelect
                                        required
                                        heading={t("แผนงาน")}
                                        renderValue={() => "เลือก"}
                                        label={t('STATUS.LABEL')}
                                        selectId="select-plan"
                                        value={formState.plan}
                                        labelId="label-plan"
                                        onchange={(event) => {
                                            const value = event.target.value
                                            // value && setFormState({ ...formState, ['plan']: value })
                                        }}
                                        options={[
                                            <MenuItem key="1" value={1}>
                                                {t('เทศบาลนครลำปาง')}
                                            </MenuItem>,
                                            <MenuItem key="2" value={2}>
                                                {t('เทศบาลนครลำปู')}
                                            </MenuItem>
                                        ]}
                                    />
                                </div>
                                <div className='col-span-12 lg:col-span-2 flex justify-center items-start flex-col relative'>
                                    <InputDatePicker
                                        inputName='startProject'
                                        inputHeight={42}
                                        dateFormat="DD/MM/YYYY"
                                        required={true}
                                        key={"START_PROJECT"}
                                        value={formState.startProject}
                                        placeholder={t('ระบุวันเริ่มต้นโครงการ')}
                                        // onClear={() => setFormState({ ...formState, ['startProject']: "" })}
                                        onChange={(e: any) => {
                                            // setFormState({ ...formState, ['startProject']: moment(e).format("YYYY-MM-DD") })
                                        }}
                                        allowClear
                                        heading={t("เริ่มต้นโครงการ")}
                                    />
                                </div>
                                <div className='col-span-12 lg:col-span-2 flex justify-center items-start flex-col relative'>
                                    <InputDatePicker
                                        inputName='endProject'
                                        inputHeight={42}
                                        dateFormat="DD/MM/YYYY"
                                        required={true}
                                        key={"END_PROJECT"}
                                        value={formState.endProject}
                                        placeholder={t('ระบุวันสิ้นสุดโครงการ')}
                                        // onClear={() => setFormState({ ...formState, ['endProject']: "" })}
                                        onChange={(e: any) => {
                                            // setFormState((prev) => ({ ...prev, ['endProject']: moment(e).format("YYYY-MM-DD") }))
                                        }}
                                        allowClear
                                        heading={t("สิ้นสุดโครงการ")}
                                    />
                                </div>
                            </article>
                            <article className='grid grid-cols-12 gap-2'>
                                <div className='col-span-12'>
                                    <FilterSelect
                                        required
                                        heading={t("ชื่อโครงการ")}
                                        renderValue={() => "เลือก"}
                                        label={t('STATUS.LABEL')}
                                        selectId="select-project-name"
                                        value={formState.projectNameId}
                                        labelId="label-project-name"
                                        onchange={(event) => {
                                            const value = event.target.value
                                            // value && setFormState({ ...formState, ['projectNameId']: value })
                                        }}
                                        options={[
                                            <MenuItem key="1" value={1}>
                                                {t('เทศบาลนครลำปาง')}
                                            </MenuItem>,
                                            <MenuItem key="2" value={2}>
                                                {t('เทศบาลนครลำปู')}
                                            </MenuItem>
                                        ]}
                                    />
                                </div>
                            </article>

                            <article className='grid grid-cols-12 gap-2'>
                                <div className='col-span-12 lg:col-span-3'>
                                    <FilterSelect
                                        required
                                        heading={t("ประเภทโครงการ")}
                                        renderValue={() => selectedTypeProject === 1 && "โครงการทั่วไป" || selectedTypeProject === 2 && "โครงการก่อสร้าง"}
                                        label={t('STATUS.LABEL')}
                                        selectId="select-project-name"
                                        value={selectedTypeProject}
                                        labelId="label-project-name"
                                        onchange={(event) => {
                                            const value = event.target.value
                                            value && setSelectedTypeProject(value)
                                            // value && setFormState({ ...formState, ['plan']: value })
                                        }}
                                        options={[
                                            <MenuItem key="1" value={1}>
                                                {"โครงการทั่วไป"}
                                            </MenuItem>,
                                            <MenuItem key="2" value={2}>
                                                {"โครงการก่อสร้าง"}
                                            </MenuItem>,
                                        ]}
                                    />
                                </div>
                                <div className='col-span-12 lg:col-span-4'>
                                    <FilterSelect
                                        required
                                        heading={t("ประเภทกลุ่มภารกิจ (CLUSTERS)")}
                                        renderValue={() => "เลือก"}
                                        label={t('STATUS.LABEL')}
                                        selectId="select-project-name"
                                        value={formState.plan}
                                        labelId="label-project-name"
                                        onchange={(event) => {
                                            const value = event.target.value
                                            // value && setFormState({ ...formState, ['plan']: value })
                                        }}
                                        options={[
                                            <MenuItem key="1" value={1}>
                                                {t('value 1')}
                                            </MenuItem>,
                                        ]}
                                    />
                                </div>
                            </article>

                            {/* 👇 รายละเอียดโครงการ*/}
                            {selectedTypeProject && selectedTypeProject === 1 && (
                                <article className="grid grid-cols-12 gap-2">
                                    <div className='col-span-12'>
                                        <InputTextField
                                            size='medium'
                                            multiline
                                            value={formState.detailProject}
                                            onchange={(e) => { }}
                                            heading={t("รายละเอียดโครงการ")}
                                        />
                                    </div>
                                </article>
                            )}

                            {/* 👇 แสดงข้อมูลเป็น tabs แค่ประเภททั่วไป -> ประเภททั่วไป*/}
                            {selectedTypeProject && selectedTypeProject === 1 && (
                                <article className='w-full'>
                                    <Box sx={{ width: '100%' }}>
                                        <Box className='w-full flex flex-col justify-start items-start gap-2 md:flex-row md:justify-between md:items-end overflow-auto'>
                                            <Tabs
                                                TabIndicatorProps={{ sx: { backgroundColor: colors.white, display: "flex", flexWrap: "wrap" } }}
                                                value={projectTabs}
                                                onChange={handleChangeProjectTabs}
                                                aria-label="project-tabs">
                                                {formState.projects?.map((list: any, index: number) => (
                                                    <CustomTab label={<Typography>{index === 0 ? "โครงการหลัก" : `กิจกรรม${index}`}</Typography>} {...projectTabsProps(index)} />
                                                ))}
                                            </Tabs>
                                            <span >
                                                <ButtonOutlined
                                                    onClick={handleAddProject}
                                                    startIcon={<img src={RouteImage.addForm} alt='add-icon' />}
                                                    sx={{
                                                        borderRadius: "6px 6px 0 0", height: "42px", border: `1px solid ${colors.borderInput}`
                                                    }}>
                                                    <Typography className='text-primary'>{"เพิ่มโครงการย่อย"}</Typography>
                                                </ButtonOutlined>
                                            </span>
                                        </Box>
                                        <div className='bg-bg_secondary mt-2'>
                                            {formState.projects?.map((list: Project, index: number) => (
                                                <CustomTabPanel key={index} value={projectTabs} index={index}>
                                                    <section className='w-full'>
                                                        <LabelCustom
                                                            variant='h6'
                                                            isRequired
                                                            text='งวดความคืบหน้าโครงการ'
                                                        />
                                                    </section>
                                                    {list.projectProgress?.map((list, i: number) => (
                                                        <motion.section
                                                            initial={{ y: -50 }}
                                                            animate={{ y: 0 }}
                                                            transition={{ ease: "backInOut", stiffness: 150 }}
                                                            className='w-full'>
                                                            <article className='flex items-center justify-between'>
                                                                <span className='flex flex-col'>
                                                                    <LabelCustom
                                                                        className='mt-2'
                                                                        text={t(`งวดที่ ${i + 1} ภายในวันที่`)}
                                                                        variant='body1'
                                                                    />
                                                                </span>
                                                                <span>
                                                                    <Dropdown />
                                                                </span>
                                                            </article>
                                                            <article className="mt-2 grid grid-cols-12 gap-2">
                                                                <div className='col-span-12 lg:col-span-2'>
                                                                    <InputDatePicker
                                                                        inputName='startProject'
                                                                        inputHeight={42}
                                                                        dateFormat="DD/MM/YYYY"
                                                                        required={true}
                                                                        key={"START_PROJECT"}
                                                                        value={list.startProject}
                                                                        placeholder={t('ระบุวันเริ่มต้นโครงการ')}
                                                                        // onClear={() => handleStartDateChange("")}
                                                                        onChange={(e: any) => {
                                                                            // handleStartDateChange(moment(e).format("YYYY-MM-DD"))
                                                                        }}
                                                                        allowClear
                                                                        heading={t("เริ่มต้นโครงการ")}
                                                                    />
                                                                </div>
                                                                <div className='col-span-12 lg:col-span-2'>
                                                                    <InputDatePicker
                                                                        inputName='startProject'
                                                                        inputHeight={42}
                                                                        dateFormat="DD/MM/YYYY"
                                                                        required={true}
                                                                        key={"END_PROJECT"}
                                                                        value={list.endProject}
                                                                        placeholder={t('ระบุวันสิ้นสุดโครงการ')}
                                                                        // onClear={() => handleEndDateChange("")}
                                                                        onChange={(e: any) => {
                                                                            // handleEndDateChange(moment(e).format("YYYY-MM-DD"))
                                                                        }}
                                                                        allowClear
                                                                        heading={t("สิ้นสุดโครงการ")}
                                                                    />
                                                                </div>
                                                                <div className='col-span-12 lg:col-span-2 self-end'>
                                                                    {i === 0 && (
                                                                        <ButtonOutlined
                                                                            // onClick={handleAddProjectProgress}
                                                                            sx={{ maxWidth: "75px", width: "100%", height: '42px' }}
                                                                            startIcon={<img className='max-w-20' src={RouteImage.addButton} />}
                                                                        >
                                                                            <Typography className='text-primary' variant='body1'>
                                                                                {t("BUTTON.ADD")}
                                                                            </Typography>
                                                                        </ButtonOutlined>
                                                                    )}
                                                                </div>
                                                            </article>
                                                        </motion.section>
                                                    ))}

                                                    {/* งวดเบิกจ่าย  👇 */}
                                                    <section className='w-full mt-2'>
                                                        <article className='grid grid-cols-12 gap-2'>
                                                            <div className='col-span-12 flex justify-between flex-1'>
                                                                <LabelCustom
                                                                    variant='h6'
                                                                    text='งวดเบิกจ่าย'
                                                                    isRequired
                                                                />
                                                                <Typography onClick={() => setIsDisbursement(!isDisbursement)} className='cursor-pointer' variant='h6'>
                                                                    <img className={`${isDisbursement ? 'rotate-180' : 'rotate-0'}`} src={RouteImage.downArrow} alt="drop-down" />
                                                                </Typography>
                                                            </div>
                                                            <div className={`contents ${isDisbursement ? 'invisible' : 'visible'} duration-100`}>
                                                                {formState.disbursement.map((list: any, index: number) => (
                                                                    <motion.div
                                                                        className='contents'
                                                                        initial={{ y: -50 }}
                                                                        animate={{ y: 0 }}
                                                                        transition={{ ease: "easeInOut", stiffness: 40 }}
                                                                        key={index}>
                                                                        <div className='col-span-12 lg:col-span-2'>
                                                                            <InputDatePicker
                                                                                inputName='startProject'
                                                                                inputHeight={42}
                                                                                dateFormat="DD/MM/YYYY"
                                                                                // required={true}
                                                                                key={"START_PROJECT"}
                                                                                value={list.date}
                                                                                placeholder={t('ระบุวันที่')}
                                                                                // onClear={() => setFormState({ ...formState, ['startProject']: "" })}
                                                                                onChange={(e: any) => {
                                                                                    // setFormState({ ...formState, ['startProject']: moment(e).format("YYYY-MM-DD") })
                                                                                }}
                                                                                allowClear
                                                                                heading={`งวดที่ ${index + 1} ภายในวันที่`}
                                                                            />
                                                                        </div>
                                                                        <div className='col-span-12 lg:col-span-2'>
                                                                            <InputTextField
                                                                                heading={t("งบประมาณรวม (บาท)")}
                                                                            />
                                                                        </div>
                                                                        <div className='col-span-12 lg:col-span-2'>
                                                                            <InputTextField
                                                                                value={list.totalDisbursement}
                                                                                heading={t("ยอดเบิกจ่ายรวม (บาท)")}
                                                                            />
                                                                        </div>
                                                                        <div className='col-span-12 lg:col-span-3'>
                                                                            <InputTextField
                                                                                value={list.outstandingBudget}
                                                                                heading={t("ยอดงบประมาณค้างเบิก (บาท)")}
                                                                            />
                                                                        </div>
                                                                        <div className='col-span-12 lg:col-span-1 flex justify-start items-end'>
                                                                            {index === formState.disbursement.length - 1 && (
                                                                                <ButtonOutlined
                                                                                    onClick={handleAddDisbursement}
                                                                                    sx={{ maxWidth: "75px", width: "100%", height: '42px' }}
                                                                                    startIcon={<img src={RouteImage.addButton} />}
                                                                                >
                                                                                    <Typography className='text-primary' variant='body1'>
                                                                                        {t("BUTTON.ADD")}
                                                                                    </Typography>
                                                                                </ButtonOutlined>
                                                                            )}
                                                                        </div>
                                                                        <div className='col-span-2'></div>
                                                                    </motion.div>
                                                                ))}
                                                            </div>
                                                        </article>
                                                    </section>


                                                    {/* แหล่งงงบประมาณ  👇 */}
                                                    <section className='w-full mt-2'>
                                                        <article className='flex items-center justify-between'>
                                                            <LabelCustom
                                                                variant='h6'
                                                                text={t("แหล่งงงบประมาณ")}
                                                            />
                                                            <Dropdown />
                                                        </article>
                                                        <article className='grid grid-cols-12 mt-2'>
                                                            <div className='col-span-12 lg:col-span-4'>
                                                                <FilterSelect
                                                                    required
                                                                    heading={t("แหล่งที่มาของงบประมาณ")}
                                                                    renderValue={() => "เลือก"}
                                                                    label={t('STATUS.LABEL')}
                                                                    selectId="select-fiscal-year"
                                                                    value={formState.fiscalYear}
                                                                    labelId="label-fiscal-year"
                                                                    onchange={(event) => {
                                                                        const value = event.target.value
                                                                        // value && setFormState({ ...formState, ['fiscalYear']: value })
                                                                    }}
                                                                    options={[
                                                                        <MenuItem key="1" value={1}>
                                                                            {t('value 1')}
                                                                        </MenuItem>,
                                                                        <MenuItem key="2" value={2}>
                                                                            {t('value 2')}
                                                                        </MenuItem>
                                                                    ]}
                                                                />
                                                            </div>
                                                        </article>
                                                        <article className='grid grid-cols-12 gap-2 mt-2'>
                                                            <span className=' col-span-12 lg:col-span-2 self-end'>
                                                                <InputTextField
                                                                    required
                                                                    value={""}
                                                                    onchange={(e) => { }}
                                                                    heading={t("งบประมาณโครงการ (บาท)")}
                                                                />
                                                            </span>
                                                            <span className=' col-span-12 lg:col-span-2 self-end'>
                                                                <InputTextField
                                                                    required
                                                                    value={""}
                                                                    onchange={(e) => { }}
                                                                    heading={t("งบประมาณคุรุภัณฑ์ (บาท)")}
                                                                />
                                                            </span>
                                                            <span className=' col-span-12 lg:col-span-2 self-end'>
                                                                <InputTextField
                                                                    required
                                                                    value={""}
                                                                    onchange={(e) => { }}
                                                                    heading={t("เงินโอนเพิ่มงบประมาณ (บาท)")}
                                                                />
                                                            </span>
                                                            <span className=' col-span-12 lg:col-span-2 self-end'>
                                                                <InputTextField
                                                                    required
                                                                    value={""}
                                                                    onchange={(e) => { }}
                                                                    heading={t("เงินโอนลดงบประมาณ (บาท)")}
                                                                />
                                                            </span>
                                                            <span className=' col-span-12 lg:col-span-2 self-end'>
                                                                <InputTextField
                                                                    style={{ backgroundColor: "#FFFAF2" }}
                                                                    required
                                                                    value={""}
                                                                    onchange={(e) => { }}
                                                                    heading={t("งบประมาณรวม (บาท)")}
                                                                />
                                                            </span>
                                                            <span className=' col-span-12 lg:col-span-2 self-end'>
                                                                <ButtonOutlined
                                                                    sx={{ maxWidth: "75px", width: "100%", height: '42px' }}
                                                                    startIcon={<img className='max-w-20' src={RouteImage.addButton} />}
                                                                >
                                                                    <Typography className='text-primary' variant='body1'>
                                                                        {t("BUTTON.ADD")}
                                                                    </Typography>
                                                                </ButtonOutlined>
                                                            </span>
                                                        </article>
                                                        <article className='grid grid-cols-12 gap-2 mt-2'>
                                                            <div className='col-span-12'>
                                                                <InputTextField
                                                                    value={""}
                                                                    heading={t("หมายเหตุ (แหล่งที่มาของงบประมาณ)")}
                                                                />
                                                            </div>
                                                        </article>
                                                    </section>

                                                    {/* งบประมาณรวม  👇 */}
                                                    <section className='w-full mt-2'>
                                                        <article className='grid grid-cols-12 gap-2 mt-2'>
                                                            <span className='col-span-12 lg:col-span-2 self-end'>
                                                                <InputTextField
                                                                    value={""}
                                                                    heading={t("งบประมาณรวม (บาท)")}
                                                                />
                                                            </span>
                                                            <span className='col-span-12 lg:col-span-2 self-end'>
                                                                <InputTextField

                                                                    value={""}
                                                                    heading={t("ยอดเบิกจ่ายรวม (บาท)")}
                                                                />
                                                            </span>
                                                            <span className='col-span-12 lg:col-span-2 self-end'>
                                                                <InputTextField
                                                                    value={""}
                                                                    heading={t("ยอดงบประมาณค้างเบิก (บาท)")}
                                                                />
                                                            </span>
                                                        </article>
                                                        <article className='grid grid-cols-12 gap-2 mt-2'>
                                                            <span className='col-span-12 lg:col-span-10'>
                                                                <FilterSelect
                                                                    required
                                                                    heading={t("ผู้รับผิดชอบโครงการหลัก")}
                                                                    renderValue={() => "เลือก"}
                                                                    label={t('STATUS.LABEL')}
                                                                    selectId="select-fiscal-year"
                                                                    value={""}
                                                                    labelId="label-fiscal-year"
                                                                    onchange={(event) => {
                                                                        // const value = event.target.value
                                                                        // value && setFormState({ ...formState, ['fiscalYear']: value })
                                                                    }}
                                                                    options={[
                                                                        <MenuItem key="1" value={1}>
                                                                            {t('value 1')}
                                                                        </MenuItem>,
                                                                        <MenuItem key="2" value={2}>
                                                                            {t('value 2')}
                                                                        </MenuItem>
                                                                    ]}
                                                                />
                                                            </span>
                                                            <span className='col-span-6 lg:col-span-2'>
                                                                <InputTextField
                                                                    value={""}
                                                                    heading={t("สัดส่วนที่รับผิดชอบ (%)")}

                                                                />
                                                            </span>
                                                        </article>
                                                        <article className='w-full flex justify-start lg:justify-end items-center mt-2'>
                                                            <div className='w-auto'>
                                                                <ButtonOutlined
                                                                    sx={{ maxWidth: "75px", width: "100%", height: '42px' }}
                                                                    startIcon={<img className='max-w-20' src={RouteImage.addButton} />}
                                                                >
                                                                    <Typography className='text-primary' variant='body1'>
                                                                        {t("BUTTON.ADD")}
                                                                    </Typography>
                                                                </ButtonOutlined>
                                                            </div>
                                                        </article>
                                                        <article className='grid grid-cols-12 mt-2'>
                                                            <div className='col-span-12'>
                                                                <InputTextField
                                                                    size='medium'
                                                                    multiline
                                                                    value={""}
                                                                    onchange={(e) => { }}
                                                                    heading={t("รายละเอียดโครงการ")}
                                                                />
                                                            </div>
                                                        </article>
                                                    </section>

                                                </CustomTabPanel>
                                            ))}
                                        </div>
                                    </Box>
                                </article>
                            )}

                            {/* 👇 โครงการก่อนสร้าง*/}
                            {selectedTypeProject && selectedTypeProject === 2 && (
                                <>
                                    <section className='w-full'>
                                        <article className='flex items-center justify-between'>
                                            <span className='flex flex-col'>
                                                <LabelCustom
                                                    variant='h6'
                                                    isRequired
                                                    text='งวดความคืบหน้าโครงการ'
                                                />
                                            </span>
                                            <span>
                                                <Dropdown />
                                            </span>
                                        </article>
                                        <article className="mt-2 grid grid-cols-12 gap-2">
                                            <div className='col-span-12 lg:col-span-2'>
                                                <InputDatePicker
                                                    inputName='startProject'
                                                    inputHeight={42}
                                                    dateFormat="DD/MM/YYYY"
                                                    required={true}
                                                    key={"START_PROJECT"}
                                                    value={""}
                                                    placeholder={t('ระบุวันเริ่มต้นโครงการ')}
                                                    // onClear={() => handleStartDateChange("")}
                                                    onChange={(e: any) => {
                                                        // handleStartDateChange(moment(e).format("YYYY-MM-DD"))
                                                    }}
                                                    allowClear
                                                    heading={t("เริ่มต้นโครงการ")}
                                                />
                                            </div>
                                            <div className='col-span-12 lg:col-span-2'>
                                                <InputDatePicker
                                                    inputName='startProject'
                                                    inputHeight={42}
                                                    dateFormat="DD/MM/YYYY"
                                                    required={true}
                                                    key={"END_PROJECT"}
                                                    value={""}
                                                    placeholder={t('ระบุวันสิ้นสุดโครงการ')}
                                                    // onClear={() => handleEndDateChange("")}
                                                    onChange={(e: any) => {
                                                        // handleEndDateChange(moment(e).format("YYYY-MM-DD"))
                                                    }}
                                                    allowClear
                                                    heading={t("สิ้นสุดโครงการ")}
                                                />
                                            </div>
                                            <div className='col-span-12 lg:col-span-2 self-end'>
                                                <ButtonOutlined
                                                    // onClick={handleAddProjectProgress}
                                                    sx={{ maxWidth: "75px", width: "100%", height: '42px' }}
                                                    startIcon={<img className='max-w-20' src={RouteImage.addButton} />}
                                                >
                                                    <Typography className='text-primary' variant='body1'>
                                                        {t("BUTTON.ADD")}
                                                    </Typography>
                                                </ButtonOutlined>
                                            </div>
                                        </article>
                                    </section >
                                    <section className='w-full mt-2'>
                                        <article className='grid grid-cols-12 gap-2'>
                                            <div className='col-span-12 flex justify-between flex-1'>
                                                <LabelCustom
                                                    variant='h6'
                                                    text='งวดเบิกจ่าย'
                                                    isRequired
                                                />
                                                <Typography onClick={() => setIsDisbursement(!isDisbursement)} className='cursor-pointer' variant='h6'>
                                                    <img className={`${isDisbursement ? 'rotate-180' : 'rotate-0'}`} src={RouteImage.downArrow} alt="drop-down" />
                                                </Typography>
                                            </div>
                                            <div className={`contents ${isDisbursement ? 'invisible' : 'visible'} duration-100`}>
                                                {formState.disbursement.map((list: any, index: number) => (
                                                    <motion.div
                                                        className='contents'
                                                        initial={{ y: -50 }}
                                                        animate={{ y: 0 }}
                                                        transition={{ ease: "easeInOut", stiffness: 40 }}
                                                        key={index}>
                                                        <div className='col-span-12 lg:col-span-2'>
                                                            <InputDatePicker
                                                                inputName='startProject'
                                                                inputHeight={42}
                                                                dateFormat="DD/MM/YYYY"
                                                                // required={true}
                                                                key={"START_PROJECT"}
                                                                value={list.date}
                                                                placeholder={t('ระบุวันที่')}
                                                                // onClear={() => setFormState({ ...formState, ['startProject']: "" })}
                                                                onChange={(e: any) => {
                                                                    // setFormState({ ...formState, ['startProject']: moment(e).format("YYYY-MM-DD") })
                                                                }}
                                                                allowClear
                                                                heading={`งวดที่ ${index + 1} ภายในวันที่`}
                                                            />
                                                        </div>
                                                        <div className='col-span-12 lg:col-span-2'>
                                                            <InputTextField
                                                                heading={t("งบประมาณรวม (บาท)")}
                                                            />
                                                        </div>
                                                        <div className='col-span-12 lg:col-span-2'>
                                                            <InputTextField
                                                                value={list.totalDisbursement}
                                                                heading={t("ยอดเบิกจ่ายรวม (บาท)")}
                                                            />
                                                        </div>
                                                        <div className='col-span-12 lg:col-span-3'>
                                                            <InputTextField
                                                                value={list.outstandingBudget}
                                                                heading={t("ยอดงบประมาณค้างเบิก (บาท)")}
                                                            />
                                                        </div>
                                                        <div className='col-span-12 lg:col-span-1 flex justify-start items-end'>
                                                            {index === formState.disbursement.length - 1 && (
                                                                <ButtonOutlined
                                                                    onClick={handleAddDisbursement}
                                                                    sx={{ maxWidth: "75px", width: "100%", height: '42px' }}
                                                                    startIcon={<img src={RouteImage.addButton} />}
                                                                >
                                                                    <Typography className='text-primary' variant='body1'>
                                                                        {t("BUTTON.ADD")}
                                                                    </Typography>
                                                                </ButtonOutlined>
                                                            )}
                                                        </div>
                                                        <div className='col-span-2'></div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </article>
                                    </section>
                                    <section className='w-full mt-2'>
                                        <article className='flex items-center justify-between'>
                                            <LabelCustom
                                                variant='h6'
                                                text={t("แหล่งงงบประมาณ")}
                                            />
                                            <Dropdown />
                                        </article>
                                        <article className='grid grid-cols-12 mt-2'>
                                            <div className='col-span-12 lg:col-span-4'>
                                                <FilterSelect
                                                    required
                                                    heading={t("แหล่งที่มาของงบประมาณ")}
                                                    renderValue={() => "เลือก"}
                                                    label={t('STATUS.LABEL')}
                                                    selectId="select-fiscal-year"
                                                    value={formState.fiscalYear}
                                                    labelId="label-fiscal-year"
                                                    onchange={(event) => {
                                                        const value = event.target.value
                                                        // value && setFormState({ ...formState, ['fiscalYear']: value })
                                                    }}
                                                    options={[
                                                        <MenuItem key="1" value={1}>
                                                            {t('value 1')}
                                                        </MenuItem>,
                                                        <MenuItem key="2" value={2}>
                                                            {t('value 2')}
                                                        </MenuItem>
                                                    ]}
                                                />
                                            </div>
                                        </article>
                                        <article className='grid grid-cols-12 gap-2 mt-2'>
                                            <span className=' col-span-12 lg:col-span-2 self-end'>
                                                <InputTextField
                                                    required
                                                    value={""}
                                                    onchange={(e) => { }}
                                                    heading={t("งบประมาณโครงการ (บาท)")}
                                                />
                                            </span>
                                            <span className=' col-span-12 lg:col-span-2 self-end'>
                                                <InputTextField
                                                    required
                                                    value={""}
                                                    onchange={(e) => { }}
                                                    heading={t("งบประมาณคุรุภัณฑ์ (บาท)")}
                                                />
                                            </span>
                                            <span className=' col-span-12 lg:col-span-2 self-end'>
                                                <InputTextField
                                                    required
                                                    value={""}
                                                    onchange={(e) => { }}
                                                    heading={t("เงินโอนเพิ่มงบประมาณ (บาท)")}
                                                />
                                            </span>
                                            <span className=' col-span-12 lg:col-span-2 self-end'>
                                                <InputTextField
                                                    required
                                                    value={""}
                                                    onchange={(e) => { }}
                                                    heading={t("เงินโอนลดงบประมาณ (บาท)")}
                                                />
                                            </span>
                                            <span className=' col-span-12 lg:col-span-2 self-end'>
                                                <InputTextField
                                                    style={{ backgroundColor: "#FFFAF2" }}
                                                    required
                                                    value={""}
                                                    onchange={(e) => { }}
                                                    heading={t("งบประมาณรวม (บาท)")}
                                                />
                                            </span>
                                            <span className=' col-span-12 lg:col-span-2 self-end'>
                                                <ButtonOutlined
                                                    sx={{ maxWidth: "75px", width: "100%", height: '42px' }}
                                                    startIcon={<img className='max-w-20' src={RouteImage.addButton} />}
                                                >
                                                    <Typography className='text-primary' variant='body1'>
                                                        {t("BUTTON.ADD")}
                                                    </Typography>
                                                </ButtonOutlined>
                                            </span>
                                        </article>
                                        <article className='grid grid-cols-12 gap-2 mt-2'>
                                            <div className='col-span-12'>
                                                <InputTextField
                                                    value={""}
                                                    heading={t("หมายเหตุ (แหล่งที่มาของงบประมาณ)")}
                                                />
                                            </div>
                                        </article>
                                    </section>
                                    <section className='w-full mt-2'>
                                        <article className='grid grid-cols-12 gap-2 mt-2'>
                                            <span className='col-span-12 lg:col-span-2 self-end'>
                                                <InputTextField
                                                    value={""}
                                                    heading={t("งบประมาณรวม (บาท)")}
                                                />
                                            </span>
                                            <span className='col-span-12 lg:col-span-2 self-end'>
                                                <InputTextField

                                                    value={""}
                                                    heading={t("ยอดเบิกจ่ายรวม (บาท)")}
                                                />
                                            </span>
                                            <span className='col-span-12 lg:col-span-2 self-end'>
                                                <InputTextField
                                                    value={""}
                                                    heading={t("ยอดงบประมาณค้างเบิก (บาท)")}
                                                />
                                            </span>
                                        </article>
                                        <article className='grid grid-cols-12 gap-2 mt-2'>
                                            <span className='col-span-12 lg:col-span-10'>
                                                <FilterSelect
                                                    required
                                                    heading={t("ผู้รับผิดชอบโครงการหลัก")}
                                                    renderValue={() => "เลือก"}
                                                    label={t('STATUS.LABEL')}
                                                    selectId="select-fiscal-year"
                                                    value={""}
                                                    labelId="label-fiscal-year"
                                                    onchange={(event) => {
                                                        // const value = event.target.value
                                                        // value && setFormState({ ...formState, ['fiscalYear']: value })
                                                    }}
                                                    options={[
                                                        <MenuItem key="1" value={1}>
                                                            {t('value 1')}
                                                        </MenuItem>,
                                                        <MenuItem key="2" value={2}>
                                                            {t('value 2')}
                                                        </MenuItem>
                                                    ]}
                                                />
                                            </span>
                                            <span className='col-span-6 lg:col-span-2'>
                                                <InputTextField
                                                    value={""}
                                                    heading={t("สัดส่วนที่รับผิดชอบ (%)")}

                                                />
                                            </span>
                                        </article>
                                        <article className='w-full flex justify-start lg:justify-end items-center mt-2'>
                                            <div className='w-auto'>
                                                <ButtonOutlined
                                                    sx={{ maxWidth: "75px", width: "100%", height: '42px' }}
                                                    startIcon={<img className='max-w-20' src={RouteImage.addButton} />}
                                                >
                                                    <Typography className='text-primary' variant='body1'>
                                                        {t("BUTTON.ADD")}
                                                    </Typography>
                                                </ButtonOutlined>
                                            </div>
                                        </article>
                                        <article className='grid grid-cols-12 mt-2'>
                                            <div className='col-span-12'>
                                                <InputTextField
                                                    size='medium'
                                                    multiline
                                                    value={""}
                                                    onchange={(e) => { }}
                                                    heading={t("รายละเอียดโครงการ")}
                                                />
                                            </div>
                                        </article>
                                    </section>
                                </>

                            )}

                            {/* ตัวชี้วัดประเมินผลโครงการ  👇 */}
                            <article className='w-full'>
                                <div className='w-full'>
                                    <Typography className='text-primary' variant='h4'>
                                        {t("ตัวชี้วัดประเมินผลโครงการ")}
                                    </Typography>
                                </div>

                                {/* TABS */}
                                <section className='w-full mt-2'>
                                    <Box className='flex flex-col justify-start items-start gap-2 md:flex-row md:justify-between md:items-end'>
                                        <Tabs
                                            TabIndicatorProps={{ sx: { backgroundColor: colors.white } }}
                                            value={indicatorTabs}
                                            onChange={handleChangeIndicatorTabs}
                                            aria-label="indicators-tabs">
                                            <CustomTab label={<Typography>{"ตัวชี้วัดเรื่องที่ 1"}</Typography>}  {...indicatorTabsProps(0)} />
                                            <CustomTab label={<Typography>{"ตัวชี้วัดเรื่องที่ 2"}</Typography>}  {...indicatorTabsProps(1)} />
                                        </Tabs>
                                        <span className='w-auto'>
                                            <ButtonOutlined
                                                startIcon={<img src={RouteImage.addForm} alt='add-icon' />}
                                                sx={{
                                                    borderRadius: "6px 6px 0 0", height: "42px", border: `1px solid ${colors.borderInput}`
                                                }}>
                                                <Typography className='text-primary'>{"เพิ่มตัวชี้วัด"}</Typography>
                                            </ButtonOutlined>
                                        </span>
                                    </Box>
                                    <Box className='bg-bg_secondary w-full mt-2'>
                                        <IndicatorCustomTabPanel value={indicatorTabs} index={0}>
                                            <article className='grid grid-cols-12 gap-2'>
                                                <span className='col-span-12 lg:col-span-11'>
                                                    <FilterSelect
                                                        required
                                                        heading={t("เรื่อง")}
                                                        renderValue={() => "เลือก"}
                                                        label={t('STATUS.LABEL')}
                                                        selectId="indicator-topic"
                                                        value={formState.fiscalYear}
                                                        labelId="label-indicator-topic"
                                                        onchange={(event) => {
                                                            // const value = event.target.value
                                                            // value && setFormState({ ...formState, ['fiscalYear']: value })
                                                        }}
                                                        options={[
                                                            <MenuItem key="1" value={1}>
                                                                {t('value 1')}
                                                            </MenuItem>,
                                                            <MenuItem key="2" value={2}>
                                                                {t('value 2')}
                                                            </MenuItem>
                                                        ]}
                                                    />
                                                </span>
                                                <span className='col-span-12 lg:col-span-1'>
                                                    <InputTextField
                                                        value={""}
                                                        heading={t("สัดส่วน (%)")}
                                                    />
                                                </span>
                                            </article>
                                            <article className='w-full mt-3'>
                                                <LabelCustom className='w-full mt-3' variant='h6' text='Level 1' />
                                                <Box className="grid grid-cols-12 gap-x-2 gap-y-3">
                                                    <span className='col-span-6 lg:col-span-2 self-end'>
                                                        <InputTextField
                                                            placeholder='0.00'
                                                            value={""}
                                                            heading={t("ค่าเริ่มต้น")}
                                                        />
                                                    </span>
                                                    <span className='col-span-6 lg:col-span-2 self-end'>
                                                        <InputTextField
                                                            placeholder='0.00'
                                                            value={""}
                                                            heading={t("ค่าสูงสุด")}
                                                        />
                                                    </span>
                                                </Box>

                                                <LabelCustom className='w-full mt-3' variant='h6' text='Level 2' />
                                                <Box className="grid grid-cols-12 gap-x-2 gap-y-3">
                                                    <span className='col-span-6 lg:col-span-2 self-end'>
                                                        <InputTextField
                                                            placeholder='0.00'
                                                            value={""}
                                                            heading={t("ค่าเริ่มต้น")}
                                                        />
                                                    </span>
                                                    <span className='col-span-6 lg:col-span-2 self-end'>
                                                        <InputTextField
                                                            placeholder='0.00'
                                                            value={""}
                                                            heading={t("ค่าสูงสุด")}
                                                        />
                                                    </span>
                                                </Box>

                                                <LabelCustom className='w-full mt-3' variant='h6' text='Level 3' />
                                                <Box className="grid grid-cols-12 gap-x-2 gap-y-3">
                                                    <span className='col-span-6 lg:col-span-2 self-end'>
                                                        <InputTextField
                                                            placeholder='0.00'
                                                            value={""}
                                                            heading={t("ค่าเริ่มต้น")}
                                                        />
                                                    </span>
                                                    <span className='col-span-6 lg:col-span-2 self-end'>
                                                        <InputTextField
                                                            placeholder='0.00'
                                                            value={""}
                                                            heading={t("ค่าสูงสุด")}
                                                        />
                                                    </span>
                                                </Box>
                                                <LabelCustom className='w-full mt-3' variant='h6' text='Level 4' />
                                                <Box className="grid grid-cols-12 gap-x-2 gap-y-3">
                                                    <span className='col-span-6 lg:col-span-2 self-end'>
                                                        <InputTextField
                                                            placeholder='0.00'
                                                            value={""}
                                                            heading={t("ค่าเริ่มต้น")}
                                                        />
                                                    </span>
                                                    <span className='col-span-6 lg:col-span-2 self-end'>
                                                        <InputTextField
                                                            placeholder='0.00'
                                                            value={""}
                                                            heading={t("ค่าสูงสุด")}
                                                        />
                                                    </span>
                                                </Box>
                                                <LabelCustom className='w-full mt-3' variant='h6' text='Level 5' />
                                                <Box className="grid grid-cols-12 gap-x-2 gap-y-3">
                                                    <span className='col-span-6 lg:col-span-2 self-end'>
                                                        <InputTextField
                                                            placeholder='0.00'
                                                            value={""}
                                                            heading={t("ค่าเริ่มต้น")}
                                                        />
                                                    </span>
                                                    <span className='col-span-6 lg:col-span-2 self-end'>
                                                        <InputTextField
                                                            placeholder='0.00'
                                                            value={""}
                                                            heading={t("ค่าสูงสุด")}
                                                        />
                                                    </span>
                                                </Box>
                                            </article>
                                        </IndicatorCustomTabPanel>





                                        <IndicatorCustomTabPanel value={indicatorTabs} index={1}>
                                            tab2
                                        </IndicatorCustomTabPanel>
                                    </Box>
                                </section>
                            </article>

                        </motion.section>
                    </form>
                </styled.Content>
            </styled.MainContainer>
        </styled.ContainerHome>
    )
}

export default CreateProjectInformation