import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPiechart } from '../state/slices/pieSlice';
import {piechartcolor} from '../theme/colors'
export default function BasicPie({ height, width }) {
    const dispatch = useDispatch();
    const piechart = useSelector((state) => state.pie.piechart);

    useEffect(() => {
        dispatch(fetchPiechart());
    }, [dispatch]);

    const customColors = [piechartcolor.a, piechartcolor.b, piechartcolor.c, piechartcolor.d, piechartcolor.e];

    const dataWithColors = piechart.map((point, index) => ({
        ...point,
        color: customColors[index % customColors.length],
    }));

    return (
        <Box height={height} maxWidth={500} bgcolor="white" p={2} borderRadius="0.5rem">
       
        <PieChart
          margin={{ top: 0, bottom: 100, left: 100, right:10 }}
          
          series={[{ data: dataWithColors }]}
          slotProps={{
            legend: {
              direction: 'column',
              position: { vertical: 'bottom', horizontal: 'left' },
              padding: 0,
            },
          }}
        />
        </Box>
    );
}
