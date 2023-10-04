// eslint-disable-next-line no-unused-vars
import React from 'react';
import { describe, expect, test} from 'vitest';
import { render, screen } from '@testing-library/react';
import { PuppyCard } from '../PuppyCard'

describe('Testing PuppyCard Component', () => {
    test('Validar que se muestre el card de la raza recibida', async () => {
        //Arrange
        const mockRaza = {
            raza: 'Terrier',
            subrazas: []
        }

        //Act
        render(<PuppyCard raza={mockRaza} />)

        //Assert
        let element = await screen.getByText("Terrier")
        expect(element).not.toBeNull();
        expect(element.className).contain('card-title');

    });


    test('Validar que tenga el link a google la tarjeta', async () => {
        //Arrange
        const mockRaza = {
            raza: 'Terrier',
            subrazas: []
        }
        
        //Act
        let view = render(<PuppyCard raza={mockRaza} />)

        //Assert
        let element = view.asFragment().getElementById('Terrier-link')

        //Assert
        expect(element).not.toBeNull();
        expect(element.getAttribute("href")).toBe('https://www.google.com/search?q=Terrier+perro');
    });
});