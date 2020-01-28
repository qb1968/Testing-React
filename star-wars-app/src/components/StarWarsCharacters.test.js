import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { getData as mockGetData } from '../api';

import App from '../App';
import StarWarsCharacters from './StarWarsCharacters';

jest.mock('../api');

test('render App',() => {
  
  render(<App />)
})

test('render StarWarsCharacters', () => {
 
  render(<StarWarsCharacters />)
})

test('check if data is called once initially ', () => {
  
  mockGetData()
  expect(mockGetData).toHaveBeenCalledTimes(1);
})

test('check if data is called once on next click', () => {
  
  const { getByText } = render(<StarWarsCharacters />)
  
  const nextButton = getByText(/next/i);
  
  fireEvent.click(nextButton)
  expect(mockGetData).toHaveBeenCalledTimes(1);
})

test('check if data is called once on previous click', () => {
  
  const { getByText } = render(<StarWarsCharacters />)
 
  const previousButton = getByText(/previous/i);
  
  fireEvent.click(previousButton)
  expect(mockGetData).toHaveBeenCalledTimes(1);
})
test('Checking to see if we are rendering the Previous Button', () => {
    const {queryByText} = render(<StarWarsCharacters/>);
    const previousButton = queryByText(/previous/i);
});