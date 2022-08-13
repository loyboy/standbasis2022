<template>
  <div>
    <!-- Alert: No item found -->
    <b-alert variant="danger" :show="voucherData === undefined">
      <h4 class="alert-heading">Error fetching bill's data</h4>
      <div class="alert-body">
        No Voucher found with this voucher id. Check
        <b-link class="alert-link" >
          Vouchers List
        </b-link>
        for other voucher information.
      </div>
    </b-alert>

    <template v-if="voucherData">
      <!-- First Row -->
      <b-row>
        <b-col cols="12" xl="12" lg="8" md="7">
          <voucher-view-info-card :voucher-data="voucherData"  />
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
import voucherStoreModule from "../voucherStoreModule";
import VoucherViewInfoCard from "./VoucherViewInfoCard.vue";
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
    VoucherViewInfoCard
  },
  setup() {
    const { resolveUserRoleVariant } = useResolverList();
    const voucherData = ref(null);
    const VOUCHER_STORE_MODULE_NAME = "voucher-store";

    // Register module
    if (!store.hasModule(VOUCHER_STORE_MODULE_NAME))
      store.registerModule(VOUCHER_STORE_MODULE_NAME, voucherStoreModule);

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(VOUCHER_STORE_MODULE_NAME))
        store.unregisterModule(VOUCHER_STORE_MODULE_NAME);
    });

    store
      .dispatch("voucher-store/fetchVoucher", {
        id: router.currentRoute.params.id,
      })
      .then((response) => {
        voucherData.value = response.data.data;
      })
      .catch((error) => {
        if (error.response.status === 404) {
          voucherData.value = undefined;
        }
      });

    return {
      resolveUserRoleVariant,
      voucherData,
    };
  },
};
</script>

<style>
</style>
