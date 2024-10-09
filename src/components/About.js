import React from 'react';
import { Box, Avatar, Typography, Grid, Paper } from '@mui/material';
import { Element } from 'react-scroll';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const About = ({ data }) => {
  return (
    <Element name="about">
      <Box sx={{ 
        padding: '100px 20px', 
        minHeight: '100vh',
        marginTop: '64px'
      }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Avatar
                alt={data.about.name}
                src={data.about.photo}
                sx={{ width: 200, height: 200, marginBottom: '20px' }}
              />
              <Typography variant="h4" gutterBottom>
                {data.about.name}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ padding: '20px', height: '100%' }}>
              <Typography variant="body1" paragraph>
                {data.about.description}
              </Typography>
              <Box sx={{ marginTop: '20px' }}>
                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <EmailIcon sx={{ marginRight: '10px' }} /> {data.about.email}
                </Typography>
                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                  <PhoneIcon sx={{ marginRight: '10px' }} /> {data.about.phone}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Element>
  );
};

export default About;