import React, { FC } from 'react';
import styled from 'styled-components';
import { Button, ButtonProps } from 'primereact/button';

import ellipsisSvg from '../assets/ellipsis.svg';

const StyledSocialButton = styled(Button)`
    width: 40px;
    height: 40px !important;
    padding: 0;
    border: none;

    color: var(--gray-300) !important;
    background-color: #14142f !important;

    transition: color, background-color 0.15s ease;

    &:enabled:hover,
    &:enabled:active,
    &:enabled:focus,
    &:enabled:focus-visible {
        color: var(--primary-color-text);
        background-color: #3e3e52 !important;
    }

    &:enabled:focus {
        box-shadow: none;
    }

    & .pi-ellipsis-h {
        display: none;
    }
`;

interface SocialButtonIconProps {
    type?: 'ellipsis';
}

const SocialButtonIcon = styled.div<SocialButtonIconProps>`
    width: 100%;
    height: 100%;

    mask: no-repeat center/contain;
    -webkit-mask: no-repeat center/contain;

    ${({ type }) =>
        type === 'ellipsis' ? `
            height: 1.5rem;

            mask-image: url('${ellipsisSvg.src}');
            -webkit-mask-image: url('${ellipsisSvg.src}');
        ` : ''
    }

    background-color: #d4c4ed;

    transition: background-color 0.15s ease;
    will-change: background-color;

    ${StyledSocialButton}:hover &,
    ${StyledSocialButton}:active &,
    ${StyledSocialButton}:focus &,
    ${StyledSocialButton}:focus-visible & {
        background-color: var(--primary-color-text);
    }
`;

interface SocialButtonProps extends ButtonProps {
    iconType?: 'ellipsis';
}

export const SocialButton: FC<SocialButtonProps> = ({ iconType, ...rest }) => (
    <StyledSocialButton
        type="button"
        aria-controls="social_menu"
        {...rest}
    >
        {iconType && <SocialButtonIcon type={iconType} />}
    </StyledSocialButton>
);
