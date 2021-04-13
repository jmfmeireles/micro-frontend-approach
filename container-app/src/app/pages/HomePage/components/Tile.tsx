import * as React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';
import { SubTitle } from './SubTitle';

export default function Tile(props: {
  tileKey: string;
  logo: string;
  activeKey: string;
  setActiveKey: (key: string) => void;
}) {
  const { t } = useTranslation();
  return (
    <Wrapper onClick={() => props.setActiveKey(props.tileKey)}>
      <ImageWrapper src={props.logo} />
      <SubTitle>{t(`microfrontends.${props.tileKey}`)}</SubTitle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 250px;
  height: 250px;
  padding: 10px;
  background-color: ${p => p.theme.backgroundVariant};
  box-shadow: 10px 10px 5px ${p => p.theme.border};
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  cursor: pointer;
  :hover {
    box-shadow: none;
  }
`;

const ImageWrapper = styled.img`
  width: 150px;
  height: 150px;
  margin: auto;
`;
