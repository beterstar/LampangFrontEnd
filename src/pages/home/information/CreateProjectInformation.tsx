import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import moment from 'moment'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

// COMPONENT
import * as styled from '../style/main.style'
import Navbar from '../Navbar'
import Header from '../Header'
import FilterSelect from '../../../component/select/filterSelect'
import InputDatePicker from '../../../component/input/inputDatePicker'
import InputTextField from '../../../component/input/inputTextField'
import { MenuItem, Typography, TextareaAutosize } from '@mui/material'
import { ButtonOutlined, ButtonContained } from '../../../component/mui-custom/MuiCustom'
import { colors } from '../../../constants/colors'
import { RouteImage } from '../../../assets/routeImage'
import { withStyles } from '@material-ui/core';


type Props = {}
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}


type typeProject = {
    typeProjectId: number;
    typeGroupQuestId: number;
    startProject: string;
    endProject: string;
}
type typeDisbursement = {
    date: string;
    totalBudget: string;
    totalDisbursement: string;
    outstandingBudget: string;
}
// FORM TYPE 👇
type createProjectProps = {
    agencyId: number;
    fiscalYear: number;
    strategy: number;
    tacticsId: number;
    plan: number;
    startProject: string;
    endProject: string;
    projectNameId: number;
    detailProject: string;
    project: typeProject[];
    disbursement: typeDisbursement[];
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
const CustomTab = withStyles({
    root: {
        borderRadius: "6px 6px 0 0 !important",
        backgroundColor: "inherit",
        color: `${colors.black} important`,
    },
    selected: {
        backgroundColor: `${colors.themeMainColor} !important`,
        color: `${colors.white} !important`
    },
    indicator: {
        backgroundColor: '#000 !important'
    }
})(Tab);


const CreateProjectInformation = (props: Props) => {
    // CONSTANT 👇
    const { t } = useTranslation();

    // STATE 👇
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
    const [isDisbursement, setIsDisbursement] = useState<boolean>(false);
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleAddDisbursement = () => {
        let newRow: typeDisbursement = {
            date: "",
            totalBudget: "",
            totalDisbursement: "",
            outstandingBudget: "",
        }
        setFormState((prev: createProjectProps) => {
            return ({ ...prev, disbursement: [...prev.disbursement, newRow] });
        })
    }


    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(formState)
    }

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
                                            value && setFormState({ ...formState, ['agencyId']: value })
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
                                            value && setFormState({ ...formState, ['fiscalYear']: value })
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
                                            value && setFormState({ ...formState, ['strategy']: value })
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
                                            value && setFormState({ ...formState, ['tacticsId']: value })
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
                                            value && setFormState({ ...formState, ['plan']: value })
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
                                        onClear={() => setFormState({ ...formState, ['startProject']: "" })}
                                        onChange={(e: any) => {
                                            setFormState({ ...formState, ['startProject']: moment(e).format("YYYY-MM-DD") })
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
                                        onClear={() => setFormState({ ...formState, ['endProject']: "" })}
                                        onChange={(e: any) => {
                                            setFormState((prev) => ({ ...prev, ['endProject']: moment(e).format("YYYY-MM-DD") }))
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
                                            value && setFormState({ ...formState, ['projectNameId']: value })
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

                            {/* 👇 รอคุย */}
                            <article className='grid grid-cols-12 gap-2'>
                                <div className='col-span-12 lg:col-span-3'>
                                    <FilterSelect
                                        required
                                        heading={t("ประเภทโครงการ")}
                                        renderValue={() => "เลือก"}
                                        label={t('STATUS.LABEL')}
                                        selectId="select-project-name"
                                        value={formState.plan}
                                        labelId="label-project-name"
                                        onchange={(event) => {
                                            const value = event.target.value
                                            value && setFormState({ ...formState, ['plan']: value })
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
                                            value && setFormState({ ...formState, ['plan']: value })
                                        }}
                                        options={[
                                            <MenuItem key="1" value={1}>
                                                {t('value 1')}
                                            </MenuItem>,
                                        ]}
                                    />
                                </div>
                            </article>
                            <article className="grid grid-cols-12 gap-2">
                                <div className='col-span-12'>
                                    <InputTextField
                                        size='medium'
                                        multiline
                                        value={formState.detailProject}
                                        onchange={(e) => setFormState({ ...formState, ['detailProject']: e.target.value })}
                                        heading={t("รายละเอียดโครงการ")}
                                    />
                                </div>
                            </article>

                            <article className="grid grid-cols-12 gap-2">
                                <div className='col-span-12 lg:col-span-2'>
                                    <InputDatePicker
                                        inputName='startProject'
                                        inputHeight={42}
                                        dateFormat="DD/MM/YYYY"
                                        required={true}
                                        key={"START_PROJECT"}
                                        value={""}
                                        placeholder={t('ระบุวันเริ่มต้นโครงการ')}
                                        onClear={() => setFormState({ ...formState, ['startProject']: "" })}
                                        onChange={(e: any) => {
                                            setFormState({ ...formState, ['startProject']: moment(e).format("YYYY-MM-DD") })
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
                                        onClear={() => setFormState({ ...formState, ['startProject']: "" })}
                                        onChange={(e: any) => {
                                            setFormState({ ...formState, ['startProject']: moment(e).format("YYYY-MM-DD") })
                                        }}
                                        allowClear
                                        heading={t("สิ้นสุดโครงการ")}
                                    />
                                </div>
                            </article>
                            <article className='w-full'>
                                <Box sx={{ width: '100%' }}>
                                    <Box className='flex justify-between items-end'>
                                        <Tabs
                                            TabIndicatorProps={{ sx: { backgroundColor: colors.white } }}
                                            value={value}
                                            onChange={handleChange}
                                            aria-label="project-tabs">
                                            <CustomTab label={<Typography>{"โครงการหลัก"}</Typography>} {...a11yProps(0)} />
                                            <CustomTab label={<Typography>{"กิจกรรม1"}</Typography>} {...a11yProps(1)} />
                                            <CustomTab label={<Typography>{"กิจกรรม2"}</Typography>} {...a11yProps(2)} />
                                        </Tabs>
                                        <span >
                                            <ButtonOutlined
                                                startIcon={<img src={RouteImage.addForm} alt='add-icon' />}
                                                sx={{
                                                    borderRadius: "6px 6px 0 0", height: "42px", border: `1px solid ${colors.borderInput}`, '&:hover': {
                                                        // boxShadow:"none"
                                                    }
                                                }}>
                                                <Typography className='text-primary'>{"เพิ่มโครงการย่อย"}</Typography>
                                            </ButtonOutlined>
                                        </span>
                                    </Box>
                                    <div className='bg-light'>
                                        <CustomTabPanel value={value} index={0}>
                                            Item One
                                        </CustomTabPanel>
                                        <CustomTabPanel value={value} index={1}>
                                            Item Two
                                        </CustomTabPanel>
                                        <CustomTabPanel value={value} index={2}>
                                            Item Three
                                        </CustomTabPanel>
                                    </div>
                                </Box>
                            </article>

                            <article className='grid grid-cols-12 gap-2'>
                                <div className='col-span-12 flex justify-between flex-1'>
                                    <Typography variant='h6'>
                                        {t("งวดเบิกจ่าย")}
                                    </Typography>
                                    <Typography onClick={() => setIsDisbursement(!isDisbursement)} className='cursor-pointer' variant='h6'>
                                        <img className={`${isDisbursement ? 'rotate-180' : 'rotate-0'}`} src={RouteImage.downArrow} alt="drop-down" />
                                    </Typography>
                                </div>
                                <div className={`contents ${isDisbursement ? 'invisible' : 'visible'} duration-100`}>
                                    {formState.disbursement.map((list, index: number) => (
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
                                                    onClear={() => setFormState({ ...formState, ['startProject']: "" })}
                                                    onChange={(e: any) => {
                                                        setFormState({ ...formState, ['startProject']: moment(e).format("YYYY-MM-DD") })
                                                    }}
                                                    allowClear
                                                    heading={`งวดที่ ${index + 1} ภายในวันที่`}
                                                />
                                            </div>
                                            <div className='col-span-12 lg:col-span-2'>
                                                <InputTextField
                                                    value={list.totalBudget}
                                                    heading={t("งบประมาณรวม (บาท)")}
                                                />
                                            </div>
                                            <div className='col-span-12 lg:col-span-2'>
                                                <InputTextField
                                                    value={list.totalDisbursement}
                                                    heading={t("ยอดเบิกจ่ายรวม (บาท)")}
                                                />
                                            </div>
                                            <div className='col-span-12 lg:col-span-2'>
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
                                            <div className='col-span-3'></div>
                                        </motion.div>
                                    ))}
                                </div>
                            </article>
                        </motion.section>
                    </form>
                </styled.Content>
            </styled.MainContainer>
        </styled.ContainerHome>
    )
}

export default CreateProjectInformation