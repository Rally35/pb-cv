import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { Element } from 'react-scroll';
import content from './content.json';  // Import pliku JSON
import './App.css';
import About from './components/About';
import Experience from './components/Experience';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(content);  // Pobranie danych z JSON-a
    console.log('Loaded data:', content);  // Dodaj to dla debugowania
  }, []);

  if (!data.about || !data.skills) {
    return <div>Ładowanie...</div>;  // W przypadku, gdy dane jeszcze się nie załadowały
  }

  return (
    <div>
      <Navigation />
      
      <About data={data} />

      <Experience data={data} />

      <Element name="education">
        <Box sx={{ padding: '100px 20px', minHeight: '100vh' }}>
          <h2>Wykształcenie</h2>
          {data.education && data.education.map((edu, index) => (
            <div key={index}>
              <h3>{edu.degree} - {edu.school}</h3>
              <p>{edu.year}</p>
            </div>
          ))}
        </Box>
      </Element>

      <Element name="certificates">
        <Box sx={{ padding: '100px 20px', minHeight: '100vh' }}>
          <h2>Certyfikaty</h2>
          {data.certificates && data.certificates.map((cert, index) => (
            <div key={index}>
              <h3>{cert.name}</h3>
              <p>{cert.issuer}</p>
              <p>{cert.year}</p>
            </div>
          ))}
        </Box>
      </Element>

      <Element name="skills">
        <Box sx={{ padding: '100px 20px', minHeight: '100vh' }}>
          <Typography variant="h4" gutterBottom>
            Umiejętności
          </Typography>
          <List>
            {data.skills.map((skill, index) => (
              <ListItem key={index}>
                <ListItemText primary={skill} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Element>

      <Element name="projects">
        <Box sx={{ padding: '100px 20px', minHeight: '100vh' }}>
          <Typography variant="h4" gutterBottom>
            Projekty
          </Typography>
          {data.projects && data.projects.map((project, index) => (
            <Box key={index} sx={{ marginBottom: '20px' }}>
              <Typography variant="h6">{project.name}</Typography>
              <Typography variant="body1">{project.description}</Typography>
              <Typography variant="body2">Technologie: {project.technologies.join(', ')}</Typography>
            </Box>
          ))}
        </Box>
      </Element>
    </div>
  );
}

export default App;

