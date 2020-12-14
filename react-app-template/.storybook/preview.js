import React from 'react';
import { StoreProvider } from '../src/store';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <StoreProvider>
      <Story />
    </StoreProvider>
  ),
];
