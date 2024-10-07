import React from 'react';
import { AppBar, Tabs, Tab } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';

function Navigation() {
  return (
    <AppBar position="fixed">
      <Tabs>
        <Tab label="O mnie" component={ScrollLink} to="about" smooth duration={500} />
        <Tab label="Doświadczenie" component={ScrollLink} to="experience" smooth duration={500} />
        <Tab label="Wykształcenie" component={ScrollLink} to="education" smooth duration={500} />
        <Tab label="Certyfikaty" component={ScrollLink} to="certificates" smooth duration={500} />
        <Tab label="Umiejętności" component={ScrollLink} to="skills" smooth duration={500} />
      </Tabs>
    </AppBar>
  );
}

export default Navigation;
