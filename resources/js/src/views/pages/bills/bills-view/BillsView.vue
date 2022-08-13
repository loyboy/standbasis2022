<template>
  <div>
    <!-- Alert: No item found -->
    <b-alert variant="danger" :show="billData === undefined">
      <h4 class="alert-heading">Error fetching bill's data</h4>
      <div class="alert-body">
        No bill found with this bill id. Check
        <b-link class="alert-link">
          Bills List
        </b-link>
        for other bill information.
      </div>
    </b-alert>

    <template v-if="billData">
      <!-- First Row -->
      <b-row>
        <b-col cols="12" xl="12" lg="8" md="7">
          <bill-view-info-card :user-data="billData" />
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
import billStoreModule from "../billStoreModule";
import BillViewInfoCard from "./BillViewInfoCard.vue";
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
    BillViewInfoCard,
  },
  setup() {
    const { resolveUserRoleVariant } = useResolverList();
    const billData = ref(null);
    const BILL_STORE_MODULE_NAME = "bill-store";

    // Register module
    if (!store.hasModule(BILL_STORE_MODULE_NAME))
      store.registerModule(BILL_STORE_MODULE_NAME, billStoreModule);

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(BILL_STORE_MODULE_NAME))
        store.unregisterModule(BILL_STORE_MODULE_NAME);
    });

    store
      .dispatch("bill-store/fetchBill", {
        id: router.currentRoute.params.id,
      })
      .then((response) => {
        billData.value = response.data.data;
      })
      .catch((error) => {
        if (error.response.status === 404) {
          billData.value = undefined;
        }
      });

    return {
      resolveUserRoleVariant,
      billData,
    };
  },
};
</script>

<style>
</style>
