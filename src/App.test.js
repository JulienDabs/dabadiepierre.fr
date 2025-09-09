import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';   // ⬅️ Router minimal pour les tests
import App from './App';

test('affiche le logo Pierre Dabadie', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  // vérif simple afin de “smoke-tester” l’appli
  const logo = screen.getByAltText(/pierre dabadie/i);
  expect(logo).toBeInTheDocument();
});
