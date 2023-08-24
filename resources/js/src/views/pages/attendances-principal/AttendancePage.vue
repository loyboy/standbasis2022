<template>

    <div v-if=" userData.role === 'principal' "> 
       
       <b-card-body>

          <b-row>
            <b-col cols="12" md="12" class="d-flex align-items-center py-1 mx-4">
                <span> <b> <h2> <i> {{ todayDate() }} </i> </h2> </b> </span>
            </b-col>
          </b-row>

       </b-card-body>

       
      <!-- Table Container Card -->
     <b-card-code title="Attendance Today" class="my-2 mx-4 px-2"> 
        
        <div class="d-flex align-items-center px-2 justify-content-between" >
            <button
                type="button"
                class="btn btn-primary waves-effect waves-float waves-light"
                style="position: relative"
                @click="getTimeBand(9)"
                >
                8am
            </button>
            <button                
                type="button"
                class="btn btn-primary waves-effect waves-float waves-light"
                style="position: relative"
                @click="getTimeBand(10)"
                >
                9am 
            </button>
            <button                
                type="button"
                class="btn btn-primary waves-effect waves-float waves-light"
                style="position: relative"
                @click="getTimeBand(11)"
                >
                 10am 
            </button>
            <button                
                type="button"
                class="btn btn-primary waves-effect waves-float waves-light"
                style="position: relative"
                @click="getTimeBand(12)"
                >
                 11am 
            </button> 
            <button                
                type="button"
                class="btn btn-primary waves-effect waves-float waves-light"
                style="position: relative"
                @click="getTimeBand(13)"
                >
                  12pm
            </button>
            <button
                type="button"
                class="btn btn-primary waves-effect waves-float waves-light"
                style="position: relative"
                @click="getTimeBand(14)"
                >
                1pm 
            </button>
          </div> 

            <b-table            
              class="position-relative"
              :items="attendanceItems"
              :busy="isLoading"
              responsive
              :fields="tableColumns"
            >
                <template #table-busy>
                  <div class="text-center text-danger my-2">
                    <b-spinner class="align-middle"></b-spinner>
                    <strong>Loading...</strong>
                  </div>
                </template>

             <template #cell(_date)="data">
               <div>
                <span> <b> {{ String( data.item._date ).replace(".000+00:00","") }}  </b> </span>
               </div>               
             </template>

             <!-- Column: Teacher -->
             <template #cell(teacher)="data">
               <div>
                {{ data.item.teacher.fname + " " + data.item.teacher.lname }}
               </div>               
             </template>

             <!-- Column: Action -->
            <template #cell(done)="data">
              <b-badge
                pill
                :variant="`light-${resolveAttendancestatusVariant(data.item.done)}`"
                class="text-capitalize"
              >
                {{ data.item.done === 1 ? "Punctual" : data.item.done === 0 ? "Not yet Done" : data.item.done === 2 ? "Late" : data.item.done === -1 ? "Voided" : "Nil"  }}
              </b-badge>
            </template>

                 <!-- Column: Actions -->
                <template #cell(actions)="data" >
                 
                 <!-- <b-dropdown
                    variant="link"
                    no-caret
                    :right="$store.state.appConfig.isRTL"
                  >    
                    <template #button-content>
                      <feather-icon
                        icon="MoreVerticalIcon"
                        size="16"
                        class="align-middle text-body"
                      />
                    </template>

                    <b-dropdown-item v-if=" data.item.action === 0 " @click="principalActionApprove(data.item.att_id.attId)">
                      <feather-icon icon="FileTextIcon" />
                      <span class="align-middle">Approve Attendance</span>
                    </b-dropdown-item>  

                    <b-dropdown-item v-if=" data.item.action === 0 " @click="principalActionDisapprove(data.item.att_id.attId)">
                      <feather-icon icon="FileTextIcon" />
                      <span class="align-middle">Query Attendance</span>
                    </b-dropdown-item>

                  </b-dropdown>-->
                  <b-form-group v-if=" data.item.done !== 0 && (data.item.principal_action === 0 || data.item.principal_action === null ) ">
                       <div class="d-flex mt-2">
                          <b-button type="button" variant="success" class="mr-2" @click="principalActionApprove(data.item.attId)">
                            Approve
                          </b-button>
                          <b-button type="button" variant="danger" @click="principalActionDisapprove(data.item.attId)">
                            Query
                          </b-button>
                        
                       </div>
                  </b-form-group>

                  <b-form-group v-else> 
                      <div class="d-flex mt-2">
                          <b-button v-if="data.item.principal_action === 1" type="button" variant="success" class="mr-4">
                            ENDORSED
                          </b-button>  
                          <b-button v-if="data.item.principal_action === 2" type="button" variant="danger" class="mr-4">
                            QUERIED
                          </b-button>                        
                       </div>
                  </b-form-group>
                </template>

            </b-table>

      </b-card-code>

    </div>

</template>
  
<script>
  import {
    BCard,
    BRow,
    BCol,
    BCardBody,
    BFormInput,
    BFormGroup,
    BButton,
    BSpinner,
    BTable,
    BSidebar,
    BForm,
    BMedia,
    BAvatar,
    BFormSelect,
    BFormTags, 
    BCardText,
    BFormDatepicker,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,
  } from 'bootstrap-vue';

  import vSelect from 'vue-select'
  import router from '@/router'
  import store from '@/store'
  import { ref, onUnmounted ,onMounted, watch } from '@vue/composition-api' 
  import formValidation from '@core/comp-functions/forms/form-validation'
  import BCardCode from '@core/components/b-card-code'

  // Notification
  import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
  import useAttendanceList from './useAttendanceList'
  import attendanceStoreModule from './attendanceStoreModule'


  export default {
    components: {    
      BCard,
      BRow,
      BCol,
      BCardBody,
      BFormInput,
      BCardCode,
      BFormGroup,
      BButton,
      BSpinner,
      BTable,
      BSidebar,
      BForm,
      BFormTags,
      BMedia,
      BAvatar,
      BFormSelect,
      BCardText,
      BFormDatepicker,
      BLink,
      BBadge,
      BDropdown,
      BDropdownItem,
      BPagination,  
      vSelect
    },

    data() {    
    
      return {  
        
      }
    },

    setup() {
      const { refFormObserver, getValidationState, resetForm } = formValidation(() => {})
      const Attendance_APP_STORE_MODULE_NAME = 'app-AttendancePrincipal';

      // Register module
      if (!store.hasModule(Attendance_APP_STORE_MODULE_NAME)) store.registerModule(Attendance_APP_STORE_MODULE_NAME, attendanceStoreModule)
  
      // UnRegister on leave
      onUnmounted(() => {
        if (store.hasModule(Attendance_APP_STORE_MODULE_NAME)) store.unregisterModule(Attendance_APP_STORE_MODULE_NAME)
      })  
      
      const userData = ref({});
      const teacherData = ref({});

      const storedItems = JSON.parse(localStorage.getItem('userData'));
      if (storedItems){
        userData.value = storedItems;
      }

      const storedItems2 = JSON.parse(localStorage.getItem('teacherData'));
      if (storedItems2){
        teacherData.value = storedItems2;
      }

      const findIfPrinisPresent = ( userData.value.role === "principal" );       
      
      const {
        fetchAttendances,

        tableColumns,

        isLoading,

        // UI       
        resolveAttendancestatusVariant,

        resolvePerformancestatusVariant,

        filters,

        attendanceItems,

        attendanceTempList

      } = useAttendanceList();

      if( findIfPrinisPresent ){         
          filters.value.schoolId = findIfPrinisPresent && teacherData.value ? teacherData.value.school.schId : null;   
          filters.value.schoolgroup = findIfPrinisPresent && teacherData.value ? teacherData.value.school.owner.id : null;      
      } 

      onMounted(async () => {
        fetchAttendances();
      })
      
      return {
        // Sidebar
        tableColumns,

        isLoading,
  
        fetchAttendances,        

        resetForm,
  
        // UI
        resolveAttendancestatusVariant,

        resolvePerformancestatusVariant,

        userData,
        
        teacherData,
        
        filters,
        attendanceItems,

        attendanceTempList,
        
        Attendance_APP_STORE_MODULE_NAME

      }
    },

    methods: {

      todayDate(){
          const date = new Date();

          const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          };

          return date.toLocaleString('en-NG', options);
      },
      
      principalActionApprove(attId){
         const Attendance_APP_STORE_MODULE_NAME = 'app-AttendancePrincipal';
         let confirmApproval = window.confirm("Do you really wish to Approve this Attendance?");
         if (confirmApproval){
            const sef = this;          
            store.dispatch( `${Attendance_APP_STORE_MODULE_NAME}/updateAttendanceManagement`, { id: Number(attId), attendance: { principal_action: 1 },  management: { action : 1 }, activity: { action: "approved" } } )
            .then(response => { 
                sef.$toast({
                  component: ToastificationContent,
                  props: {
                  title: 'Attendance has been approved.',
                  icon: 'AlertTriangleIcon',
                  variant: 'success',
                  },
                });  
            }).catch((exception) => { 

              sef.$toast({
                component: ToastificationContent,
                props: {
                  title: 'There is an issue with the approval process',
                  icon: 'AlertTriangleIcon',
                  variant: 'danger'
                }
              });

		        }); 
         }
      },

      principalActionResolve(attId){
         const Attendance_APP_STORE_MODULE_NAME = 'app-AttendancePrincipal';
         let confirmApproval = window.confirm("Are all the issues within this Attendance been resolved?");
         if (confirmApproval){
            const sef = this;          
            store.dispatch( `${Attendance_APP_STORE_MODULE_NAME}/updateAttendanceManagement`, { id: Number(attId), attendance: { principal_action: 3 }, management: { action : 3, comment: "All issues have been resolved." }, activity: { action: "resolved" } } )
            .then(response => { 
                sef.$toast({
                  component: ToastificationContent,
                  props: {
                  title: 'Attendance issues have been resolved.',
                  icon: 'AlertTriangleIcon',
                  variant: 'success',
                  },
                });  
            }).catch((exception) => { 
              sef.$toast({
                component: ToastificationContent,
                props: {
                  title: 'There is an issue with the resolving process.',
                  icon: 'AlertTriangleIcon',
                  variant: 'danger'
                }
              });

		        }); 
         }
      },

      principalActionDisapprove(attId){
         const Attendance_APP_STORE_MODULE_NAME = 'app-AttendancePrincipal';
         let confirmQuery = window.prompt("Type in a comment to add to this Query for this Attendance:")
         if (confirmQuery){
            const sef = this;          
            store.dispatch( `${Attendance_APP_STORE_MODULE_NAME}/updateAttendanceManagement`, { id: Number(attId), attendance: { principal_action: 2 }, management: { action : 2, comment: confirmQuery === "" ? "No comment" : confirmQuery }, activity: { action: "queried", comment_query: confirmQuery === "" ? "No comment" : confirmQuery  } } )
            .then(response => { 
                sef.$toast({
                  component: ToastificationContent,
                  props: {
                  title: 'Attendance has been queried.',
                  icon: 'AlertTriangleIcon',
                  variant: 'warning'
                  },
                });  
                sef.fetchAttendances();
            });
         }
       /*  
       else {
            const sef = this;          
            store.dispatch( `${Attendance_APP_STORE_MODULE_NAME}/updateAttendanceManagement`, { id: Number(attId), management: { action : 2, comment: confirmQuery }, activity: { action: "queried", comment_query: "No comment"  } } )
            .then(response => { 
                sef.$toast({
                  component: ToastificationContent,
                  props: {
                  title: 'Attendance has been queried but without any comments.',
                  icon: 'AlertTriangleIcon',
                  variant: 'warning'
                  },
                }); 
                sef.fetchAttendances(); 
            }).catch((exception) => { 
                sef.$toast({
                  component: ToastificationContent,
                  props: {
                    title: 'There is an issue with the disapproval process',
                    icon: 'AlertTriangleIcon',
                    variant: 'danger'
                  }
                });
            }); 
         }*/
      
      },

      getTimeBand(hour){
          const sef = this; 
          
          let attendancefiltered = this.attendanceTempList.filter( att => {            
              let time = new Date("2000-01-01T" + att.timetable.time_of);
              
              let timeHour = time.getHours();
              
              // Adjust the hour range based on the specified hour
              let lowerBound = hour - 1;
              let upperBound = hour;

              // Handle the case where hour is 0 (midnight)
              if (hour === 0) {
                lowerBound = 23;
                upperBound = 0;
              }

              // Check if the time hour falls within the adjusted range
              return timeHour === lowerBound || timeHour === upperBound;
          });
          console.log("Altered attendances: "+ attendancefiltered.length )
          this.attendanceItems  = attendancefiltered;
      }

    }


  }
  </script>
  
  <style lang="scss" scoped>
    .per-page-selector {
      width: 90px;
    }
  </style>
  
  <style lang="scss">
  @import '~@core/scss/vue/libs/vue-select.scss';
  </style>
  