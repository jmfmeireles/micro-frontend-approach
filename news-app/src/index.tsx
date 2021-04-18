/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import FontFaceObserver from 'fontfaceobserver';

// Use consistent styling
import 'sanitize.css/sanitize.css';

import { App } from 'app';

import { HelmetProvider } from 'react-helmet-async';

import { configureAppStore } from 'store/configureStore';

import { ThemeProvider } from 'styles/theme/ThemeProvider';

import reportWebVitals from 'reportWebVitals';

// Initialize languages
import './locales/i18n';

// Observe loading of Inter (to remove 'Inter', remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Inter', {});

// When Inter is loaded, add a font-family using Inter to the body
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
});

const store = configureAppStore();

window.rendernews = (containerId, history, countData, setState, theme) => {
  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider>
        <HelmetProvider>
          <React.StrictMode>
            <App history={history} theme={theme}/>
            <div>
              {`Counter: ${countData.count}`}
            </div>
            <button onClick={() => setState(false)}>Hide Tile Preview</button>
            <button onClick={() => setState(true)}>Show Tile Preview</button>
          </React.StrictMode>
        </HelmetProvider>
      </ThemeProvider>
    </Provider>,
    document.getElementById(containerId),
  );
};

window.unmountnews = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('news-container')) {
  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider>
        <HelmetProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </HelmetProvider>
      </ThemeProvider>
    </Provider>,
    document.getElementById('root'),
  );
}

/* 
const MOUNT_NODE = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <HelmetProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </HelmetProvider>
    </ThemeProvider>
  </Provider>,
  MOUNT_NODE,
); */
// Hot reloadable translation json files
if (module.hot) {
  module.hot.accept(['./locales/i18n'], () => {
    // No need to render the App again because i18next works with the hooks
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
