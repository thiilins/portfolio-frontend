import React from 'react'

// import { Container } from './styles';

const Logo: React.FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      version="1.1"
      fill="currentColor"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 1920 506.7">
      <g>
        <path
          d="M90.3,109.2h36.1v117H90.3V109.2z M181.1,109.2h36.1v234.1h-36.1V109.2z M271.5,109.2h36.1v117h-36.1V109.2z
		 M347,108.9h36.1V343H347V108.9z M426.5,339.2c-8.7-5-15.9-12.2-20.9-20.8c-5.1-8.7-7.8-18.7-7.7-28.8c-0.1-10,2.6-19.8,7.7-28.4
		c5-8.6,12.3-15.8,20.9-20.8c8.8-5.1,18.8-7.8,29-7.7c10.1-0.1,20,2.6,28.6,7.7c8.7,5,15.9,12.1,20.9,20.8
		c5.1,8.6,7.8,18.4,7.7,28.4c0.1,10.1-2.6,20.1-7.7,28.8c-5,8.6-12.3,15.8-20.9,20.8c-8.7,5.1-18.6,7.7-28.6,7.7
		C445.3,346.9,435.3,344.3,426.5,339.2z M582.9,151.8h-36.2v-22.2h101.8l-7,22.2H610v154.4h-27V151.8z M674.6,129.6h25.6v176.6
		h-25.6V129.6z M682.5,212.3c5.1-9.6,12.3-18,21.1-24.4c8-6.1,17.8-9.6,27.8-10c10.8-0.5,20.3,1.7,28.5,6.6
		c8.2,4.9,14.7,12,18.9,20.5c4.5,9,6.8,19,6.6,29.1v72.1H760v-73.3c0.1-5.9-1.3-11.6-4.1-16.8c-2.5-4.5-6.3-8.3-10.9-10.7
		c-4.6-2.4-9.7-3.7-15-3.6c-5.2-0.1-10.4,1.2-15.1,3.6c-4.6,2.4-8.4,6.2-10.9,10.7c-2.7,5.2-4.1,10.9-4,16.8v73.3h-25.6v-63.4
		C674.6,232.1,677.4,221.6,682.5,212.3L682.5,212.3z M815.2,148.1c-6.2-5.9-6.5-15.7-0.6-21.9c1.1-1.2,2.4-2.2,3.9-3
		c2.6-1.4,5.4-2.1,8.3-2c2.8,0,5.6,0.7,8.1,2c7.5,4.1,10.3,13.6,6.2,21.2c-0.7,1.3-1.7,2.6-2.8,3.7c-3,3.1-7.2,4.8-11.5,4.7
		C822.4,152.9,818.3,151.2,815.2,148.1L815.2,148.1z M813.8,180.1h25.6l0.2,126.1h-25.3L813.8,180.1z M900,298.5
		c-9.8-4.9-18-12.5-23.6-21.9c-5.7-9.5-8.6-20.5-8.6-33c0-13,2.9-24.5,8.6-34.5c5.6-9.9,13.7-18,23.6-23.5
		c10.1-5.6,21.6-8.4,34.6-8.4c12.9,0,24.3,2.8,34.4,8.3c9.9,5.4,18,13.5,23.4,23.5c5.6,10.1,8.3,21.5,8.3,34.4v63h-66.1
		C921.6,306.2,910,303.6,900,298.5L900,298.5z M976.5,284v-40.8c0.1-7.8-1.7-15.4-5.3-22.3c-3.4-6.4-8.5-11.6-14.8-15.1
		c-13.7-7.1-30-7.1-43.8,0c-6.4,3.5-11.6,8.7-15.1,15.1c-3.7,6.8-5.6,14.5-5.4,22.3c-0.2,7.5,1.7,14.8,5.3,21.4
		c3.5,6.1,8.7,11.1,15,14.3c6.8,3.5,14.3,5.2,21.9,5.1L976.5,284z M1053,300.5c-9.9-5.5-18.1-13.6-23.6-23.5
		c-11.3-21.2-11.2-46.5,0.1-67.7c5.6-9.9,13.7-18.1,23.6-23.6c10.5-5.8,22.4-8.8,34.4-8.6c12.9,0,24,3.1,33.5,9.4
		c9.3,6,16.8,14.5,21.7,24.4c9.9,20,10,43.5,0.2,63.5c-4.8,10.1-12.3,18.7-21.6,24.8c-9.6,6.4-20.9,9.6-34.1,9.6
		C1075.3,309.3,1063.5,306.3,1053,300.5z M1060.9,367.7c-8.8-3.7-16.6-9.7-22.4-17.3c-5.7-7.6-9.1-16.7-9.5-26.2h23.4
		c0.9,5.8,3.3,11.2,7.1,15.7c3.8,4.5,8.6,8,14,10.1c5.6,2.3,11.7,3.4,17.7,3.4c7.8,0.2,15.5-1.7,22.2-5.5c6.2-3.6,11.2-9,14.5-15.4
		c3.5-7,5.3-14.6,5.3-22.4l0.2-39.8l2.5-26.5l1.9-63.7h20v129.1c0.2,11.7-2.6,23.2-8.2,33.5c-5.4,9.8-13.6,17.7-23.5,22.9
		c-10.1,5.5-21.7,8.2-34.7,8.2C1080.9,373.9,1070.5,371.8,1060.9,367.7L1060.9,367.7z M1112,281c6.5-3.7,12-9,15.7-15.6
		c3.8-6.8,5.8-14.4,5.7-22.2c0.1-7.9-1.8-15.7-5.7-22.7c-3.7-6.5-9.1-11.8-15.7-15.3c-14.2-7.2-30.9-7.2-45.1,0
		c-6.5,3.5-11.9,8.8-15.5,15.3c-3.8,6.9-5.7,14.8-5.5,22.7c-0.1,7.8,1.8,15.5,5.7,22.2c3.7,6.5,9.1,11.9,15.6,15.6
		c6.8,3.8,14.6,5.8,22.4,5.7C1097.3,286.8,1105.1,284.8,1112,281z M1292.6,187.8c9.8,4.9,18,12.5,23.6,22c5.7,9.5,8.6,20.5,8.6,33
		c0,13-2.9,24.5-8.6,34.6c-5.5,9.9-13.7,18-23.6,23.4c-10.1,5.5-21.6,8.3-34.6,8.3c-12.9,0-24.3-2.8-34.4-8.3
		c-9.9-5.4-18-13.4-23.5-23.3c-5.5-10-8.3-21.5-8.3-34.5v-63h66.1C1271,180,1282.6,182.6,1292.6,187.8L1292.6,187.8z M1216.1,202.5
		v40.8c-0.2,7.7,1.7,15.4,5.3,22.2c3.4,6.3,8.5,11.5,14.8,15c13.7,7.1,30,7.1,43.8,0c6.4-3.5,11.6-8.7,15.1-15.1
		c3.7-6.8,5.6-14.5,5.4-22.3c0.2-7.4-1.7-14.7-5.3-21.2c-3.5-6.1-8.7-11-15-14.2c-6.8-3.5-14.3-5.2-22-5.1L1216.1,202.5z
		 M1416.2,129.6h27.3V284h57.6l8.9,22.2h-93.9L1416.2,129.6z M1562.9,129.6v27.3h-25v-27.3H1562.9z M1537.9,180.1h25.3v126.1h-25.3
		V180.1z M1603.6,306.2V180.1h52.8c10-0.2,20,2.2,28.8,7c8.3,4.5,15.1,11.2,19.7,19.4c4.7,8.5,7.1,18.1,7,27.9v71.9h-25.3v-72.4
		c0.1-5.8-1.3-11.4-4.2-16.4c-2.7-4.5-6.5-8.2-11.1-10.7c-4.6-2.5-9.8-3.9-15.1-4h-27.3v103.5H1603.6z M1771.4,281.1
		c3.8,3.4,8.6,5.1,14.6,5.1c6.3,0,11-1.4,14.1-4.2c3-2.5,4.7-6.3,4.7-10.2c0.2-4.1-1.7-8-4.9-10.5c-4.5-3.1-9.4-5.7-14.6-7.6
		l-2.2-0.7c-1.6-0.8-3.2-1.4-4.8-1.9c-7.3-2.8-14.1-6.4-20.5-10.9c-4.5-3.2-8.2-7.3-10.9-12.2c-4.9-10.8-4-23.3,2.3-33.3
		c3.8-5.6,9.1-10,15.2-12.8c6.8-3.2,14.3-4.8,21.8-4.7c12.5,0,22.6,3.3,30,10c7.5,6.7,11.8,15.6,12.9,26.6l-24.1,3.6
		c0-5.6-1.6-10-4.9-13.2c-3.3-3.1-7.8-4.7-13.6-4.7c-4.6-0.3-9.1,1-12.8,3.7c-3.3,2.5-5.2,6.4-5.1,10.5c-0.1,2.9,0.8,5.7,2.5,8.1
		c1.8,2.3,4.1,4.2,6.8,5.5c3.7,1.9,7.6,3.4,11.6,4.7c0.7,0.2,1.3,0.4,1.9,0.7c7.4,2.2,14.5,5.3,21.2,9.2c5.2,3.1,9.6,7.5,12.7,12.7
		c3.1,5.6,4.6,11.9,4.5,18.2c0,6.4-1.8,12.6-5.3,18c-3.8,5.8-9.2,10.4-15.4,13.3c-7.5,3.5-15.6,5.1-23.9,4.9
		c-11.7,0-21.7-3.5-29.8-10.5c-7.9-6.7-13.1-16.1-14.3-26.4l24.1-3.9C1765.4,273.2,1767.7,277.8,1771.4,281.1L1771.4,281.1z
		 M1179.2,329.5h29v6.3h-21.2v14.5h16.2v5.9h-16.2v23.3h-7.7L1179.2,329.5z M1219.5,343.7v20.6c0,1.6,0.3,3.3,1.1,4.7
		c0.7,1.3,1.8,2.3,3.1,3c1.3,0.7,2.8,1,4.3,1c1.5,0,2.9-0.3,4.2-1c1.3-0.7,2.3-1.7,3.1-3c0.8-1.4,1.2-3.1,1.1-4.7v-20.6h7.2v20.5
		c0,2.8-0.6,5.6-2,8.1c-1.3,2.4-3.2,4.4-5.6,5.8c-5.1,2.9-11.3,2.9-16.3,0c-2.3-1.4-4.2-3.4-5.5-5.8c-1.3-2.5-2-5.3-2-8.1v-20.5
		H1219.5z M1254.2,379.3c-0.7-0.7-1-1.7-1-2.6v-44.4c0-1,0.3-1.9,1-2.6c0.7-0.7,1.6-1,2.6-1h0.1c1,0,1.9,0.3,2.6,1
		c0.7,0.7,1,1.7,1,2.6v44.4c0,1-0.3,1.9-1,2.6c-0.7,0.7-1.6,1-2.6,1h-0.1C1255.8,380.3,1254.8,379.9,1254.2,379.3L1254.2,379.3z
		 M1270.6,379.3c-0.7-0.7-1-1.7-1-2.6v-44.4c0-1,0.3-1.9,1-2.6c0.7-0.7,1.6-1,2.6-1h0.1c1,0,1.9,0.3,2.6,1c0.7,0.7,1,1.7,1,2.6v44.4
		c0,1-0.3,1.9-1,2.6c-0.7,0.7-1.6,1-2.6,1h-0.1C1272.2,380.3,1271.3,379.9,1270.6,379.3L1270.6,379.3z M1291.3,379.1
		c-1.5-0.6-2.8-1.5-4-2.5c-0.9-0.8-1.6-1.7-2.2-2.7c-0.6-0.8-0.9-1.9-0.8-2.9c0.2-0.8,0.6-1.6,1.4-2.1c0.7-0.5,1.6-0.7,2.5-0.5
		c1,0.2,1.9,0.8,2.6,1.6c0.7,1,1.6,1.8,2.6,2.3c1,0.7,2.2,1.1,3.4,1.2c1.4,0.1,2.8-0.2,4-1c0.9-0.7,1.4-1.7,1.3-2.8
		c0.1-1.1-0.4-2.1-1.2-2.7c-1.1-0.8-2.4-1.5-3.7-2l-1.2-0.4l-0.5-0.1c-2.3-0.8-4.4-1.9-6.4-3.2c-1.4-1-2.5-2.2-3.3-3.7
		c-0.7-1.5-1.1-3.2-1-4.8c0-1.8,0.5-3.5,1.6-4.9c1.1-1.5,2.6-2.8,4.3-3.5c1.9-0.9,4.1-1.3,6.2-1.2c2.3,0,4.6,0.5,6.6,1.6
		c1.8,0.8,3.3,2.3,4.2,4c0.3,0.7,0.4,1.5,0.3,2.3c-0.1,0.8-0.5,1.5-1.2,1.9c-0.8,0.5-1.7,0.7-2.6,0.6c-1-0.1-1.8-0.6-2.5-1.4l-0.8-1
		c-0.5-0.5-1.1-0.9-1.8-1.2c-0.8-0.3-1.6-0.4-2.4-0.4c-1.2-0.1-2.4,0.3-3.4,1c-0.9,0.7-1.4,1.7-1.4,2.8c0,0.8,0.3,1.6,0.8,2.1
		c0.6,0.7,1.3,1.2,2.1,1.6c1.1,0.6,2.3,1.1,3.5,1.5c2.1,0.7,4.1,1.6,6,2.8c1.5,0.9,2.7,2.1,3.6,3.6c0.9,1.6,1.3,3.4,1.2,5.1
		c0,1.8-0.5,3.6-1.5,5.2c-1.1,1.6-2.6,2.9-4.3,3.7c-2.1,0.9-4.4,1.3-6.7,1.2C1294.8,380.3,1293,379.8,1291.3,379.1L1291.3,379.1z
		 M1315,343.7h17.5v5.3H1315V343.7z M1320.1,329.5h7.4v50h-7.4V329.5z M1376.6,379.4h-5.1l-0.3-7.2c-1.4,2.4-3.5,4.4-6,5.8
		c-2.6,1.4-5.5,2.2-8.5,2.1c-3.3,0-6.6-0.8-9.5-2.4c-2.8-1.6-5.1-3.9-6.7-6.7c-1.7-2.9-2.5-6.2-2.5-9.6c0-3.4,0.8-6.7,2.5-9.7
		c1.6-2.8,3.9-5.1,6.8-6.6c3-1.6,6.4-2.4,9.9-2.3c3.4-0.1,6.8,0.7,9.9,2.2c2.8,1.4,5.2,3.7,6.8,6.4c1.7,2.9,2.6,6.2,2.6,9.6
		L1376.6,379.4z M1346.5,367.9c1,1.8,2.6,3.4,4.4,4.4c4,2.1,8.8,2.1,12.8,0c1.9-1,3.4-2.6,4.4-4.4c1.1-1.9,1.6-4.1,1.6-6.3
		c0-2.2-0.5-4.5-1.6-6.4c-1-1.8-2.6-3.3-4.4-4.3c-2-1-4.2-1.6-6.4-1.5c-2.2,0-4.5,0.5-6.5,1.5c-1.9,1-3.4,2.5-4.4,4.3
		c-1.1,2-1.6,4.2-1.6,6.4C1344.8,363.8,1345.4,366,1346.5,367.9z M1393.5,377.9c-2.8-1.5-5.2-3.8-6.8-6.6c-1.7-2.9-2.5-6.2-2.5-9.6
		c-0.1-3.4,0.8-6.8,2.5-9.8c1.6-2.8,3.9-5.1,6.8-6.7c6-3.1,13.1-3.2,19.1-0.2c1.4,0.7,2.6,1.6,3.8,2.6c1.1,1,2,2.1,2.8,3.3
		c0.5,0.7,0.8,1.6,0.9,2.5c0.1,0.8-0.2,1.6-0.9,2.2c-0.5,0.4-1.1,0.7-1.7,0.7c-0.7,0.1-1.3-0.1-1.9-0.4c-0.9-0.9-1.9-1.8-2.9-2.7
		c-0.7-0.6-1.4-1.1-2.2-1.6c-1.1-0.7-2.2-1.2-3.4-1.5c-1.2-0.4-2.5-0.6-3.8-0.5c-2.2,0-4.3,0.6-6.2,1.6c-1.8,1-3.2,2.5-4.2,4.3
		c-1,1.9-1.6,4.1-1.5,6.3c0,2.1,0.5,4.3,1.6,6.1c1,1.8,2.5,3.2,4.3,4.2c1.9,1,4,1.5,6.1,1.5c2.7,0,5.3-0.8,7.6-2.2
		c0.8-0.4,1.5-0.9,2.1-1.5c0.5-0.5,1-1,1.5-1.6l0.5-0.6c0.1-0.2,0.3-0.3,0.5-0.4c0.5-0.5,1.2-0.8,1.9-0.8c0.7,0,1.3,0.2,1.9,0.6
		c0.6,0.5,1,1.3,1,2.1c0,1-0.2,2-0.7,2.9c-0.5,1-1.2,1.8-1.9,2.6c-1.1,1.2-2.3,2.1-3.7,2.9c-1.5,0.9-3.2,1.6-4.9,2
		c-1.9,0.5-3.8,0.7-5.7,0.7C1399.9,380.3,1396.5,379.5,1393.5,377.9L1393.5,377.9z M1428.4,379.3c-0.7-0.7-1-1.7-1-2.6v-44.4
		c0-1,0.3-1.9,1-2.6c0.7-0.7,1.6-1,2.6-1c1-0.1,1.9,0.3,2.6,1c0.7,0.7,1,1.7,1,2.6v44.4c0,1-0.3,1.9-1,2.6c-0.7,0.7-1.6,1-2.6,1
		C1430,380.3,1429.1,379.9,1428.4,379.3L1428.4,379.3z M1455,376.7c0.1,1-0.3,1.9-1.1,2.6l0.1-0.1c-0.6,0.8-1.6,1.2-2.6,1.2
		c-1-0.1-2-0.6-2.7-1.4l-18.6-18.1l4.4-4.4l19,17.6C1454.4,374.7,1454.9,375.6,1455,376.7L1455,376.7z M1449.8,343
		c1-0.1,2,0.2,2.7,1l-0.2-0.1c0.8,0.6,1.3,1.5,1.3,2.5c0,1-0.5,2-1.2,2.7l-17.4,16.3l-4.6-4.1l16.9-16.7
		C1447.9,343.7,1448.8,343.1,1449.8,343L1449.8,343z M1477.5,350.9h21v5.3h-21V350.9z M1497.2,329.5c4.6-0.1,9.2,1,13.4,3.1
		c3.8,2,7,5,9.2,8.8c2.2,3.9,3.4,8.3,3.3,12.8c0.1,4.5-1.1,9-3.3,12.9c-2.2,3.8-5.3,6.9-9.2,9c-4.1,2.2-8.7,3.4-13.3,3.3h-11.7v-50
		L1497.2,329.5z M1496.9,372.5c3.4,0.1,6.8-0.8,9.8-2.5c2.8-1.6,5-3.9,6.6-6.7c1.6-2.9,2.4-6.1,2.3-9.3c0-3.3-0.8-6.5-2.4-9.3
		c-1.5-2.7-3.8-4.9-6.6-6.4c-3-1.6-6.4-2.4-9.8-2.3h-3.7v36.5L1496.9,372.5z M1532.1,352c1.6-2.8,3.9-5.1,6.7-6.7
		c3-1.6,6.4-2.4,9.8-2.4c3.5-0.1,7,0.8,10.1,2.6c3,1.7,5.4,4.3,6.9,7.4c1.6,3.5,2.3,7.4,1.9,11.3h-7.4v-2.3c0-1.7-0.1-3.3-0.5-4.9
		c-0.4-1.4-1-2.6-2-3.7c-1.1-1.3-2.4-2.3-4-2.9c-1.6-0.7-3.3-1-5.1-1c-1.8,0-3.6,0.4-5.2,1.1c-1.5,0.7-2.8,1.8-3.9,3
		c-0.9,1-1.5,2.2-1.9,3.5c-0.4,1.5-0.6,3-0.6,4.5c0,1.7,0.2,3.3,0.6,4.9c0.4,1.3,1.1,2.5,1.9,3.6c1,1.2,2.3,2.2,3.7,2.8
		c1.7,0.8,3.6,1.2,5.5,1.2c1.7,0,3.5-0.3,5.1-0.9c1.5-0.5,2.9-1.4,4.1-2.5l0.5-0.6l4.6,4.1l-0.1,0.2c-1.5,1.8-3.4,3.1-5.5,4.1
		c-2.8,1.2-5.7,1.8-8.7,1.7c-3.4,0.1-6.8-0.8-9.8-2.4c-2.8-1.5-5.2-3.8-6.8-6.6C1528.8,365.2,1528.8,357.9,1532.1,352L1532.1,352z
		 M1566.7,358.8v5.5h-36.2v-5.5H1566.7z M1573.3,345.2c0.3-0.9,1.1-1.7,2-2l-0.2,0.1c1.7-0.8,3.7-0.1,4.5,1.7
		c0.1,0.2,0.2,0.4,0.2,0.7l11.2,29.4l-5.7,2.3l-11.9-29.1C1573.1,347.2,1573,346.2,1573.3,345.2L1573.3,345.2z M1587.2,379.5
		c-0.8-0.5-1.4-1.2-1.7-2l-0.3-0.6l3.8-3.6l1.8,2h-2.1l2-2l3.9,3.6l-0.3,0.7c-0.4,0.8-1,1.5-1.7,2c-0.8,0.5-1.7,0.8-2.6,0.8h-0.1
		C1589,380.3,1588,380,1587.2,379.5L1587.2,379.5z M1594.5,377.3l-5.8-2.3l11.2-29.4c0.3-1,1-1.8,1.9-2.3c0.9-0.4,2-0.4,2.9,0
		l-0.2-0.1c1,0.3,1.7,1,2.1,2c0.3,1,0.2,2.1-0.3,3L1594.5,377.3z M1613.1,352c1.6-2.8,3.9-5.1,6.7-6.7c3-1.6,6.4-2.4,9.8-2.4
		c3.5-0.1,7,0.8,10.1,2.6c3,1.7,5.4,4.3,6.9,7.4c1.6,3.5,2.3,7.4,1.9,11.3h-30.2c0.1,2.1,0.9,4.2,2.3,5.8c1,1.2,2.3,2.2,3.7,2.8
		c3.5,1.6,7.5,1.7,11,0.2c1.7-0.7,3.2-1.7,4.4-3.1l5.1,3.8c-1.8,2-4,3.7-6.5,4.7c-2.7,1.2-5.7,1.8-8.6,1.7c-3.4,0.1-6.8-0.8-9.8-2.4
		c-2.8-1.5-5.2-3.8-6.8-6.6C1609.8,365.2,1609.8,358,1613.1,352L1613.1,352z M1638.6,353.2c-1.1-1.3-2.4-2.3-4-2.9
		c-1.6-0.7-3.3-1-5.1-1c-1.8,0-3.6,0.4-5.2,1.1c-1.5,0.7-2.8,1.8-3.9,3c-0.6,0.7-1.1,1.4-1.4,2.2c-0.4,0.9-0.6,1.8-0.8,2.7h22.6
		C1640.7,356.4,1639.9,354.6,1638.6,353.2L1638.6,353.2z M1658.3,329.5h7.2v50h-7.2V329.5z M1684,377.8c-2.8-1.6-5.2-3.9-6.8-6.7
		c-1.7-2.9-2.5-6.2-2.5-9.6c-0.1-3.4,0.8-6.7,2.5-9.7c1.6-2.8,4-5.1,6.8-6.7c6.1-3.2,13.4-3.2,19.5,0c2.9,1.5,5.2,3.8,6.8,6.7
		c1.7,2.9,2.5,6.3,2.5,9.7c0,3.3-0.8,6.7-2.5,9.6c-1.6,2.8-4,5.1-6.8,6.7c-3,1.7-6.4,2.5-9.9,2.5
		C1690.3,380.3,1687,379.5,1684,377.8z M1700,372c1.8-1,3.3-2.5,4.3-4.3c1-1.9,1.6-4,1.5-6.1c0-2.2-0.5-4.3-1.5-6.2
		c-1-1.8-2.5-3.3-4.3-4.2c-1.9-1-4-1.5-6.2-1.5c-2.2,0-4.3,0.5-6.2,1.5c-1.8,1-3.3,2.4-4.3,4.2c-1,1.9-1.5,4-1.5,6.2
		c0,2.1,0.5,4.2,1.5,6.1c1,1.8,2.5,3.2,4.3,4.2C1691.5,374,1696.1,374,1700,372z M1722.5,351.7c1.6-2.8,4-5,6.8-6.5
		c3-1.6,6.4-2.4,9.9-2.3c3.4-0.1,6.8,0.8,9.9,2.4c2.8,1.5,5.2,3.8,6.8,6.6c3.3,6,3.3,13.3,0,19.3c-1.6,2.8-4,5.1-6.8,6.6
		c-3,1.6-6.4,2.5-9.9,2.4c-2.4,0-4.8-0.5-7-1.4c-1.9-0.8-3.6-2-4.9-3.6v22.5h-7.2v-36.5C1720,357.9,1720.8,354.6,1722.5,351.7
		L1722.5,351.7z M1728.5,368c1,1.8,2.5,3.3,4.4,4.3c2,1.1,4.2,1.6,6.4,1.5c2.2,0,4.4-0.5,6.3-1.5c1.8-1,3.4-2.5,4.4-4.3
		c1.1-2,1.6-4.2,1.6-6.4c0-2.2-0.5-4.4-1.6-6.3c-1-1.8-2.6-3.4-4.4-4.4c-1.9-1.1-4.2-1.6-6.4-1.6c-2.2,0-4.4,0.5-6.3,1.6
		c-1.8,1-3.3,2.5-4.4,4.4c-1.1,1.9-1.6,4.1-1.6,6.3C1726.9,363.9,1727.4,366.1,1728.5,368L1728.5,368z M1766.5,352
		c1.6-2.8,3.9-5.1,6.7-6.7c3-1.6,6.4-2.4,9.8-2.4c3.5-0.1,7,0.8,10.1,2.6c3,1.7,5.4,4.3,6.9,7.4c1.6,3.5,2.3,7.4,1.9,11.3h-30.2
		c0.1,2.1,1,4.2,2.3,5.8c1,1.2,2.3,2.2,3.7,2.8c3.5,1.6,7.5,1.7,11,0.2c1.7-0.7,3.2-1.7,4.4-3.1l5.1,3.8c-1.8,2-4,3.7-6.5,4.7
		c-2.7,1.2-5.7,1.8-8.6,1.7c-3.4,0.1-6.8-0.8-9.8-2.4c-2.8-1.5-5.2-3.8-6.8-6.6C1763.3,365.2,1763.3,358,1766.5,352L1766.5,352z
		 M1792,353.2c-1.1-1.3-2.4-2.3-4-2.9c-1.6-0.7-3.3-1-5.1-1c-1.8,0-3.6,0.4-5.2,1.1c-1.5,0.7-2.8,1.8-3.9,3
		c-0.6,0.7-1.1,1.4-1.4,2.2c-0.4,0.9-0.6,1.8-0.8,2.7h22.6C1794.2,356.4,1793.3,354.6,1792,353.2L1792,353.2z M1811.8,351.5
		c1.4-2.6,3.5-4.7,6.2-6c2.9-1.4,6.1-2,9.3-1.7v7c-1.9-0.1-3.7,0.3-5.4,1.2c-1.6,0.9-2.8,2.2-3.7,3.8c-0.9,1.7-1.4,3.6-1.3,5.5v18.2
		h-7.2v-19C1809.7,357.3,1810.4,354.3,1811.8,351.5L1811.8,351.5z"
        />
      </g>
    </svg>
  )
}

export default Logo