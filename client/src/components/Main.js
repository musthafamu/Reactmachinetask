import React from 'react';
import { Box, Grid, useTheme } from '@mui/material';
import LineChart from '../widgets/LineChart';
import BasicPie from '../widgets/Pichart';
import ScrollableTable from '../widgets/table';
import Topbar from './topbar';
import MultiActionAreaCard from './mediaCard';

function Feeds() {
  const theme = useTheme();


  const chartHeight = theme.breakpoints.values.sm >= 960 ? 350 : 300;
  const chartWidth = theme.breakpoints.values.sm >= 960 ? 300 : 300;

  return (
    <Box flex={8} p={3}>
      <Grid container spacing={2}>
         <Grid item xs={12}>
        <Topbar/>
         </Grid>
        <Grid item xs={12} sm={8}>
          <LineChart width={chartWidth} height={chartHeight}  />
        </Grid>

        
        <Grid item xs={12} sm={4}>
          <BasicPie height={chartHeight} width={chartWidth} />
        </Grid>

        {/* ScrollableTable */}
        <Grid item xs={12} sm={8}>
          <ScrollableTable width={chartWidth} />
        </Grid>
        <Grid item xs={12} sm={4}>
         <MultiActionAreaCard />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Feeds;
