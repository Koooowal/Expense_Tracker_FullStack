import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import {GlobalStyles} from "./Styles/GloabalStyle";
import {GlobalProvider} from "./Context/globalContext";

const root=ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyles/>
        <GlobalProvider>
            <App/>
        </GlobalProvider>
    </React.StrictMode>
);