import React from 'react';
import { Box, Container, Grid, Typography, TextField, Button, Card } from '@mui/material';
import ticket from '../assets/images/Ticket.png';

const Contact = () => {
  return (
    <Box sx={{ py: 4, background: '#d3dddd' }}>
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom>
          Support
        </Typography>
        <Card sx={{ background: '#fff', padding: '5pt' }}>
          <Typography gutterBottom>
            Have you found some issues or bugs in our app? Do you have a question for the developers? Write us a ticket and we will answer it right
            away!
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Our Contact Forms
              </Typography>
              <Typography variant="body1" gutterBottom>
                Phone: +420 123 456 789
              </Typography>
              <Typography variant="body1" gutterBottom>
                Email: info@timeguard.cz
              </Typography>
              <img src={ticket} alt="Ticket" style={{ width: '100%', borderRadius: '8px' }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Ticket
              </Typography>
              <form noValidate autoComplete="off">
                <TextField label="Name" variant="outlined" fullWidth margin="normal" required />
                <TextField label="Email" variant="outlined" fullWidth margin="normal" required type="email" />
                <TextField label="Message" variant="outlined" fullWidth margin="normal" required multiline rows={4} />
                <Box mt={2}>
                  <Button variant="contained" color="primary" type="submit">
                    Send Message
                  </Button>
                </Box>
              </form>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
};

export default Contact;
