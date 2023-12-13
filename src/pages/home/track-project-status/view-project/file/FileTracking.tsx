import { Typography } from '@mui/material';
import React from 'react'
import { useTranslation } from 'react-i18next';


// COMPONENT
import { RouteImage } from '../../../../../assets/routeImage';
import TableCustom from '../../../../../component/table/tableCustom';
import TableRowCommon from '../../../../../component/table/TableRowCommon';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FileDragAndDrop from '../../../../../component/dragAndDrop/dragAndDrop';

type Props = {}
const mockData = [
    {
        id: 1,
        name: "โครงการ",
        fileType: "pdf",
        size: 90000
    }
]

const FileTracking: React.FC<Props> = (props: Props) => {
    const { t } = useTranslation();

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
            id: "FILE_NAME", disablePadding: false, align: "center", label:
                <div className='min-w-[587px] flex justify-center items-center gap-1'>
                    <Typography variant='h6'>
                        {t("ชื่อเอกสารแนบ")}
                    </Typography>
                    <span><img src={RouteImage.arrowTopBottom} alt="icon" /></span>
                </div>
        },
        {
            id: "BUDGET", disablePadding: false, align: "left", label:
                <div className='min-w-[135px] flex justify-center items-center gap-1'>
                    <Typography variant='h6'>
                        {t("สกุลไฟล์")}
                    </Typography>
                    <span><img src={RouteImage.arrowTopBottom} alt="icon" /></span>
                </div>

        },
        {
            id: "DISBURSEMENT_BUDGET", disablePadding: false, align: "left", label:
                <div className='min-w-[130px] flex justify-center items-center gap-1'>
                    <Typography variant='h6'>
                        {t("ขนาด")}
                    </Typography>
                    <span><img src={RouteImage.arrowTopBottom} alt="icon" /></span>
                </div>

        },
        {
            id: "SUBCATEGORIES", disablePadding: false, align: "left", label: ""
        },
        {
            id: "WORK_PERIOD", disablePadding: false, align: "left", label: ""
        }
    ];

    const renderData = (objData: any, no: any) => {
        // no = page * pageLimit - pageLimit + no + 1
        const { id, name, fileType, size } =
            objData;

        const objRenderData = {
            key: id,
            id: id,
            obj: objData,
            columns: [
                {
                    option: "TEXT", align: "left", label: id
                },
                {
                    option: "TEXT", align: "left", label: name,
                },
                {
                    option: "TEXT", align: "center", label: fileType,
                },
                {
                    option: "PRICE", align: "center", label: size,
                },
                {
                    option: "COMPONENT",
                    align: "center",
                    label: "",
                    width: 100,
                    component:
                        <span className='flex items-center gap-x-8'>
                            <button className='flex gap-1'>
                                <RemoveRedEyeOutlinedIcon className='text-base_disable cursor-pointer' />
                                <Typography>{t("ดู")}</Typography>
                            </button>
                            <button className='flex gap-1'>
                                <img src={RouteImage.delete} style={{ maxWidth: 24 }} alt='icons' />
                                <Typography>{t("ลบ")}</Typography>
                            </button>
                        </span>
                },
                {
                    option: "TEXT", align: "center", label: "",
                }
            ],
        };
        return <TableRowCommon
            {...objRenderData}
        />;
    };

    return (
        <div className='w-full mt-8'>
            <span>
                <Typography className='text-primary' variant='h5'>
                    {t("เอกสาร")}
                </Typography>
            </span>
            <section className='w-full mt-3'>
                <TableCustom
                    page={1}
                    pageLimit={5}
                    sortBy=""
                    sortType="ASC"
                    headCells={headCells}
                    rowCount={10}
                    rowsData={mockData && mockData.map((data: any, i: any) => {
                        return renderData(data, i)
                    })}
                    onSort={() => { }}
                    setPageLimit={(value: number) => { }}
                    setPage={(value: number) => { }}
                    hidePagination
                />
            </section>
            <section className='mt-5'>
                <FileDragAndDrop
                    heading='แนบไฟล์'
                    minHeight='80px'
                    maxSize={2}
                    onTypeError={(val) => console.log(val)}
                    onSizeError={(err) => console.log(err)}
                    dropMessageStyle={{
                        backgroundColor: "#000"
                    }}
                    onUpload={() => { }}
                />
            </section>
        </div>
    )
}

export default FileTracking