export default [{
        title: 'Dashboard',
        route: 'home',
        icon: 'HomeIcon',
        permission: ["admin"]
    },
    {
        title: 'Dasboard',
        route: 'merchant-dasboard',
        icon: 'HomeIcon',
        permission: ["merchant"]
    },
    {
        title: 'Stores',
        route: 'stores',
        icon: 'AirplayIcon',
        permission: ["merchant"]
    },
    {
        title: 'Customers',
        route: 'customers',
        icon: 'UserIcon',
        permission: ["admin"]
    },
    {
        title: 'Merchants',
        route: 'merchants',
        icon: 'UsersIcon',
        permission: ["admin"]
    },
    {
        title: 'Gift Cards',
        route: 'gift-cards',
        icon: 'GiftIcon',
        permission: ["admin"]
    },
    {
        title: 'Deals',
        route: 'deals',
        icon: 'BriefcaseIcon',
        permission: ["admin", "merchant"]
    },
    {
        title: 'Bills',
        route: 'bills',
        icon: 'BriefcaseIcon',
        permission: ["admin"]
    },
    {
        title: 'Transactions',
        route: 'transactions',
        icon: 'TrelloIcon',
        permission: ["admin", "merchant"]
    },
    {
        title: 'Deal Transactions',
        route: 'deals-transactions',
        icon: 'TrelloIcon',
        permission: ["admin", "merchant"]
    },
    {
        title: 'PlentiCredit',
        route: 'plenticreditloan',
        icon: 'GiftIcon',
        permission: ["admin"]
    },
    {
        title: 'Vouchers',
        route: 'vouchers',
        icon: 'GiftIcon',
        permission: ["admin"]
    },
    {
        title: 'Accounting',
        route: 'accounting',
        icon: 'FileIcon',
        permission: ["admin"]
    },
    {
        title: 'Miscellaneous',
        icon: 'CircleIcon',
        permission: ["admin"],
        children: [{
            title: 'Not Authorized',
            route: 'misc-not-authorized',
            target: '_blank',
        }],
    },
]