import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import { Box, Avatar, Typography, List, ListItem, ListItemText } from '@mui/material';
import { Element } from 'react-scroll';
import content from './content.json';  // Import pliku JSON

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(content);  // Pobranie danych z JSON-a
  }, []);

  if (!data.about || !data.skills) {
    return <div>Ładowanie...</div>;  // W przypadku, gdy dane jeszcze się nie załadowały
  }

  return (
    <div>
      <Navigation />
      
      <Element name="about">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '100px 20px', minHeight: '100vh' }}>
          <Avatar
            alt={data.about.name}
            src={data.about.photo}  // Ładowanie zdjęcia z pliku JSON
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

      <Element name="experience">
        <Box sx={{ padding: '100px 20px', minHeight: '100vh' }}>
          <h2>Doświadczenie</h2>
          <p>Opisz swoje doświadczenie zawodowe tutaj.</p>
        </Box>
      </Element>

      <Element name="education">
        <Box sx={{ padding: '100px 20px', minHeight: '100vh' }}>
          <h2>Wykształcenie</h2>
          <p>Informacje o Twoim wykształceniu.</p>
        </Box>
      </Element>

      <Element name="certificates">
        <Box sx={{ padding: '100px 20px', minHeight: '100vh' }}>
          <h2>Certyfikaty</h2>
          <p>Lista certyfikatów, które zdobyłeś.</p>
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
    </div>
  );
}

export default App;

