import { render, screen } from '@testing-library/react';
import App from './App';
import "@testing-library/jest-dom/extend-expect"

test('search about agata', () => {
  render(<App />);
  expect(screen.getByAltText("boy logo")).toBeInTheDocument();
});
