import React, { FC } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { viewports } from '@/constants/viewports';

import { Copyright } from './components/Copyright';

import { linksList, socialLinks } from './Footer.consts';

const StyledFooter = styled.footer`
    margin-top: 56px;

    @media (min-width: ${viewports.laptop}px) {
        display: flex;
        flex-wrap: wrap;
        column-gap: 24px;
    }

    @media (min-width: ${viewports.desktop}px) {
        justify-content: center;
    }
`;

const StyledFeedback = styled.ul`
    padding: 0;

    @media (min-width: ${viewports.laptop}px) {
        margin-bottom: 0;
        width: 0;
        border: 0;
    }
`;

const StyledSocialIcons = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    order: 2;

    padding: 0;
    margin: 0;
    gap: 24px;

    list-style-type: none;

    @media (max-width: 1024px) {
        margin-bottom: 32px;
    }

    @media (min-width: ${viewports.mobile}px) {
        gap: 40px;
    }

    @media (min-width: ${viewports.laptop}px) {
        flex-wrap: wrap;
        align-items: flex-start;

        width: 100px;

        row-gap: 10px;
        column-gap: 45px;
    }

    @media (min-width: ${viewports.desktop}px) {
        position: fixed;
        top: 50%;
        right: 0;

        flex-direction: column;

        width: initial;
        padding-right: 33px;

        transform: translate(0%, -50%);
        gap: 40px;
    }
`;

const StyledSocialIconsImage = styled(Image)`
    @media (min-width: ${viewports.desktop}px) {
        width: 20px;

        color: white;

        cursor: pointer;
        opacity: 0.6;
        transition: 0.25s;

        &:hover {
            opacity: 1;
        }
    }
`;

const StyledLinks = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    order: 1;

    padding: 0;
    margin: 0;
    gap: 16px;

    list-style-type: none;
    margin-bottom: 32px;

    @media (min-width: ${viewports.laptop}px) {
        align-items: flex-start;

        width: 215px;
        border-right: 1px solid hsla(243, 69%, 94%, 0.2);
    }

    @media (min-width: ${viewports.desktop}px) {
        flex-direction: row;

        width: initial;
        margin-bottom: 16px;
        border: 0;
    }
`;

const StyledLinksItemLink = styled.a`
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #9897a0;
    text-decoration: none;

    &:hover,
    &:focus,
    &:focus-visible {
      color: var(--primary-color-text);
    }
`;

export const Footer: FC = () => (
    <StyledFooter>
        <StyledFeedback />

        <StyledSocialIcons>
            {socialLinks.map((link) => (
                <li key={link.label}>
                    <a
                        href={link.url}
                        title={link.label}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <StyledSocialIconsImage alt={link.label} src={link.icon} />
                    </a>
                </li>
            ))}
        </StyledSocialIcons>

        {linksList.map((links, index) => (
            <StyledLinks key={index}>
                {links.map((link) => (
                    <li key={link.label}>
                        <StyledLinksItemLink href={link.url} rel="noopener noreferrer">
                            {link.label}
                        </StyledLinksItemLink>
                    </li>
                ))}
            </StyledLinks>
        ))}

        <Copyright />
    </StyledFooter>
);
