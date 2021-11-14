import React from 'react';
import './home.scss';
import Chart1 from '../component/chart1'
import { Chart2 } from '../component/chart2';
import { Chart3 } from '../component/chart3';
import { Chart4 } from '../component/chart4';
import { Chart5 } from '../component/chart5';
import Chart6 from '../component/chart6'
import {Chart7} from '../component/chart7';
import {Chart8} from '../component/chart8'
import {Chart9} from '../component/chart9'
import {Chart10} from '../component/chart10';
import {Chart12} from '../component/chart12';
import {Chart13} from '../component/chart13';
import {Chart14} from '../component/chart14';
import Header from '../component/Header'

export const Home = () => {
  return (
      <div className="home" >
        <Header></Header>
        <main>
           <section className="section1">
             <Chart1/>
             <Chart2/>
           </section>
           <section className="section2">
             <Chart3/>
             <Chart4/>
           </section>
           <section className="border section3 ">
             <Chart5></Chart5>
           </section>
           <section className="section4">
             <Chart6/>
             <div className="bottom  border">
                 <h2>患者年龄段分布</h2>
                 <div className="charts">
                   <Chart7/>
                   <Chart8/>
                   <Chart9/>
                 </div>
             </div>
           </section>
           <section className="section5">
           <div className="border row1 案发类型">
            <h2>病毒类型统计</h2>
            <div className="charts">
              <Chart10/>
              {/* <Chart11/> */}
            </div>
          </div>
          <div className="border row2 案发街道">
            <h2>稀缺物资统计</h2>
            <div className="charts">
              <Chart12/>
              <Chart13/>
            </div>
          </div>
          <div className="border row3 作案手段">
            <h2>感染方式分析</h2>
            <Chart14/>
          </div>
           </section>
        </main> 
      </div>
  )
};


