import React from 'react';
import { Box, Container, Typography, Card, Grid } from '@mui/material';
const DrinkMenu = () => {
  return (
    <Box sx={{ py: 4, background: '#d3dddd' }}>
      <Container maxWidth="md" sx={{ height: '735px' }}>
        <Typography variant="h3" gutterBottom>
          Stats
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', textAlign: 'center' }}>
              <Box sx={{ height: '50%', background: '#68859d', padding: '4pt' }}>
                <Typography variant="h5" sx={{ color: 'white' }}>
                  Time saved concentrating
                </Typography>
              </Box>
              <Typography variant="h2">0 s</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', textAlign: 'center' }}>
              <Box sx={{ height: '50%', background: '#68859d', padding: '4pt' }}>
                <Typography variant="h5" sx={{ color: 'white' }}>
                  Controlled time spent{' '}
                </Typography>
              </Box>
              <Typography variant="h2">0 s</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', textAlign: 'center' }}>
              <Box sx={{ height: '50%', background: '#9D6885', padding: '4pt' }}>
                <Typography variant="h5" sx={{ color: 'white' }}>
                  Uncontrolled time spent
                </Typography>
              </Box>
              <Typography variant="h2">130 min</Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DrinkMenu;
