import React from 'react';

export const Chart14 = () => {
  return (
    <table>
      <thead>
      <tr>
        <th colSpan={2}>感染途径</th>
        <th>感染比例</th>
        <th>总计</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td rowSpan={4}>接触感染</td>
        <td>飞沫传播</td>
        <td>10</td>
        <td rowSpan={4}>80</td>
      </tr>
      <tr>
        <td>体液传播</td>
        <td>20</td>
      </tr>
      <tr>
        <td>呼吸道传播</td>
        <td>20</td>
      </tr>
      <tr>
        <td>未知方式</td>
        <td>30</td>
      </tr>
      <tr>
        <td rowSpan={2}>间接感染</td>
        <td>物品传染</td>
        <td>12</td>
        <td rowSpan={2}>20</td>
      </tr>
      <tr>
        <td>动物传染</td>
        <td>8</td>
      </tr>
      </tbody>
    </table>
  );
};
