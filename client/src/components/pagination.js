import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

// Custom styles
const CustomPagination = styled(Pagination)(({ theme }) => ({
  '& .MuiPaginationItem-root': {
    margin: theme.spacing(0.5), 
    background: 'white', 
    lineHeight: '32px', 
  },
  '& .Mui-selected': {
    border: `2px solid black`, 
  },
}));

export default function PaginationSquare() {
  return (
    <Stack spacing={4}>
      <CustomPagination
        count={10}
        variant="contained"
        color="white" 
        shape="rounded"
      />
    </Stack>
  );
}
