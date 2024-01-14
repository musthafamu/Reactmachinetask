import React, { useState } from 'react';
import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { general } from '../theme/colors';
import { Search, Message, Notifications, Menu, Close } from '@mui/icons-material';
import StatBoard from '../Assets/StatBoard.png';
import BriefCase from '../Assets/Briefcase.png';
import shutdown from '../Assets/Shutdown.png'
import  Dashboard  from '../Assets/Dashboard.png';
import Support from '../Assets/Support.png';
import Puzzle from '../Assets/Puzzle.png';
import Help from '../Assets/Help.png';
import MenuItem from './Menuitem'
import { useNavigate } from 'react-router-dom';

const menuItems = [
  { path: '/', label: 'Dashboard', icon: Dashboard },
  { path: '/support', label: 'Support', icon: Support },
  { path: '/plugins', label: 'Plugins', icon: Puzzle },
  { path: '/help', label: 'Help', icon: Help },
];
const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');
  const navigate = useNavigate();
  

  const handleItemClick = (path) => {
    navigate(path);
  };
  return (
    <Box
      
      
      display="flex"
 
      minHeight='100vh'
    >
      

      {isNonMobileScreens ? (
        <Box
        
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        justifyItems='space-between'
    
        minHeight="100vh"
        zIndex="10"
        maxWidth="500px"
        minWidth="300px"
        backgroundColor={general.sidebg}
      >
      <Box 
          display='flex'
          flexDirection='column'
          alignItems='center'
          >
            <img src={BriefCase} style={{width:"100px"}} alt='briefcase' />
            <img src={StatBoard} style={{width:"100px"}} alt='briefcase' />
          
            </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="end"
          
            gap="1rem"
          >
           {menuItems.map((item) => (
            <MenuItem
              key={item.path}
              path={item.path}
              label={item.label}
              icon={item.icon}
              isActive={window.location.pathname === item.path}
              onClick={() => handleItemClick(item.path)}
            />
          ))}
          </Box>

          <Box 
           display='flex'
          alignItems='center'
           justifyContent='center'     
           bgcolor='white'
           color='red'
           gap={1}
           p={3}  
          >
           <Typography>
            logout
           </Typography>
           <img src={shutdown} style={{width:"20px"}} alt='shutdown'/>
            </Box>

      </Box>
      ) : (
      
        

<Menu style={{ fontSize: '30px' }} onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)} />

         

       
      )}

      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          display='flex'
          flexDirection='column'
          justifyContent='space-between'
          minHeight='100vh'
                    color="white"
          left="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={general.sidebg}
        >
          <Box display="flex" justifyContent="flex-end" p="0.5rem">

            <Close   onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)} style={{ color: 'white' }} />
           
          </Box>

          <Box 
          display='flex'
          flexDirection='column'
          alignItems='center'
          >
            <img src={BriefCase} style={{width:"100px"}} alt='briefcase' />
            <img src={StatBoard} style={{width:"100px"}} alt='briefcase' />
            </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="end"
          
            gap="1rem"
          >
           {menuItems.map((item) => (
            <MenuItem
              key={item.path}
              path={item.path}
              label={item.label}
              icon={item.icon}
              isActive={window.location.pathname === item.path}
              onClick={() => handleItemClick(item.path)}
            />
          ))}
          </Box>

          <Box 
           display='flex'
          alignItems='center'
           justifyContent='center'     
           bgcolor='white'
           color='red'
           p={3}  
           gap={1}
          >
           <Typography>
            logout
           </Typography>
           <img src={shutdown} style={{width:"20px"}} alt='shutdown'/>
            </Box>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
