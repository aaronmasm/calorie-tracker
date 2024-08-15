import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {ActivityProvider} from "./context/ActivityContext";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        {/*
        ActivityProvider:
        Provides the activity context to the entire application.
        This context allows components to access and manage the state of activities
        and dispatch actions related to activities.
        */}
        <ActivityProvider>
            <App/>
        </ActivityProvider>
    </React.StrictMode>,
);
