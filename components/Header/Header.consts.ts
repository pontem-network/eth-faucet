export const WALLET_ONELINK = 'https://onelink.to/t3sae5';

export const headerLinksList = [
    {
        desktopIcon: 'swap',
        label: 'Swap',
        name: 'swap',
        url: 'https://liquidswap.com/#/',
        to: { name: 'swap' },
    },
    {
        label: 'Earn',
        items: [
            {
                label: 'Pools',
                name: 'pools',
                url: 'https://liquidswap.com/#/pools',
                to: { name: 'pools' },
                icon: 'earn-link earn-link_type_pools',
            },
            {
                label: 'Farms',
                name: 'stakes',
                url: 'https://liquidswap.com/#/stakes',
                to: { name: 'stakes' },
                icon: 'earn-link earn-link_type_farms',
            },
            {
                label: 'Staking',
                name: 'aptos-staking',
                url: 'https://liquidswap.com/#/aptos-staking',
                to: { name: 'aptos-staking' },
                icon: 'earn-link earn-link_type_staking',
              },
        ],
    },
    {
        desktopIcon: 'bridge',
        label: 'Bridge',
        name: 'bridge',
        url: '/',
        to: { name: 'bridge' },
    },
    {
        desktopIcon: 'stats',
        label: 'Stats',
        name: 'stats',
        url: 'https://liquidswap.com/#/stats',
        to: { name: 'stats' },
    },
];

export const socialMenuItems = [
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
        target: '_blank',
    },
    {
      icon: 'pi pi-comments',
      label: 'Feedback for partners',
      url: 'https://form.typeform.com/to/ggYvlrgj',
      target: '_blank',
    },
    {
        icon: 'pi pi-telegram',
        label: 'Telegram Community',
        url: 'https://t.me/pontemnetworkchat',
        target: '_blank',
    },
];
