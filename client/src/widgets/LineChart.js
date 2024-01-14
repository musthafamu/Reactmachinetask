import React, { useEffect } from 'react';
import ReactApexChart from "react-apexcharts";
import { LineChart } from '@mui/x-charts/LineChart';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { fetchLinegraph } from '../state/slices/graphSlice';

function LineCharts({height}) {
  const dispatch = useDispatch();
  const lineGraphData = useSelector((state) => state.linegraph.lineGraph);
  const status = useSelector((state) => state.linegraph.status);
  const error = useSelector((state) => state.linegraph.error);

  useEffect(() => {
    dispatch(fetchLinegraph());
  }, [dispatch]);

  // Process data before rendering
  const processedData = processData(lineGraphData);

  const chartData = {
    series: [
      {
        name: "Value",
        data: processedData,
        color: "#a9cfe4",
      },
    ],
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  };

  const chartOptions = {
    chart: {
      height: 350,
      type: "line",
      toolbar: {
        show: false,
      },
      margin: {
        right: 40,
      },
    },
    markers: {
      size: [5, 7],
      colors: "#a6cee3",
      strokeColors: "#a6cee3",
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    xaxis: {
      categories: chartData.categories,
      labels: {
        style: { colors: "#c8c8c8" },
      },
    },
    yaxis: {
      min: 0,
      max: 20,
      tickAmount: 4,
      labels: {
        style: { colors: "#c8c8c8" },
      },
    },
    grid: {
      show: true,
      borderColor: "#f6f6f6",
      strokeDashArray: 0,
      position: "back",
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
        labels: {
          show: true,
          offsetX: 20,
        },
      },
      row: {
        colors: undefined,
        opacity: 0.5,
      },
      column: {
        colors: undefined,
        opacity: 0.5,
      },
    },
  };

  // Function helps to initialize values not provided to 0
  function processData(data) {
    const result = Array.from({ length: 12 }, (_, index) => 0);

    data.forEach(({ x, y }) => {
      const monthIndex = getMonthIndex(x);
      if (monthIndex !== -1) {
        result[monthIndex] = y;
      }
    });

    return result;
  }

  // Helper function to get the index of a month in the array
  function getMonthIndex(monthName) {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return monthNames.indexOf(monthName);
  }

  return (
    <Box bgcolor='white' maxWidth='600px' borderRadius='0.5rem'  >
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && (
        <ReactApexChart
          options={chartOptions}
          
          series={chartData.series}
          type="line"
          height={288}
        />
      )}
    </Box>
  );
}

export default LineCharts;
