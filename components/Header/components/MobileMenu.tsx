import React, { FC, useCallback, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { classNames } from 'primereact/utils';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Sidebar } from 'primereact/sidebar';

import bridgeSvg from '../assets/bridge.svg';
import farmsSvg from '../assets/farms.svg';
import poolsSvg from '../assets/pools.svg';
import stakingSvg from '../assets/staking.svg';
import statsSvg from '../assets/stats.svg';
import swapWideSvg from '../assets/swap-wide.svg';
import { SWAP_URL } from "@/constants";

import { SocialButton } from './SocialButton';

const topList = [
  {
    label: 'Swap',
    name: 'swap',
    icon: 'menu-link menu-link_type_swap',
    to: { name: 'swap' },
  },
  {
    label: 'Claim Gas',
    name: 'claim',
    icon: 'menu-link menu-link_type_bridge',
    to: { name: 'claim' },
  },
];

const topListItemTemplate = (item: any, _options: any) => {
  if (item.name === 'swap') {
    return (
      <a
        className="p-menuitem-link"
        href={SWAP_URL}
        rel="noreferrer noopenner"
      >
        {item.icon && <span className={classNames('p-menuitem-icon', item.icon)}></span>}
        Swap
      </a>
    );
  }

  if (item.name === 'claim') {
    return (
      // eslint-disable-next-line @next/next/no-html-link-for-pages
      <a
        className="p-menuitem-link active"
        href="/"
        rel="noreferrer noopenner"
      >
        {item.icon && <span className={classNames('p-menuitem-icon', item.icon)}></span>}
        Claim Gas
      </a>
    );
  }

  return (
    <a
      className={classNames('p-menuitem-link')}
      href={`${SWAP_URL}#/${item.name}`}
      rel="noreferrer noopenner"
    >
      {item.icon && <span className={classNames('p-menuitem-icon', item.icon)}></span>}
      { item.label }
      {item.name === 'stakes' && (
        <Image
          className="stakes-icon ml-2"
          src="@/assets/hydroponics.svg"
          alt="Stakes"
        />
      )}
    </a>
  );
};

const topListItemsWithTemplate = topList.map((item) => ({
  ...item,
  template: topListItemTemplate,
}));

const earnList = [
  {
    label: 'Pools',
    name: 'pools',
    icon: 'menu-link menu-link_type_pools',
    to: { name: 'pools' },
  },
];

const earnListItemTemplate = (item: any, _options: any) => {
  return (
    <a
      className={classNames('p-menuitem-link')}
      href={`${SWAP_URL}#/${item.name}`}
      rel="noreferrer noopenner"
    >
      {item.icon && <span className={classNames('p-menuitem-icon', item.icon)}></span>}
      { item.label }
    </a>
  );
};

const earnListItemsWithTemplate = earnList.map((item) => ({
  ...item,
  template: earnListItemTemplate,
}));


const moreList = [
  {
    icon: 'pi pi-info-circle',
    label: 'Learn more',
    url: 'https://home.liquidswap.com',
  },
  {
    icon: 'pi pi-book',
    label: 'Docs',
    url: 'https://docs.liquidswap.com',
  },
  {
    icon: 'pi pi-discord',
    label: 'Discord',
    url: 'https://discord.com/invite/44QgPFHYqs',
  },
  {
    icon: 'pi pi-comments',
    label: 'Feedback for partners',
    url: 'https://form.typeform.com/to/ggYvlrgj',
  },
  {
    icon: 'pi pi-telegram',
    label: 'Telegram Community',
    url: 'https://t.me/pontemnetworkchat',
  },
];

const moreListItemTemplate = (item: any, _options: any) => {
  if (!item.url) {
    return null;
  }

  return (
    <a
      href={item.url}
      className="p-menuitem-link"
      target="_blank"
      role="menuitem"
      tabIndex={0}
      rel="noreferrer noopener"
    >
      {item.icon && <span className={classNames('p-menuitem-icon', item.icon)}></span>}
      <span className="p-menuitem-text">{ item.label }</span>
    </a>
  );
};

const moreListItemsWithTemplate = moreList.map((item) => ({
  ...item,
  template: moreListItemTemplate,
}));

const StyledMobileMenu = styled(Menu)`
    background-color: #16162d !important;
    width: auto;
    border: 0px;
    border-radius: 0;
    margin: 0rem -1.25rem;
    padding: 0px;

    .p-menuitem {
        padding: 0px 16px;

        &:not(:last-child) {
            border-bottom: 1px solid #e5e4fa1a;
        }

        .p-menuitem-link,
        .p-accordion-header-link {
            padding: 20px 24px 20px 20px;

            font-size: 20px;
            font-weight: 500;
            line-height: 24px;
            letter-spacing: -0.45%;

            &.active,
            &:hover {
                background-color: #2b2b40 !important;
            }

            &:focus {
                box-shadow: none !important;
            }

            & .p-menuitem-icon {
                width: 24px;
                height: 24px;
                margin-right: 20px;

                font-size: 24px;
                color: #d4c4ed;
            }
        }

        .active {
            background-color: rgba(255, 255, 255, 0.03);
        }
    }

    .p-toggleable-content {
        border-top: 1px solid #e5e4fa1a;
    }
`;

const StyledSocialButton = styled(SocialButton)`
    display: none;

    @media screen and (max-width: 1167px) {
        display: flex;
    }
`;

const StyledSidebar = styled(Sidebar)`
    z-index: 99;

    width: 524px !important;
    max-width: 390px;

    box-shadow: -2px 0 4px #000000;
    border-width: 0;

    background-color: #03031c;

    ::-webkit-scrollbar {
        width: 12px;
        height: 280px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #e5e4fa30;
        opacity: 0.3;
        border-radius: 40px;
    }

    @media (max-width: 524px) {
      width: 100% !important;
    }

    & .p-sidebar-header {
        display: none;
    }

    & .p-sidebar-content {
        padding: 0px !important;
        height: 100%;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
    }

    & .menu-link {
        width: 24px;
        height: 24px;

        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;

        &_type_swap {
            background-image: url('${swapWideSvg.src}');
        }

        &_type_pools {
            background-image: url('${poolsSvg.src}');
        }

        &_type_stats {
            background-image: url('${statsSvg.src}');
        }

        &_type_bridge {
            background-image: url('${bridgeSvg.src}');
        }

        &_type_stakes {
            background-image: url('${farmsSvg.src}');
        }

        &_type_staking {
            background-image: url('${stakingSvg.src}');
        }
      }
`;

const StyledMenuHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 1.5rem;

    & > div:last-child {
        margin-left: auto;
    }
`;

const StyledMenuTitle = styled.h1`
    font-weight: 900;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: -0.45%;
    color: #e5e4fa;
`;

const StyledDivider = styled.hr`
    border-top: 2px solid #fbfaff16;
    border-width: 2px 0px 0px 0px;
    margin: 0px -1.25rem;
`;

const StyledMenuSettings = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 0.5rem;
`;

const StyledMenuSettingsButton = styled(Button)`
    justify-content: center;

    width: 48px;
    height: 48px;
    padding: 0.5rem;

    border: none;
    border-radius: 13px;
    background-color: #24243a;

    color: #fff;

    &:hover {
        background-color: #3e3e52;
    }

    & img,
    & .pi {
        width: 1.2rem;
    }
`;

const StyledMenuSubtitle = styled.h2`
    margin: 0;
    padding: 8px 20px;

    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: 0.44px;
    color: #e5e4fa;

    background-color: #03031c;
`;

export const MobileMenu: FC = () => {
  const [isVisible, setVisible] = useState(false);

  const onToggle = useCallback(() => {
    setVisible(!isVisible);
  }, [isVisible]);

  const onHide = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <>
      <StyledSocialButton
        className="lg: ml-2 menu-button p-button-rounded p-button-secondary"
        icon="pi pi-bars"
        onClick={onToggle}
      />
      <StyledSidebar
        visible={isVisible}
        baseZIndex={10000}
        position="right"
        onHide={onHide}
      >
        <StyledMenuHeader>
          <StyledMenuTitle>Menu</StyledMenuTitle>
          <StyledMenuSettings>
            <StyledMenuSettingsButton
              icon="pi pi-times"
              onClick={onHide}
            />
          </StyledMenuSettings>
        </StyledMenuHeader>
        <StyledDivider />
        <StyledMobileMenu
          id="mobile-menu"
          popup={false}
          model={topListItemsWithTemplate}
        />

        <StyledMenuSubtitle>Earn</StyledMenuSubtitle>
        <StyledMobileMenu
          id="mobile-menu-earn"
          popup={false}
          model={earnListItemsWithTemplate}
        />

        <StyledMenuSubtitle>More</StyledMenuSubtitle>
        <StyledMobileMenu
          id="mobile-menu-more"
          popup={false}
          model={moreListItemsWithTemplate}
        />
      </StyledSidebar>
    </>
  );
};
