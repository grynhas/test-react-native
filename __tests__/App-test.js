/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

import {render, fireEvent} from '@testing-library/react-native';

test('rende App Component', () => {
  const {debug} = render(<App />);
  debug();
});

test('had to add 1 item to the list.', async () => {
  const {getByText, getByTestId} = render(<App />);
  const input = getByTestId('adder-input');
  const button = getByText('Add');
  const list = getByTestId('list');
  fireEvent.changeText(input, 'item01');
  fireEvent.press(button);
  expect(!!list).toBeDefined();
});

test('checking if there are 2 items in the array.', () => {
  const {getByText, getByTestId} = render(<App />);
  const input = getByTestId('adder-input');
  const button = getByText('Add');
  fireEvent.changeText(input, 'item01');
  fireEvent.press(button);
  fireEvent.changeText(input, 'item02');
  fireEvent.press(button);
});
