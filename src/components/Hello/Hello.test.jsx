import React from 'react';
import { render, screen } from '@testing-library/react';
import Hello from './Hello';

test('renders default greeting', () => {
  render(<Hello />);
  expect(screen.getByText(/Hello World/i)).toBeInTheDocument();
});

test('renders personalized greeting', () => {
  render(<Hello name="React" />);
  expect(screen.getByText(/Hello React/i)).toBeInTheDocument();
});

