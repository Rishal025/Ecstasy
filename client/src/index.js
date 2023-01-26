import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/AuthProvider';
import { AuthProviderCounselor } from './context/AuthProviderCounselor';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviderCounselor>
      <AuthProvider>
        <App />
      </AuthProvider>
    </AuthProviderCounselor>
  </React.StrictMode>
);