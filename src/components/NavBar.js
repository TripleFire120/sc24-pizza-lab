import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import React from 'react';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { Link as RouterLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#primary' }}>
      <Toolbar>
        <IconButton size="large" edge="start" component={RouterLink} to="/" aria-label="logo">
          <WatchLaterIcon htmlColor="#fff" />
        </IconButton>
        <Typography variant="h6" component={'h1'} color="white" sx={{ flexGrow: 1 }} aria-label="brand name">
          TimeGuard
        </Typography>
        <Stack direction="row" sx={{ flexGrow: 1 }} spacing={2}>
          <Button
            sx={{
              '&:hover': {
                color: 'white',
              },
            }}
            variant="text"
            color="inherit"
            component={RouterLink}
            to="/"
          >
            Home
          </Button>
          <Button
            sx={{
              '&:hover': {
                color: 'white',
              },
            }}
            variant="text"
            color="inherit"
            component={RouterLink}
            to="timer"
          >
            Timer
          </Button>
          <Button
            sx={{
              '&:hover': {
                color: 'white',
              },
            }}
            variant="text"
            color="inherit"
            component={RouterLink}
            to="stats"
          >
            Stats
          </Button>
          <Button
            sx={{
              '&:hover': {
                color: 'white',
              },
            }}
            variant="text"
            color="inherit"
            component={RouterLink}
            to="contact"
          >
            Support
          </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button
            sx={{
              '&:hover': {
                color: 'white',
              },
            }}
            variant="text"
            color="inherit"
            component={RouterLink}
            to="food-menu"
          >
            Merch Store
          </Button>
          <Button
            sx={{
              '&:hover': {
                color: 'white',
              },
            }}
            variant="text"
            color="inherit"
            component={RouterLink}
            to="premium"
          >
            Premium
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
