import React from 'react';
import {render} from '@testing-library/react'
import StarWarsCharacters from './StarWarsCharacters';



test('renders the character name and a submit button', async () => {
    mockAddNewAnimal.mockResolvedValueOnce({ id: 1 });
    // AAA Arrange, Act, Assert
    const { getByLabelText, getByText } = render(<StarWarsCharacters/>);
    // getByText(/submit!/i);
    getByLabelText(/name/i);
    // getByLabelText(/age/i);
    // getByLabelText(/notes/i);
})