// Theme Colors
// Initially this will be blank. Later on when app is initialized we will assign bootstrap colors to this from CSS variables.
export const $themeColors = {}

// App Breakpoints
// Initially this will be blank. Later on when app is initialized we will assign bootstrap breakpoints to this object from CSS variables.
export const $themeBreakpoints = {}

// APP CONFIG 
export const $themeConfig = {
    app: {
        appName: 'Standbasis', // Will update name in navigation menu (Branding)      
        //https://www.school-digital-transformation.com
        //http://localhost:8084
        baseURL: "https://backend.school-digital-transformation.com/api",

        homeURL: "https://school-digital-transformation.com",

        backendURL: "https://backend.school-digital-transformation.com",
      
        // dealAdThumbnailsURL: "/deals_ads/thumb_nail/",
        // dealAdCoverURL: "/deals_ads/cover/",
        // eslint-disable-next-line global-require
        appLogoImage: require('@/assets/images/logo/standbasis.png'), // Will update logo in navigation menu (Branding)
        appLogoImageLight: require('@/assets/images/logo/standbasis.png'), // Will update logo in navigation menu (Branding)
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