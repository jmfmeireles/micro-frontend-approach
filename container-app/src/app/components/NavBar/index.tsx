import * as React from 'react';
import styled from 'styled-components';
import { Logo } from './Logo';
import { StyleConstants } from '../../../styles/StyleConstants';
import { Nav } from './Nav';

export function NavBar() {
  return (
    <Wrapper>
      <Logo />
      <Nav />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  box-shadow: 0 1px 0 0 ${p => p.theme.borderLight};
  height: ${StyleConstants.NAV_BAR_HEIGHT};
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 10px;
  background-color: ${p => p.theme.background};
  justify-content: space-between;
  z-index: 2;

  @supports (backdrop-filter: blur(10px)) {
    backdrop-filter: blur(10px);
    background-color: ${p =>
      p.theme.background.replace(
        /rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,
        'rgba$1,0.75)',
      )};
  }
`;
