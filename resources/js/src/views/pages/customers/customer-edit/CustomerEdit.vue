<template>
  <component :is="userData === undefined ? 'div' : 'b-card'">

    <!-- Alert: No item found -->
    <b-alert
      variant="danger"
      :show="userData === undefined"
    >
      <h4 class="alert-heading">
        Error fetching user data
      </h4>
      <div class="alert-body">
        No user found with this user id. Check
        <b-link
          class="alert-link"
          :to="{ name: 'apps-users-list'}"
        >
          User List
        </b-link>
        for other users.
      </div>
    </b-alert>

    <b-tabs
      v-if="userData"
      pills
    >

      <!-- Tab: Account -->
      <b-tab active>
        <template #title>
          <feather-icon
            icon="UserIcon"
            size="16"
            class="mr-0 mr-sm-50"
          />
          <span class="d-none d-sm-inline">Account</span>
        </template>
        <customer-edit-tab-account
          :user-data="userData"
          class="mt-2 pt-75"
        />
      </b-tab>

      <!-- Tab: Information -->
      <b-tab>
        <template #title>
          <feather-icon
            icon="InfoIcon"
            size="16"
            class="mr-0 mr-sm-50"
          />
          <span class="d-none d-sm-inline">Information</span>
        </template>
        <customer-edit-tab-information class="mt-2 pt-75" :user-data="userData"/>
      </b-tab>
    </b-tabs>
  </component>
</template>

<script>
import {
  BTab, BTabs, BCard, BAlert, BLink,
} from 'bootstrap-vue'
import { ref, onUnmounted } from '@vue/composition-api'
import router from '@/router'
import store from '@/store'
import customerStoreModule from '../customerStoreModule'
import CustomerEditTabAccount from './CustomerEditTabAccount.vue'
import CustomerEditTabInformation from './CustomerEditTabInformation.vue'

export default {
  components: {
    BTab,
    BTabs,
    BCard,
    BAlert,
    BLink,
    CustomerEditTabAccount,
    CustomerEditTabInformation,
  },
  setup() {
   
    const userData = ref(null)     

    const CUSTOMER_STORE_MODULE_NAME = 'customer-store'

    // Register module
    if (!store.hasModule(CUSTOMER_STORE_MODULE_NAME)) store.registerModule(CUSTOMER_STORE_MODULE_NAME, customerStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(CUSTOMER_STORE_MODULE_NAME)) store.unregisterModule(CUSTOMER_STORE_MODULE_NAME)
    })

    store.dispatch('customer-store/fetchUser', { id: router.currentRoute.params.id  })
      .then(response => { 
        userData.value = response.data.data
        })
      .catch(error => {
        if (error.response.status === 404) {
          userData.value = undefined
        } 
      })

    return {
      userData,
    }
  },
}
</script>

<style>

</style>
