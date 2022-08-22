import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';



 

import { Provider } from 'react-redux';

import usersReducer from './Features/Users'
const store=configureStore({
  reducer:{
    users:usersReducer,
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Provider store={store}>
  <App></App>
  </Provider>
  </StrictMode>
);