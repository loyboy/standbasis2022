<template>
  <section class="invoice-preview-wrapper">
    <!-- Alert: No item found -->
    <b-alert variant="danger" :show="invoiceData === undefined">
      <h4 class="alert-heading">Error fetching invoice data</h4>
      <div class="alert-body">
        No invoice found with this invoice id. Check
        <b-link class="alert-link" :to="{ name: 'apps-invoice-list' }">
          Invoice List
        </b-link>
        for other invoices.
      </div>
    </b-alert>

    <b-row v-if="invoiceData" class="invoice-preview">
      
      <!-- Col: Left (Invoice Container) -->
      <b-col cols="12" xl="9" md="8">
        <b-card no-body class="invoice-preview-card">
          <!-- Header -->
          <b-card-body class="invoice-padding pb-0">
            <div
              class="
                d-flex
                justify-content-between
                flex-md-row flex-column
                invoice-spacing
                mt-0
              "
            >
              <!-- Header: Left Content -->
              <div>
                <div class="logo-wrapper">
                  <b-img
                    :src="appLogoImage"
                    alt="logo"
                    style="max-width: 150px"
                  />
                </div>
                <p class="card-text mb-25">
                  24 Joel ogunnaike street Ikeja GRA, Lagos Nigeria
                </p>
                <p class="card-text mb-0">
                  hello@plenti.africa, +(234) 0904 111 0904
                </p>
              </div>

              <!-- Header: Right Content -->
              <div class="mt-md-0 mt-2">
                <h4 class="invoice-title">
                  Invoice
                  <span class="invoice-number">#{{ invoiceNo }}</span>
                </h4>
                <div class="invoice-date-wrapper">
                  <p class="invoice-date-title">Date Issued:</p>
                  <p class="invoice-date">
                    {{ dateIssue }}
                  </p>
                </div>
              </div>
            </div>
          </b-card-body>

          <!-- Spacer -->
          <hr class="invoice-spacing" />

          <!-- Invoice Description: Table -->
          <b-table-lite
            responsive
            :items="invoiceData.rows"
            :fields="['storeName', 'totalEarn', 'totalBurn', 'balance']"
          >
            <template #cell(storeName)="data">
              <b-card-text class="font-weight-bold mb-25">
                {{ data.item.store_name }}
              </b-card-text>
            </template>
            <template #cell(totalEarn)="data">
              <b-card-text class="font-weight-bold mb-25">
                {{  data.item.earn | formatNumber}}
              </b-card-text>
            </template>
            <template #cell(totalBurn)="data">
              <b-card-text class="font-weight-bold mb-25">
                {{ data.item.burn  | formatNumber}}
              </b-card-text>
            </template>
            <template #cell(balance)="data">
              <b-card-text class="font-weight-bold mb-25">
                {{ data.item.burn | formatNumber }}
              </b-card-text>
            </template>
          </b-table-lite>

          <!-- Invoice Description: Total -->
          <b-card-body class="invoice-padding pb-0">
            <b-row>
              <!-- Col: Sales Persion -->
              <b-col
                cols="12"
                md="6"
                class="mt-md-0 mt-3"
                order="2"
                order-md="1"
              >
              </b-col>

              <!-- Col: Total -->
           <!--    <b-col
                cols="12"
                md="6"
                class="mt-md-6 d-flex justify-content-end"
                order="1"
                order-md="2"
              >
                <div class="invoice-total-wrapper">
                  <div class="invoice-total-item">
                    <p class="invoice-total-title">Subtotal:</p>
                    <p class="invoice-total-amount">₦{{ total }}</p>
                  </div>
                  <div class="invoice-total-item">
                    <p class="invoice-total-title">Discount:</p>
                    <p class="invoice-total-amount">₦0</p>
                  </div>
                  <hr class="my-50" />
                  <div class="invoice-total-item">
                    <p class="invoice-total-title">Total:</p>
                    <p class="invoice-total-amount">₦{{ total }}</p>
                  </div>
                </div>
              </b-col> -->
            </b-row>
          </b-card-body>

          <!-- Spacer -->
          <hr class="invoice-spacing" />

          <!-- Note -->
          <b-card-body class="invoice-padding pt-0">
            <span class="font-weight-bold">Note: </span>
            <span
              >It was a pleasure working with you and your team. We hope you
              will keep us in mind for future freelance projects. Thank
              You!</span
            >
          </b-card-body>
        </b-card>
      </b-col>

      <!-- Right Col: Card -->
      <b-col cols="12" md="4" xl="3" class="invoice-actions">
        <b-card>
          <b-form-group label="Deals Category" label-for="deals-category">
            <b-form-select
              v-model="invoiceFilter.store"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="stores"
            />
          </b-form-group>
          <b-form-group label="Start date">
            <flat-pickr
              v-model="invoiceFilter.startDate"
              class="form-control"
            />
          </b-form-group>
          <b-form-group label="End date">
            <flat-pickr v-model="invoiceFilter.endDate" class="form-control" />
          </b-form-group>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="success"
            class="mb-75"
            block
            @click="filterInvoice"
          >
            Filter Account Summary
          </b-button>
          <!-- Button: Print -->
          <b-button
            v-ripple.400="'rgba(186, 191, 199, 0.15)'"
            variant="outline-secondary"
            class="mb-75"
            block
            @click="printInvoice"
          >
            Print
          </b-button>
        </b-card>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { ref, onUnmounted } from "@vue/composition-api";
import store from "@/store";
import router from "@/router";
import {
  BRow,
  BCol,
  BCard,
  BCardBody,
  BTableLite,
  BCardText,
  BButton,
  BAlert,
  BLink,
  VBToggle,
  BFormSelect,
  BFormGroup,
  BImg,
} from "bootstrap-vue";
import Logo from "@core/layouts/components/Logo.vue";
import Ripple from "vue-ripple-directive";
import flatPickr from "vue-flatpickr-component";
import { $themeConfig } from "@themeConfig";
import axios from "axios";
import jwtHeader from "@core/services/jwt-header";

export default {
  directives: {
    Ripple,
    "b-toggle": VBToggle,
  },
  components: {
    BImg,
    BRow,
    BCol,
    BCard,
    BCardBody,
    BTableLite,
    BCardText,
    BButton,
    BAlert,
    BLink,
    flatPickr,
    BFormGroup,
    BFormSelect,
    Logo,
  },
  setup() {
    const stores = [];
    let invoiceData = null;
    let total = 0
    const { appLogoImage, baseURL } = $themeConfig.app;
    const dateIssue = new Date().toISOString().slice(0, 10);
    const invoiceNo = new Date().getTime();
    stores.push({
      value: null,
      text: "Please select an option",
    });
    store.state.appConfig.stores.forEach((value, index) => {
      stores.push({ value: value.id, text: value.store_name });
    });

    const invoiceFilter = {
      store: null,
      startDate: null,
      endDate: null,
    }; 

    const printInvoice = () => {
      window.print();
    };
    return {
      stores,
      dateIssue,
      appLogoImage,
      baseURL,
      invoiceData,
      total,
      invoiceNo,
      invoiceFilter,
      printInvoice,
    };
  },
  created() {
    this.fetchInvoices();
  },
  methods: {
    fetchInvoices(url = this.baseURL + "/monthly-account-summary") {
       axios.get(url , { params: this.invoiceFilter, headers: jwtHeader() })
      .then((response) => {
       this.invoiceData = response.data
       this.invoiceData.rows.forEach((value, index) => {
        this.total += parseInt(value.earn)
        });
      });
    },
    filterInvoice() {
        this.total = 0;
        this.fetchInvoices()
    }
  
  }
};
</script>

<style lang="scss" scoped>
@import "~@core/scss/base/pages/app-invoice.scss";
@import "~@core/scss/vue/libs/vue-flatpicker.scss";
</style>

<style lang="scss">
@media print {
  // Global Styles
  body {
    background-color: transparent !important;
  }
  nav.header-navbar {
    display: none;
  }
  .main-menu {
    display: none;
  }
  .header-navbar-shadow {
    display: none !important;
  }
  .content.app-content {
    margin-left: 0;
    padding-top: 2rem !important;
  }
  footer.footer {
    display: none;
  }
  .card {
    background-color: transparent;
    box-shadow: none;
  }
  .customizer-toggle {
    display: none !important;
  }

  // Invoice Specific Styles
  .invoice-preview-wrapper {
    .row.invoice-preview {
      .col-md-8 {
        max-width: 100%;
        flex-grow: 1;
      }

      .invoice-preview-card {
        .card-body:nth-of-type(2) {
          .row {
            > .col-12 {
              max-width: 50% !important;
            }

            .col-12:nth-child(2) {
              display: flex;
              align-items: flex-start;
              justify-content: flex-end;
              margin-top: 0 !important;
            }
          }
        }
      }
    }

    // Action Right Col
    .invoice-actions {
      display: none;
    }
  }
}
</style>
