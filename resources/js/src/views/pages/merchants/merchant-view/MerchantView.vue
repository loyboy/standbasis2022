<template>
  <div>
    <!-- Alert: No item found -->
    <b-alert variant="danger" :show="userData === undefined">
      <h4 class="alert-heading">Error fetching user data</h4>
      <div class="alert-body">
        No user found with this user id. Check
        <b-link class="alert-link" :to="{ name: 'apps-users-list' }">
          User List
        </b-link>
        for other users.
      </div>
    </b-alert>

    <template v-if="userData">
      <!-- First Row -->
      <b-row>
        <b-col cols="12" xl="12" lg="8" md="7">
        <merchant-view-user-info-card :user-data="userData" />

        </b-col>
      </b-row>      
    </template>
  </div>
</template>

<script>
import store from "@/store";
import router from "@/router";
import { ref, onUnmounted } from "@vue/composition-api";
import { BRow, BCol, BAlert, BLink } from "bootstrap-vue";
import InvoiceList from "@/views/apps/invoice/invoice-list/InvoiceList.vue";
import merchantStoreModule from "../merchantStoreModule";
import MerchantViewUserInfoCard from "./MerchantViewUserInfoCard.vue";
import useResolverList from "@/useResolverList";

export default {
  components: {
    BRow,
    BCol,
    BAlert,
    BLink,

    // Local Components
    MerchantViewUserInfoCard,
    InvoiceList,
  },
  setup() {
    const { resolveUserRoleVariant } = useResolverList();
    const userData = ref(null);

    const MERCHANT_STORE_MODULE_NAME = "merchant-store";

    // Register module
    if (!store.hasModule(MERCHANT_STORE_MODULE_NAME))
      store.registerModule(MERCHANT_STORE_MODULE_NAME, merchantStoreModule);

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(MERCHANT_STORE_MODULE_NAME))
        store.unregisterModule(MERCHANT_STORE_MODULE_NAME);
    });

    store
      .dispatch("merchant-store/fetchUser", { id:router.currentRoute.params.id})
      .then((response) => {
        userData.value = response.data.data;
        console.log(userData)
      })
      .catch((error) => {
        if (error.response.status === 404) {
          userData.value = undefined;
        }
      });

    return {
      resolveUserRoleVariant,
      userData,
    };
  },
};
</script>

<style>
</style>
