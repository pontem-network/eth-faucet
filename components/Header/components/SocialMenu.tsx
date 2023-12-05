import React, { forwardRef } from 'react';
import { Menu, MenuProps } from 'primereact/menu';
import { classNames } from 'primereact/utils';
import styled from 'styled-components';

import { socialMenuItems } from '../Header.consts';

const socialMenuItemTemplate = (item: any, options: any) => {
    return (
        <a
            className={classNames(options.className, 'social-menu__item')}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <span className={classNames(item.icon, "p-menuitem-icon")}></span>
            <span>{item.label}</span>
        </a>
    )
}

const socialMenuItemsWithTemplate = socialMenuItems.map((item) => ({
    ...item,
    template: socialMenuItemTemplate
}))

const StyledSocialMenu = styled(Menu)`
    padding: 0.5rem;
    border: none;

    border-radius: 0.75rem !important;

    background-color: #28253e !important;

    & .social-menu__item {
        border-radius: 0.5rem;

        transition: background-color 0.15s ease;
        will-change: background-color;
        padding: 0.75rem 1.25rem;
        color: rgba(255, 255, 255, 0.87);
        user-select: none;

        &:hover {
            background-color: #3e3e52 !important;
        }
    }

    & .p-menuitem-icon {
      font-family: 'primeicons';
      speak: none;
      font-style: normal;
      font-weight: normal;
      font-variant: normal;
      text-transform: none;
      line-height: 1;
      display: inline-block;
      -webkit-font-smoothing: antialiased;
      color: rgba(255, 255, 255, 0.6);
      margin-right: 0.5rem;
      font-size: 1rem;
    }
`;

export const SocialMenu = forwardRef<Menu, MenuProps>(
    (props, ref) => (
        <StyledSocialMenu
            ref={ref}
            id="social_menu"
            className="social-menu"
            popup
            model={socialMenuItemsWithTemplate}
            {...props}
        />
    ),
);

SocialMenu.displayName = 'SocialMenu';
