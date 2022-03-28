import 'normalize.css';
import '@/styles/global.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import App from '@/app'
import {BrowserRouter} from "react-router-dom";
import store from '@/store'
import {Provider} from 'react-redux'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename={'/'}>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
