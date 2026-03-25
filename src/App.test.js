import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Carol Iantas on the page', () => {
  render(<App />);
  const nameElement = screen.getByText(/Carol Iantas/i);
  expect(nameElement).toBeInTheDocument();
});