// eslint-disable-next-line no-unused-vars
import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import {ListaRazas} from '../ListaRazas'

describe('Testing ListaRazas Component', () => {
    test('Validar que se muestre mensaje en caso de no encontrar perritos', () => {
        //Arrange
        const mockLista = []
        const expected = 'Lo sentimos, no hay perritos para mostrar.';

        //Act
        render(<ListaRazas lista={mockLista} />)

        //Assert
        expect(screen.queryByText(expected)).not.toBeNull();
        expect(screen.queryByText('Bulldog')).toBeNull();
        
    });
    test('Validar que se muestren los nombres por pantalla de la lista', () => {
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
                subrazas: []
            }
        ]

        //Act
        render(<ListaRazas lista={mockLista} />)

        //Assert
        expect(screen.queryByText('Bulldog')).not.toBeNull()
        expect(screen.queryByText('Retriever')).not.toBeNull()
        expect(screen.queryByText('Terrier')).not.toBeNull()
        expect(screen.queryByText('Cavapoo')).toBeNull()
    });
});