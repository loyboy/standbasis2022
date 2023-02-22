<template>
    <div>
  
      <!-- Alert: No item found -->
      <b-alert
        variant="danger"
        :show="userData === undefined"
      >
        <h4 class="alert-heading">
          Error fetching user data
        </h4>
        <div class="alert-body">
          No user data found with this user id. Check
          <b-link
            class="alert-link"
            :to="{ name: 'users-home'}"
          >
            user List
          </b-link>
          for other users.
        </div>
      </b-alert>
  
      <template v-if="userData">
        <!-- First Row -->
        <b-row>
            <b-col
                cols="12"
                md="12"
            >
                <user-view-info-card :user-data="userData" />

            </b-col>         
        </b-row>    

        <event-list :username="userData.username" :module="moduleName" />
      </template>
  
    </div>
  </template>
  
  <script>
    import {
        BTab, BCard, BAlert, BLink, BRow, BCol
    } from 'bootstrap-vue'
    import { ref, onUnmounted } from '@vue/composition-api'
    import router from '@/router'
    import store from '@/store'
    import UserViewInfoCard from './UserViewInfoCard.vue'
    import userStoreModule from '../userStoreModule'
    import EventList from '../../dashboard/EventList.vue'

    export default {
        components: {
        BTab,
        BRow,
        BCol,
        BCard,
        BAlert,
        BLink,
        EventList,
        UserViewInfoCard
        },
        data() {
            return {
                userData: null,
                userId: "",
                moduleName: "user"
            }
        },
        async mounted(){
           await this.runOnce();
        },
        methods: {
            async runOnce(){
                const USER_APP_STORE_MODULE_NAME = 'app-user';
        
                // Register module
                if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) store.registerModule(USER_APP_STORE_MODULE_NAME, userStoreModule)

                // UnRegister on leave
                onUnmounted(() => {
                    if (store.hasModule(USER_APP_STORE_MODULE_NAME)) store.unregisterModule(USER_APP_STORE_MODULE_NAME)
                });
            
                let response = await store.dispatch('app-user/fetchUser', { id: router.currentRoute.params.id  })
                if (response.data.data){
                        this.userData = response.data.data;
                        this.userId = router.currentRoute.params.id;                  
                }           
            }
        },
    }
  </script>
  
  <style>
  
  </style>
  