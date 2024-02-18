import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


test('Footer is always visible',()=>{
  const {getByTestId} = render(<App/>)
  const footer = getByTestId('footer')
  expect(footer).toBeInTheDocument()
})

test('Navigation bar is always visible',()=>{
  const {getByTestId} = render(<App/>)
  const footer = getByTestId('nav-bar')
  expect(footer).toBeInTheDocument()
})
