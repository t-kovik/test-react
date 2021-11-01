import React, {useContext, useEffect, useState} from 'react';
import {dataContext} from "../../context/dataContext";
import ReactECharts from 'echarts-for-react';
import styles from "./pie.scss";

export function PieChart(props: any) {
    const [countryData, setCountryData] = useState<any[]>([]);
    const {data, loading} = useContext(dataContext);

    useEffect(() => {
        setCountryData(data);
    }, [loading])


    let dataArray: { value: number; name: string; }[] = [];

    if (countryData && countryData.length > 0) {
        data.map((item: { cca2: string; population: number }) => {
            let obj = {value: 0, name: ''};
            obj.value = Number(item.population);
            obj.name = item.cca2;
            dataArray.push(obj);
        })
    }

    const options = {
        backgroundColor: '#2c343c',
        title: {
            text: props.title,
            left: 'center',
            top: 0,
            textStyle: {
                color: '#ccc'
            }
        },
        tooltip: {
            trigger: 'item'
        },
        visualMap: {
            show: false,
            min: 1,
            max: 150000000,
            inRange: {
                colorLightness: [0.8, 0.3]
            }
        },
        series: [
            {
                name: 'Population',
                type: 'pie',
                radius: '75%',
                center: ['50%', '50%'],
                data: dataArray.sort(function (a, b) {
                    return a.value - b.value;
                }),
                roseType: 'radius',
                label: {
                    color: 'rgba(255, 255, 255, 0.3)'
                },
                labelLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 3,
                    length2: 5
                },
                itemStyle: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                animationType: 'scale',
                animationEasing: 'elasticOut',
            }
        ]
    };

    return (
            <div className={`${styles.pie} chart`}>
                {(countryData && countryData.length > 0) ?
                    <ReactECharts option={options}/>
                    : null
                }
            </div>
    )
}

