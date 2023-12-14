import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, MenuItem, Typography } from '@mui/material'
import { RouteImage } from '../../../../assets/routeImage'
import { useNavigate, NavigateFunction } from 'react-router-dom'

// COMPONENT
import Navbar from '../../Navbar'
import Header from '../../Header'
import { ButtonOutlined } from '../../../../component/mui-custom/MuiCustom'
import * as styled from '../../style/main.style'
import TableCustom from '../../../../component/table/tableCustom'
import TableRowCommon from '../../../../component/table/TableRowCommon'
import HeaderTopicTable from '../../../../component/header-table/HeaderTopicTable'
import { colors } from '../../../../constants/colors'
import FilterSelect from '../../../../component/select/filterSelect'

let mockData = [
    {
        id: 1,
        agency: "เทศบาลนครลำปาง",
        status: "ACTIVE"
    },
]

type Props = {}
const AgencyInformation: React.FC<Props> = (props: Props) => {
    const { t } = useTranslation();
    const navigate: NavigateFunction = useNavigate();

    const [page, setPage] = useState<number>(1);
    const [pageLimit, setPageLimit] = useState<number>(5);

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
            <Navbar />
            <styled.MainContainer>
                <Header />
                <styled.Content>
                    <section className='flex justify-start items-start md:justify-between flex-col md:flex-row md:items-center gap-3'>
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

export default AgencyInformation