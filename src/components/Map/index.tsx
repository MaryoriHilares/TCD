import React, { useState } from "react";
import * as d3 from 'd3';
import { InteractionData, Tooltip } from "./Tooltip";
import { FeatureCollection } from 'geojson';

export type InteractionData = {
  xLabel: string;
  yLabel: string;
  xPos: number;
  yPos: number;
  value: number | null;
};

type MapProps = {
  width: number;
  height: number;
  geoData: FeatureCollection;
  numData: { code: string; value: number }[];
};

const Map = ({ width, height, geoData, numData }: MapProps) => {
  const [hovered, setHovered] = useState<InteractionData | null>(null);

  var colorScale = d3
    .scaleThreshold<number, string>()
    .domain([100000, 1000000, 10000000, 30000000, 100000000, 500000000])
    .range(d3.schemeGnBu[5]);

  const projection = d3
    .geoMercator()
    .scale((width / 2 / Math.PI - 20) * 580)
    .center([-87.5098, 41.8600]);

  const geoPathGenerator = d3.geoPath().projection(projection);

  const handleMouseEnter = (event: React.MouseEvent<SVGPathElement>) => {
    const shapeId = event.currentTarget.getAttribute("data-id");
    const regionData = numData.find((region) => region.code === shapeId);

    if (regionData) {
      const { x, y, width } = event.currentTarget.getBBox();
      const xPos = x + width / 2;
      const yPos = y;

      setHovered({
        xLabel: shapeId,
        yLabel: "Value",
        xPos: xPos+650,
        yPos: yPos+100,
        value: regionData.value,
        name:shapeId,
      });
    }
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const allSvgPaths = geoData.features
    .filter((shape) => shape.id !== 'ATA')
    .map((shape) => {
      const regionData = numData.find((region) => region.code === shape.id);

      const color = regionData ? colorScale(regionData.value) : 'lightgrey';

      return (
        <path
          key={shape.id}
          data-id={shape.id}
          d={geoPathGenerator(shape)}
          stroke="lightGrey"
          strokeWidth={0.5}
          fill={color}
          fillOpacity={1}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      );
    });

  return (
    <div>
      <svg width={width} height={height}>
        {allSvgPaths}
      </svg>
      <div
        style={{
          width: width,
          height: height,
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
          marginLeft: 60,
          marginTop: 20,
        }}
      >
        <Tooltip interactionData={hovered} />
      </div>
    </div>
  );
};

export default Map;
