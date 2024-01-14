import React from 'react';
import { Stack, Typography } from '@mui/material';

function MenuItem({ path, label, icon, isActive, onClick }) {
  return (
    <Stack
      sx={{
        borderRadius: '0.5rem 0 0 0.5rem',
        color: isActive ? 'black' : 'white',
        background: isActive ? 'white' : '#0f1621',
        cursor: 'pointer',
        height: '35px', // Set a fixed height for all items
        width: '200px', // Set a fixed width for all items
        alignItems: 'center',
        padding: '0 1rem', // Adjust padding as needed
      }}
      direction="row"
      gap={2}
      onClick={onClick}
    >
      <img src={icon} alt='icon' style={{ width: "20px" }} />
      <Typography>{label}</Typography>
    </Stack>
  );
}

export default MenuItem;
