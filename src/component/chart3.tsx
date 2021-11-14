import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';

const px=(n)=>n/2420*(window as any).pageWidth

export const Chart3 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      legend: {
        bottom: px(10),
        textStyle: {color: 'white'},
        itemWidth: px(30),
        itemHeight: px(16)
      },
      grid: {
        x: px(20),
        x2: px(20),
        y: px(20),
        y2: px(70),
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [20.2, 20.3, 20.4, 21.1, 21.2, 21.3, 21.4, 22.1, 22.2],
        splitLine: {show: true, lineStyle: {color: '#073E78'}},
        axisTick: {show: false},
        axisLine: {show: false},
      },
      yAxis: {
        type: 'value',
        splitLine: {lineStyle: {color: '#073E78'}},
        axisLabel: {
          formatter(val) {
            return val * 100 + '%';
          }
        }
      },
      series: [
        {
          name: '少年',
          type: 'line',
          data: [0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.10].reverse()
        },
        {
          name: '青年',
          type: 'line',
          data: [0.008, 0.009, 0.019, 0.028, 0.042, 0.047, 0.05, 0.05, 0.06].reverse()
        },
        {
          name: '中年',
          type: 'line',
          data: [0.005, 0.01, 0.02, 0.04, 0.06, 0.087, 0.09, 0.10, 0.11].reverse()
        },
        {
          name: '老年',
          type: 'line',
          data: [0.03, 0.04, 0.06, 0.08, 0.11, 0.115, 0.12, 0.125, 0.13].reverse()
        }
      ].map(obj => ({
        ...obj,
        symbol: 'circle',
        symbolSize: px(12),
        lineStyle: {width: px(2)}
      }))
    }));
  }, []);

  return (
    <div className="border top">
      <h2>各年龄段死亡率</h2>
      <div ref={divRef} className="chart"/>
    </div>
  );
};
