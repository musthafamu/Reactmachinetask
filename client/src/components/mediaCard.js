import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions,Box } from '@mui/material';
import twitter from '../Assets/twitter.png';
import facebook from '../Assets/facebook.png';
import instagram from '../Assets/instagram.png';

import User from '../Assets/media.png'
export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={User}
          alt="green iguana"
        />
        <CardContent >
          <Box display='flex' flexDirection='column' gap={1} alignItems='center'>

          <Typography fontWeight='bold'>John Doe</Typography>

         <Typography >CEO</Typography>
         <Box display='flex' gap={3}>
        <img src={facebook} />
        <img src={instagram} />
        <img src={twitter} />
         
         </Box>
          </Box>
        </CardContent>
      </CardActionArea>
     
    </Card>
  );
}