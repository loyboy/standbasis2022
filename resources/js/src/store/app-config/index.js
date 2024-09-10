import { $themeConfig } from '@themeConfig'

export default {
    namespaced: true,
    state: {
        //category: JSON.parse(localStorage.getItem('category')),
        //stores: JSON.parse(localStorage.getItem('stores')),
        layout: {
            isRTL: $themeConfig.layout.isRTL,
            skin: localStorage.getItem('vuexy-skin') || $themeConfig.layout.skin,
            routerTransition: $themeConfig.layout.routerTransition,
            type: $themeConfig.layout.type,
            contentWidth: $themeConfig.layout.contentWidth,
            menu: {
                hidden: $themeConfig.layout.menu.hidden,
            },
            navbar: {
                type: $themeConfig.layout.navbar.type,
                backgroundColor: $themeConfig.layout.navbar.backgroundColor,
            },
            footer: {
                type: $themeConfig.layout.footer.type,
            },
        },
        lgaCodes: {
            "96201": "abak",
            "96202": "eastern obolo",
            "96203": "eket",
            "96204": "esit eket",
            "96205": "essien udim",
            "96206": "etim ekpo",
            "96207": "etinan",
            "96208": "ibeno",
            "96209": "ibesikpo asutan",
            "96210": "ibiono ibom",
            "96211": "ika",
            "96212": "ikono",
            "96213": "ikot abasi",
            "96214": "ikot ekpene",
            "96215": "ini",
            "96216": "itu",
            "96217": "mbo",
            "96218": "mkpat enin",
            "96219": "nsit atai",
            "96220": "nsit ibom",
            "96221": "nsit ubium",
            "96222": "obot akara",
            "96223": "okobo",
            "96224": "onna",
            "96225": "oron",
            "96226": "oruk anam",
            "96227": "udung uko",
            "96228": "ukanafun",
            "96229": "uruan",
            "96230": "urue offong oruko",
            "96231": "uyo",
            "96001": "agege",
            "96002": "alimosho",
            "96003": "apapa",
            "96004": "ifako-ijaye",
            "96005": "ikeja",
            "96006": "kosofe",
            "96007": "mushin",
            "96008": "oshodi-isolo",
            "96009": "shomolu",
            "96010": "eti-osa",
            "96011": "lagos-island",
            "96012": "lagos-mainland",
            "96013": "surulere",
            "96014": "ojo",
            "96015": "ajeromi-ifelodun",
            "96016": "amuwo-odofin",
            "96017": "badagry",
            "96018": "ikorodu",
            "96019": "ibeju-lekki",
            "96020": "epe",
            "96301": "aba-north",
            "96302": "aba-south",
            "96303": "arochukwu",
            "96304": "bende",
            "96305": "ikwuano",
            "96306": "isiala-ngwa-north",
            "96307": "isiala-ngwa-south",
            "96308": "isiukwuato",
            "96309": "obingwa",
            "96310": "ohafia",
            "96311": "osisioma-ngwa",
            "96312": "ugwunagbo",
            "96313": "ukwa-east",
            "96314": "ukwa-west",
            "96315": "umuahia-north",
            "96316": "umuahia-south",
            "96317": "umu-neochi"
        },
        stateCodes: { "01" : "Akwa Ibom" , "02" : "Lagos", "03" : "Abia" } 
    },
    getters: {
        lgaCodes: state => {
            return state.lgaCodes
        },
        stateCodes: state => {
            return state.stateCodes
        }
    },
    mutations: {
        TOGGLE_RTL(state) {
            state.layout.isRTL = !state.layout.isRTL
            document.documentElement.setAttribute('dir', state.layout.isRTL ? 'rtl' : 'ltr')
        },
        UPDATE_SKIN(state, skin) {
            state.layout.skin = skin

            // Update value in localStorage
            localStorage.setItem('vuexy-skin', skin)

            // Update DOM for dark-layout
            if (skin === 'dark') document.body.classList.add('dark-layout')
            else if (document.body.className.match('dark-layout')) document.body.classList.remove('dark-layout')
        },
        UPDATE_ROUTER_TRANSITION(state, val) {
            state.layout.routerTransition = val
        },
        UPDATE_LAYOUT_TYPE(state, val) {
            state.layout.type = val
        },
        UPDATE_CONTENT_WIDTH(state, val) {
            state.layout.contentWidth = val
        },
        UPDATE_NAV_MENU_HIDDEN(state, val) {
            state.layout.menu.hidden = val
        },
        UPDATE_NAVBAR_CONFIG(state, obj) {
            Object.assign(state.layout.navbar, obj)
        },
        UPDATE_FOOTER_CONFIG(state, obj) {
            Object.assign(state.layout.footer, obj)
        },
        /*UPDATE_CATEGORY(state, val) {
            localStorage.setItem("category", JSON.stringify(val));
            let categories = JSON.parse(localStorage.getItem('category'))
            state.category = categories
        },
        UPDATE_STORES(state, val) {
            localStorage.setItem("stores", JSON.stringify(val));
            let stores = JSON.parse(localStorage.getItem('stores'))
            state.stores = stores
        }*/
    },
    actions: {},
}