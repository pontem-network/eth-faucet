import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { Header } from '../Header';
import { Footer } from '../Footer';
import { viewports } from '../../constants/viewports';

import BridgeBgSvg from './assets/bridge-bg.svg';

const StyledContainer = styled.div`
  font-family: Roboto;
  position: relative;

  max-width: 100vw;
  min-height: 100vh;

  background-color: #020211;
  background-image: url('${BridgeBgSvg.src}');
  background-position: top center;
  background-repeat: no-repeat;

  animation: fade 1s;

  @media (min-width: ${viewports.desktop}px) {
      background-size: 100%;
  }

  @media (max-width: ${viewports.laptop}px) {
      background-position: bottom center;
  }

  @media (max-width: ${viewports.mobile}px) {
      background-image: none;
  }
`;

const StyledLayout = styled.div`
    display: grid;
    grid-template-rows: -webkit-min-content 1fr -webkit-min-content;
    grid-template-rows: min-content 1fr min-content;

    min-height: 100vh;
`;

export const AppLayout = ({ children }: PropsWithChildren<{}>) => (
      <StyledContainer>
          <StyledLayout>
              <Header />
              {children}
              <Footer />
          </StyledLayout>
      </StyledContainer>
);
