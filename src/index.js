import React from "react";
import { createRoot } from 'react-dom/client';
import App from './App.js'
import './index.css'
import {Provider} from "./context/books.js";

const el = document.getElementById('root')

const root = createRoot(el)

root.render(
    <Provider>
        <App />
    </Provider>
)