<template>
  <div>
    <!-- Alert: No item found -->
    <b-alert variant="danger" :show="plenticreditData === undefined">
      <h4 class="alert-heading">Error fetching plenticredit's data</h4>
      <div class="alert-body">
        No plenticredit found with this plenticredit id. Check
        <b-link class="alert-link">
          PlentiCredit's Loan List
        </b-link>
        for other plenticredit information.
      </div>
    </b-alert>

    <template v-if="plenticreditData">
      <!-- First Row -->
      <b-row>
        <b-col cols="12" xl="12" lg="8" md="7">
          <plenti-credit-card :plenticreditData="plenticreditData" />
        </b-col>
      </b-row>
    <transactions-list :transaction=" plenticreditData.plenti_loan_repayments" />
    </template>
    <Skeleton :count="10" v-else />
  </div>
</template>

<script>
import store from "@/store";
import router from "@/router";
import { ref, onUnmounted } from "@vue/composition-api";
import { BRow, BCol, BAlert, BLink } from "bootstrap-vue";
import plentiCreditModule from "../plentiCreditModule";
import TransactionsList from "../transactions/TransactionsList.vue";
import PlentiCreditCard from "./PlentiCreditCard.vue";
import useResolverList from "@/useResolverList";
import { Skeleton } from "vue-loading-skeleton";

export default {
  components: {
    BRow,
    BCol,
    BAlert,
    BLink,
 TransactionsList,
    // Local Components

    Skeleton,
    PlentiCreditCard
  },
  setup() {
    const { resolveUserRoleVariant } = useResolverList();
    const plenticreditData = ref(null);
    const PLENTICREDIT_STORE_MODULE_NAME = "plenticredit-store";

    // Register module
    if (!store.hasModule(PLENTICREDIT_STORE_MODULE_NAME))
      store.registerModule(PLENTICREDIT_STORE_MODULE_NAME, plentiCreditModule);

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(PLENTICREDIT_STORE_MODULE_NAME))
        store.unregisterModule(PLENTICREDIT_STORE_MODULE_NAME);
    });

    store
      .dispatch("plenticredit-store/fetchItems", {
        id: router.currentRoute.params.id,
      })
      .then((response) => {
        plenticreditData.value = response.data.data;
      })
      .catch((error) => {
        if (error.response.status === 404) {
          plenticreditData.value = undefined;
        }
      });

    return {
      resolveUserRoleVariant,
      plenticreditData
    };
  },

  methods:{
    sortTransactions(arrayItems){
      return arrayItems.sort(function (a, b) {  return a.installment - b.installment;  });
    }
  }
};
</script>

<style>
</style>
