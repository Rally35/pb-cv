import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock content.json
jest.mock('./content.json', () => ({
  about: {
    name: 'Test Name',
    description: 'Test Description',
  },
  skills: ['Skill 1', 'Skill 2'],
}));

describe('App Component', () => {
  test('renders loading state initially', () => {
    render(<App />);
    expect(screen.getByText(/Ładowanie.../i)).toBeInTheDocument();
  });

  test('renders main sections after loading', async () => {
    render(<App />);
    
    // Wait for content to load
    await screen.findByText('Test Name');

    // Check if main sections are rendered
    expect(screen.getByText('Test Name')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('Doświadczenie')).toBeInTheDocument();
    expect(screen.getByText('Wykształcenie')).toBeInTheDocument();
  });
});
