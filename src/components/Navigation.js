import React, { useState, useEffect } from 'react';
import { AppBar, Tabs, Tab, styled } from '@mui/material';
import { Link, Events, scrollSpy } from 'react-scroll';

// Stworzenie własnego stylu dla aktywnej zakładki
const StyledTab = styled(Tab)(({ theme, active }) => ({
  fontWeight: active ? 'bold' : 'normal',
  color: active ? theme.palette.primary.inherit : "inherit",
  backgroundColor: active ? theme.palette.action.selected : 'transparent',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

function Navigation() {
  const [activeTab, setActiveTab] = useState('about');

  const handleSetActive = (to) => {
    console.log('Aktywna sekcja:', to);
    setActiveTab(to);
  };

  useEffect(() => {
    // Inicjalizacja scrollSpy
    scrollSpy.update();

    // Nasłuchiwanie zdarzeń przewijania
    Events.scrollEvent.register('begin', handleSetActive);
    Events.scrollEvent.register('end', handleSetActive);

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const sections = [
    { id: 'about', label: 'O mnie' },
    { id: 'experience', label: 'Doświadczenie' },
    { id: 'education', label: 'Wykształcenie' },
    { id: 'certificates', label: 'Certyfikaty' },
    { id: 'skills', label: 'Umiejętności' },
    { id: 'projects', label: 'Projekty' }
  ];

  return (
    <AppBar position="fixed" color="primary" elevation={0}>
      <Tabs 
        value={activeTab} 
        onChange={(_, newValue) => setActiveTab(newValue)}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="inherit"
      >
        {sections.map((section) => (
          <StyledTab
            key={section.id}
            label={section.label}
            value={section.id}
            component={Link}
            to={section.id}
            spy={true}
            smooth={true}
            duration={500}
            active={activeTab === section.id ? 1 : 0}
            onSetActive={handleSetActive}
          />
        ))}
      </Tabs>
    </AppBar>
  );
}

export default Navigation;
