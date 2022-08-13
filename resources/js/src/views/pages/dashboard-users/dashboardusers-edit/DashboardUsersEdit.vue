<template>
  <component :is="userData === undefined ? 'div' : 'b-card'">

    <!-- Alert: No item found -->
    <b-alert
      variant="danger"
      :show="userData === undefined"
    >
      <h4 class="alert-heading">
        Error fetching Dashboard User's data
      </h4>
      <div class="alert-body">
        No dashboard user found with this id. Check
        <b-link
          class="alert-link"
          :to="{ name: ''}"
        >
         Dashboard User List
        </b-link>
        for other users.
      </div>
    </b-alert>

     <dashboard-users-edit-tab-account
        v-if="userData"
          :user-data="userData"
          class="mt-2 pt-75"
        />

<!--<b-tabs
        v-if="userData"
        pills
      >
        <b-tab active>
          <template #title>
            <feather-icon
              icon="UserIcon"
              size="16"
              class="mr-0 mr-sm-50"
            />
            <span class="d-none d-sm-inline">Account</span>
          </template>
        
        </b-tab>
    </b-tabs> -->

  </component>
</template>

<script>
import {
  BTab, BTabs, BCard, BAlert, BLink,
} from 'bootstrap-vue'
import { ref, onUnmounted } from '@vue/composition-api'
import router from '@/router'
import store from '@/store'
import dashboarduserStoreModule from './dashboarduserStoreModule'
import DashboardUsersEditTabAccount from './DashboardUsersEditTabAccount.vue'

export default {
  components: {
    BTab,
    BTabs,
    BCard,
    BAlert,
    BLink,
    DashboardUsersEditTabAccount
  },
  setup() {
   
    const userData = ref(null);    

    const DASHBOARDUSERS_STORE_MODULE_NAME = 'dashboardusers-store';

    // Register module
    if (!store.hasModule(DASHBOARDUSERS_STORE_MODULE_NAME)) store.registerModule(DASHBOARDUSERS_STORE_MODULE_NAME, dashboarduserStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(DASHBOARDUSERS_STORE_MODULE_NAME)) store.unregisterModule(DASHBOARDUSERS_STORE_MODULE_NAME)
    })

    store.dispatch('dashboardusers-store/fetchUser', { id: router.currentRoute.params.id })
      .then(response => { 
        userData.value = response.data.data
      })
      .catch(error => {
        if (error.response.status === 404) {
          userData.value = undefined
        } 
      })

    return {
      userData
    }
  },

  mounted(){
    console.log( "User data: " + this.userData);
  }

}
</script>

<style>

</style>
