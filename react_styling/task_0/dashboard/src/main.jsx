// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App/App.jsx';

/* Importer les 3 poids Roboto via @fontsource (400, 500, 700) */
import '@fontsource/roboto/400.css'; // Regular - body text
import '@fontsource/roboto/500.css'; // Medium - semi-emphasis
import '@fontsource/roboto/700.css'; // Bold - headings

/* Importer la feuille globale (où est déclaré @import "tailwindcss") */
import './main.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
