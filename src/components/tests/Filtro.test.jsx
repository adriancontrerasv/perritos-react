// eslint-disable-next-line no-unused-vars
import React from 'react';
import { describe, expect, test, vi, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Filtro } from '../Filtro'

describe('Testing Filtro Component', () => {
    afterEach(() => {
        vi.restoreAllMocks()
        cleanup;
    })
    test('Validar que se muestre el filtro de raza', async () => {
        //Arrange
        const mockLista = []
        const mockOnSelectRaza = vi.fn().mockImplementation((e) => { return e })
        const mockOnSelectSubRaza = vi.fn().mockImplementation((e) => { return e })
        const expected = 'Filtrar por Raza';

        //Act
        render(<Filtro lista={mockLista} onSelectRaza={mockOnSelectRaza} onSelectSubRaza={mockOnSelectSubRaza} />)

        //Assert
        let element = await screen.findAllByPlaceholderText(expected)
        expect(element).not.toBeNull();

    });
    test('Validar que se muestre el filtro de subraza', async () => {
        //Arrange
        const mockLista = []
        const mockOnSelectRaza = vi.fn().mockImplementation((e) => { return e })
        const mockOnSelectSubRaza = vi.fn().mockImplementation((e) => { return e })
        const expected = 'Filtrar por Sub Raza';

        //Act
        render(<Filtro lista={mockLista} onSelectRaza={mockOnSelectRaza} onSelectSubRaza={mockOnSelectSubRaza} />)

        //Assert
        let element = await screen.findAllByPlaceholderText(expected)
        expect(element).not.toBeNull();
        expect(element[0].hasAttribute('disabled')).toBeTruthy();

    });

    test('Validar funcionalidad filtro raza', async () => {
        //Arrange
        const mockLista = [
            {
                raza: 'Bulldog',
                subrazas: []
            },
            {
                raza: 'Retriever',
                subrazas: []
            },
            {
                raza: 'Terrier',
                subrazas: [
                    'American',
                    'Fox',
                    'Toy'
                ]
            }
        ]
        const mockOnSelectRaza = vi.fn().mockImplementation((e) => { return e })
        const mockOnSelectSubRaza = vi.fn().mockImplementation((e) => { return e })
        const expected = 'Filtrar por Raza';

        //Act
        render(<Filtro lista={mockLista} onSelectRaza={mockOnSelectRaza} onSelectSubRaza={mockOnSelectSubRaza} />)
        let input = await screen.findAllByPlaceholderText(expected)
        

        
        await waitFor(async () => {
            fireEvent.click(input[0])
            // await userEvent.type(input[0], "Terrier");
            await userEvent.keyboard('{/T}{/e}{/r}');
            fireEvent.click(input[0].parentElement.nextSibling.firstChild)
            // let cardSubraza = await screen.findByTestId('Terrier-American')
        });

        //Assert
        expect(input[0]).not.toBeNull();
        // expect(cardSubraza).not.toBeNull();
    });
});