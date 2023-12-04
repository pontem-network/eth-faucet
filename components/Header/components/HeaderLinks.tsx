import React, { FC, useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import { Menu } from 'primereact/menu';

import { headerLinksList } from '../Header.consts';

import angleSvg from '../assets/angle.svg';
import bridgeSvg from '../assets/bridge.svg';
import earnSvg from '../assets/earn.svg';
import farmsSvg from '../assets/farms.svg';
import poolsSvg from '../assets/pools.svg';
import stakingSvg from '../assets/staking.svg';
import statsSvg from '../assets/stats.svg';
import swapWideSvg from '../assets/swap-wide.svg';

const StyledLinks = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 40px;
    padding: 0 1rem;

    @media screen and (max-width: 1307px) {
        padding: 0 0.5rem;
    }

    @media screen and (max-width: 1167px) {
        display: none;
    }
`;

const StyledLinksList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: max-content;
    padding: 0;
    margin: 0;

    list-style-type: none;
`;

const StyledHeaderLink = styled.a`
    display: flex;
    align-items: center;

    height: 100%;
    padding: 0.5rem;

    border-radius: 8px;

    font-size: 0.9375rem;
    color: #e5e4fa;
    text-decoration: none;

    transition: background-color 0.15s ease;
    will-change: background-color;
`;

const StyledLinksListItem = styled.li`
    position: relative;

    height: 40px;
    margin-right: 32px;

    border-radius: 8px;

    font-weight: 500;
    font-family: var(--font-family);

    transition: background-color 0.15s ease;
    will-change: background-color, color;

    &.active ${StyledHeaderLink},
    &:hover ${StyledHeaderLink} {
        background-color: #4a495e;
        color: #fff;
    }

    &::before {
        position: absolute;
        top: 8px;
        left: -16px;

        display: block;
        width: 0;
        height: 24px;

        border-right: 1px solid #494954;
        border-radius: 8px;
        content: '';
    }

    @media screen and (max-width: 1307px) {
        margin-right: 8px;

        &::before {
            display: none;
        }
    }
`;

const StyledHeaderLinkTypeButton = styled(StyledHeaderLink)
.attrs({
    as: 'button',
})`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 40px;
    border: none;

    cursor: pointer;
    background-color: transparent;

    font: 500 0.9375rem/1 var(--font-family);

    &.active,
    &:hover,
    &:focus,
    &:focus-visible {
      color: var(--primary-color-text);
    }

    &:focus,
    &:focus-visible {
      outline: none;
      background-color: #3e3e52;
    }

    ${StyledLinksListItem}.active &,
    ${StyledLinksListItem}:hover &,
    ${StyledLinksListItem}:focus &,
    ${StyledLinksListItem}:focus-visible & {
        color: var(--primary-color-text);
        background-color: #4a495e;
    }
`;

interface StyledLinkAngleProps {
    $toggle: boolean;
}

const StyledLinkAngle = styled.i<StyledLinkAngleProps>`
    width: 10px;
    height: 6px;
    margin-left: 0.25rem;

    mask: url('${angleSvg.src}') center/contain no-repeat;
    -webkit-mask: url('${angleSvg.src}') center/contain no-repeat;
    background-color: #d4c4ed;
    transition: transform 0.15s ease;
    will-change: transform, background-color;

    ${({ $toggle }) => $toggle ? `
        transform: rotate(-180deg);
    ` : ''}

    .active & {
        background-color: var(--primary-color-text);
    }
`;

interface StyledLinkIconType {
    type: 'bridge' | 'earn' | 'stats' | 'swap';
}

const linkIconTypeToImageMap: Record<StyledLinkIconType['type'], string> = {
    bridge: bridgeSvg.src,
    earn: earnSvg.src,
    stats: statsSvg.src,
    swap: swapWideSvg.src,
}

const StyledLinkIcon = styled.div<StyledLinkIconType>`
    display: block;
    width: 24px;
    height: 24px;
    margin-right: 8px;

    mask: no-repeat center/contain url('${({ type }) => linkIconTypeToImageMap[type]}');
    -webkit-mask: no-repeat center/contain url('${({ type }) => linkIconTypeToImageMap[type]}');
    background-color: #d4c4ed;

    will-change: background-color;

    .active & {
        background-color: var(--primary-color-text);
    }
`;

const StyledLinkDropdown = styled(Menu)`
    padding: 0.75rem 0.5rem;
    border: none;

    border-radius: 0.75rem !important;
    background-color: #28253e !important;

    & .p-menuitem-link {
        padding: 0.75rem;

        border-radius: 0.5rem;

        transition: background-color 0.15s ease;
        will-change: background-color;

        &.active,
        &:hover {
            background-color: #3e3e52;

            & .p-menuitem-text {
                color: var(--primary-color-text);
            }
        }

        &:focus,
        &:focus-visible {
            outline: none;
            box-shadow: none;
        }

        & .p-menuitem-text {
            color: #fbfaff;

            transition: color 0.15s ease;
            will-change: color;
        }
    }

    & .earn-link {
        mask-repeat: no-repeat;
        -webkit-mask-repeat: no-repeat;
        mask-position: center;
        -webkit-mask-position: center;
        mask-size: contain;
        -webkit-mask-size: contain;

        background-color: #d4c4ed;

        &_type_pools {
          width: 29px;
          height: 29px;
          margin-right: 1rem !important;

          mask-image: url('${poolsSvg.src}');
          -webkit-mask-image: url('${poolsSvg.src}');
        }

        &_type_farms {
          width: 32px;
          height: 26px;
          margin-right: 0.625rem !important;

          background: no-repeat center/contain url('${farmsSvg.src}');
        }

        &_type_staking {
          width: 22px;
          height: 22px;
          margin-right: 1.3125rem !important;

          mask-image: url('${stakingSvg.src}');
          -webkit-mask-image: url('${stakingSvg.src}');
        }

        .active & {
          background-color: var(--primary-color-text);
        }
    }
`;

export const HeaderLinks: FC = () => {
    const earnMenu = useRef<Menu>(null);

    const [isEarnMenuOpen, setIsEarnMenuOpen] = useState(false);

    const toggleEarnMenu = useCallback(() => {
        setIsEarnMenuOpen(!isEarnMenuOpen);
    }, [isEarnMenuOpen]);

    const hideEarnMenu = useCallback(() => {
        setIsEarnMenuOpen(false);
    }, []);

    return (
        <StyledLinks>
            <StyledLinksList>
                {headerLinksList.map((link) => {
                    return link.items ? (
                        <StyledLinksListItem key={link.label}>
                            <StyledHeaderLinkTypeButton
                                aria-haspopup="true"
                                aria-controls="link__dropdown"
                                onClick={(event) => {
                                    earnMenu.current?.toggle(event);
                                    toggleEarnMenu();
                                }}
                            >
                                <StyledLinkIcon type="earn" />
                                Earn
                                <StyledLinkAngle $toggle={isEarnMenuOpen} />
                            </StyledHeaderLinkTypeButton>
                            <StyledLinkDropdown
                                id="link__dropdown"
                                ref={earnMenu}
                                popup
                                model={link.items}
                                onHide={hideEarnMenu}
                            />
                        </StyledLinksListItem>
                    ) : (
                        <StyledLinksListItem
                            className={link.name === 'claim' ? 'active' : ''}
                            key={link.label}
                        >
                            <StyledHeaderLink href={link.url} rel="noopener noreferrer">
                            {link.desktopIcon && (
                                <StyledLinkIcon type={link.desktopIcon as StyledLinkIconType['type']} />
                            )}
                            {link.label}
                            </StyledHeaderLink>
                        </StyledLinksListItem>
                    )
                })}
            </StyledLinksList>
        </StyledLinks>
    );
};
