import './App.css'
import LineChartSyncCursor from './components/LineCharSynCursor'
import Map from './components/Map'
import Heatmap from "./components/HeatMap";
import { numData, geoData } from './data/mapData';
import { data } from "./data/heapData";
import {dendodata} from "./components/Dendogram/dendoData";
import { Box, Center, Heading, SimpleGrid } from '@chakra-ui/react'
import { DendrogramHorizontalDemo } from "./components/Dendogram/DendrogramHorizontalDemo";

import CalendarHeatmap from './components/CalendarHeatmap'
import React, { useState, useEffect } from 'react'
import axios from 'axios';



function App() {
  const [datanew, setData] = useState(
    [
      {
        "date": "2016-01-01",
        "total": 17164,
        "details":
        [
          {
          "name": "Project 1",
          "date": "2016-01-01 12:30:45",
          "value": 9192
          }, 
          {
          "name": "Project 2",
          "date": "2016-01-01 13:37:00",
          "value": 6753
          },
          {
          "name": "Project N",
          "date": "2016-01-01 17:52:41",
          "value": 1219
          }
        ]
      }
    ]
  )
  useEffect(() => {
    axios.get('http://localhost:8000/api/alldata/')
      .then(response => {
        const apiData = response.data;

        // Convertir las fechas de string a objetos Date en cada entrada
        const formattedData = apiData.map(entry => {
          const dateObject = new Date(entry.Date); // Convertir el campo Date
          const details = entry.details.map(detail => ({
            ...detail,
            date: new Date(detail.date)
          }));
          
          return {
            ...entry,
            date: dateObject,
            details: details
          };
        });

        setData(formattedData);
        console.log('El resultado de la API es:', formattedData);
      })
      .catch(error => {
        console.error('Error fetching data from backend:', error);
      });
  }, []);
  
  
  return (
    <Box border={"20px solid #F0F0F0"}>
      <Box border={"0px solid #F0F0F0"}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          background="#01254a"
          color="white"
          fontSize="5xl"
          padding=""
          borderRight="30px solid #F0F0F0"
          width={1970}
          height={70}
        >
          FindAnalyzer
        </Box>
      </Box>
      <SimpleGrid columns={3} h="70vh">
        <Box h="100%" p={0} borderRight="" width={900} height={580}>
          <DendrogramHorizontalDemo data={dendodata} width={450} height={580} />
        </Box>
        <Box bg="" background="#d9d9d9" border=""  width={500} height={580} marginLeft= "60px">
          <Map  geoData={geoData} numData={numData} width={780} height={580} />
        </Box>
        <Box padding={0} maxH="70vh" mt="1vh">
          <Center>
            <LineChartSyncCursor width={620} height={175} />
          </Center>
        </Box>
      </SimpleGrid>
      <Box padding={10} minH="30vh" borderTop="30px solid #F0F0F0" mt="-7vh">
      <CalendarHeatmap data={datanew} overview="year" color="#0000FF" />
      </Box>

    </Box>
  )
}

export default App
