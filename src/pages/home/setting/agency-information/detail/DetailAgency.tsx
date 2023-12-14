import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, MenuItem, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { RouteImage } from '../../../../../assets/routeImage'
import { NavigateFunction, useNavigate } from 'react-router-dom'

// COMPONENT
import * as styled from '../../../style/main.style'
import Header from '../../../Header'
import Navbar from '../../../Navbar'
import InputTextField from '../../../../../component/input/inputTextField'
import { ButtonContained, ButtonOutlined } from '../../../../../component/mui-custom/MuiCustom'
import ModalCustom from '../../../../../component/modal/ModalCustom'
import HeaderTopicTable from '../../../../../component/header-table/HeaderTopicTable'
import { colors } from '../../../../../constants/colors'
import FilterSelect from '../../../../../component/select/filterSelect'
import TableRowCommon from '../../../../../component/table/TableRowCommon'
import TableCustom from '../../../../../component/table/tableCustom'



let mockData = [
    {
        id: 1,
        agency: "เทศบาลนครลำปาง",
        status: "ACTIVE"
    },
]


const DetailAgency: React.FC = () => {
    const navigate: NavigateFunction = useNavigate();
    const { t } = useTranslation();
    const [isShowModal, setIsShowModal] = useState<boolean>(false);

    const [page, setPage] = useState<number>(1);
    const [pageLimit, setPageLimit] = useState<number>(5);

    const handleToggle = () => {
        setIsShowModal(!isShowModal)
    }
    const handleSave = () => {
        alert('saving...')
    }


    const headCells = [
        {
            id: "RANK", disablePadding: false, align: 'left', label: "ลำดับ"
        },
        {
            id: "AGENCY", disablePadding: true, align: 'center', label:
                <HeaderTopicTable align='start' minWidth='657px' text='หน่วยงาน' />
        },
        {
            id: "STATUS", disablePadding: true, align: 'center', label:
                <HeaderTopicTable align='center' text='สถานะ' />
        },
        {
            id: "EDIT", disablePadding: false, align: "left", label: ""
        }
    ];

    const renderData = (objData: any, no: any) => {
        no = page * pageLimit - pageLimit + no + 1
        const { id, agency, status, path } =
            objData;

        const objRenderData = {
            key: id,
            id: no,
            obj: objData,
            columns: [
                {
                    option: "TEXT",
                    align: "left", label: id,
                    style: {
                        backgroundColor: colors.lampang_bg_input_secondary
                    }
                },
                {
                    option: "TEXT",
                    align: "left", label: agency,
                    style: {
                        backgroundColor: colors.lampang_bg_input_secondary
                    }
                },
                {
                    option: "TEXT",
                    align: "center",
                    label:
                        <div>
                            <FilterSelect
                                headingNormal
                                renderValue={() => "เปิดการใช้งาน"}
                                label={t('STATUS.LABEL')}
                                selectId="select-fiscal-year"
                                value={"1"}
                                labelId="label-fiscal-year"
                                onchange={(event) => {
                                    const value = event.target.value
                                }}
                                options={[
                                    <MenuItem key="1" value={1}>
                                        <li>เปิดการใช้งาน</li>
                                    </MenuItem>,
                                    <MenuItem key="2" value={2}>
                                        <li>ปิดการใช้งาน</li>
                                    </MenuItem>
                                ]}
                            />
                        </div>,
                    style: {
                        backgroundColor: colors.lampang_bg_input_secondary
                    }
                },
                {
                    option: "COMPONENT",
                    align: "right",
                    style: {
                        backgroundColor: colors.lampang_bg_input_secondary
                    },
                    width: 10,
                    component:
                        <Button onClick={() => navigate(`/auth/setting/agency/detail/${id}`)} className='cursor-pointer w-[24px]'>
                            <img src={RouteImage.detailIcon} width={24} alt="icons" />
                        </Button>
                }
            ],
        };
        return <TableRowCommon
            {...objRenderData}
        />;
    };



    return (
        <styled.ContainerHome>
            {isShowModal &&
                <ModalCustom
                    enableSaveButton
                    onClick={handleSave}
                    onCancel={handleToggle}
                    alignHeader='center'
                    maxHeight='600px'
                    heading='ข้อมูลหน่วยงาน'
                    component={
                        <div className='w-full'>
                            <section className='mt-8 w-full'>
                                <InputTextField
                                    heading='ชื่อหน่วยงาน'
                                    value={"เทศบาลนครลำปาง"}
                                />
                            </section>
                            <section className='mt-5 w-full'>
                                <InputTextField
                                    heading='ที่ตั้ง'
                                    value={"เลขที่ 246 ถนนฉัตรไชย ตำบลสบตุ๋ย อำเภอเมืองลำปาง จังหวัดลำปาง 52100"}
                                />
                            </section>
                            <section className='mt-5 grid grid-cols-6 gap-4'>
                                <span className='col-span-6 md:col-span-3'>
                                    <InputTextField
                                        heading='เบอร์โทรศัพท์'
                                        value={"054-237237"}
                                    />
                                </span>
                                <span className='col-span-6 md:col-span-3'>
                                    <InputTextField
                                        heading='เบอร์โทรสาร'
                                        value={"054-237237"}
                                    /></span>
                                <span className='col-span-6 md:col-span-6'>
                                    <InputTextField
                                        heading='E-Mail'
                                        type='email'
                                        value={"saraban@lampangcity.go.th"}
                                    />
                                </span>
                            </section>

                        </div>
                    }
                />}
            <Navbar />
            <styled.MainContainer>
                <Header />
                <styled.Content>
                    <motion.section
                        initial={{ x: 100 }}
                        animate={{ x: 0 }}
                        transition={{ ease: "backInOut", stiffness: 100 }}
                        className='flex justify-start items-start md:justify-between flex-col md:flex-row md:items-center gap-3'
                    >
                        <Typography className='text-primary' variant='h4'>
                            ข้อมูลหน่วยงาน
                        </Typography>
                        <ButtonContained
                            onClick={handleToggle}
                            sx={{ maxWidth: "75px" }}>
                            <Typography>{t("BUTTON.EDIT")}</Typography>
                        </ButtonContained>
                    </motion.section>
                    <section className='mt-8 w-full'>
                        <InputTextField
                            heading='ชื่อหน่วยงาน'
                            value={"เทศบาลนครลำปาง"}
                        />
                    </section>
                    <section className='mt-5 w-full'>
                        <InputTextField
                            heading='ที่ตั้ง'
                            value={"เลขที่ 246 ถนนฉัตรไชย ตำบลสบตุ๋ย อำเภอเมืองลำปาง จังหวัดลำปาง 52100"}
                        />
                    </section>
                    <section className='mt-5 grid grid-cols-9 gap-4'>
                        <span className='col-span-9 md:col-span-3'>
                            <InputTextField
                                heading='เบอร์โทรศัพท์'
                                value={"054-237237"}
                            />
                        </span>
                        <span className='col-span-9 md:col-span-3'>
                            <InputTextField
                                heading='เบอร์โทรสาร'
                                value={"054-237237"}
                            /></span>
                        <span className='col-span-9 md:col-span-3'>
                            <InputTextField
                                heading='E-Mail'
                                type='email'
                                value={"saraban@lampangcity.go.th"}
                            />
                        </span>
                    </section>

                    <section className='mt-8 flex justify-start items-start md:justify-between flex-col md:flex-row md:items-center gap-3'
                    >
                        <Typography className='text-primary' variant='h4'>
                            ข้อมูลหน่วยงาน
                        </Typography>
                        <ButtonOutlined
                            sx={{ maxWidth: "75px" }}
                            startIcon={<img src={RouteImage.addButton} />} >
                            <Typography className='text-primary'>{t("BUTTON.ADD")}</Typography>
                        </ButtonOutlined>
                    </section>

                    <section className='mt-8 w-full h-auto'>
                        <TableCustom
                            customScroll
                            page={page}
                            pageLimit={pageLimit}
                            sortBy=""
                            sortType="ASC"
                            headCells={headCells}
                            rowCount={2}
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

export default DetailAgency