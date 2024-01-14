import React from 'react';
import { Typography, Box } from '@mui/material';
import profile from '../Assets/profile.png';

function TopBar() {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography variant="h6">Good morning 🌞</Typography>

      <Box
        display="flex"
        alignItems="center"
        maxWidth="200px"
        borderRadius="20px"
        bgcolor="white"
        px={3}
        py={1}
      >
        <Box mr={3}>
          <Typography fontWeight="bold">John Doe</Typography>
          <Typography fontSize={10}>john.doe@gmail.com</Typography>
        </Box>
        <img
          src={profile}
          alt="profile"
          
        />
      </Box>
    </Box>
  );
}

export default TopBar;
