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

    .p-menuitem {
        border-radius: 0.5rem;

        transition: background-color 0.15s ease;
        will-change: background-color;

        &:hover {
            background-color: #3e3e52 !important;
        }
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
