import store from 'app/store';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app/App';
import './i18n';
import './index.scss';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={'Loading...'}>
            <Provider store={store}>
                <App />
            </Provider>
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root'),
);
reportWebVitals();
