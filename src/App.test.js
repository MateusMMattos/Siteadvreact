import { render, screen } from '@testing-library/react';
import App from './App';

test('renders siteadv header', () => {
  render(<App />);
  const el = screen.getByText(/siteadv/i);
  expect(el).toBeInTheDocument();
});
