import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { AuthContexProvider } from './context/authContext.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <AuthContexProvider>
    <App />
    </AuthContexProvider>
  </React.StrictMode>
);


