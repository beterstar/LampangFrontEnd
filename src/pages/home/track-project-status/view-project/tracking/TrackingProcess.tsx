import React, { useState } from 'react'
import { MenuItem, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

// COMPONENT
import FilterSelect from '../../../../../component/select/filterSelect'
import InputTextField from '../../../../../component/input/inputTextField'
import InputTextArea from '../../../../../component/input/inputTextArea'


// TEST
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import LabelCustom from '../../../../../component/label/LabelCustom'


type Props = {}

const TrackingProcess: React.FC<Props> = (props: Props) => {
    const { t } = useTranslation();

    const [selectProduct, setSelectProduct] = useState<string>("1");
    console.log(selectProduct)

    return (
        <div className='w-full'>
            <section className='w-full mt-8'>
                <Typography className='text-primary' variant='h5'>
                    {"การติดตามผลการดำเนินงาน"}
                </Typography>
            </section>
            <section className='w-full max-w-[310px]'>
                <FilterSelect
                    required
                    heading={t("การติดตามผลการดำเนินการ")}
                    renderValue={() => "เลือก"}
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
            </section>
            <section className='w-full mt-2'>
                <InputTextArea
                    required
                    heading='เป้าหมายเชิงผลผลิต'
                    value=''
                    placeholder='ระบุ'
                    onChange={() => { }}
                />
            </section>
            <section className='w-full mt-2'>
                <InputTextArea
                    required
                    heading='เป้าหมายเชิงผลลัพธ'
                    value=''
                    placeholder='ระบุ'
                    onChange={() => { }}
                />
            </section>
            <section className='w-full mt-2'>
                <InputTextArea
                    required
                    heading='กลุ่มเป้าหมาย/ผู้ได้รับผลประโยชน์'
                    value=''
                    placeholder='ระบุ'
                    onChange={() => { }}
                />
            </section>
            <section className='w-full mt-2'>
                <InputTextArea
                    required
                    heading='ตัวชี้วัด'
                    value=''
                    placeholder='ระบุ'
                    onChange={() => { }}
                />
            </section>
            <section className='w-full mt-2'>
                <InputTextArea
                    required
                    heading='ผลที่คาดว่าจะได้รับ'
                    value=''
                    placeholder='โปรดระบุ'
                    onChange={() => { }}
                />
            </section>

            <section className='w-full mt-1'>
                <Typography variant='h6'>
                    {"ความก้าวหน้าของโครงการที่ดำเนินการกับความเชื่อมโยงกับแผนทั้งสามระดับ"}
                </Typography>
            </section>

            <section className='w-full mt-2'>
                <InputTextArea
                    required
                    heading='ผลการดำเนินงานต่อเป้าหมายของยุทธศาสตร์ชาติ'
                    value=''
                    placeholder='โปรดระบุ'
                    onChange={() => { }}
                />
            </section>
            <section className='w-full mt-2'>
                <InputTextArea
                    required
                    heading='ผลการดำเนินงานต่อเป้าหมายของแผนแม่บทประเด็น'
                    value=''
                    placeholder='โปรดระบุ'
                    onChange={() => { }}
                />
            </section>
            <section className='w-full mt-2'>
                <InputTextArea
                    required
                    heading='ผลการดำเนินงานต่อเป้าหมายของแผนย่อย*'
                    value=''
                    placeholder='โปรดระบุ'
                    onChange={() => { }}
                />
            </section>
            <section className='w-full mt-2'>
                <InputTextArea
                    required
                    heading='ผลการดำเนินงานสอดคล้องกับยุทธศาสตร์จังหวัด*'
                    value=''
                    placeholder='โปรดระบุ'
                    onChange={() => { }}
                />
            </section>
            <section className='w-full mt-2'>
                <InputTextArea
                    required
                    heading='ผลการดำเนินงานสอดคล้องกับแผนพัฒนาท้องถิ่น*'
                    value=''
                    placeholder='โปรดระบุ'
                    onChange={() => { }}
                />
            </section>

            <section className='w-full mt-1'>
                <Typography variant='h6'>
                    {"พิกัดที่ตั้งโครงการค่าที่ดินและสิ่งก่อสร้าง (เลือกพิกัด)"}
                </Typography>
            </section>
            <section className='flex gap-2 flex-col md:flex-row'>
                <div className='w-full md:w-1/2'>
                    <InputTextField
                        heading='เส้นรุ้ง (ละติจูด)'
                    />
                </div>
                <div className='w-full md:w-1/2'>
                    <InputTextField
                        heading='เส้นแวง (ลองติจูด)'
                    />
                </div>
            </section>

            <section className='w-full mt-1'>
                <Typography variant='h6'>
                    {"สรุปปัญหาและข้อเสนอแนะของโครงการ"}
                </Typography>
            </section>

            <section className='w-full mt-2'>
                <InputTextArea
                    required
                    heading='สรุปผลการดำเนินงาน*'
                    value=''
                    placeholder='โปรดระบุ'
                    onChange={() => { }}
                />
            </section>
            <section className='w-full mt-2'>
                <InputTextArea
                    required
                    heading='ปัญหาและอุปสรรคในการดำเนินงาน*'
                    value=''
                    placeholder='โปรดระบุ'
                    onChange={() => { }}
                />
            </section>
            <section className='w-full mt-2'>
                <InputTextArea
                    required
                    heading='ข้อเสนอแนะ*'
                    value=''
                    placeholder='โปรดระบุ'
                    onChange={() => { }}
                />
            </section>

            <section className='w-full mt-1'>
                <Typography variant='h6'>
                    {"การประเมินเป้าหมายและตัวชีวัดโครงการ"}
                </Typography>
            </section>

            <section className='w-full mt-2'>
                <FormControl sx={{ width: "100%" }}>
                    <LabelCustom
                        isRequired
                        text='เป้าหมายเชิงผลผลิต'
                    />
                    <RadioGroup
                        value={selectProduct}
                        className='w-full flex gap-x-[120px]'
                        onChange={(e) => setSelectProduct(e.target.value)}
                        row
                        aria-labelledby="target-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <span className='w-auto'>
                            <FormControlLabel value="1" control={<Radio />} label={
                                <Typography>
                                    {"เป็นไปตามเป้าหมาย"}
                                </Typography>
                            } />
                        </span>
                        <span className='flex-1'>
                            <FormControlLabel value="2" control={<Radio />} label={
                                <div className='flex flex-1 w-full justify-center items-center'>
                                    <Typography className='w-full'>
                                        {"ไม่เป็นไปตามเป้าหมาย"}
                                    </Typography>
                                    <InputTextField 
                                       
                                    />
                                </div>

                            } />
                        </span>

                    </RadioGroup>
                </FormControl>
            </section>
        </div>
    )
}

export default TrackingProcess