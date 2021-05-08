/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Router } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';

import { useTranslation } from 'react-i18next';
import { createBrowserHistory } from 'history';
import { PageWrapper } from './components/PageWrapper';
import { Provider } from 'react-redux';
import { configureAppStore } from '../store/configureStore';

const defaultHistory = createBrowserHistory();

export function App(
  props: { isDarkMode?: boolean; history?; parentPath?: string },
  { history = defaultHistory },
) {
  const { i18n } = useTranslation();

  return (
    <>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <Router history={history}>
        <PageWrapper>News Container</PageWrapper>
      </Router>
      <GlobalStyle />
    </>
  );
}

/*************************MICROFRONTENDS APPROACH - Webpack Module Federation ************/
const store = configureAppStore();

function NewsApp(props: { parentPath: string; history: any }) {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <React.StrictMode>
          <App history={props.history} parentPath={props.parentPath} />
        </React.StrictMode>
      </HelmetProvider>
    </Provider>
  );
}

export default NewsApp;
