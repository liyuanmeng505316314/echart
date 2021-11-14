import React from "react";
import left from '../image/header-left.png';
import right from '../image/header-right.png'



const Component=()=>{
    return(
        <header>
        <div className="img" style={{backgroundImage: `url(${left})`}}></div>
        <div className="title"><h1 >美国新冠疫情数据可视化</h1></div>
        <div className="img" style={{backgroundImage: `url(${right})`}}></div>
        </header>
    )
}

export default Component;