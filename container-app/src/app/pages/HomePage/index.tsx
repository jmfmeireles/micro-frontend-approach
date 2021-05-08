import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from '../../../app/components/NavBar';
import { PageWrapper } from '../../../app/components/PageWrapper';
import { Title } from './components/Title';
import { useTranslation } from 'react-i18next';
import Tile from './components/Tile';
import { MicroFrontends } from '../../resources/MicroFrontends';
import { TilesWrapper } from './components/TilesWrapper';
import { MainContentWrapper } from './components/MainContentWrapper';
import { MicrofrontendsWrapper } from './components/MicrofrontendsWrapper';
import { createBrowserHistory } from 'history';
import NewsAppMFE from '../../microfrontends/NewsAppMFE';

const defaultHistory = createBrowserHistory();

export function HomePage({ history = defaultHistory }) {
  const { t } = useTranslation();

  const [activeKey, setActiveKey] = useState<string>(
    MicroFrontends.length ? MicroFrontends[0].key : '',
  );
  return (
    <>
      <Helmet>
        <title>{t('global.homePage')}</title>
        <meta name="description" content={t('global.appDescription')} />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <MainContentWrapper>
          <Title>{t('global.welcomeMessage')}</Title>
          <TilesWrapper>
            {MicroFrontends.map(micro => (
              <Tile
                key={micro.key}
                tileKey={micro.key}
                logo={micro.logo}
                activeKey={activeKey}
                setActiveKey={setActiveKey}
              />
            ))}
          </TilesWrapper>
        </MainContentWrapper>
        )
        <MicrofrontendsWrapper>
          <NewsAppMFE parentPath="/" history={history} />
        </MicrofrontendsWrapper>
      </PageWrapper>
    </>
  );
}
