import React from 'react';
import Logo, { Triangle } from '.';

export default {
  title: 'Components|Logo',
  component: Logo,
  parameters: {
    backgrounds: [
      { name: 'base', value: '#fff', default: true },
      { name: 'grey', value: '#F4F5F8' },
      { name: 'blue', value: '#0097E6' },
      { name: 'rad green', value: '#2DE2E6' },
      { name: 'rad pink', value: '#d100b1' },
      { name: 'rad teal', value: '#36e2f8' },
      { name: 'rad purple', value: '#791E94' },
      { name: 'rad deep purple', value: '#541388' },
    ],
  },
};

export const logo = () => <Logo />;
export const triangle = () => <Triangle />;
