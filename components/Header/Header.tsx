import { FC, MouseEvent, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { Menu } from 'primereact/menu';

import { gridChildFirstRow } from '../../styles/mixins';

import { HeaderLinks } from './components/HeaderLinks';
import { LearnButton } from './components/LearnButton';
import { Logo } from './components/Logo';
import { MobileMenu } from './components/MobileMenu';
import { SocialButton } from './components/SocialButton';
import { SocialMenu } from './components/SocialMenu';

const StyledHeader = styled.div`
    display: flex;
    align-items: center;

    height: 4.25rem;
    padding: 0.75rem 1rem;
`;

const StyledHeaderMenu = styled.div`
    display: flex;

    height: 40px;

    @media screen and (max-width: 1199px) {
        grid-row: 1/2;
    }
`;

const StyledHeaderLinks = styled.div`
    margin-left: 1rem;

    ${gridChildFirstRow}

    @media screen and (max-width: 1307px) {
        margin-left: 0;
    }
`;

const StyledHeaderActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    margin-left: auto;

    ${gridChildFirstRow}
`;

const StyledSocialButton = styled(SocialButton)`
    @media screen and (max-width: 1167px) {
        display: none;
    }

  width: 40px;
  height: 40px!important;
  padding: 0;
  border: none;
  color: #e0e0e0;
  background-color: #14142f!important;
  transition: color,background-color 0.15s ease;
  border-radius: 50%;

  &:hover > div {
    background-color: #e0e0e0;
    color: #e0e0e0;
  }
`;

export const Header: FC = () => {
  const socialMenu = useRef<Menu>(null);

  const toggleSocialMenu = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    socialMenu.current?.toggle(event);
  }, [socialMenu]);

  return (
    <StyledHeader>
        <StyledHeaderMenu>
            <Logo />
            <LearnButton />
        </StyledHeaderMenu>

        <StyledHeaderLinks>
            <HeaderLinks />
        </StyledHeaderLinks>

        <StyledHeaderActions>
            <MobileMenu />
            <StyledSocialButton
                icon="pi pi-ellipsis-h"
                iconType="ellipsis"
                onClick={toggleSocialMenu}
            />
            <SocialMenu ref={socialMenu} />
        </StyledHeaderActions>
    </StyledHeader>
  )
};
