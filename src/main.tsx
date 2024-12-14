import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import RouterConfig from './router/Router.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterConfig />
  </StrictMode>
);
