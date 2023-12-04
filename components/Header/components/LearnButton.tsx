import { FC } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import info from '../assets/info.svg';

const StyledLearnButton = styled.a`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    margin: 0 0 0 0.5rem;
    padding: 0.5rem 0.5rem 0.5rem 0.25rem;

    outline: none;
    border-radius: 8px;
    transition: background-color 0.15s ease;
    will-change: background-color, color;

    font-size: 0.9375rem;
    font-weight: 500;
    font-family: var(--font-family);
    color: #e5e4fa;
    text-decoration: none;

    &:hover,
    &:focus,
    &:focus-visible {
        background-color: #3e3e52;
        color: #fff;
    }

    @media screen and (max-width: 1167px) {
        display: none;
    }
`;

const StyledLearnButtonIcon = styled(Image)`
    margin-right: 0.25rem;
`;

export const LearnButton: FC = () => (
    <StyledLearnButton
        href="https://home.liquidswap.com/"
        target="_blank"
        rel="noopener noreferrer"
    >
        <StyledLearnButtonIcon src={info} width="18" height="18" alt="" />
        Learn more
    </StyledLearnButton>
);
