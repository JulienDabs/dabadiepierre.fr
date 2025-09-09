/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import GalleryItem from './GalleryItem';

describe('GalleryItem', () => {
  const mockImages = {
    cat:  '/img/cat.jpg',
    dog:  '/img/dog.jpg',
  };

  const setup = (props = {}) => {
    const onClick = jest.fn();
    render(
      <GalleryItem
        imgName="cat"
        alt="Un joli chat"
        images={mockImages}
        onClick={onClick}
        {...props}
      />
    );
    return { onClick };
  };

  test('rend la bonne image et le bon texte', () => {
    setup();

    const img = screen.getByRole('img', { name: /un joli chat/i });
    expect(img).toHaveAttribute('src', mockImages.cat);
    expect(img).toHaveAttribute('loading', 'lazy');

    // le texte alternatif affiché sous l’image
    expect(screen.getByText('Un joli chat')).toBeInTheDocument();
  });

  test('déclenche onClick quand on clique sur la miniature', () => {
    const { onClick } = setup();

    fireEvent.click(screen.getByRole('img', { name: /un joli chat/i }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
