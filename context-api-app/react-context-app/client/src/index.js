import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { OrderContext, OrderContextProvider } from './context/OrderContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OrderContextProvider>
      <App />
    </OrderContextProvider>
  </React.StrictMode>
);