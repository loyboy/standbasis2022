import Vue from 'vue'
import VueRouter from 'vue-router'
import { canNavigate } from '@/libs/acl/routeProtection'
import { isUserLoggedIn, getUserData, getHomeRouteForLoggedInUser } from '@/auth/utils'
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    routes: [{
            path: '/',
            name: 'home',
            component: () =>
                import ('@/views/pages/dashboards/Home.vue'),
            meta: {
                pageTitle: 'Home',
                breadcrumb: [{
                        text: 'Home',
                        active: true,
                    },

                ]
            },
        },
        {
            path: '/merchant-dasboard',
            name: 'merchant-dasboard',
            component: () =>
                import ('@/views/pages/merchants-dashboard/Dashboard.vue'),
            meta: {
                pageTitle: 'Dashboard',
                breadcrumb: [{
                        text: 'Dashboard',
                        active: true,
                    },

                ]
            }
        },
        {
            path: '/stores',
            name: 'stores',
            component: () =>
                import ('@/views/pages/merchants-stores/Stores.vue'),
            meta: {
                pageTitle: 'Stores',
                breadcrumb: [{
                        text: 'Stores',
                        active: true,
                    },

                ]
            }
        },
        {
            path: '/profile-user',
            name: 'profile-user',
            component: () =>
                import ('@/views/pages/dashboard-users/dashboardusers-edit/DashboardUsersEdit.vue'),
            meta: {
                pageTitle: 'Edit Profile',
                breadcrumb: [{
                    text: 'Edit Profile',
                    active: true,
                }, ],
                meta: {
                    action: 'manage',
                    resource: 'all',
                },
            },
        },
        {
            path: '/customers',
            name: 'customers',
            component: () =>
                import ('@/views/pages/customers/CustomersPage.vue'),
            meta: {
                pageTitle: 'Customers Page',
                breadcrumb: [{
                    text: 'Customers Page',
                    active: true,
                }, ],
                meta: {
                    action: 'manage',
                    resource: 'all',
                },
            },
        },
        {
            path: '/customer/view/:id',
            name: 'customer-view',
            component: () =>
                import ('@/views/pages/customers/customer-view/CustomerView.vue'),
        },
        {
            path: '/customer/edit/:id',
            name: 'customer-edit',
            component: () =>
                import ('@/views/pages/customers/customer-edit/CustomerEdit.vue'),
        },

        {
            path: '/merchants',
            name: 'merchants',
            component: () =>
                import ('@/views/pages/merchants/MerchantsPage.vue'),
            meta: {
                pageTitle: 'Merchants Page',
                breadcrumb: [{
                    text: 'Merchants Page',
                    active: true,
                }, ],
                meta: {
                    action: 'manage',
                    resource: 'all',
                },
            },
        },
        {
            path: '/merchants/view/:id',
            name: 'merchants-view',
            component: () =>
                import ('@/views/pages/merchants/merchant-view/MerchantView.vue'),
        },
        {
            path: '/merchants/edit/:id',
            name: 'merchants-edit',
            component: () =>
                import ('@/views/pages/merchants/merchant-edit/MerchantEdit.vue'),
        },

        {
            path: '/gift-cards',
            name: 'gift-cards',
            component: () =>
                import ('@/views/pages/gift-cards/GiftCardsPage.vue'),
            meta: {
                pageTitle: 'Gift Cards',
                breadcrumb: [{
                    text: 'Gift Cards',
                    active: true,
                }, ],
                meta: {
                    action: 'manage',
                    resource: 'all',
                },
            },
        },

        {
            path: '/gift-cards/view/:id',
            name: 'giftcard-view',
            component: () =>
                import ('@/views/pages/gift-cards/giftcards-view/GiftCardsView.vue'),
        },

        {
            path: '/bills',
            name: 'bills',
            component: () =>
                import ('@/views/pages/bills/BillsPage.vue'),
            meta: {
                pageTitle: 'Bills',
                breadcrumb: [{
                    text: 'Bills',
                    active: true,
                }, ],
                meta: {
                    action: 'manage',
                    resource: 'all',
                },
            },
        },
        {
            path: '/bills/view/:id',
            name: 'bills-view',
            component: () =>
                import ('@/views/pages/bills/bills-view/BillsView.vue'),
        },
        {
            path: '/deals',
            name: 'deals',
            component: () =>
                import ('@/views/pages/deals/DealsPage.vue'),
            meta: {
                contentRenderer: 'sidebar-left-detached',
                contentClass: 'ecommerce-application',
                pageTitle: 'Deals',
                breadcrumb: [{
                    text: 'All deals',
                    active: true,
                }, ],
            },
        },
        {
            path: '/deals/:id',
            name: 'deals-details',
            component: () =>
                import ('@/views/pages/deals/dealsDetails.vue'),
            meta: {
                pageTitle: 'Deals',
                contentClass: 'ecommerce-application',
                breadcrumb: [{
                    text: 'Deals Details',
                    active: true,
                }],
            },
        },
        {
            path: '/vouchers',
            name: 'vouchers',
            component: () =>
                import ('@/views/pages/vouchers/VoucherPage.vue'),
            meta: {
                pageTitle: 'Vouchers',
                breadcrumb: [{
                    text: 'Vouchers Page',
                    active: true,
                }, ],
                meta: {
                    action: 'manage',
                    resource: 'all',
                },
            },
        },

        {
            path: '/vouchers/view/:id',
            name: 'vouchers-view',
            component: () =>
                import ('@/views/pages/vouchers/vouchers-view/VouchersView.vue'),
        },

        {
            path: '/plenticreditloan',
            name: 'plenticreditloan',
            component: () =>
                import ('@/views/pages/plenticredit/PlentiCreditPage.vue'),
            meta: {
                pageTitle: 'Plenti Credit Loan Page',
                breadcrumb: [{
                    text: 'Plenti Credit Loan Page',
                    active: true,
                }, ],
                meta: {
                    action: 'manage',
                    resource: 'all',
                },
            },
        },

        {
            path: '/plenticreditloan/view/:id',
            name: 'plenticreditloan-view',
            component: () =>
                import ('@/views/pages/plenticredit/plenticredit-view/PlentiCreditView.vue'),
        },
        {
            path: '/transactions',
            name: 'transactions',
            component: () =>
                import ('@/views/pages/transactions/TransactionPage.vue'),
            meta: {
                pageTitle: 'Transactions',
                breadcrumb: [{
                    text: 'Transactions Page',
                    active: true,
                }, ],
                meta: {
                    action: 'manage',
                    resource: 'all',
                },
            },
        },
        {
            path: '/deals-transactions',
            name: 'deals-transactions',
            component: () =>
                import ('@/views/pages/deals-transactions/DealsTransactionPage.vue'),
            meta: {
                pageTitle: 'Deals Transactions',
                breadcrumb: [{
                    text: 'Deals Transactions',
                    active: true,
                }, ],
                meta: {
                    action: 'manage',
                    resource: 'all',
                },
            },
        },
        {
            path: '/transactions/view/:id',
            name: 'transactions-view',
            component: () =>
                import ('@/views/pages/transactions/transactions-view/TransactionsView.vue'),
        },
        {
            path: '/deals-transactions/view/:id',
            name: 'deals-transactions-view',
            component: () =>
                import ('@/views/pages/deals-transactions/deals-transactions-view/TransactionsView.vue'),
        },
        {
            path: '/accounting',
            name: 'accounting',
            component: () =>
                import ('@/views/pages/accounting/LoyaltyInvoice.vue'),
            meta: {
                pageTitle: 'Accounting',
                breadcrumb: [{
                    text: 'Accounting Page',
                    active: true,
                }, ],
                meta: {
                    action: 'manage',
                    resource: 'all',
                },
            },
        },
        {
            path: '/login',
            name: 'auth-login',
            component: () =>
                import ('@/views/Login.vue'),
            meta: {
                layout: 'full',
                resource: 'Auth',
                redirectIfLoggedIn: true,
            },
        },
        {
            path: '/register',
            name: 'auth-register',
            component: () =>
                import ('@/views/Register.vue'),
            meta: {
                layout: 'full',
                resource: 'Auth',
                redirectIfLoggedIn: true,
            },
        },
        {
            path: '/verified',
            name: 'verify-me',
            component: () =>
                import ('@/views/VerifyAccount.vue'),
            meta: {
                layout: 'full',
                resource: 'Auth',
            },
        },
        {
            path: '/not-authorized',
            name: 'misc-not-authorized',
            component: () =>
                import ('@/views/NotAuthorized.vue'),
            meta: {
                layout: 'full',
                resource: 'Auth',
            },
        },
        {
            path: '/error-404',
            name: 'error-404',
            component: () =>
                import ('@/views/error/Error404.vue'),
            meta: {
                layout: 'full',
            },
        },
        {
            path: '/refresh-app-cache',
            name: 'refresh-app-cache',
            component: () =>
                import ('@/views/RefeshCache.vue'),
            meta: {
                layout: 'full',
            },
        },
        {
            path: '*',
            redirect: '/error-404',
        },
    ],
})

router.beforeEach((to, _, next) => {
    const isLoggedIn = isUserLoggedIn()
    if (!canNavigate(to)) {
        // Redirect to login if not logged in
        if (!isLoggedIn) return next({ name: 'auth-login' })
            // If logged in => not authorized
        return next({ name: 'misc-not-authorized' })
    }
    // Redirect if logged in
    if (to.meta.redirectIfLoggedIn && isLoggedIn) {
        const userData = getUserData()
        next(getHomeRouteForLoggedInUser(userData ? userData.role : null))
    }
    return next()
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
    // Remove initial loading
    const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = 'none'
    }
})
export default router