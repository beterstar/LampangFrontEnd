import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Typography } from '@mui/material'
import { RouteImage } from '../../../../assets/routeImage'

// COMPONENT
import Navbar from '../../Navbar'
import Header from '../../Header'
import { ButtonOutlined } from '../../../../component/mui-custom/MuiCustom'
import * as styled from '../../style/main.style'
import TableCustom from '../../../../component/table/tableCustom'
import TableRowCommon from '../../../../component/table/TableRowCommon'
import HeaderTopicTable from '../../../../component/header-table/HeaderTopicTable'
import { disableStyleButtonMui } from '../../../../utils/disableStyleButton'

let mockData = [
    {
        id: 1,
        fiscalYear: 2000
    },
    {
        id: 2,
        fiscalYear: 2001
    },
    {
        id: 3,
        fiscalYear: 2002
    },
]

type Props = {}
const FiscalYear: React.FC<Props> = (props: Props) => {
    const { t } = useTranslation();

    const [page, setPage] = useState<number>(1);
    const [pageLimit, setPageLimit] = useState<number>(5);

    const headCells = [
        {
            id: "FISCAL_YEAR", disablePadding: false, align: 'center', label:
                <HeaderTopicTable align='start' text='ปีงบประมาณ' />
        },
        {
            id: "DATE", disablePadding: false, align: "left", label: ""
        }
    ];

    const renderData = (objData: any, no: any) => {
        no = page * pageLimit - pageLimit + no + 1
        const { id, fiscalYear } =
            objData;

        const objRenderData = {
            key: id,
            id: no,
            obj: objData,
            columns: [
                { option: "TEXT", align: "left", label: fiscalYear },
                {
                    option: "COMPONENT",
                    align: "right",
                    width: 10,
                    component:
                        <div className='w-full min-w-[300px] flex justify-end gap-5'>
                            <Button
                                startIcon={<img src={RouteImage.editPen} />}
                                sx={disableStyleButtonMui}>{"แก้ไข"}</Button>
                            <Button
                                startIcon={<img src={RouteImage.copy} />}
                                sx={disableStyleButtonMui}>{"ทำซ้ำ"}</Button>
                            <Button
                                startIcon={<img src={RouteImage.delete} />}
                                sx={disableStyleButtonMui}>{"ลบ"}</Button>
                        </div>
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
                            ปีงบประมาณ
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

export default FiscalYear