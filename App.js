import * as React from 'react';
import { store } from './store';
import { Provider as StoreProvider } from 'react-redux';
import AppNavigation from './AppNavigation';

export default function App() {
  return (
    <StoreProvider store = { store }>
      <AppNavigation />
    </StoreProvider>
  );
}