import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
const px=(n)=>n/2420*(window as any).pageWidth
export const Chart13 = () => {
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
      xAxis: {
        data: data.map(i => i.name),
        axisTick: {show: false},
        axisLine: {
          lineStyle: {color: '#083B70'}
        },
       
        axisLabel: {
          formatter(val) {
            if (val.length > 1) {
              const array = val.split('');
              array.splice(1, 0, '\n');
              return array.join('');
            } else {
              return val;
            }
          }
        },
      },
      
      yAxis: {
        splitLine: {show: false},
        axisLine: {
          show: true,
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          formatter(value) {
            return (value * 100).toFixed(0) + '%';
          }
        }
      },
      series: [{
        type: 'bar',
        data: data.map(i => i.value),
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#0A97FB'
        }, {
          offset: 1,
          color: '#1E34FA'
        }]),
      }]
    }));
  }, []);

  return (
    <div ref={divRef} className="chart">
    </div>
  );
};
