import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import { Provider } from "react-redux";
import store from "./store/store.js"; 

ReactDOM.createRoot(document.getElementById('root')).render(
        <Provider store={store}>
    <React.StrictMode>

      <App />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </React.StrictMode>
    </Provider>

);
