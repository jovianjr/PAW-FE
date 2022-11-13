import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '@/app';
import '@/views/styles/index.css';
import '@/views/styles/input.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
