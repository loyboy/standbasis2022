<template>
  <div style="height: inherit">
    <!-- ECommerce Header -->
    <section id="ecommerce-header">
      <div class="row">
        <b-col lg="4" sm="6">
          <statistic-card-horizontal
            icon="UsersIcon"
            color="primary"
            :statistic="stats.total_deals === undefined ? 0 : stats.total_deals"
            statistic-title="Total Deals"
          />
        </b-col>

        <b-col lg="4" sm="6">
          <statistic-card-horizontal
            icon="UserCheckIcon"
            color="success"
            :statistic="
              stats.active_deals === undefined ? 0 : stats.active_deals
            "
            statistic-title="Active Deals"
          />
        </b-col>

        <b-col lg="4" sm="6">
          <statistic-card-horizontal
            icon="UserMinusIcon"
            color="danger"
            :statistic="
              stats.inactive_deals === undefined ? 0 : stats.inactive_deals
            "
            statistic-title="InActive Deals"
          />
        </b-col>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <div class="ecommerce-header-items">
            <div class="result-toggler">
              <feather-icon
                icon="MenuIcon"
                class="d-block d-lg-none"
                size="21"
                @click="mqShallShowLeftSidebar = true"
              />
              <div class="search-results">
                {{ totalProducts }} results found
              </div>
            </div>
            <div class="view-options d-flex">
              <b-button
                v-if="isMerchant"
                v-b-toggle.sidebar-invoice-add-payment
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="danger"
                class="btn-group mb-75 add-deals"
                block
              >
                <feather-icon icon="PlusCircleIcon" class="mr-50" />
                Create Deal
              </b-button>

              <!-- Sort Button -->
              <b-dropdown
                v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                :text="sortBy.text"
                right
                variant="outline-dark"
              >
                <b-dropdown-item
                  v-for="sortOption in sortByOptions"
                  :key="sortOption.value"
                  @click="sortBy = sortOption"
                >
                  {{ sortOption.text }}
                </b-dropdown-item>
              </b-dropdown>

              <!-- Item View Radio Button Group  -->
              <b-form-radio-group
                v-model="itemView"
                class="ml-1 list item-view-radio-group"
                buttons
                size="sm"
                button-variant="outline-dark"
              >
                <b-form-radio
                  v-for="option in itemViewOptions"
                  :key="option.value"
                  :value="option.value"
                >
                  <feather-icon :icon="option.icon" size="18" />
                </b-form-radio>
              </b-form-radio-group>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Overlay -->
    <div class="body-content-overlay" />

    <!-- Searchbar -->
    <div class="ecommerce-searchbar mt-1">
      <b-row>
        <b-col cols="12">
          <b-input-group class="input-group-merge">
            <b-form-input
              v-model="filters.q"
              placeholder="Search Product"
              class="search-product"
            />
            <b-input-group-append is-text>
              <feather-icon icon="SearchIcon" class="text-muted" />
            </b-input-group-append>
          </b-input-group>
        </b-col>
      </b-row>
    </div>

    <!-- Prodcuts -->
    <section :class="itemView">
      <b-card
        v-for="product in products"
        :key="product.id"
        class="ecommerce-card"
        no-body
      >
        <div class="item-img text-center">
          <b-link :to="{ name: 'deals-details', params: { id: product.id } }">
            <b-img
              :alt="`${product.name}-${product.id}`"
              fluid
              class="card-img-top"
              :src="`${dealAdThumbnailsURL + product.image}`"
            />
          </b-link>
        </div>

        <!-- Product Details -->
        <b-card-body>
          <div class="item-wrapper row">
            <div class="col-md-12">
              <h6 class="item-price">{{ product.point_value }} POINTS</h6>
            </div>

            <div class="col-md-12">
              <h6 class="item-price">
                {{ product.title }}
              </h6>
            </div>      
          </div>

           <b-card-text v-if="!isMerchant" class="item-description">
               Merchant Name: <br />
            <b class="admin-text"> {{ product.merchant.merchant_name }} </b>
            </b-card-text>

          <h6 class="item-name">
            <b-link
              class="text-body"
              :to="{ name: 'deals-details', params: { id: product.id } }"
            >
              {{ product.name }}
            </b-link>
            <b-card-text class="item-company">
              Title
              <b-link class="ml-25">
                {{ product.title }}
              </b-link>
            </b-card-text>
            <b-card-text class="item-company">
              <br />
              <b-link class="ml-25">
                {{ product.brand }}
              </b-link>
            </b-card-text>
          </h6>
          <b-card-text class="item-description">
            Description <br />
            {{ product.description }}
          </b-card-text>
        </b-card-body>

        <!-- Product Actions -->
        <div class="item-options text-center">
          <div class="item-wrapper">
            <div class="item-cost">
              <h4 class="item-price">{{ product.point_value }} POINTS</h4>
            </div>
          </div>
          <b-button
            variant="light"
            tag="a"
            class="btn-wishlist"
            @click="toggleProductInWishlist(product)"
          >
            <span v-if="product.status.status === 'Active'" class="greenStatus">
              APPROVED
            </span>

            <span v-if="product.status.status === 'Paused'" class="blueStatus">
              PAUSED
            </span>

            <span
              v-if="product.status.status === 'Stopped'"
              class="orangeStatus"
            >
              STOPPED
            </span>

            <span v-if="product.status.status === 'Ended'" class="redStatus">
              TERMINATED
            </span>

             <span v-if="product.status.status === 'Pending'" class="greyStatus">
              PENDING
            </span>

          </b-button>
          <b-button
            variant="success"
            tag="a"
            class="btn-cart"
            :to="{ name: 'deals-details', params: { id: product.id } }"
          >
            <feather-icon icon="EyeIcon" class="mr-50" />
            <span>View Details</span>
          </b-button>
        </div>
      </b-card>
    </section>

    <!-- Pagination -->
    <section>
      <b-row>
        <b-col cols="12">
          <b-pagination
            v-model="filters.page"
            :total-rows="totalProducts"
            :per-page="filters.perPage"
            first-number
            align="center"
            last-number
            prev-class="prev-item"
            next-class="next-item"
          >
            <template #prev-text>
              <feather-icon icon="ChevronLeftIcon" size="18" />
            </template>
            <template #next-text>
              <feather-icon icon="ChevronRightIcon" size="18" />
            </template>
          </b-pagination>
        </b-col>
      </b-row>
    </section>

    <!-- Sidebar -->
    <portal to="content-renderer-sidebar-detached-left">
      <deals-filter-sidebar
        :filters="filters"
        :filter-options="filterOptions"
        :mq-shall-show-left-sidebar.sync="mqShallShowLeftSidebar"
      />
    </portal>
    <invoice-sidebar-add-payment
      :is-deal-sidebar-active.sync="isDealSidebarActive"
    />
  </div>
</template>

<script>
import {
  BDropdown,
  BDropdownItem,
  BFormRadioGroup,
  BFormRadio,
  BRow,
  BCol,
  BInputGroup,
  BInputGroupAppend,
  BFormInput,
  BCard,
  BCardBody,
  BLink,
  BImg,
  BCardText,
  BButton,
  BPagination,
  VBToggle,
} from "bootstrap-vue";
import Ripple from "vue-ripple-directive";
import { watch, ref } from "@vue/composition-api";
import { useResponsiveAppLeftSidebarVisibility } from "@core/comp-functions/ui/app";
import StatisticCardHorizontal from "@core/components/statistics-cards/StatisticCardHorizontal.vue";
import DealsFilterSidebar from "./components/DealsFilterSidebar.vue";
import InvoiceSidebarAddPayment from "./InvoiceSidebarAddPayment.vue";
import flatPickr from "vue-flatpickr-component";
import { $themeConfig } from "@themeConfig";

import {
  useEcommerceUi,
  useShopFiltersSortingAndPagination,
  useShopUi,
  useShopRemoteData,
} from "./useDeals";
import { getUserData } from "@/auth/utils";

export default {
  directives: {
    Ripple,
    "b-toggle": VBToggle,
  },
  components: {
    // BSV
    BDropdown,
    BDropdownItem,
    BFormRadioGroup,
    BFormRadio,
    BRow,
    BCol,
    BInputGroup,
    BInputGroupAppend,
    BFormInput,
    BCard,
    BCardBody,
    BLink,
    BImg,
    BCardText,
    BButton,
    BPagination,
    StatisticCardHorizontal,
    // SFC
    flatPickr,
    DealsFilterSidebar,
    InvoiceSidebarAddPayment,
  },

  setup() {
    const isDealSidebarActive = ref(false);

    const stats = ref({});

    const { dealAdThumbnailsURL, dealAdCoverURL } = $themeConfig.app;

    const { filters, filterOptions, sortBy, sortByOptions } =
      useShopFiltersSortingAndPagination();

    const { handleCartActionClick, toggleProductInWishlist } = useEcommerceUi();

    const { itemView, itemViewOptions, totalProducts } = useShopUi();

    const { products, fetchProducts } = useShopRemoteData();

    const { mqShallShowLeftSidebar } = useResponsiveAppLeftSidebarVisibility();

    // Wrapper Function for `fetchProducts` which can be triggered initially and upon changes of filters
    const fetchShopProducts = () => {
      fetchProducts({
        q: filters.value.q,
        sortBy: sortBy.value.value,
        page: filters.value.page,
        perPage: filters.value.perPage,
        category: filters.value.categories,
      }).then((response) => {
        products.value = response.products;
        totalProducts.value = response.total;
        stats.value = response.stats;
      });
    };

    fetchShopProducts();

    watch(
      [filters, sortBy, isDealSidebarActive],
      () => {
        fetchShopProducts();
      },
      {
        deep: true,
      }
    );

    return {
      // useShopFiltersSortingAndPagination
      filters,
      dealAdThumbnailsURL,
      dealAdCoverURL,
      filterOptions,
      sortBy,
      sortByOptions,

      // useShopUi
      itemView,
      itemViewOptions,
      totalProducts,
      toggleProductInWishlist,
      handleCartActionClick,

      // useShopRemoteData
      products,
      stats,

      // mqShallShowLeftSidebar
      mqShallShowLeftSidebar,
      isDealSidebarActive,
    };
  },

  mounted() {
    const userData = getUserData();
    if (userData.role === "merchant") {
      this.isMerchant = true;
    }
  },

  data() {
    return {
      isMerchant: false,
    };
  },
};
</script>

<style lang="scss">
@import "~@core/scss/base/pages/app-ecommerce.scss";
</style>

<style lang="scss" scoped>
@import "~@core/scss/base/pages/app-invoice.scss";
</style>

<style lang="scss" scoped>
.greenStatus {
  font-weight: 600;
  font-size: 14px;
  color: green;
}
.grayStatus {
  font-weight: 600;
  font-size: 14px;
  color: rgb(231, 235, 231);
}
.orangeStatus {
  font-weight: 600;
  font-size: 14px;
  color: orange;
}
.blueStatus {
  font-weight: 600;
  font-size: 14px;
  color: rgb(47, 9, 117);
}
.redStatus {
  font-weight: 600;
  font-size: 14px;
  color: rgb(180, 11, 33);
}
.admin-text{
  font-style: italic;
  font-size: 1.1em;
}
.item-view-radio-group ::v-deep {
  .btn {
    display: flex;
    align-items: center;
  }
}
.add-deals {
  margin-right: 20px !important;
}
</style>
