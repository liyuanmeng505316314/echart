import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';

const px=(n)=>n/2420*(window as any).pageWidth

export const Chart12 = () => {
  const divRef = useRef(null);
  const data = [
    {value: 0.08, name: '口罩'},
    {value: 0.06, name: '酒精'},
    {value: 0.11, name: '防护服'},
    {value: 0.09, name: '面罩'},
    {value: 0.12, name: '呼吸机'},
    {value: 0.06, name: '人工肺'},
    {value: 0.08, name: '病床'},
    {value: 0.08, name: '消毒剂'},
    {value: 0.08, name: '其他药品'},
  ];
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      xAxis: {show: false},
      yAxis: {show: false},
      grid: {x: 0, x2: 0, y: 0, y2: 0, containLabel: true},
      legend: {
        orient: 'vertical',
        left: 'left',
        top: 'center',
        textStyle: {color: 'white'},
        itemWidth: px(10),
        itemHeight: px(10),
        formatter(name) {
          // const value = data.find(i => i.name === name)?.value * 100 + '%';
          return name + ' ' ;
          // return name + ' ' + value; 这是原来的
        }
      },
      series: [
        {
          center: ['60%', '50%'],
          type: 'pie',
          radius: '80%',
          label: {show: false},
          labelLine: {show: false},
          data: data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }));
  }, []);

  return (
    <div className="chart12">
      <div className="chart">
        <div className="main" ref={divRef}/>
      </div>
    </div>
  );
};
