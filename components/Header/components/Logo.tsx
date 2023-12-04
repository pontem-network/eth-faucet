import React, { FC } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import logo from '../assets/logo.svg';

const StyledLogo = styled.a`
    display: flex !important;
    align-items: center;
    justify-content: center;

    margin: auto;

    border-radius: 10px;
    outline: none;

    &:focus,
    &:focus-visible {
        box-shadow: 0 0 0 2px #1c2127, 0 0 0 4px rgba(196, 181, 253, 0.7),
            0 1px 2px 0 rgba(0, 0, 0, 0);
    }
`;

export const Logo: FC = () => (
    <StyledLogo
        href="https://liquidswap.com"
        target="_blank"
        rel="noopener noreferrer"
    >
        <Image src={logo} alt="logo" width="40" height="40" />
    </StyledLogo>
);
