import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import USA from './geo/USA.json';

const px=(n)=>n/2420*(window as any).pageWidth

export const Chart6 = () => {
  const divRef = useRef(null);
  
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    // @ts-ignore
    let option = {
      textStyle:{
        fontSize:px(0),
      },
      visualMap: {
        left: 'bottom',
        min: 0,
        max: 2000000,
        inRange: {
          color: [
            '#313695',
            '#4575b4',
            '#74add1',
            '#abd9e9',
            '#e0f3f8',
            '#ffffbf',
            '#fee090',
            '#fdae61',
            '#f46d43',
            '#d73027',
            '#a50026'
          ]
        },
        text: ['High', 'Low'], // 文本，默认为数值文本
        calculable: true
      },
      series: [
        {
          name: 'USA PopEstimates',
          type: 'map',
          roam: true,
          map: 'USA',
          emphasis: {
            label: {
              show: true
            }
          },
          data: [
            { name: 'Alabama州', value: 482202 },
            { name: 'Alaska州', value: 73144 },
            { name: 'Arizona州', value: 655325 },
            { name: 'Arkansas州', value: 294913 },
            { name: 'California州', value: 3804143 },
            { name: 'Colorado州', value: 518758 },
            { name: 'Connecticut州', value: 359034 },
            { name: 'Delaware州', value: 91709 },
            { name: 'District of Columbia州', value: 63232 },
            { name: 'Florida州', value: 1931756 },
            { name: 'Georgia州', value: 991994 },
            { name: 'Hawaii州', value: 139231 },
            { name: 'Idaho州', value: 159572 },
            { name: 'Illinois州', value: 1287525 },
            { name: 'Indiana州', value: 653733 },
            { name: 'Iowa州', value: 307418 },
            { name: 'Kansas州', value: 288590 },
            { name: 'Kentucky州', value: 438041 },
            { name: 'Louisiana州', value: 460189 },
            { name: 'Maine州', value: 132919 },
            { name: 'Maryland州', value: 588456 },
            { name: 'Massachusetts州', value: 666144 },
            { name: 'Michigan州', value: 988360 },
            { name: 'Minnesota州', value: 537139 },
            { name: 'Mississippi州', value: 294926 },
            { name: 'Missouri州', value: 602988 },
            { name: 'Montana州', value: 100141 },
            { name: 'Nebraska州', value: 185525 },
            { name: 'Nevada州', value: 275831 },
            { name: 'New Hampshire州', value: 130718 },
            { name: 'New Jersey州', value: 886590 },
            { name: 'New Mexico州', value: 208538 },
            { name: 'New York州', value: 1957261 },
            { name: 'North Carolina州', value: 972073 },
            { name: 'North Dakota州', value: 69928 },
            { name: 'Ohio州', value: 1154225 },
            { name: 'Oklahoma州', value: 381420 },
            { name: 'Oregon州', value: 389353 },
            { name: 'Pennsylvania州', value: 1276536 },
            { name: 'Rhode Island州', value: 100292 },
            { name: 'South Carolina州', value: 472323 },
            { name: 'South Dakota州', value: 83354 },
            { name: 'Tennessee州', value: 645643 },
            { name: 'Texas州', value: 2605903 },
            { name: 'Utah州', value: 285527 },
            { name: 'Vermont州', value: 62611 },
            { name: 'Virginia州', value: 818567 },
            { name: 'Washington州', value: 689712 },
            { name: 'West Virginia州', value: 185413 },
            { name: 'Wisconsin州', value: 572698 },
            { name: 'Wyoming州', value: 57612 },
            { name: 'Puerto Rico州', value: 366784 }
          ]
        }
      ],
      tooltip: {
        trigger: 'item',
        showDelay: 0,
        transitionDuration: 0.2,
        formatter: function (params) {
          const value = (params.value + '').split('.');
          const valueStr = value[0].replace(
            /(\d{1,3})(?=(?:\d{3})+(?!\d))/g,
            '$1,'
          );
          return   params.name+'患者人数' + ': ' + valueStr;
          // return params.seriesName + '<br/>' + params.name + ': ' + valueStr;
        }
      },
    };
    echarts.registerMap('USA', USA, {
      Alaska州: {
        // 把阿拉斯加移到美国主大陆左下方
        left: -131,
        top: 25,
        width: 15
      },
      Hawaii州: {
        left: -110,
        top: 28,
        width: 5
      },
      'Puerto Rico州': {
        // 波多黎各
        left: -76,
        top: 26,
        width: 2
      }
    });
    myChart.setOption(option);
  }, []);


  return (
    <div className="top border">
      <h2>美国新冠疫情各州患者人数计</h2>
      <div className="wrapper">
      <div ref={divRef} className="chart"/>
      </div>

      
    </div>
  );
};
export default Chart6;