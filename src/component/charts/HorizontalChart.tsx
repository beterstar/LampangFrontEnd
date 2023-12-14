import React, { useEffect, useRef } from 'react'
import { colors } from '../../constants/colors'
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { Button, Typography } from '@mui/material';
import { RouteImage } from '../../assets/routeImage';
import * as Highchartss from 'highcharts';

type Props = {
    className?: string;
    heading: string;
}

const HorizontalChart = (props: Props) => {
    const chartRef = useRef<any>(null);
    const viewportWidths: number = window.innerWidth;
    console.log(chartRef)

    useEffect(() => {
        const chart = chartRef.current?.chart;

        const setChartSize = () => {
            const viewportWidth: number = window.innerWidth;
            let newWidth: number = viewportWidth;
            let newHeight: number = 300;

            if (viewportWidth < 500) {
                newWidth = viewportWidth - 20;
                chart?.xAxis[0].update({
                    labels: {
                        enabled: false
                    }
                });
            }
            else if (viewportWidth > 500) {
                newWidth = viewportWidth - 20;
                chart?.xAxis[0].update({
                    labels: {
                        enabled: true
                    }
                });
            }
            else if (viewportWidth < 768) {
                newWidth = viewportWidth - 50;
                chart?.xAxis[0].update({
                    labels: {
                        enabled: true
                    }
                });
            }

            chart?.setSize(newWidth, newHeight);
        };

        setChartSize();
        window.addEventListener('resize', setChartSize);
        return () => window.removeEventListener('resize', setChartSize);
    }, []);

    const options: Highchartss.Options = {
        chart: {
            type: 'bar',
            width: viewportWidths,
            height: 330,
            spacingBottom: 0,
            marginRight: 10,
        },
        colors: ['#F94144', '#90BE6D'],
        title: {
            text: '',
            align: 'left'
        },
        subtitle: {
            // enable: false
        },
        xAxis: {
            categories: ['กองการเจ้าหน้าที่', 'โรงเรียนในสังกัดเทศบาลนครลำปาง', 'สถานธนานุบาล', 'หน่วยตรวจสอบภายใน', "กองสวัสดิการสังคม"],
            title: {
                text: null
            },
            gridLineWidth: 1,
            lineWidth: 0
        },
        yAxis: {
            min: 0,
            max: 10,
            title: {
                text: "",
            },
            labels: {
                overflow: 'justify'
            },
            gridLineWidth: 0
        },
        tooltip: {
            valueSuffix: 'บาท'
        },
        plotOptions: {
            bar: {
                borderRadius: '0%',
                // spacing: 0,
                pointWidth: 10,
                dataLabels: {
                    enabled: true
                },
                groupPadding: 0.3,
                pointPadding: 0.3,
                legendSymbol: "rectangle"
            }
        },
        legend: {
            layout: 'horizontal',
            align: 'left',
            verticalAlign: 'top',
            x: 0,
            y: 260,
            floating: true,
            // borderWidth: false,
            backgroundColor:
                '#FFFFFF',
            shadow: false,
        },
        credits: {
            enabled: false,
            
        },
        series: [
            {
                type: 'bar',
                name: 'เบิกจ่าย',
                data: [1.4, 2.3, 1, 2, 4.3]
            },
            {
                type: 'bar',
                name: 'งบประมาณ',
                data: [1, 2, 1.52, 2, 5.4]
            }
        ],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        layout: 'horizontal'
                    }
                }
            }]
        }
    }
    return (
        <section className={`shadow-md rounded-xl border-[1px] overflow-auto border-light ${props.className}`}>
            <span className='p-3 flex justify-between items-center border-[1px] rounded-t-xl border-[#E5E5E7]'>
                <Typography variant='h6'>
                    {props.heading}
                </Typography>
                <Button sx={{ borderRadius: "10px" }} startIcon={<img src={RouteImage.dropdownDot} />}>

                </Button>
            </span>
            <article className='w-full'>
                <HighchartsReact
                    ref={chartRef}
                    containerProps={{ style: { height: "100%",width:"95%" } }}
                    highcharts={Highcharts}
                    options={options}
                />
            </article>
        </section>
    )
}

export default HorizontalChart