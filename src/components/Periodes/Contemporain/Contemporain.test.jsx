/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contemporain from './Contemporain';

/* ------------------------------------------------------------------ */
/* mocks                                                               */
/* ------------------------------------------------------------------ */
jest.mock('@mui/icons-material/Close', () => (props) =>
  <button data-testid="close-btn" {...props}>×</button>
);

/* ------------------------------------------------------------------ */
/* tests                                                               */
/* ------------------------------------------------------------------ */
describe('Composant Contemporain', () => {
  /** util: rend le composant et retourne la div .model pour faciliter la suite */
  const renderPage = () => {
    const utils = render(<Contemporain />);
    const modal = utils.container.querySelector('.model');
    return { ...utils, modal };
  };

  test('affiche le titre et 8 vignettes', () => {
    renderPage();
    expect(
      screen.getByRole('heading', { level: 1, name: /comtemporain/i })
    ).toBeInTheDocument();

    // seules les miniatures ont loading="lazy"
    const thumbs = screen.getAllByRole('img', { hidden: false })
                        .filter(img => img.getAttribute('loading') === 'lazy');
    expect(thumbs).toHaveLength(8);
  });

  test('ouvre puis ferme le modal', () => {
    const { modal } = renderPage();

    /* ---------- ouvre ---------- */
    fireEvent.click(
      screen.getByRole('img', { name: /café des bains/i, hidden: false })
    );

    expect(modal).toHaveClass('open');

    // on restreint la recherche AU MODAL
    const modalQueries = within(modal);

    const bigImg = modalQueries.getByRole('img', { name: /café des bains/i });
    expect(bigImg).toBeInTheDocument();

    // légende
    expect(
      modalQueries.getByText(/café des bains/i)
    ).toHaveClass('alt-text-legend');

    /* ---------- ferme ---------- */
    fireEvent.click(modalQueries.getByTestId('close-btn'));
    expect(modal).not.toHaveClass('open');
  });
});
