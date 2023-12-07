import { motion } from "framer-motion"

import { alertImage } from "../../assets/routeImage"
import { Typography } from "@mui/material";

type Props = {
    color: 'one' | 'two' | 'three' | 'four' | 'five' | 'six' | 'seven' | 'eight' | 'nine' | 'ten' | 'eleven' | 'twelve' | 'fadeOne' | 'errors';
}

const colors = {
    one: "#EC7E32",
    two: "#01B0F1",
    three: "#7030A0",
    four: "#FFC000",
    five: "#4473C5",
    six: "#1C6D42",
    seven: "#EF4C4C",
    eight: "#28E0D8",
    nine: "#E572F0",
    ten: "#AD8D55",
    eleven: "#F80303",
    twelve: "#026735",
    fadeOne: "#026735",
    errors: "#C8322B"
}
const bgColors = {
    one: "#FFFAF2",
    two: "#ECF4FC",
    three: "#ECEBFF",
    four: "#FFFAF2",
    five: "#ECF4FC",
    six: "#F3FFF6",
    seven: "#FFEFEE",
    eight: "#ECF4FC",
    nine: "#FCDDFF",
    ten: "#FFFAF2",
    eleven: "#FFEFEE",
    twelve: "#F3FFF6",
    fadeOne: "#F3FFF6",
    errors: "#FFEFEE"
}
const icons = {
    one: alertImage.one,
    two: alertImage.two,
    three: alertImage.three,
    four: alertImage.four,
    five: alertImage.five,
    six: alertImage.six,
    seven: alertImage.seven,
    eight: alertImage.eight,
    nine: alertImage.nine,
    ten: alertImage.ten,
    eleven: alertImage.eleven,
    twelve: alertImage.twelve,
    fadeOne: alertImage.thirteen,
    errors: alertImage.errors
}

const text = {
    one: "การออกแบบ/ขออนุมัติแบบ/TOR",
    two: "ประมาณการ/ขออนุมัติราคากลาง",
    three: "หน่วยงานขออนุมัติจัดซื้อจัดจ้าง",
    four: "ขั้นตอนพัสดุ",
    five: "ทำสัญญาจ้าง",
    six: "บริหารสัญญา",
    seven: "ดำเนินงานตามสัญญา",
    eight: "ตรวจรับงาน ",
    nine: "หน่วยงานเจ้าของงบฯ จัดทำฎีกาเบิกจ่าย",
    ten: "รายงานการเบิกจ่าย/จัดทำฎีกา(คลัง)",
    eleven: "รายงานจัดทำเช็ค",
    twelve: "สรุปและประเมินผลโครงการ",
    fadeOne: "วันรับเช็ค",
    errors: "ยกเลิกโครงการ"
}

const AlertCustom = (props: Props) => {
    return (
        <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 ,pathLength: 1 }}
            transition={{
                type: "tween",
                duration: .2
            }}
            style={{
                border: `1px solid ${colors[props.color]}`,
                backgroundColor: bgColors[props.color]
            }}
            className={`w-full flex items-center gap-4 rounded-xl h-[72px] p-3`}>
            <span>
                <img src={icons[props.color]} alt="icons" />
            </span>
            <span>
                <Typography variant="h6">
                    {text[props.color]}
                </Typography>
            </span>
        </motion.div>
    )
}

export default AlertCustom