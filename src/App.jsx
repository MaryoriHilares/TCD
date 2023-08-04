import './App.css'
import LineChartSyncCursor from './components/LineCharSynCursor'
import Map from './components/Map'
import Heatmap from "./components/HeatMap";
import { numData, geoData } from './data/mapData';
import { data } from "./data/heapData";
import {dendodata} from "./components/Dendogram/dendoData";
import { Box, Center, Heading, SimpleGrid } from '@chakra-ui/react'
import { DendrogramHorizontalDemo } from "./components/Dendogram/DendrogramHorizontalDemo";

function App() {
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
        <Heatmap data={data} width={1750} height={200} />
      </Box>

    </Box>
  )
}

export default App
