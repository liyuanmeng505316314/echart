import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';



export const Chart2 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);

  const data = [
    {name: '马里兰州', 2011: Math.random() * 10, 2012: Math.random() * 10},
    {name: '特拉华州',  2011: Math.random() * 10, 2012: Math.random() * 10},
    {name: '内华达州',  2011: Math.random() * 10,2012: Math.random() * 10},
    {name: '夏威夷州',  2011: Math.random() * 10,2012: Math.random() * 10},
    {name: '北卡罗州',  2011: Math.random() * 10,2012: Math.random() * 10},
    {name: '密歇根州',  2011: Math.random() * 10, 2012: Math.random() * 10},
    {name: '佐治亚州',  2011: Math.random() * 10, 2012: Math.random() * 10},
    {name: '俄亥俄州',  2011: Math.random() * 10, 2012: Math.random() * 10},
    {name: '新泽西州',  2011: Math.random() * 10, 2012: Math.random() * 10},
  ];
  
  useEffect(() => {
    setInterval(() => {
      const newData = [
        {name: '马里兰州', 2011: Math.random() * 10, 2012: Math.random() * 10},
        {name: '特拉华州', 2011: Math.random() * 10, 2012: Math.random() * 10},
        {name: '内华达州', 2011: Math.random() * 10, 2012: Math.random() * 10},
        {name: '夏威夷州', 2011: Math.random() * 10, 2012: Math.random() * 10},
        {name: '北卡罗州', 2011: Math.random() * 10,2012: Math.random() * 10},
        {name: '密歇根州', 2011: Math.random() * 10, 2012: Math.random() * 10},
        {name: '佐治亚州', 2011: Math.random() * 10, 2012: Math.random() * 10},
        {name: '俄亥俄州', 2011: Math.random() * 10,2012: Math.random() * 10},
        {name: '新泽西州',2011: Math.random() * 10   , 2012: Math.random() * 10},
      ];
      x(newData);
    }, 3000);
  }, []);

  const x = (data) => {
    myChart.current.setOption(createEchartsOptions({
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        splitLine: {show: false},
        axisLabel: {show: false}
      },
      yAxis: {
        axisTick: {show: false},
        type: 'category',
        data: data.map(i => i.name),
        axisLabel: {
          formatter(val) {
            return val.replace('州', '\n州')
          }
        }
      },
      series: [
        {
          name: '2011年',
          type: 'bar',
          data: data.map(i => i[2011]),
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#2034F9'
              }, {
                offset: 1,
                color: '#04A1FF'
              }]),
            }
          }
        },
        {
          name: '2012年',
          type: 'bar',
          data: data.map(i => i[2012]),
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#B92AE8'
              }, {
                offset: 1,
                color: '#6773E7'
              }]),
            }
          }
        }
      ]
    }));
  };
  
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data);
  }, []);

  return (
    <div className="bottom border ">
      <h2>死亡人数相比上季度</h2>
      <div ref={divRef} className="chart"/>
    </div>
  );
};
