import React from 'react';
import { Box } from '@mui/material';
import { Element } from 'react-scroll';

const About = ({ data }) => {
  return (
    <Element name="experience">
        <Box sx={{ padding: '100px 20px', minHeight: '100vh' }}>
          <h2>Doświadczenie</h2>
          {data.experience && data.experience.map((exp, index) => (
            <div key={index}>
              <h3>{exp.position} - {exp.company}</h3>
              <p>{exp.period}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </Box>
      </Element>
  );
};

export default About;
