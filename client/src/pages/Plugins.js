import React from 'react'
import {Box,Stack} from '@mui/material'
import Sidebar from '../components/Sidebar';
function Plugins() {
  return (
<Box>
    <Stack direction="row" spacing={2} >
     
    <Sidebar/>

      <Box>Plugins</Box>
   </Stack>
  </Box>
  )
}

export default Plugins