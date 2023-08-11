import React, { useState } from "react";
import { data, data2 } from "../../data/lineData";
import { Center, SimpleGrid, Select,Flex } from '@chakra-ui/react'

import {dataForYear2001,  dataForYear2002,  dataForYear2003,   dataForYear2004,
  dataForYear2005,  dataForYear2006, dataForYear2007,  dataForYear2008, dataForYear2009,  dataForYear2010, dataForYear2011,  dataForYear2012,
  dataForYear2013,  dataForYear2014, dataForYear2015,  dataForYear2016, dataForYear2017,  dataForYear2018, dataForYear2019,  dataForYear2020,
  dataForYear2021,  dataForYear2022 } from "../../data/lineData";
import {year2001mes1, year2001mes2, year2001mes3, year2001mes4, year2001mes5, year2001mes6, year2001mes7, year2001mes8, year2001mes9, year2001mes10,year2001mes11, year2001mes12,
  year2002mes1, year2002mes2, year2002mes3, year2002mes4, year2002mes5, year2002mes6, year2002mes7, year2002mes8, year2002mes9, year2002mes10,year2002mes11, year2002mes12,
  year2003mes1, year2003mes2, year2003mes3, year2003mes4, year2003mes5, year2003mes6, year2003mes7, year2003mes8, year2003mes9, year2003mes10,year2003mes11, year2003mes12,
  year2004mes1, year2004mes2, year2004mes3, year2004mes4, year2004mes5, year2004mes6, year2004mes7, year2004mes8, year2004mes9, year2004mes10,year2004mes11, year2004mes12,
  year2005mes1, year2005mes2, year2005mes3, year2005mes4, year2005mes5, year2005mes6, year2005mes7, year2005mes8, year2005mes9, year2005mes10,year2005mes11, year2005mes12,
  year2006mes1, year2006mes2, year2006mes3, year2006mes4, year2006mes5, year2006mes6, year2006mes7, year2006mes8, year2006mes9, year2006mes10,year2006mes11, year2006mes12,
  year2007mes1, year2007mes2, year2007mes3, year2007mes4, year2007mes5, year2007mes6, year2007mes7, year2007mes8, year2007mes9, year2007mes10,year2007mes11, year2007mes12,
  year2008mes1, year2008mes2, year2008mes3, year2008mes4, year2008mes5, year2008mes6, year2008mes7, year2008mes8, year2008mes9, year2008mes10,year2008mes11, year2008mes12,
  year2009mes1, year2009mes2, year2009mes3, year2009mes4, year2009mes5, year2009mes6, year2009mes7, year2009mes8, year2009mes9, year2009mes10,year2009mes11, year2009mes12,
  year2010mes1, year2010mes2, year2010mes3, year2010mes4, year2010mes5, year2010mes6, year2010mes7, year2010mes8, year2010mes9, year2010mes10,year2010mes11, year2010mes12,
  year2011mes1, year2011mes2, year2011mes3, year2011mes4, year2011mes5, year2011mes6, year2011mes7, year2011mes8, year2011mes9, year2011mes10,year2011mes11, year2011mes12,
  year2012mes1, year2012mes2, year2012mes3, year2012mes4, year2012mes5, year2012mes6, year2012mes7, year2012mes8, year2012mes9, year2012mes10,year2012mes11, year2012mes12,
  year2013mes1, year2013mes2, year2013mes3, year2013mes4, year2013mes5, year2013mes6, year2013mes7, year2013mes8, year2013mes9, year2013mes10,year2013mes11, year2013mes12,
  year2014mes1, year2014mes2, year2014mes3, year2014mes4, year2014mes5, year2014mes6, year2014mes7, year2014mes8, year2014mes9, year2014mes10,year2014mes11, year2014mes12,
  year2015mes1, year2015mes2, year2015mes3, year2015mes4, year2015mes5, year2015mes6, year2015mes7, year2015mes8, year2015mes9, year2015mes10,year2015mes11, year2015mes12,
  year2016mes1, year2016mes2, year2016mes3, year2016mes4, year2016mes5, year2016mes6, year2016mes7, year2016mes8, year2016mes9, year2016mes10,year2016mes11, year2016mes12,
  year2017mes1, year2017mes2, year2017mes3, year2017mes4, year2017mes5, year2017mes6, year2017mes7, year2017mes8, year2017mes9, year2017mes10,year2017mes11, year2017mes12,
  year2018mes1, year2018mes2, year2018mes3, year2018mes4, year2018mes5, year2018mes6, year2018mes7, year2018mes8, year2018mes9, year2018mes10,year2018mes11, year2018mes12,
  year2019mes1, year2019mes2, year2019mes3, year2019mes4, year2019mes5, year2019mes6, year2019mes7, year2019mes8, year2019mes9, year2019mes10,year2019mes11, year2019mes12,
  year2020mes1, year2020mes2, year2020mes3, year2020mes4, year2020mes5, year2020mes6, year2020mes7, year2020mes8, year2020mes9, year2020mes10,year2020mes11, year2020mes12,
  year2021mes1, year2021mes2, year2021mes3, year2021mes4, year2021mes5, year2021mes6, year2021mes7, year2021mes8, year2021mes9, year2021mes10,year2021mes11, year2021mes12,
  year2022mes1, year2022mes2, year2022mes3, year2022mes4, year2022mes5, year2022mes6, year2022mes7, year2022mes8, year2022mes9, year2022mes10,year2022mes11, year2022mes12,

} from "../../data/lineData"

  import LineChart from "../LineChart";
import { Box, Heading } from "@chakra-ui/react";
const dataByYear = {
  2001: dataForYear2001,
  2002: dataForYear2002,
  2003: dataForYear2003,
  2004: dataForYear2004,
  2005: dataForYear2005,
  2006: dataForYear2006,
  2007: dataForYear2007,
  2008: dataForYear2008,
  2009: dataForYear2009,
  2010: dataForYear2010,
  2011: dataForYear2011,
  2012: dataForYear2012,
  2013: dataForYear2013,
  2014: dataForYear2014,
  2015: dataForYear2015,
  2016: dataForYear2016,
  2017: dataForYear2017,
  2018: dataForYear2018,
  2019: dataForYear2019,
  2020: dataForYear2020,
  2021: dataForYear2021,
  2022: dataForYear2022,
};

const dataByYearMont={
 2001:{
  1: year2001mes1,
  2: year2001mes2,
  3: year2001mes3,
  4: year2001mes4,
  5: year2001mes5,
  6: year2001mes6,
  7: year2001mes7,  
  8: year2001mes8,
  9: year2001mes9,
  10:year2001mes10,
  11:year2001mes11,
  12:year2001mes12,
 } ,
 2002:{
  1: year2002mes1,
  2: year2002mes2,
  3: year2002mes3,
  4: year2002mes4,
  5: year2002mes5,
  6: year2002mes6,
  7: year2002mes7,  
  8: year2002mes8,
  9: year2002mes9,
  10:year2002mes10,
  11:year2002mes11,
  12:year2002mes12,
 } ,
 2003:{
  1: year2003mes1,
  2: year2003mes2,
  3: year2003mes3,
  4: year2003mes4,
  5: year2003mes5,
  6: year2003mes6,
  7: year2003mes7,  
  8: year2003mes8,
  9: year2003mes9,
  10:year2003mes10,
  11:year2003mes11,
  12:year2003mes12,
 } ,
 2004:{
  1: year2004mes1,
  2: year2004mes2,
  3: year2004mes3,
  4: year2004mes4,
  5: year2004mes5,
  6: year2004mes6,
  7: year2004mes7,  
  8: year2004mes8,
  9: year2004mes9,
  10:year2004mes10,
  11:year2004mes11,
  12:year2004mes12,
 }   ,
 2005:{
  1: year2005mes1,
  2: year2005mes2,
  3: year2005mes3,
  4: year2005mes4,
  5: year2005mes5,
  6: year2005mes6,
  7: year2005mes7,  
  8: year2005mes8,
  9: year2005mes9,
  10:year2005mes10,
  11:year2005mes11,
  12:year2005mes12,
 } ,
 2006:{
  1: year2006mes1,
  2: year2006mes2,
  3: year2006mes3,
  4: year2006mes4,
  5: year2006mes5,
  6: year2006mes6,
  7: year2006mes7,  
  8: year2006mes8,
  9: year2006mes9,
  10:year2006mes10,
  11:year2006mes11,
  12:year2006mes12,
 } ,
 2007:{
  1: year2007mes1,
  2: year2007mes2,
  3: year2007mes3,
  4: year2007mes4,
  5: year2007mes5,
  6: year2007mes6,
  7: year2007mes7,  
  8: year2007mes8,
  9: year2007mes9,
  10:year2007mes10,
  11:year2007mes11,
  12:year2007mes12,
 } ,
 2008:{
  1: year2008mes1,
  2: year2008mes2,
  3: year2008mes3,
  4: year2008mes4,
  5: year2008mes5,
  6: year2008mes6,
  7: year2008mes7,  
  8: year2008mes8,
  9: year2008mes9,
  10:year2008mes10,
  11:year2008mes11,
  12:year2008mes12,
 } ,
 2009:{
  1: year2009mes1,
  2: year2009mes2,
  3: year2009mes3,
  4: year2009mes4,
  5: year2009mes5,
  6: year2009mes6,
  7: year2009mes7,  
  8: year2009mes8,
  9: year2009mes9,
  10:year2009mes10,
  11:year2009mes11,
  12:year2009mes12,
 } ,
 2010:{
  1: year2010mes1,
  2: year2010mes2,
  3: year2010mes3,
  4: year2010mes4,
  5: year2010mes5,
  6: year2010mes6,
  7: year2010mes7,  
  8: year2010mes8,
  9: year2010mes9,
  10:year2010mes10,
  11:year2010mes11,
  12:year2010mes12,
 } , 2011:{
  1: year2011mes1,
  2: year2011mes2,
  3: year2011mes3,
  4: year2011mes4,
  5: year2011mes5,
  6: year2011mes6,
  7: year2011mes7,  
  8: year2011mes8,
  9: year2011mes9,
  10:year2011mes10,
  11:year2011mes11,
  12:year2011mes12,
 } ,
 2012:{
  1: year2012mes1,
  2: year2012mes2,
  3: year2012mes3,
  4: year2012mes4,
  5: year2012mes5,
  6: year2012mes6,
  7: year2012mes7,  
  8: year2012mes8,
  9: year2012mes9,
  10:year2012mes10,
  11:year2012mes11,
  12:year2012mes12,
 } , 2013:{
  1: year2013mes1,
  2: year2013mes2,
  3: year2013mes3,
  4: year2013mes4,
  5: year2013mes5,
  6: year2013mes6,
  7: year2013mes7,  
  8: year2013mes8,
  9: year2013mes9,
  10:year2013mes10,
  11:year2013mes11,
  12:year2013mes12,
 } ,
 2014:{
  1: year2014mes1,
  2: year2014mes2,
  3: year2014mes3,
  4: year2014mes4,
  5: year2014mes5,
  6: year2014mes6,
  7: year2014mes7,  
  8: year2014mes8,
  9: year2014mes9,
  10:year2014mes10,
  11:year2014mes11,
  12:year2014mes12,
 } , 2015:{
  1: year2015mes1,
  2: year2015mes2,
  3: year2015mes3,
  4: year2015mes4,
  5: year2015mes5,
  6: year2015mes6,
  7: year2015mes7,  
  8: year2015mes8,
  9: year2015mes9,
  10:year2015mes10,
  11:year2015mes11,
  12:year2015mes12,
 } ,
 2016:{
  1: year2016mes1,
  2: year2016mes2,
  3: year2016mes3,
  4: year2016mes4,
  5: year2016mes5,
  6: year2016mes6,
  7: year2016mes7,  
  8: year2016mes8,
  9: year2016mes9,
  10:year2016mes10,
  11:year2016mes11,
  12:year2016mes12,
 } , 2017:{
  1: year2017mes1,
  2: year2017mes2,
  3: year2017mes3,
  4: year2017mes4,
  5: year2017mes5,
  6: year2017mes6,
  7: year2017mes7,  
  8: year2017mes8,
  9: year2017mes9,
  10:year2017mes10,
  11:year2017mes11,
  12:year2017mes12,
 } ,
 2018:{
  1: year2018mes1,
  2: year2018mes2,
  3: year2018mes3,
  4: year2018mes4,
  5: year2018mes5,
  6: year2018mes6,
  7: year2018mes7,  
  8: year2018mes8,
  9: year2018mes9,
  10:year2018mes10,
  11:year2018mes11,
  12:year2018mes12,
 } , 2019:{
  1: year2019mes1,
  2: year2019mes2,
  3: year2019mes3,
  4: year2019mes4,
  5: year2019mes5,
  6: year2019mes6,
  7: year2019mes7,  
  8: year2019mes8,
  9: year2019mes9,
  10:year2019mes10,
  11:year2019mes11,
  12:year2019mes12,
 } ,
 2020:{
  1: year2020mes1,
  2: year2020mes2,
  3: year2020mes3,
  4: year2020mes4,
  5: year2020mes5,
  6: year2020mes6,
  7: year2020mes7,  
  8: year2020mes8,
  9: year2020mes9,
  10:year2020mes10,
  11:year2020mes11,
  12:year2020mes12,
 } , 2021:{
  1: year2021mes1,
  2: year2021mes2,
  3: year2021mes3,
  4: year2021mes4,
  5: year2021mes5,
  6: year2021mes6,
  7: year2021mes7,  
  8: year2021mes8,
  9: year2021mes9,
  10:year2021mes10,
  11:year2021mes11,
  12:year2021mes12,
 } , 2022:{
  1: year2022mes1,
  2: year2022mes2,
  3: year2022mes3,
  4: year2022mes4,
  5: year2022mes5,
  6: year2022mes6,
  7: year2022mes7,  
  8: year2022mes8,
  9: year2022mes9,
  10:year2022mes10,
  11:year2022mes11,
  12:year2022mes12,
 }, 
}
const LineChartSyncCursor = ({ width = 700, height = 150 }) => {
  const [cursorPosition, setCursorPosition] = useState<number | null>(null);
  
  const [cursorPosition1, setCursorPosition1] = useState<number | null>(null);
  const [selectedYear, setSelectedYear] = useState<number>(2001);
  const [selectedYear1, setSelectedYear1] = useState<number>(2002);
  const [selectedYear2, setSelectedYear2] = useState<number>(2003);

  const [selectedmonth, setSelectedMonth] = useState<number>(0);
  const [selectedmonth1, setSelectedMonth1] = useState<number>(0);
  const [selectedmonth2, setSelectedMonth2] = useState<number>(0);

  const getIncidentsByYear = (dataByYear, year) => {
    return dataByYear[year];
  };
  const getIncidentsByMonth = (dataByYear,dataByYearMont, year,month) => {
    if (month==0){
      return dataByYear[year];
    }
    const data=dataByYearMont[year][month];
    return data;
  };

  const handleChangeYear = (event) => {
    setSelectedYear(Number(event.target.value));
  };
  const handleChangeYear1 = (event) => {
    setSelectedYear1(Number(event.target.value));
  };
  const handleChangeYear2 = (event) => {
    setSelectedYear2(Number(event.target.value));
  };

  const handleChangeMonth = (event) => {
    setSelectedMonth(Number(event.target.value));
  };
  const handleChangeMonth1 = (event) => {
    setSelectedMonth1(Number(event.target.value));
  };  
  const handleChangeMonth2 = (event) => {
    setSelectedMonth2(Number(event.target.value));
  };
  const filteredData = getIncidentsByYear(dataByYear, selectedYear);
  const filteredData1 = getIncidentsByYear(dataByYear, selectedYear1);
  const filteredData2 = getIncidentsByYear(dataByYear, selectedYear2);
 
  
  const filteredDataM = getIncidentsByMonth(dataByYear,dataByYearMont, selectedYear,selectedmonth);
  const filteredDataM1 = getIncidentsByMonth(dataByYear,dataByYearMont, selectedYear1,selectedmonth1);
  const filteredDataM2 = getIncidentsByMonth(dataByYear,dataByYearMont, selectedYear2,selectedmonth2);
  

  return (
    <Box >
      <Flex>
        <Select
          value={selectedYear}
          onChange={handleChangeYear}
          fontSize="xl" // Tamaño de fuente más grande
          fontWeight="bold" // Texto en negrita
          color="gray.800"
          bg="gray.200" // Cambiar el color de fondo a plomo
          border="2px solid #c2c6cc"
          borderRadius="md"
          paddingX="0"
          paddingY="0"
          marginBottom="0"
          width={150}
        >
          <option value={2001}>2001</option>
          <option value={2002}>2002</option>
          <option value={2003}>2003</option>
          <option value={2004}>2004</option>
          <option value={2005}>2005</option>
          <option value={2006}>2006</option>
          <option value={2007}>2007</option>
          <option value={2008}>2008</option>
          <option value={2009}>2009</option>
          <option value={2010}>2010</option>
          <option value={2011}>2011</option>
          <option value={2012}>2012</option>
          <option value={2013}>2013</option>
          <option value={2014}>2014</option>
          <option value={2015}>2015</option>
          <option value={2016}>2016</option>
          <option value={2017}>2017</option>
          <option value={2018}>2018</option>
          <option value={2019}>2019</option>
          <option value={2020}>2020</option>
          <option value={2021}>2021</option>
          <option value={2022}>2022</option>
          {/* Agregar más opciones para los demás años */}
        </Select>
        <Select
          value={selectedmonth}
          onChange={handleChangeMonth}
          fontSize="xl" // Tamaño de fuente más grande
          fontWeight="bold" // Texto en negrita
          color="gray.800"
          bg="gray.200" // Cambiar el color de fondo a plomo
          border="2px solid #c2c6cc"
          borderRadius="md"
          paddingX="0"
          paddingY="0"
          marginBottom="0"
          width={150}
        >
          <option value={0}>Todos</option>
          <option value={1}>Enero</option>
          <option value={2}>Febrero</option>
          <option value={3}>Marzo</option>
          <option value={4}>Abril</option>
          <option value={5}>Mayo</option>
          <option value={6}>Junio</option>
          <option value={7}>Julio</option>
          <option value={8}>Agosto</option>
          <option value={9}>Septiembre</option>
          <option value={10}>Octubre</option>
          <option value={11}>Noviembre</option>
          <option value={12}>Diciembre</option>
        </Select>
      </Flex>

      <Box marginTop="-10px">     
         <LineChart
        data={filteredDataM}
        width={width}
        height={height}
        cursorPosition={cursorPosition}
        setCursorPosition={setCursorPosition}
        xb={150}
        color={"#B6BC58"}
        
        color2={"#40BFBC"}
        data2={dataForYear2004} 
        />
      </Box>
      <Box marginTop="-15px"> 
       <Flex>
       <Select 
       value={selectedYear1}
       onChange={handleChangeYear1}
       fontSize="xl" // Tamaño de fuente más grande
       fontWeight="bold" // Texto en negrita
       color="gray.800"
       bg="gray.200" // Cambiar el color de fondo a plomo
       border="2px solid #c2c6cc"
       borderRadius="md"
       paddingX="0"
       paddingY="0"
       marginBottom="0"
       width={150}
       >
        <option value={2001}>2001</option>
        <option value={2002}>2002</option>
        <option value={2003}>2003</option>
        <option value={2004}>2004</option>
        <option value={2005}>2005</option>
        <option value={2006}>2006</option>
        <option value={2007}>2007</option>
        <option value={2008}>2008</option>
        <option value={2009}>2009</option>
        <option value={2010}>2010</option>
        <option value={2011}>2011</option>
        <option value={2012}>2012</option>
        <option value={2013}>2013</option>
        <option value={2014}>2014</option>
        <option value={2015}>2015</option>
        <option value={2016}>2016</option>
        <option value={2017}>2017</option>
        <option value={2018}>2018</option>
        <option value={2019}>2019</option>
        <option value={2020}>2020</option>
        <option value={2021}>2021</option>
        <option value={2022}>2022</option>
        {/* Agregar más opciones para los demás años */}
      </Select>
      <Select
          value={selectedmonth1}
          onChange={handleChangeMonth1}
          fontSize="xl" // Tamaño de fuente más grande
          fontWeight="bold" // Texto en negrita
          color="gray.800"
          bg="gray.200" // Cambiar el color de fondo a plomo
          border="2px solid #c2c6cc"
          borderRadius="md"
          paddingX="0"
          paddingY="0"
          marginBottom="0"
          width={150}
        >
          <option value={0}>Todos</option>
          <option value={1}>Enero</option>
          <option value={2}>Febrero</option>
          <option value={3}>Marzo</option>
          <option value={4}>Abril</option>
          <option value={5}>Mayo</option>
          <option value={6}>Junio</option>
          <option value={7}>Julio</option>
          <option value={8}>Agosto</option>
          <option value={9}>Septiembre</option>
          <option value={10}>Octubre</option>
          <option value={11}>Noviembre</option>
          <option value={12}>Diciembre</option>
        </Select>
      </Flex>
     
      </Box>
      <Box marginTop="-15px"> 
        <LineChart
          data={filteredDataM1}
          width={width}
          height={height}
          cursorPosition={cursorPosition1}
          setCursorPosition={setCursorPosition1}
          xb={320}
          color={"#6689c6"}
          colo2={"#40BFBC"}
          data2={dataForYear2006}
        />
      </Box>
      <Box marginTop="-15px">
        <Flex>
       <Select 
       value={selectedYear2}
       onChange={handleChangeYear2}
       fontSize="xl" // Tamaño de fuente más grande
       fontWeight="bold" // Texto en negrita
       color="gray.800"
       bg="gray.200" // Cambiar el color de fondo a plomo
       border="2px solid #c2c6cc"
       borderRadius="md"
       paddingX="0"
       paddingY="0"
       marginBottom="0"
       width={150}
       >
        <option value={2001}>2001</option>
        <option value={2002}>2002</option>
        <option value={2003}>2003</option>
        <option value={2004}>2004</option>
        <option value={2005}>2005</option>
        <option value={2006}>2006</option>
        <option value={2007}>2007</option>
        <option value={2008}>2008</option>
        <option value={2009}>2009</option>
        <option value={2010}>2010</option>
        <option value={2011}>2011</option>
        <option value={2012}>2012</option>
        <option value={2013}>2013</option>
        <option value={2014}>2014</option>
        <option value={2015}>2015</option>
        <option value={2016}>2016</option>
        <option value={2017}>2017</option>
        <option value={2018}>2018</option>
        <option value={2019}>2019</option>
        <option value={2020}>2020</option>
        <option value={2021}>2021</option>
        <option value={2022}>2022</option>
        {/* Agregar más opciones para los demás años */}
      </Select>
      <Select
          value={selectedmonth2}
          onChange={handleChangeMonth2}
          fontSize="xl" // Tamaño de fuente más grande
          fontWeight="bold" // Texto en negrita
          color="gray.800"
          bg="gray.200" // Cambiar el color de fondo a plomo
          border="2px solid #c2c6cc"
          borderRadius="md"
          paddingX="0"
          paddingY="0"
          marginBottom="0"
          width={150}
        >
          <option value={0}>Todos</option>
          <option value={1}>Enero</option>
          <option value={2}>Febrero</option>
          <option value={3}>Marzo</option>
          <option value={4}>Abril</option>
          <option value={5}>Mayo</option>
          <option value={6}>Junio</option>
          <option value={7}>Julio</option>
          <option value={8}>Agosto</option>
          <option value={9}>Septiembre</option>
          <option value={10}>Octubre</option>
          <option value={11}>Noviembre</option>
          <option value={12}>Diciembre</option>
        </Select>
      </Flex>
     </Box>
      <LineChart
        data={filteredDataM2}
        width={width}
        height={height}
        cursorPosition={cursorPosition}
        setCursorPosition={setCursorPosition}
        color={"#40BFBC"}
        color2={"#40BFBC"}
        xb={500}
        data2={dataForYear2008}
      />
    </Box>
  );
};

export default LineChartSyncCursor;
