import './globals.less';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { HomePage } from '@/pages/home-page';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
