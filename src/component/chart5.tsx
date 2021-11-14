import React from 'react';

export const Chart5 = () => {
  return (
    <div className="one">
      <h2>地区死亡人数</h2>
      <table>
        <thead>
        <tr>
          <th>年份</th><th>南方地区</th><th>新英格兰地区</th><th>西部地区</th><th>中央地区</th>
          <th>高山地区</th><th>太平洋地区</th><th>合计</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>2021一季度</td><td>2230</td><td>3170</td><td>9032</td><td>2345</td><td>579</td><td>23009</td><td>45690</td>
        </tr>
        <tr>
          <td>2021二季度</td><td>1840</td><td>2130</td><td>7923</td><td>1864</td><td>1579</td><td>19034</td><td>37842</td>
        </tr>
        <tr>
          <td>2021三季度</td><td>1305</td><td>1369</td><td>6799</td><td>1276</td><td>1109</td><td>17333</td><td>29031</td>
        </tr>
        <tr>
          <td>2021四季度</td><td>984</td><td>893</td><td>4392</td><td>921</td><td>578</td><td>11032</td><td>19903</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};
