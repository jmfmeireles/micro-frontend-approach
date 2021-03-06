import * as React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
//import { ReactComponent as DocumentationIcon } from './assets/documentation-icon.svg';

export function Nav() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Item
        href="https://martinfowler.com/articles/micro-frontends.html"
        target="_blank"
        title={t('global.documentationPage')}
        rel="noopener noreferrer"
      >
        {/* <DocumentationIcon /> */}
        {t('global.microFrontend')}
      </Item>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  margin-right: -1rem;
`;

const Item = styled.a`
  color: ${p => p.theme.primary};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }

  .icon {
    margin-right: 0.25rem;
  }
`;
