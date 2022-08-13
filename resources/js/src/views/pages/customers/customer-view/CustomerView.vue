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
          <user-view-user-info-card :user-data="userData" />
        </b-col>
      </b-row>

      <transactions-list :transaction="userData.transactions_log" />
    </template>
    <Skeleton :count="10" v-else />
  </div>
</template>

<script>
import store from "@/store";
import router from "@/router";
import { ref, onUnmounted } from "@vue/composition-api";
import { BRow, BCol, BAlert, BLink } from "bootstrap-vue";
import TransactionsList from "../transactions/TransactionsList.vue";
import customerStoreModule from "../customerStoreModule";
import UserViewUserInfoCard from "./CustomerViewUserInfoCard.vue";
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
    TransactionsList,
    UserViewUserInfoCard,
  },
  setup() {
    const { resolveUserRoleVariant } = useResolverList();
    const userData = ref(null);
    const CUSTOMER_STORE_MODULE_NAME = "customer-store";

    // Register module
    if (!store.hasModule(CUSTOMER_STORE_MODULE_NAME))
      store.registerModule(CUSTOMER_STORE_MODULE_NAME, customerStoreModule);

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(CUSTOMER_STORE_MODULE_NAME))
        store.unregisterModule(CUSTOMER_STORE_MODULE_NAME);
    });

    store
      .dispatch("customer-store/fetchUser", {
        id: router.currentRoute.params.id,
      })
      .then((response) => {
        userData.value = response.data.data;
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
