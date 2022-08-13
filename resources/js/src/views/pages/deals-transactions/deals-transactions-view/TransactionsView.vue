<template>
  <div>
    <!-- Alert: No item found -->
    <b-alert variant="danger" :show="transData === undefined">
      <h4 class="alert-heading">Error fetching transaction's data</h4>
      <div class="alert-body">
        No transaction found with this id. Check
        <b-link class="alert-link" >
          Transactions List
        </b-link>
        for other transaction information.
      </div>
    </b-alert> 
 
    <template v-if="transData"> 
      <!-- First Row -->
      <b-row>
        <b-col cols="12" xl="12" lg="8" md="7">
          <transaction-view-info-card :transaction-data="transData" />
        </b-col>
      </b-row>
    </template>

    <Skeleton :count="10" v-else />
  </div>
</template>

<script>
import store from "@/store";
import router from "@/router";
import { ref, onUnmounted } from "@vue/composition-api";
import { BRow, BCol, BAlert, BLink } from "bootstrap-vue";
import transactionStoreModule from "../transactionStoreModule";
import TransactionViewInfoCard from "./TransactionViewInfoCard.vue";
import useResolverList from "@/useResolverList";
import { Skeleton } from "vue-loading-skeleton";

export default {
  components: {
    BRow,
    BCol,
    BAlert,
    BLink,
    // Local Components
    Skeleton,
    TransactionViewInfoCard
  },
  setup() {
    const { resolveUserRoleVariant } = useResolverList();
    const transData = ref(null);
    const TRANS_STORE_MODULE_NAME = "deals-trans-store";

    // Register module
    if (!store.hasModule(TRANS_STORE_MODULE_NAME))
      store.registerModule(TRANS_STORE_MODULE_NAME, transactionStoreModule);

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(TRANS_STORE_MODULE_NAME))
        store.unregisterModule(TRANS_STORE_MODULE_NAME);
    });

    store
      .dispatch("deals-trans-store/fetchTransaction", {
        id: router.currentRoute.params.id,
      })
      .then((response) => {
        transData.value = response.data.data;
      })
      .catch((error) => {
        if (error.response.status === 404) {
          transData.value = undefined;
        }
      });

    return {
      resolveUserRoleVariant,
      transData,
    };
  },
};
</script>

<style>
</style>
