// Theme Colors
// Initially this will be blank. Later on when app is initialized we will assign bootstrap colors to this from CSS variables.
export const $themeColors = {}

// App Breakpoints
// Initially this will be blank. Later on when app is initialized we will assign bootstrap breakpoints to this object from CSS variables.
export const $themeBreakpoints = {}

// APP CONFIG
export const $themeConfig = {
    app: {
        appName: 'Plenti', // Will update name in navigation menu (Branding)
        // baseURL: "https://plenti.africa/api/v1",
        // baseURL: "https://admin.plenti.africa/api/v1",

        //baseURL: "http://127.0.0.1:8000/api/v1",
        baseURL: "https://plenti-staging.tvioafrica.co/api/v1",
        dealAdThumbnailsURL: "/deals_ads/thumb_nail/",
        dealAdCoverURL: "/deals_ads/cover/",
        // eslint-disable-next-line global-require
        appLogoImage: require('@/assets/images/logo/plenti_logo_dark.png'), // Will update logo in navigation menu (Branding)
        appLogoImageLight: require('@/assets/images/logo/plenti_logo_light.png'), // Will update logo in navigation menu (Branding)
        wellcomeImageUrl: require('@/assets/images/elements/welcome.png') // Will update logo in navigation menu (Branding)
    },
    layout: {
        isRTL: false,
        skin: 'light', // light, dark, bordered, semi-dark
        routerTransition: 'zoom-fade', // zoom-fade, slide-fade, fade-bottom, fade, zoom-out, none
        type: 'vertical', // vertical, horizontal
        contentWidth: 'full', // full, boxed
        menu: {
            hidden: false,
            isCollapsed: false
        },
        navbar: {
            // ? For horizontal menu, navbar type will work for navMenu type
            type: 'floating', // static , sticky , floating, hidden
            backgroundColor: '' // BS color options [primary, success, etc]
        },
        footer: {
            type: 'static' // static, sticky, hidden
        },
        customizer: true,
        enableScrollToTop: true
    }
}