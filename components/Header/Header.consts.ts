export const WALLET_ONELINK = 'https://onelink.to/t3sae5';

export const headerLinksList = [
    {
        desktopIcon: 'swap',
        label: 'Swap',
        name: 'swap',
        url: 'https://l2.swap.devops.mom/#/',
        to: { name: 'swap' },
    },
    {
        label: 'Earn',
        items: [
            {
                label: 'Pools',
                name: 'pools',
                url: 'https://l2.swap.devops.mom/#/pools',
                to: { name: 'pools' },
                icon: 'earn-link earn-link_type_pools',
            },
        ],
    },
    {
        desktopIcon: 'Claim',
        label: 'Claim',
        name: 'claim',
        url: '/',
        to: { name: 'claim' },
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
