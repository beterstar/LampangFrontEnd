import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import { theme } from './utils/themes';
import './i18n'
import store from './store/store';
// import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter basename='/' >
    <Provider store={store}>
      <ThemeProvider theme={theme} >
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
