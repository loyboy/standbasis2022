<template>
  <div>
    <!-- Alert: No item found -->
    <b-alert variant="danger" :show="giftcardData === undefined">
      <h4 class="alert-heading">Error fetching bill's data</h4>
      <div class="alert-body">
        No GiftCard found with this giftcard id. Check
        <b-link class="alert-link" >
          GiftCards List
        </b-link>
        for other giftcard information.
      </div>
    </b-alert>

    <template v-if="giftcardData">
      <!-- First Row -->
      <b-row>
        <b-col cols="12" xl="12" lg="8" md="7">
          <giftcard-view-info-card :giftcard-data="giftcardData"  />
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
import giftcardStoreModule from "../giftcardStoreModule";
import GiftcardViewInfoCard from "./GiftCardViewInfoCard.vue";
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
    GiftcardViewInfoCard
  },
  setup() {
    const { resolveUserRoleVariant } = useResolverList();
    const giftcardData = ref(null);
    const GIFTCARD_STORE_MODULE_NAME = "giftcard-store";

    // Register module
    if (!store.hasModule(GIFTCARD_STORE_MODULE_NAME))
      store.registerModule(GIFTCARD_STORE_MODULE_NAME, giftcardStoreModule);

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(GIFTCARD_STORE_MODULE_NAME))
        store.unregisterModule(GIFTCARD_STORE_MODULE_NAME);
    });

    store
      .dispatch("giftcard-store/fetchGiftCard", {
        id: router.currentRoute.params.id,
      })
      .then((response) => {
        giftcardData.value = response.data.data;
      })
      .catch((error) => {
        if (error.response.status === 404) {
          giftcardData.value = undefined;
        }
      });

    return {
      resolveUserRoleVariant,
      giftcardData,
    };
  },
};
</script>

<style>
</style>
