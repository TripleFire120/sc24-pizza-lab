import React from 'react';
import { Box, Container, Typography, Card, Grid, TextField, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const DrinkMenu = () => {
  return (
    <Box sx={{ py: 4, background: '#e9dde3' }}>
      <Container maxWidth="md" sx={{ height: '735px' }}>
        <Typography variant="h3" gutterBottom>
          Save time concentrating
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', textAlign: 'center' }}>
              <Box sx={{ height: '50%', background: '#68859d', padding: '4pt' }}>
                <Typography variant="h5" sx={{ color: 'white' }}>
                  Time to save
                </Typography>
              </Box>
              <Box sx={{ padding: '10pt' }}>
                <TextField label="Time in minutes" variant="outlined" value="20" fullWidth margin="normal" required type="number" />
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', textAlign: 'center' }}>
              <Button variant="contained" sx={{ height: '100%', width: '100%' }}>
                Start timer
              </Button>
            </Card>
          </Grid>
        </Grid>
        <Button variant="contained" size="large" sx={{ marginTop: '20pt' }} component={RouterLink} to="../timer">
          Back
        </Button>
      </Container>
    </Box>
  );
};

export default DrinkMenu;
