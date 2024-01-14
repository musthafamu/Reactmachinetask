import React from 'react';
import { Box, Grid, useTheme } from '@mui/material';
import LineChart from '../widgets/LineChart';
import BasicPie from '../widgets/Pichart';
import ScrollableTable from '../widgets/table';
import Topbar from './topbar';
import MultiActionAreaCard from './mediaCard';
import PaginationSquare from './pagination';

function Main() {
  const theme = useTheme();

  const chartHeight = theme.breakpoints.values.sm >= 960 ? 350 : 300;
  const chartWidth = theme.breakpoints.values.sm >= 960 ? 300 : 300;

  return (
    <Box flex={8} p={3}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Topbar />
        </Grid>
        <Grid item xs={12} sm={8} lg={7} xl={3}>
          <LineChart width={chartWidth} height={chartHeight} />
        </Grid>
        <Grid item xs={12} sm={4} lg={5} xl={3}>
          <BasicPie height={chartHeight} width={chartWidth} />
        </Grid>
    
        <Grid item xs={12} sm={8} xl={5}>
          <ScrollableTable width={chartWidth} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <MultiActionAreaCard />
        </Grid>


        <Grid container item justifyContent='center'  mr={theme.breakpoints.up('sm') ? 20: 0}>
          <PaginationSquare />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Main;
