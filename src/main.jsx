import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppRouter } from './router/AppRouter.jsx';
import store from './store/store.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={ store }>
       <BrowserRouter>
          <AppRouter />
       </BrowserRouter>
     </Provider>
  </React.StrictMode>,
)
