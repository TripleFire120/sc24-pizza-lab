import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import phoneCover from '../assets/images/FallingPhones.jpg';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${phoneCover})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Stack spacing={2} direction="column">
          <Box
            sx={{
              padding: 2,
              backgroundColor: 'rgba(255, 255, 255)',
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: '#000',
                padding: '8px 16px',
              }}
            >
              TimeGuard
            </Typography>
          </Box>
          <Button variant="contained" color="purpel" size="large" component={RouterLink} to="timer">
            Start a Timer!
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Header;
