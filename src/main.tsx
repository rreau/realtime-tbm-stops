import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@components/App';
import './tailwindcss.css';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
