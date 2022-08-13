import { ref } from '@vue/composition-api'
import { useRouter } from '@core/utils/utils'
import store from '@/store'

export const useShopFiltersSortingAndPagination = () => {
    const filters = ref({
        q: '',
        priceRangeDefined: 'all',
        priceRange: [0, 100],
        categories: [],
        brands: [],
        ratings: null,
        page: 1,
        perPage: 9,
    })
    const categories = []
    categories.push({ text: 'All', value: 'all' });
    store.state.appConfig.category.forEach((value, index) => {
        categories.push({ value: value.id, text: value.category });
    });


    const filterOptions = {
        categories: categories,

    }

    // Sorting
    const sortBy = ref({ text: 'Featured', value: 'featured' })
    const sortByOptions = [
        { text: 'Featured', value: 'featured' },
        { text: 'Lowest', value: 'price-asc' },
        { text: 'Highest', value: 'price-desc' },
    ]

    return {
        // Filter
        filters,
        filterOptions,

        // Sort
        sortBy,
        sortByOptions,
    }
}

export const useShopUi = () => {
    const itemView = 'grid-view'
    const itemViewOptions = [
        { icon: 'GridIcon', value: 'grid-view' },
        { icon: 'ListIcon', value: 'list-view' },
    ]

    // Pagination count <= required by pagination component
    const totalProducts = ref(null)

    return {
        itemView,
        itemViewOptions,
        totalProducts,
    }
}

export const useShopRemoteData = () => {
    const products = ref([])
    const fetchProducts = (...args) => store.dispatch('app-ecommerce/fetchProducts', ...args)
    const fetchMerchantId = (...args) => store.dispatch('app-ecommerce/fetchMerchantId', ...args)
    const fetchStoresForMerchant = (...args) => store.dispatch('app-ecommerce/fetchStoresForMerchant', ...args)
    return {
        products,
        fetchProducts,
        fetchMerchantId,
        fetchStoresForMerchant
    }
}


export const useEcommerce = () => {

    const updateDeal = deal => {
        
        return store.dispatch('app-ecommerce/updateDeal', deal )
    }

    // eslint-disable-next-line arrow-body-style
    const addProductInWishlist = productId => {
        return store.dispatch('app-ecommerce/addProductInWishlist', { productId })
    }

    // eslint-disable-next-line arrow-body-style
    const removeProductFromWishlist = productId => {
        return store.dispatch('app-ecommerce/removeProductFromWishlist', { productId })
    }

    // eslint-disable-next-line arrow-body-style
    const addProductInCart = productId => {
        return store.dispatch('app-ecommerce/addProductInCart', { productId })
    }

    // eslint-disable-next-line arrow-body-style
    const removeProductFromCart = productId => {
        return store.dispatch('app-ecommerce/removeProductFromCart', { productId })
    }

    return {
        addProductInWishlist,
        removeProductFromWishlist,
        addProductInCart,
        removeProductFromCart,
        updateDeal
    }
}

export const useEcommerceUi = () => {
    const { router } = useRouter()

    const toggleProductInWishlist = product => {
        const { addProductInWishlist, removeProductFromWishlist } = useEcommerce()
        if (product.isInWishlist) {
            removeProductFromWishlist(product.id).then(() => {
                // eslint-disable-next-line no-param-reassign
                product.isInWishlist = false
            })
        } else {
            addProductInWishlist(product.id).then(() => {
                // eslint-disable-next-line no-param-reassign
                product.isInWishlist = true
            })
        }
    }
    const handleCartActionClick = product => {
        const { addProductInCart } = useEcommerce()

        if (product.isInCart) {
            router.push({ name: 'apps-e-commerce-checkout' })
        } else {
            addProductInCart(product.id).then(() => {
                // eslint-disable-next-line no-param-reassign
                product.isInCart = true

                // Update cart items count
                store.commit('app-ecommerce/UPDATE_CART_ITEMS_COUNT', store.state['app-ecommerce'].cartItemsCount + 1)
            })
        }
    }

    const handleWishlistCartActionClick = (product, removeProductFromWishlistUi) => {
        const { addProductInCart, removeProductFromWishlist } = useEcommerce()

        if (product.isInCart) {
            router.push({ name: 'apps-e-commerce-checkout' })
        } else {
            addProductInCart(product.id)
                .then(() => {
                    // eslint-disable-next-line no-param-reassign
                    product.isInCart = true
                    removeProductFromWishlist(product.id)

                    // Update cart items count
                    store.commit('app-ecommerce/UPDATE_CART_ITEMS_COUNT', store.state['app-ecommerce'].cartItemsCount + 1)
                })
                .then(() => {
                    // eslint-disable-next-line no-param-reassign
                    product.isInWishlist = false
                    removeProductFromWishlistUi(product)
                })
        }
    }
    return {
        toggleProductInWishlist,
        handleCartActionClick,
        handleWishlistCartActionClick,
    }
}