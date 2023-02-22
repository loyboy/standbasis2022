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
                    :to="{ name: 'users-home'}"
                >
                user List
                </b-link>
                for other users.
                </div>
            </b-alert>
  
            <b-tabs pills>  
                
                <!-- Tab: Information -->
                <b-tab active>
                    <template #title>
                        <feather-icon
                        icon="InfoIcon"
                        size="16"
                        class="mr-0 mr-sm-50"
                        />
                        <span class="d-none d-sm-inline">Information</span>
                    </template>

                    <user-edit-tab-information class="mt-2 pt-75" @refresh="runOnce" :user-data="userData" :permissions-data="permissionsData" :user-id="userId"/> 

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
  import UserEditTabInformation from './UserEditTabInformation.vue'
  import userStoreModule from '../userStoreModule'

  export default {
    components: {
      BTab,
      BTabs,
      BCard,
      BAlert,
      BLink,
      UserEditTabInformation
    },
    data() {   
        return {
            userlocalData: JSON.parse(localStorage.getItem('userData')),
            userData: {},
            userId: "",
            permissionsData: []
        }
    },
    async created(){
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
                    let perm = JSON.parse(response.data.data.permissionsJSON);
                    
                    this.permissionsData =  [
                            {
                                module: "school",
                                read: perm.school.read,
                                edit: perm.school.edit,
                                create: perm.school.create,
                                delete: perm.school.delete
                            },
                          
                          
                            {
                                module: "enrollment",
                                read: perm.enrollment.read,
                                edit: perm.enrollment.edit,
                                create: perm.enrollment.create,
                                delete: perm.enrollment.delete
                            },
                            {
                                module: "classroom",
                                read: perm.classroom.read,
                                edit: perm.classroom.edit,
                                create: perm.classroom.create,
                                delete: perm.classroom.delete
                            },
                            {
                                module: "calendar",
                                read: perm.calendar.read,
                                edit: perm.calendar.edit,
                                create: perm.calendar.create,
                                delete: perm.calendar.delete
                            },
                            {
                                module: "timetable",
                                read: perm.timetable.read,
                                edit: perm.timetable.edit,
                                create: perm.timetable.create,
                                delete: perm.timetable.delete
                            },
                            {
                                module: "teacher",
                                read: perm.teacher.read,
                                edit: perm.teacher.edit,
                                create: perm.teacher.create,
                                delete: perm.teacher.delete
                            }
                        ];
                    this.userId = router.currentRoute.params.id;                  
            }           
        }
    },
  }

 
  </script>
  
  <style>
  
  </style>
  