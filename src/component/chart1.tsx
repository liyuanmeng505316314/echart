import React ,{useRef,useEffect}from "react";
import * as echarts from 'echarts'


const px=(n)=>n/2420*(window as any).pageWidth


const Component=()=>{
  const divRef = useRef(null)
  useEffect(()=>{
    var myChart = echarts.init(divRef.current);
    // 指定图表的配置项和数据
    var option = {
      textStyle:{
        fontSize:px(12),
        color:'#79839e'
      },
      xAxis: {
        axisTick:{show:false},
        data: ['呼吸衰竭', '炎症风暴', '心力衰竭', '肝脏衰竭', '脑梗塞', '心梗塞', '肾衰竭', '免疫疾病', '血压失调'],
        axisLabel : {
          fontSize:px(12),
          formatter(val){
            if(val.length>2){
              const arr =val.split('')
              arr.splice(2,0,'\n')
              val=arr.join('')
            }
             return val;
          }
        },
        splitLine:{
          show:false
        },
      },
      yAxis: {
        axisLabel : {
          fontSize:px(12)
        },
        splitLine:{
          show:false
        }
      },
      grid:{
        x:px(40),
        y:px(10),
        x2:px(40),
        y2:px(55),
      },
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [24,3,7,21,15,9,5,13,3]
        }
      ]
    };
    myChart.setOption(option);
  },[])

  return(
    <div className="top border">
        <h2>患者死亡原因统计</h2>
        <div ref={divRef} className="chart"> </div>
    </div>
  )
}

export default Component;