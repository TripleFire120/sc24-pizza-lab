import React from 'react';
import { Box, Container, Typography, Button, ButtonGroup } from '@mui/material';
import clock from '../assets/images/Clock.png';
import { Link as RouterLink } from 'react-router-dom';

const DrinkMenu = () => {
  return (
    <Box sx={{ py: 4, background: '#d3dddd' }}>
      <Container maxWidth="md" sx={{ height: '735px' }}>
        <Typography variant="h3" gutterBottom>
          Timer
        </Typography>
        <img src={clock} alt="Pizza Lab Interior" style={{ width: '50%', borderRadius: '8px', marginLeft: '25%' }} />
        <ButtonGroup
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '25pt',
          }}
        >
          <Button variant="contained" color="good" size="large" component={RouterLink} to="until">
            Use Device Until
          </Button>
          <Button variant="contained" color="bad" size="large" component={RouterLink} to="after">
            Use Device After
          </Button>
        </ButtonGroup>
      </Container>
    </Box>
  );
};

export default DrinkMenu;
