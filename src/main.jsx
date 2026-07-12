import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {HeroUIProvider,ToastProvider} from "@heroui/react";
// import {ToastProvider} from "@heroui/toast";
import AuthContextProvider from './Contexets/authContext';




createRoot(document.getElementById('root')).render(

  <StrictMode>
    <HeroUIProvider>
      <ToastProvider placement='bottom-right' />
      <AuthContextProvider>
    <App />
      </AuthContextProvider>
    </HeroUIProvider>
    
  </StrictMode>,

)
