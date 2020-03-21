import React from './node_modules/react';
import { render } from './node_modules/@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/movie browser/i);
  expect(linkElement).toBeInTheDocument();
});
