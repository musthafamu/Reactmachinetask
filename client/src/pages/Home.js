import React from 'react';
import { Box, Stack } from '@mui/material';

import Sidebar from '../components/Sidebar';
import { general } from '../theme/colors';
import Main from '../components/Main';

function Home() {
  return (
    <Box>
      <Stack   direction="row"  gap={2}   >
     
        <Sidebar />

        <Main />
      </Stack>
    </Box>
  );
}

export default Home;
