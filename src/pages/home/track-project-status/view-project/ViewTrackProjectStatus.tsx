import { useLocation } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'


// COMPONENT
import { colors } from '../../../../constants/colors'
import { ButtonContained, ButtonOutlined } from '../../../../component/mui-custom/MuiCustom'
import { Box, Button, MenuItem, Tabs } from '@mui/material'
import { CustomTab, CustomTabPanel } from '../../../../component/Tabs/TabsCustom'
import { RouteImage } from '../../../../assets/routeImage'
import * as styles from '../../style/main.style'
import Navbar from '../../Navbar'
import Header from '../../Header'
import AlertCustom from '../../../../component/alert/AlertCustom'
import FilterSelect from '../../../../component/select/filterSelect'
import InputDatePicker from '../../../../component/input/inputDatePicker'
import InputTextField from '../../../../component/input/inputTextField'
import LabelCustom from '../../../../component/label/LabelCustom'
import Dropdown from '../../../../component/dropdown/Dropdown'
import { numberFormat } from '../../../../utils/common'
import FileDragAndDrop from '../../../../component/dragAndDrop/dragAndDrop'
import { notification } from '../../../../constants/notificationMessage'
import { swalActive, swalError } from '../../../../component/notification/swal'
import { SectionStatusProject } from './ViewTrackProjectStatus.style'

function projectTabsProps(index: number) {
    return {
        id: `project-tab-${index}`,
        'aria-controls': `project-tabpanel-${index}`,
    };
}

type Props = {}

const ViewTrackProjectStatus = (props: Props) => {
    const { t } = useTranslation();

    type fileTypes = {
        file: File | null,
    }
    type operation = {
        statusId: number;
        statusName: string;
        createDate: string;
        date: string;
        note: string;
        file: fileTypes[]
    }
    const [operationStatus, setOperationStatus] = useState<operation[]>([
        {
            statusId: 2,
            statusName: "หน่วยงานขออนุมัติดำเนินโครงการ",
            createDate: "2023-02-20",
            date: "2021-02-21",
            note: "-",
            file: [
                {
                    file: null
                }
            ]
        },
        {
            statusId: 3,
            statusName: "ขั้นตอนพัสดุ",
            createDate: "2023-02-20",
            date: "2021-02-21",
            note: "-",
            file: [
                {
                    file: null
                }
            ]
        },
        {
            statusId: 4,
            statusName: "จัดทำจัดชื้อจัดจ้าง",
            createDate: "2023-02-20",
            date: "2021-02-21",
            note: "-",
            file: [
                {
                    file: null
                },
                {
                    file: null
                },
            ]
        },
        {
            statusId: 5,
            statusName: "ดำเนินงานโครงการ",
            createDate: "2023-02-20",
            date: "2021-02-21",
            note: "-",
            file: [
                {
                    file: null
                }
            ]
        },

    ])


    const formState = {
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
                        endProject: "2020-08-20",
                        startProject: "2020-08-20"
                    }
                ],
                disbursement: [
                    {
                        date: "2021-08-10",
                        outstandingBudget: 2000,
                        totalBudget: 20000,
                        totalDisbursement: 10000
                    }
                ],
                budgetSource: [
                    {
                        projectBudget: 100000,
                        equipmentBudget: 200000,
                        additionalBudget: 2000,
                        reductionBudget: 300000,
                        totalBudget: 200000
                    }
                ],
                responsiblePersonProject: [
                    {
                        personName: "พงศ์ ปัทมเดชา",
                        responsibleProportion: "100"
                    },
                    {
                        personName: "เลือก",
                        responsibleProportion: "100"
                    },
                ],
                totalBudget: 20000000,
                totalDisbursement: 10000000,
                outstandingBudget: 200000,


                // สถานะการดำเนินงาน
                status: [
                    {
                        ...operationStatus
                    }
                ]
            },
        ]
    }

    console.log(formState)
    const location = useLocation();

    const onDrop = useCallback((acceptedFiles: File) => {
        // setOperationStatus((prev: operation[]) => {
        //     return prev.map((list) => ({
        //         ...list,
        //         file: list.file.map((data) => {
        //             return {
        //                 ...data,
        //                 file: acceptedFiles
        //             }
        //         })
        //     }))
        // })
        console.log(acceptedFiles)
    }, [])

    const handleOnSizeError = (errorText: string) => {
        console.log(errorText)
        swalError(errorText)
    }
    const handleOnTypeError = (errorText: string) => {
        swalError(errorText)
    }


    const [projectTabs, setProjectTabs] = useState<number>(0);
    const [isDisbursement, setIsDisbursement] = useState<boolean>(false);

    const handleChangeProjectTabs = (event: React.SyntheticEvent, newValue: number) => setProjectTabs(newValue)


    return (
        <styles.ContainerHome>
            <Navbar />
            <styles.MainContainer>
                <Header />
                <styles.Content>
                    <section className='flex justify-start flex-col md:flex-row md:justify-between gap-2'>
                        <span>
                            <Typography className='text-primary' variant='h4'>
                                {t("ติดตามสถานะโครงการ")}
                            </Typography>
                        </span>
                        <span>
                            <ButtonContained>
                                <Typography variant='body1'>
                                    {t("BUTTON.SAVE")}
                                </Typography>
                            </ButtonContained>
                        </span>
                    </section>
                    <section className='mt-2 md:mt-0'>
                        <Typography variant='h5' className='text-danger' >
                            {"(กำหนดงวดที่ 1 วันที่ 13 พฤศจิกายน 2566 - 13 พฤศจิกายน 2567 )"}
                        </Typography>
                    </section>
                    <section className='my-8'>
                        <AlertCustom
                            color='two'
                        />
                    </section>

                    {/* INPUT FIELD 👇 */}
                    <section className='flex flex-col gap-5'>
                        <article className='grid grid-cols-12 gap-2'>
                            <div className='col-span-12'>
                                <FilterSelect
                                    required
                                    heading={t("หน่วยงาน")}
                                    renderValue={() => "เทศบาลนครลำปาง"}
                                    label={t('STATUS.LABEL')}
                                    selectId="select-status"
                                    value={"1"}
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
                                    disabled
                                    heading={t("ปีงบประมาณ")}
                                    renderValue={() => "2556"}
                                    label={t('STATUS.LABEL')}
                                    selectId="select-fiscal-year"
                                    value={"1"}
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
                                    disabled
                                    heading={t("ยุทธศาสตร์")}
                                    renderValue={() => "ยุทธศาสตร์ที่ 4 : พัฒนาเศรษฐกิจเซิงสร้างสรรค์จากฐานทุนทางสังคมและวัฒนธรรมเพื่อ ไปสู่เมืองแห่งวัฒนธรรมและเศรษฐกิจสร้างสรรค์ (Cultural and Creative Economy City)"}
                                    label={t('STATUS.LABEL')}
                                    selectId="select-setStrategy"
                                    value={"1"}
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
                                    disabled
                                    heading={t("กลยุทธ์")}
                                    renderValue={() => "พัฒนาสภาพแวดล้อมและปรับภูมิทัศน์ย่านเศรษฐกิจและท่องเที่ยวของเมือง เพื่อพัฒนาไปสู่ “นครลำปาง เมืองน่าเดิน”"}
                                    label={t('STATUS.LABEL')}
                                    selectId="select-tacticsId"
                                    value={"1"}
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
                                    disabled
                                    heading={t("แผนงาน")}
                                    renderValue={() => "แผนงานเคหะและชุมชน"}
                                    label={t('STATUS.LABEL')}
                                    selectId="select-plan"
                                    value={"1"}
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
                                    required
                                    disabled
                                    inputName='startProject'
                                    inputHeight={42}
                                    dateFormat="DD/MM/YYYY"
                                    key={"START_PROJECT"}
                                    value={""}
                                    placeholder={t('ระบุวันเริ่มต้นโครงการ')}
                                    // onClear={() => setFormState({ ...formState, ['startProject']: "" })}
                                    onChange={(e: any) => {
                                        // setFormState({ ...formState, ['startProject']: moment(e).format("YYYY-MM-DD") })
                                    }}
                                    heading={t("เริ่มต้นโครงการ")}
                                />
                            </div>
                            <div className='col-span-12 lg:col-span-2 flex justify-center items-start flex-col relative'>
                                <InputDatePicker
                                    required
                                    disabled
                                    inputName='endProject'
                                    inputHeight={42}
                                    dateFormat="DD/MM/YYYY"
                                    key={"END_PROJECT"}
                                    value={""}
                                    placeholder={t('ระบุวันสิ้นสุดโครงการ')}
                                    // onClear={() => setFormState({ ...formState, ['endProject']: "" })}
                                    onChange={(e: any) => {
                                        // setFormState((prev) => ({ ...prev, ['endProject']: moment(e).format("YYYY-MM-DD") }))
                                    }}
                                    heading={t("สิ้นสุดโครงการ")}
                                />
                            </div>
                        </article>
                        <article className='grid grid-cols-12 gap-2'>
                            <div className='col-span-12'>
                                <FilterSelect
                                    required
                                    disabled
                                    heading={t("ชื่อโครงการ")}
                                    renderValue={() => "อนุรักษ์พันธุกรรมพืช"}
                                    label={t('STATUS.LABEL')}
                                    selectId="select-project-name"
                                    value={"1"}
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
                                    disabled
                                    heading={t("ประเภทโครงการ")}
                                    renderValue={() => "โครงการทั่วไป"}
                                    label={t('STATUS.LABEL')}
                                    selectId="select-project-name"
                                    value={"1"}
                                    labelId="label-project-name"
                                    onchange={(event) => {
                                        const value = event.target.value
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
                                    disabled
                                    heading={t("ประเภทกลุ่มภารกิจ (CLUSTERS)")}
                                    renderValue={() => "ด้านการพัฒนาเมือง"}
                                    label={t('STATUS.LABEL')}
                                    selectId="select-project-name"
                                    value={"1"}
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
                        <article className="grid grid-cols-12 gap-2">
                            <div className='col-span-12'>
                                <InputTextField
                                    disabled
                                    size='medium'
                                    value={"ปลูกพืชพันธุ์ไม้อนุรักษ์บริเวณเทศบาล"}
                                    // onchange={(e) => { }}
                                    heading={t("รายละเอียดโครงการ")}
                                />
                            </div>
                        </article>

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
                                </Box>

                                <div className='bg-bg_secondary mt-2'>
                                    {formState.projects?.map((list: any, index: number) => (
                                        <CustomTabPanel key={index} value={projectTabs} index={index}>

                                            {/* งวดความคืบหน้าโครงการ 👇 */}
                                            {list.projectProgress?.map((list: any, i: number) => (
                                                <section key={i} className='w-full' >
                                                    {index !== 0 && (
                                                        <article className='grid grid-cols-12'>
                                                            <span className='col-span-12'>
                                                                <InputTextField
                                                                    disabled
                                                                    value={"ระบบจัดหางาน ลำปาง"}
                                                                    heading={t("ชื่อกิจกรรม")}
                                                                />
                                                            </span>
                                                        </article>
                                                    )}

                                                    <article className='flex items-center justify-between mt-2'>
                                                        <span className='flex flex-col'>
                                                            <LabelCustom
                                                                variant='h6'
                                                                isRequired
                                                                text='งวดความคืบหน้าโครงการ'
                                                            />
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
                                                    <article className="grid grid-cols-12 gap-2 mt-2">
                                                        <div className='col-span-12 lg:col-span-2'>
                                                            <InputDatePicker
                                                                disabled
                                                                inputName='startProject'
                                                                inputHeight={42}
                                                                dateFormat="DD/MM/YYYY"
                                                                required={true}
                                                                key={"START_PROJECT"}
                                                                value={list.startProject}
                                                                placeholder={t('ระบุวันเริ่มต้นโครงการ')}
                                                                onClear={() => { }}
                                                                onChange={(e: any) => { }}
                                                                heading={t("เริ่มต้นโครงการ")}
                                                            />
                                                        </div>
                                                        <div className='col-span-12 lg:col-span-2'>
                                                            <InputDatePicker
                                                                disabled
                                                                inputName='startProject'
                                                                inputHeight={42}
                                                                dateFormat="DD/MM/YYYY"
                                                                required={true}
                                                                key={"END_PROJECT"}
                                                                value={list.endProject}
                                                                placeholder={t('ระบุวันสิ้นสุดโครงการ')}
                                                                onClear={() => { }}
                                                                onChange={(e: any) => { }}
                                                                heading={t("สิ้นสุดโครงการ")}
                                                            />
                                                        </div>
                                                    </article>
                                                </section>
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
                                                        {list.disbursement?.map((data: any, index: number) => (
                                                            <motion.div
                                                                className='contents'
                                                                initial={{ y: -50 }}
                                                                animate={{ y: 0 }}
                                                                transition={{ ease: "easeInOut", stiffness: 40 }}
                                                                key={index}>
                                                                <div className='col-span-12 md:col-span-6 lg:col-span-2'>
                                                                    <InputDatePicker
                                                                        disabled
                                                                        inputName='startProject'
                                                                        inputHeight={42}
                                                                        dateFormat="DD/MM/YYYY"
                                                                        key={"START_PROJECT"}
                                                                        value={data.date}
                                                                        placeholder={t('ระบุวันที่')}
                                                                        onChange={() => { }}
                                                                        heading={`งวดที่ ${index + 1} ภายในวันที่`}
                                                                    />
                                                                </div>
                                                                <div className='col-span-12 md:col-span-6 lg:col-span-2'>
                                                                    <InputTextField
                                                                        disableColor='#FFFAF2'
                                                                        disabled
                                                                        value={numberFormat(data.totalBudget)}
                                                                        heading={t("งบประมาณรวม (บาท)")}
                                                                    />
                                                                </div>
                                                                <div className='col-span-12 md:col-span-6 lg:col-span-2'>
                                                                    <InputTextField
                                                                        disableColor='#FFEFEE'
                                                                        disabled
                                                                        value={numberFormat(data.totalDisbursement)}
                                                                        heading={t("ยอดเบิกจ่ายรวม (บาท)")}
                                                                    />
                                                                </div>
                                                                <div className='col-span-12 md:col-span-6 lg:col-span-3'>
                                                                    <InputTextField
                                                                        disableColor='#ECF4FC'
                                                                        disabled
                                                                        value={numberFormat(data.outstandingBudget)}
                                                                        heading={t("ยอดงบประมาณค้างเบิก (บาท)")}
                                                                    />
                                                                </div>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </article>
                                            </section>

                                            {/* แหล่งงงบประมาณ  👇 */}
                                            {list.budgetSource?.map((data: any, i: number) => (
                                                <section key={i} className='w-full mt-2'>
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
                                                                disabled
                                                                heading={t("แหล่งที่มาของงบประมาณ")}
                                                                renderValue={() => "เทศบัญญัติงบประมาณรายจ่าย"}
                                                                label={t('STATUS.LABEL')}
                                                                selectId="select-fiscal-year"
                                                                value={formState.fiscalYear}
                                                                labelId="label-fiscal-year"
                                                                onchange={() => { }}
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
                                                        <span className=' col-span-12 md:col-span-6 lg:col-span-2 self-end'>
                                                            <InputTextField
                                                                disabled
                                                                required
                                                                value={numberFormat(data.projectBudget) || "-"}
                                                                onchange={(e) => { }}
                                                                heading={t("งบประมาณโครงการ (บาท)")}
                                                            />
                                                        </span>
                                                        <span className=' col-span-12 md:col-span-6 lg:col-span-2 self-end'>
                                                            <InputTextField
                                                                disabled
                                                                required
                                                                value={numberFormat(data.equipmentBudget) || "-"}
                                                                onchange={(e) => { }}
                                                                heading={t("งบประมาณคุรุภัณฑ์ (บาท)")}
                                                            />
                                                        </span>
                                                        <span className=' col-span-12 md:col-span-6 lg:col-span-2 self-end'>
                                                            <InputTextField
                                                                disabled
                                                                required
                                                                value={numberFormat(data.additionalBudget) || "-"}
                                                                onchange={(e) => { }}
                                                                heading={t("เงินโอนเพิ่มงบประมาณ (บาท)")}
                                                            />
                                                        </span>
                                                        <span className=' col-span-12 md:col-span-6 lg:col-span-2 self-end'>
                                                            <InputTextField
                                                                disabled
                                                                required
                                                                value={numberFormat(data.reductionBudget) || "-"}
                                                                onchange={(e) => { }}
                                                                heading={t("เงินโอนลดงบประมาณ (บาท)")}
                                                            />
                                                        </span>
                                                        <span className=' col-span-12 md:col-span-6 lg:col-span-2 self-end'>
                                                            <InputTextField
                                                                disabled
                                                                disableColor='#FFFAF2'
                                                                required
                                                                value={numberFormat(data.totalBudget) || "-"}
                                                                onchange={(e) => { }}
                                                                heading={t("งบประมาณรวม (บาท)")}
                                                            />
                                                        </span>
                                                    </article>
                                                    <article className='grid grid-cols-12 gap-2 mt-2'>
                                                        <div className='col-span-12'>
                                                            <InputTextField
                                                                disabled
                                                                value={""}
                                                                heading={t("หมายเหตุ (แหล่งที่มาของงบประมาณ)")}
                                                            />
                                                        </div>
                                                    </article>
                                                </section>
                                            ))}

                                            {/* งบประมาณรวม  👇 */}
                                            <section className='w-full mt-2'>
                                                <article className='grid grid-cols-12 gap-2 mt-2'>
                                                    <span className='col-span-12 lg:col-span-2 self-end'>
                                                        <InputTextField
                                                            disabled
                                                            value={numberFormat(list.totalBudget) || "-"}
                                                            heading={t("งบประมาณรวม (บาท)")}
                                                        />
                                                    </span>
                                                    <span className='col-span-12 lg:col-span-2 self-end'>
                                                        <InputTextField
                                                            disabled
                                                            value={numberFormat(list.totalDisbursement) || "-"}
                                                            heading={t("ยอดเบิกจ่ายรวม (บาท)")}
                                                        />
                                                    </span>
                                                    <span className='col-span-12 lg:col-span-2 self-end'>
                                                        <InputTextField
                                                            disabled
                                                            value={numberFormat(list.outstandingBudget) || "-"}
                                                            heading={t("ยอดงบประมาณค้างเบิก (บาท)")}
                                                        />
                                                    </span>
                                                </article>
                                            </section>

                                            {/* ผู้รับผิดชอบโครงการ 👇*/}
                                            {list.responsiblePersonProject?.map((data: any, i: number) => (
                                                <section key={i} className='w-full mt-2'>
                                                    <article className='grid grid-cols-12 gap-2 mt-2'>
                                                        <span className='col-span-12 lg:col-span-10'>
                                                            <FilterSelect
                                                                required
                                                                disabled
                                                                heading={t("ผู้รับผิดชอบโครงการหลัก")}
                                                                renderValue={() => data.personName || "-"}
                                                                label={t('STATUS.LABEL')}
                                                                selectId="select-fiscal-year"
                                                                value={data.personName}
                                                                labelId="label-fiscal-year"
                                                                onchange={() => { }}
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
                                                                disabled
                                                                value={data.responsibleProportion || "-"}
                                                                heading={t("สัดส่วนที่รับผิดชอบ (%)")}

                                                            />
                                                        </span>
                                                    </article>
                                                </section>
                                            ))}
                                            <section className='w-full mt-2'>
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
                                            </section>
                                            <section className='w-full mt-2'>
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

                                            {/* สถานะการดำเนินงาน 👇*/}
                                            <section className='w-full mt-2'>
                                                <Typography className='text-primary' variant='h5'>
                                                    {t("สถานะการดำเนินงาน")}
                                                </Typography>
                                            </section>
                                            {operationStatus.map((list: operation) => (
                                                <SectionStatusProject>
                                                    <article className='w-full flex justify-between'>
                                                        <span><Typography variant='h6'>{`${list.statusId}.${list.statusName}`}</Typography></span>
                                                        <span><Typography variant='subtitle1'>{`บันทึกเมือ ${list.createDate} เวลา 11.30.29 น.`}</Typography></span>
                                                    </article>
                                                    <article className='w-full max-w-[177px]'>
                                                        <InputDatePicker
                                                            required
                                                            disabled
                                                            inputName='startProject'
                                                            inputHeight={42}
                                                            dateFormat="DD/MM/YYYY"
                                                            key={"START_PROJECT"}
                                                            value={list.date}
                                                            placeholder={t('-')}
                                                            onChange={(e: any) => { }}
                                                            heading={t("เมื่อวันที่")}
                                                        />
                                                    </article>
                                                    <article className='w-full'>
                                                        <InputTextField
                                                            heading={t("หมายเหตุ")}
                                                            value={list.note}
                                                        />
                                                    </article>
                                                    <article className='w-full flex flex-col gap-2'>
                                                        <LabelCustom
                                                            text='แนบไฟล์'
                                                        />
                                                        {list.file?.map((data, index: number) => (
                                                            <div key={index}>
                                                                <FileDragAndDrop
                                                                    maxSize={2}
                                                                    onTypeError={handleOnTypeError}
                                                                    onSizeError={handleOnSizeError}
                                                                    dropMessageStyle={{
                                                                        backgroundColor: "#000"
                                                                    }}
                                                                    onUpload={onDrop}
                                                                />
                                                            </div>
                                                        ))}
                                                        <Box className="flex justify-end items-center">
                                                            <ButtonOutlined
                                                                startIcon={<img src={RouteImage.addButton} />}
                                                                sx={{ width: "100%", maxWidth: "75px", color: colors.lampang_primary }}
                                                            >
                                                                {t("BUTTON.ADD")}
                                                            </ButtonOutlined>
                                                        </Box>
                                                        <Box className="flex justify-end items-center">
                                                            <Button
                                                                endIcon={<img src={RouteImage.delete} />}
                                                            >
                                                                <Typography className='text-base_secondary'>
                                                                    {notification.file.deleteStatus}
                                                                </Typography>
                                                            </Button>
                                                        </Box>
                                                    </article>
                                                </SectionStatusProject>
                                            ))}
                                        </CustomTabPanel>
                                    ))}
                                </div>

                            </Box>
                        </article>
                    </section>
                </styles.Content>
            </styles.MainContainer>
        </styles.ContainerHome >
    )
}

export default ViewTrackProjectStatus