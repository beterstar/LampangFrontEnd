import { Button, Typography } from '@mui/material';
import { Chart, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { RouteImage } from '../../assets/routeImage';

Chart.register(ArcElement, Tooltip, Legend, Title);
Chart.defaults.plugins.tooltip.backgroundColor = 'rgb(0, 0, 156)';
Chart.defaults.plugins.legend.position = 'bottom';
Chart.defaults.plugins.legend.title.display = true;


const data = {
    labels: [
        'บุคลากร',
        'ดำเนินการ',
        'ลงทุน',
        'อื่น ๆ',
        'อุดหนุน',
    ],
    datasets: [{
        label: '',
        data: [200, 50, 100, 20, 0],
        backgroundColor: [
            '#F94144',
            '#90BE6D',
            '#2D9CDB',
            '#E5E5E7',
            '#EEA23E',
        ],
        hoverOffset: 4

    }]
};

const options = {
    plugins: {
        legend: {
            display: true,
        },
    },
};

type props = {
    className?: string;
    maxWidth?: string;
    heading: string;
}

const BarChart: React.FC<props> = (props: props) => {
    return (
        <div className={`w-full max-w-[${props.maxWidth ? props.maxWidth : '317px'}] shadow-sm rounded-xl border-[1px] rounded-t-xl border-[#E5E5E7] flex flex-col ${props.className}`}>
            <span className='p-3 flex justify-between items-center border-[1px] rounded-t-xl border-[#E5E5E7]'>
                <Typography variant='h6'>
                    {props.heading}
                </Typography>
                <Button sx={{ borderRadius: "10px" }} startIcon={<img src={RouteImage.dropdownDot} />}>

                </Button>
            </span>
            <span className='px-2 py-3'>
                <Doughnut options={options} data={data} />
            </span>
        </div>
    );
}

export default BarChart;