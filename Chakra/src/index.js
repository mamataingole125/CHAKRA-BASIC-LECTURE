import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ChakraProvider, extendTheme} from "@chakra-ui/react"

const colors ={
  primaryColor:{
    color1:"ff499e",
    color2:"a480cf",
    color3:"e27396",
    color4:"9381ff",
    color5:"ca1551",
    color6:"00f5d4"
  }
}

const theme =extendTheme({colors})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
