import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import instagram from '../assets/images/Instagram.jpg';

const About = () => {
  return (
    <Box sx={{ py: 4, background: '#d3dddd' }}>
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom>
          What is TimeGuard?
        </Typography>
        <Container maxWidth="md" sx={{ padding: '10pt', background: '#fff' }}>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={4} sm={4}>
              <img src={instagram} alt="Pizza Lab Interior" style={{ width: '100%', borderRadius: '8px' }} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography>Hello</Typography>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Box>
  );
};

export default About;
