<template>
    <validation-observer
      #default="{ handleSubmit }"
      ref="refFormObserver"
    >
      <b-form
        class="list-view product-checkout"
        @submit.prevent="handleSubmit(onSubmit)"
      >       
  
        <!-- Second Column -->
        <b-card no-body name="school form">
  
          <b-card-header class="flex-column align-items-start">
            <b-card-title> User Details </b-card-title>
            <b-card-text class="text-muted mt-25" v-if="userlocalData.permissions.user.edit === true">
              You may edit the user details of this Institution.
            </b-card-text>
            <b-card-text class="text-muted mt-25" v-if="userlocalData.permissions.user.edit === false">
              You won't be able to edit the user details of this Institution.
            </b-card-text>
          </b-card-header>
  
          <b-card-body>
            <b-row>

              <!--Username-->
              <b-col
                cols="12"
                md="3"
              >
                <validation-provider
                  #default="validationContext"
                  name="Username"
                  rules="required"
                >
                  <b-form-group
                    label="Username"
                    label-for="user-username"
                    class="mb-2 bolden  mx-2"
                  >                      

                        <b-form-input
                            id="user-username"
                            v-model="userData.username"
                            :state="getValidationState(validationContext)"
                            :disabled="true"
                            trim
                        />

                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>

              <hr/>
  
              <!-- user Email -->
              <b-col
                cols="12"
                md="3"
                class="mb-2  mx-2"
              >
                <validation-provider
                  #default="validationContext"
                  name="Email"
                  rules="required"
                >
                  <b-form-group
                    label="Email"
                    label-for="user-email"
                    class="mb-2 bolden"
                  > 

                  <b-form-input
                            id="user-email"
                            v-model="userData.email"
                            :state="getValidationState(validationContext)"
                            :disabled="true"
                            trim
                        />
  
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>  
        
              <hr/>

                <!-- user Role -->
              <b-col
                cols="12"
                md="3"
                class="mb-2 mx-2"
              >
                <validation-provider
                  #default="validationContext"
                  name="Class"
                  rules="required"
                >
                  <b-form-group
                    label="Role"
                    label-for="user-role"
                    class="mb-2 bolden"
                  > 

                  <b-form-select
                            id="user-role"
                            v-model="userData.role"
                            :options="roleOptions"
                            :disabled="userlocalData.permissions.user.edit === false"
                        />
  
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>  
        
              <hr/>
              
              <!-- Status -->
              <b-col
                cols="12"
                md="6"
                class="mx-2"
              >
                <validation-provider
                  #default="validationContext"
                  name="Status?"             
                >
                  <b-form-group
                    label="Status?"
                    label-for="user-status"
                    class="mb-2 bolden"
                  >
                    <b-form-checkbox
                      switch
                      id="user-status"
                      v-model="userData.status"
                      value="1"
                      class="custom-control-success"               
                      unchecked-value="0"                     
                      :disabled="userlocalData.permissions.user.edit === false"
                    >
                   

                    </b-form-checkbox>  
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>  

              <!-- PERMISSION TABLE -->
              <b-col
                cols="12"
                md="12"
              >
                <b-card
                no-body
                class="border mt-1"
                >
                
                    <b-card-header class="p-1">
                        <b-card-title class="font-medium-2">
                        <feather-icon
                            icon="LockIcon"
                            size="18"
                        />
                        <span class="align-middle ml-50">Permissions</span>
                        </b-card-title>
                    </b-card-header>
                  
                    <b-table
                        striped
                        responsive
                        class="mb-0"
                        :items="permissionsData"
                    >
                        <template #cell(module)="data">
                          {{ data.value }}
                        </template>
                        <template #cell(read)="data">
                          <b-form-checkbox :checked="data.value"   v-model="data.item.read" />
                        </template>
                        <template #cell(edit)="data">
                          <b-form-checkbox :checked="data.value"   v-model="data.item.edit" />
                        </template>
                        <template #cell(create)="data">
                          <b-form-checkbox :checked="data.value"   v-model="data.item.create" />
                        </template>
                        <template #cell(delete)="data">
                          <b-form-checkbox :checked="data.value"   v-model="data.item.delete" />
                        </template>
                        
                    </b-table>

                </b-card>
             </b-col>  

              <!-- Submit Button -->
              <b-col cols="12" v-if="userlocalData.permissions.user.edit === true">
                <b-button
                  variant="success"
                  type="submit"
                >
                  Save User Details
                </b-button>
              </b-col>
              
            </b-row>
          </b-card-body>
  
        </b-card>   
  
      </b-form>
    </validation-observer>
  </template>
  
  <script>
    
  import {
    BForm,
    BCard,
    BCardHeader,
    BCardTitle,
    BCardText,
    BCardBody,
    BTable,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BButton,
    BFormInvalidFeedback,
    BFormCheckbox,
    BFormSelect
  } from 'bootstrap-vue'
  import { ValidationProvider, ValidationObserver } from 'vee-validate'
  import vSelect from 'vue-select'
  import { required, integer, email } from '@validations'
  import formValidation from '@core/comp-functions/forms/form-validation'
  import { $themeConfig } from "@themeConfig";
  import axios from "axios";
  import jwtHeader from "@core/services/jwt-header";
  import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
  
  export default {
    components: {
      // BSV
      BForm,
      BCard,
      BCardHeader,
      BCardTitle,
      BCardText,
      BCardBody,
      BTable,
      BRow,
      BCol,
      BFormGroup,
      BFormInput,
      BButton, 
      BFormInvalidFeedback,
      BFormCheckbox,
      BFormSelect,
      // Form Validation
      ValidationProvider,
      ValidationObserver,
  
      // 3rd party
      vSelect,
    },
    props: {
      userData: {
        type: Object,
        required: true,
      },
      userId: {
        type: String,
        required: true,
      },
      permissionsData:{
        type: Array,
        required: true
      }
    },

    data() {
  
        let roleOptions = [
          { value: "", text: "Please select your Role for this User " },
          { value: "TEACHER", text: "Teacher" },
          { value: "STUDENT", text: "Student" },
          { value: "PRINCIPAL", text: "Principal" },
          { value: "GUARDIAN", text: "Guardian" },
          { value: "PROPRIETOR", text: "Proprietor" },
          { value: "OWNER", text: "Owner" },
          { value: "SUPERADMIN", text: "SuperAdmin" }
        ];

        let roleEnum = {
          "TEACHER": 0,
          "STUDENT":1,
          "PRINCIPAL":2,
          "GUARDIAN":3,
          "PROPRIETOR": 4,
          "OWNER":5,
          "SUPERADMIN":6
        };

        let statusOptions = [
          { value: "", text: "Please select your Status of this User " },
          { value: 1, text: "Active" },
          { value: 0, text: "InActive" }
        ];

     
      return {  
        userlocalData: JSON.parse(localStorage.getItem('userData')),
        roleOptions,
        statusOptions,
        roleEnum
      }
    },

    created(){
      console.log( " " )
    },

    
 /*   watch: {
      permissionsData: {
        handler: function (val, oldVal) {
         // console.log(JSON.stringify(val))
        },
        deep: true
      }
    },*/
   
    methods: {

        onSubmit() {      
            const sef = this; 
            let permJson = {
              school: { read: this.permissionsData[0].read,edit: this.permissionsData[0].edit,create: this.permissionsData[0].create,delete: this.permissionsData[0].delete },
              enrollment: { read: this.permissionsData[1].read,edit: this.permissionsData[1].edit,create: this.permissionsData[1].create,delete: this.permissionsData[1].delete },
              classroom: { read: this.permissionsData[2].read,edit: this.permissionsData[2].edit,create: this.permissionsData[2].create,delete: this.permissionsData[2].delete },
              calendar: { read: this.permissionsData[3].read,edit: this.permissionsData[3].edit,create: this.permissionsData[3].create,delete: this.permissionsData[3].delete },
              timetable: { read: this.permissionsData[4].read,edit: this.permissionsData[4].edit,create: this.permissionsData[4].create,delete: this.permissionsData[4].delete },
              teacher: { read: this.permissionsData[5].read,edit: this.permissionsData[5].edit,create: this.permissionsData[5].create,delete: this.permissionsData[5].delete }
            };
            let myUserdata = {...this.userData , permissionsJSON: JSON.stringify(permJson) };
            delete myUserdata['name'];
            delete myUserdata['email'];
            delete myUserdata['username'];
            delete myUserdata['password'];
            myUserdata['role'] = this.roleEnum[myUserdata.role];
            
            this.$refs.refFormObserver.validate().then((success) => {
            if (success){
                sef.$loading(true);
           
                axios.put( this.baseURL + "/user/" + String(this.userId), myUserdata , { headers: jwtHeader() })
                .then(async function (response) {
                    let content = response.data.data; 
                    let status = response.data.success; 
                    if (content && status){

                        await sef.refreshData();                
                        sef.$forceUpdate();
                        sef.$toast({
                          component: ToastificationContent,
                          position: "bottom-right",
                          props: {
                            title: 'User details updated.',
                            icon: "CoffeeIcon",
                            variant: "info",
                            text: `Update successful.`
                          },
                        });
                    }
                })
            }
            }).catch((error) => {
              console.log(error);
              alert("Error while updating user details.");
            });     
        },
        
        async refreshData(){
            await this.$emit('refresh'); 
            this.$loading(false); 
        },

    },
  
    setup(props, { emit }) {
      const { refFormObserver, getValidationState, resetForm } = formValidation(() => {})
      const { baseURL } = $themeConfig.app;
      return {
        baseURL,
        // Form Validation
        refFormObserver,
        getValidationState,
        resetForm,
  
        // Form Validators
        required,
        integer,
        email
      }
    },
  }
  </script>
  
  <style lang="scss">
  @import '~@core/scss/vue/libs/vue-select.scss';
  
  .bolden{
    font-weight: bolder;
  }
  </style>
  