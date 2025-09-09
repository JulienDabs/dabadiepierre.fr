/**
 * @jest-environment jsdom
 */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { NavBar } from './App';                       // NavBar est exporté depuis App.js
import NavPic from './nav bar pic/dabadie.fr.png';

const renderWithRouter = (ui) =>
  render(<BrowserRouter>{ui}</BrowserRouter>);

describe('NavBar', () => {
  test('affiche le logo', () => {
    renderWithRouter(<NavBar />);
    expect(screen.getByAltText('Pierre Dabadie')).toHaveAttribute('src', NavPic);
  });

  test('ouvre et ferme le menu mobile', () => {
    renderWithRouter(<NavBar />);

    // Sélectionne le burger :
    // • soit via son rôle (si tu as ajouté role="button")
    // const burger = screen.getByRole('button', { name: /ouvrir\/fermer/i });
    // • soit via l’ID :
    const burger = screen.getByRole('navigation').querySelector('#mobile');
    const icon   = burger.querySelector('i');

    fireEvent.click(burger);
    expect(icon).toHaveClass('fa', 'fa-times');   // menu ouvert

    fireEvent.click(burger);
    expect(icon).toHaveClass('fas', 'fa-bars');   // menu refermé
  });

  test('toggle le sous-menu « Les périodes »', () => {
    renderWithRouter(<NavBar />);

    const periodes = screen.getByText('Les périodes');
    const submenu  = screen.getByText('Huile').closest('ul');

    expect(submenu).toHaveClass('submenu');       // fermé

    fireEvent.click(periodes);
    expect(submenu).toHaveClass('visible');       // ouvert

    fireEvent.click(periodes);
    expect(submenu).toHaveClass('submenu');       // refermé
  });

  test('ferme le menu mobile quand on clique à l’extérieur', () => {
    renderWithRouter(
      <>
        <NavBar />
        <div data-testid="outside" />
      </>
    );

    const burger = screen.getByRole('navigation').querySelector('#mobile');
    const nav    = screen.getByRole('navigation').querySelector('#navbar');

    fireEvent.click(burger);                      // on ouvre
    expect(nav).toHaveClass('active');

    fireEvent.click(screen.getByTestId('outside')); // clic hors nav
    expect(nav).not.toHaveClass('active');
  });

  test('contient un lien « Biographie »', () => {
    renderWithRouter(<NavBar />);
    expect(screen.getByRole('link', { name: /biographie/i })).toBeInTheDocument();
  });
});
