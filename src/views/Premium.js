import React from 'react';
import { Box, Container, Typography, Card, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
const DrinkMenu = () => {
  return (
    <Box sx={{ py: 4, background: '#d3dddd' }}>
      <Container maxWidth="md" sx={{ height: '735px' }}>
        <Typography variant="h3" gutterBottom>
          Premium
        </Typography>
        <Card sx={{ padding: '10pt', background: '#fff' }}>
          <Typography variant="h5">Premium pack</Typography>
          <List dense="dense">
            <ListItem>
              <ListItemIcon>
                <RadioButtonCheckedIcon color="purpel" />
              </ListItemIcon>
              <ListItemText primary="Forces your addictive app to close after a set time limit" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <RadioButtonCheckedIcon color="purpel" />
              </ListItemIcon>
              <ListItemText primary="Enables automatic timer setting" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <RadioButtonCheckedIcon color="purpel" />
              </ListItemIcon>
              <ListItemText primary="Unlocks more color themes" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <RadioButtonCheckedIcon color="purpel" />
              </ListItemIcon>
              <ListItemText primary="Removes ads" />
            </ListItem>
          </List>
          <Button variant="contained" color="purpel" size="large">
            $4.99
          </Button>
        </Card>
      </Container>
    </Box>
  );
};

export default DrinkMenu;
