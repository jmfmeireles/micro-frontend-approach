/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { isDarkMode } from 'styles/theme/slice/selectors';
import { themes } from 'styles/theme/themes';


export function App() {
  const { t, i18n } = useTranslation();
  const isDark = useSelector(isDarkMode)
  
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate={`%s - ${t('global.appName')}`}
        defaultTitle={t('global.appName')}
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content={t('global.appDescription')} />
      </Helmet>
<Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} />
        <Route exact path={process.env.PUBLIC_URL + '/news'} component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
