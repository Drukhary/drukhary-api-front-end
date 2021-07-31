import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import PostManagerService from './services/post-manager-service';

import './index.css';
import App from "./components/app";
import {PostManagerServiceProvider} from "./components/post-manager-service-context";

ReactDOM.render(
    <React.StrictMode>
            <PostManagerServiceProvider value={new PostManagerService()}>
                <Router>
                    <App/>
                </Router>
            </PostManagerServiceProvider>
    </React.StrictMode>
    ,
    document.getElementById('root')
);
