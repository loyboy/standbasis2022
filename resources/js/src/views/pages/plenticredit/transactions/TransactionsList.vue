<template>
  <!-- Table Container Card -->
  <b-card no-body>
    <div class="m-2">
      <!-- Table Top -->
      <b-row>
        <!-- Per Page -->
        <b-col
          cols="12"
          md="6"
          class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
        >
          <label>Entries</label>
          <v-select
            v-model="perPage"
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            :options="perPageOptions"
            :clearable="false"
            class="per-page-selector d-inline-block ml-50 mr-1"
          />
        </b-col>

        <!-- Search -->
        <b-col cols="12" md="6">
          <div class="d-flex align-items-center justify-content-end">
            <b-form-input
              v-model="searchQuery"
              class="d-inline-block mr-1"
              placeholder="Search..."
            />
      
          </div>
        </b-col>
      </b-row>
    </div>

    <b-table
      ref="refInvoiceListTable"
      :items="fetchLoanRepaid"
      responsive
      :fields="tableColumns"
      primary-key="id"
      :sort-by.sync="sortBy"
      show-empty
      empty-text="No matching records found"
      :sort-desc.sync="isSortDirDesc"
      class="position-relative"
    >

      <template #cell(loanId)="data">
        <span class="text-nowrap">
          {{ data.item.loan_id }}
        </span>
      </template>

      <template #cell(status)="data">
        
        <template v-if="data.item.status === 'pending' ">
          <b-badge pill variant="light-danger"> Pending </b-badge>
        </template>

        <template v-else>
          <b-badge pill variant="light-success"> Success </b-badge>
        </template>

      </template>

      <!-- Column: TransactionDetails -->
      <template #cell(amount)="data">
        <b-media vertical-align="center">
          <span class="font-weight-bold d-block">
            {{ data.item.amount }} NAIRA
          </span>
       
        </b-media>
      </template>    

      <template #cell(paymentDate)="data">
        <span class="text-nowrap">
          {{ data.item.payment_date }}
        </span>
      </template>    

      <template #cell(actions)="data">
                      <b-dropdown variant="link" no-caret :right="$store.state.appConfig.isRTL">
                        <template #button-content>
                          <feather-icon icon="MoreVerticalIcon" size="16" class="align-middle text-body" />
                        </template>
                        <b-dropdown-item @click="SendReminder(data.item)">
                          <feather-icon icon="CheckSquareIcon" />
                          <span class="align-middle ml-50"> Send Reminder </span>
                        </b-dropdown-item>
                      </b-dropdown>
      </template>

    </b-table>


    <div class="mx-2 mb-2">
      <b-row>
        <b-col
          cols="12"
          sm="6"
          class="
            d-flex
            align-items-center
            justify-content-center justify-content-sm-start
          "
        >
          <span class="text-muted"
            >Showing {{ dataMeta.from }} to {{ dataMeta.to }} of
            {{ dataMeta.of }} entries</span
          >
        </b-col>
        <!-- Pagination -->
        <b-col
          cols="12"
          sm="6"
          class="
            d-flex
            align-items-center
            justify-content-center justify-content-sm-end
          "
        >
          <b-pagination
            v-model="currentPage"
            :total-rows="totalInvoices"
            :per-page="perPage"
            first-number
            last-number
            class="mb-0 mt-1 mt-sm-0"
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
    </div>

  </b-card>
</template>

<script>
import {
  BCard,
  BRow,
  BCol,
  BFormInput,
  BButton,
  BTable,
  BMedia,
  BAvatar,
  BLink,
  BBadge,
  BDropdown,
  BDropdownItem,
  BPagination,
  BTooltip,
} from "bootstrap-vue";
import { avatarText } from "@core/utils/filter";
import vSelect from "vue-select";
import { onUnmounted } from "@vue/composition-api";
import store from "@/store";
import transactionHelper from "./transactionHelper";
import axios from "axios";
import transactionStoreModule from "./transactionStoreModule";
import jwtHeader from "@core/services/jwt-header";
import { $themeConfig } from "@themeConfig";

export default {
  components: {
    BCard,
    BRow,
    BCol,
    BFormInput,
    BButton,
    BTable,
    BMedia,
    BAvatar,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,
    BTooltip,

    vSelect,
  },

  props: {
    transaction: {
      type: Array,
      default: () => [],
    },
  },

  setup(props) {
    const transactionData = props.transaction;
    const CUSTOMER_TRANSACTION_STORE_MODULE_NAME = "customer-plentiloan-transactions";

    // Register module
    if (!store.hasModule(CUSTOMER_TRANSACTION_STORE_MODULE_NAME))
      store.registerModule(
        CUSTOMER_TRANSACTION_STORE_MODULE_NAME,
        transactionStoreModule
      );

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(CUSTOMER_TRANSACTION_STORE_MODULE_NAME))
        store.unregisterModule(CUSTOMER_TRANSACTION_STORE_MODULE_NAME);
    });

    const statusOptions = ["Earn", "Deducted"];
    const { baseURL } = $themeConfig.app;

    const {
      fetchLoanRepaid,
      tableColumns,
      perPage,
      currentPage,
      totalInvoices,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refInvoiceListTable,

      statusFilter,

      refetchData,
      
      resolveInvoiceStatusVariantAndIcon,
      resolveClientAvatarVariant,
    } = transactionHelper(transactionData);

    return {
      fetchLoanRepaid,
      tableColumns,
      perPage,
      currentPage,
      totalInvoices,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refInvoiceListTable,

      statusFilter,

      refetchData,

      statusOptions,

      avatarText,
      baseURL,
      resolveInvoiceStatusVariantAndIcon,
      resolveClientAvatarVariant,
    };
  },


  methods:{
     
     SendReminder(item) {
       let isConfirmed = window.confirm(`Send this user an e-mail reminder? `);
        if (isConfirmed) {
          axios.post(this.baseURL + "/user/plenticredit/send-reminder", { id: item.id }, { headers: jwtHeader() }).then((res) => {
            alert("Sent reminder successfully.");
          });
        }
     }
  }
}
</script>

<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}

.invoice-filter-select {
  min-width: 190px;

  ::v-deep .vs__selected-options {
    flex-wrap: nowrap;
  }

  ::v-deep .vs__selected {
    width: 100px;
  }
}
</style>

<style lang="scss">
@import "~@core/scss/vue/libs/vue-select.scss";
</style>
