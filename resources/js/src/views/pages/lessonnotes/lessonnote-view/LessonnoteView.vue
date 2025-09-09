<template>
    <div>
  
      <!-- Alert: No item found -->
      <b-alert
        variant="danger"
        :show="lessonnoteData === undefined"
      >
        <h4 class="alert-heading">
          Error fetching lessonnote data
        </h4>
        <div class="alert-body">
          No lessonnote data found with this lessonnote id. Check
          <b-link
            class="alert-link"
            :to="{ name: 'lessonnotes-home'}"
          >
            lessonnote List
          </b-link>
          for other lessonnotes.
        </div>
      </b-alert>
  
      <template v-if="lessonnoteData">
        <!-- First Row -->
        <b-row>
            <b-col
                cols="12"
                md="12"
            >
                <lessonnote-view-info-card :lessonnote-data="lessonnoteData" />
            </b-col>         
        </b-row>    

        <event-list :teacherId="lessonnoteData.teacher.teaId" :schoolId="lessonnoteData.teacher.school.schId" :module="moduleName" />
      </template>
  
    </div>
  </template>
  
  <script>
   import lessonnoteStoreModule from '../lessonnoteStoreModule'
    import {
        BTab, BTabs, BCard, BAlert, BLink, BRow, BCol
    } from 'bootstrap-vue'
    import { ref, onUnmounted } from '@vue/composition-api'
    import router from '@/router'
    import store from '@/store'
    import LessonnoteViewInfoCard from './LessonnoteViewInfoCard.vue'
   
    import EventList from '../../dashboard/EventList.vue'

    export default {
        components: {
        BTab,
        BTabs,
        BCard,
        BAlert,
        BLink,
        BRow,
        BCol,
        EventList,
        LessonnoteViewInfoCard
        },
        data() {
            return {
              lessonnoteData: null,
              lessonnoteId: "",
              moduleName:"lessonnote"
            }
        },
        async mounted(){
           await this.runOnce();
        },
        methods: {
            async runOnce(){
                const LESSONNOTE_APP_STORE_MODULE_NAME = 'app-lessonnote';
        
                // Register module
                if (!store.hasModule(LESSONNOTE_APP_STORE_MODULE_NAME)) store.registerModule(LESSONNOTE_APP_STORE_MODULE_NAME, lessonnoteStoreModule)

                // UnRegister on leave
                onUnmounted(() => {
                    if (store.hasModule(LESSONNOTE_APP_STORE_MODULE_NAME)) store.unregisterModule(LESSONNOTE_APP_STORE_MODULE_NAME)
                });
            
                let response = await store.dispatch(`${LESSONNOTE_APP_STORE_MODULE_NAME}/fetchLessonnote`, { id: router.currentRoute.params.id  })
                if (response.data.data){
                        this.lessonnoteData = response.data.data;
                        this.lessonnoteId = router.currentRoute.params.id;                  
                }           
            }
        },
    }
  </script>
  
  <style>
  
  </style>
  