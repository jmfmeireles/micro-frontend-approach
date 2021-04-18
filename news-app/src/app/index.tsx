/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Router, Route, useHistory } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';

import { HomePage } from './pages/HomePage';
import { useTranslation } from 'react-i18next';
import { createBrowserHistory } from 'history';
import { PageWrapper } from './components/PageWrapper';
import { themeActions } from '../styles/theme/slice'
import { useDispatch } from 'react-redux';
import { ThemeKeyType } from 'styles/theme/slice/types';

const defaultHistory = createBrowserHistory();

export function App( props: {theme: ThemeKeyType}, { history = defaultHistory} ) {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const historyObj = useHistory();
  React.useEffect(() => {
    dispatch(themeActions.changeTheme(props.theme));
  }, [props.theme]);

  const handleOnClick = () => {
    history.push(`/news`);
  };
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
      <PageWrapper>
        <Route exact path="/" component={() => <button onClick={handleOnClick}>Go to News Container</button>} />
        <Route path="/news" component={() => <div>News Container main</div>} />
      </PageWrapper>
      </Router>

      <GlobalStyle />
    </>
  );
}
