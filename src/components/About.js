import React from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import { Element } from 'react-scroll';

const About = ({ data }) => {
  return (
    <Element name="about">
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        padding: '100px 20px', 
        minHeight: '100vh',
        marginTop: '64px'
      }}>
        <Avatar
          alt={data.about.name}
          src={data.about.photo}
          sx={{ width: 150, height: 150, marginBottom: '20px' }}
        />
        <Typography variant="h4" gutterBottom>
          {data.about.name}
        </Typography>
        <Typography variant="body1" align="center" sx={{ maxWidth: '600px' }}>
          {data.about.description}
        </Typography>
      </Box>
    </Element>
  );
};

export default About;
