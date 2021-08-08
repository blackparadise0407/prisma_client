import store, { persistor } from 'app/store';
import { ErrorBoundary, Loader } from 'components';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './app/App';
import './i18n';
import './index.scss';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<Loader />}>
            <ErrorBoundary>
                <PersistGate persistor={persistor}>
                    <Provider store={store}>
                        <App />
                    </Provider>
                </PersistGate>
            </ErrorBoundary>
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root'),
);
reportWebVitals();
