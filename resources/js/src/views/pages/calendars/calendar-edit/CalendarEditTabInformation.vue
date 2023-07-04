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
            <b-card-title> Calendar Details </b-card-title>
            <b-card-text class="text-muted mt-25" v-if="userData.permissions.calendar.edit === true">
              You may edit the Calendar details of this Institution.
            </b-card-text>
            <b-card-text class="text-muted mt-25" v-if="userData.permissions.calendar.edit === false">
              You won't be able to edit the Calendar details of this Institution.
            </b-card-text>
          </b-card-header>
  
          <b-card-body>
            <b-row>

              <!-- Calendar Session -->
              <b-col
                cols="12"
                md="12"
              >
                <validation-provider
                  #default="validationContext"
                  name="Session"
                  rules="required"
                >
                  <b-form-group
                    label="Session"
                    label-for="calendar-session"
                    class="mb-2 bolden"
                  >

                        <b-form-select
                            id="calendar-session"
                            v-model="calendarData.session"
                            :options="sessionOptions"
                            :disabled=" (userData.permissions.calendar.edit === false) || ( calendarData.term !== -99 && userData.permissions.calendar.edit === true ) "
                        />

                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>
  
              <!-- Calendar Term -->
              <b-col
                cols="12"
                md="12"
                class="mb-2"
              >
                <validation-provider
                  #default="validationContext"
                  name="Term"
                  rules="required"
                >
                  <b-form-group
                    label="Term"
                    label-for="calendar-term"
                    class="mb-2 bolden"
                  > 

                  <b-form-select
                            id="calendar-term" 
                            v-model="calendarData.term"
                            :options="termOptions"
                            :disabled=" (userData.permissions.calendar.edit === false) || ( calendarData.term !== -99 && userData.permissions.calendar.edit === true ) "
                        />
  
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>  

               <!-- Calendar Holiday -->
              <b-col
                cols="12"
                md="12"
                class="mb-2"
              >            
                  <validation-provider
                      #default="validationContext"
                      name="Holiday"
                    >
                      <b-form-group
                        label="Holiday"
                        label-for="calendar-holiday"
                        class="mb-2 bolden"
                      >
                        <b-form-input
                          id="calendar-holiday"
                          v-model="calendarData.holiday"
                          placeholder="use date formats like YYYY-MM-DD, YYYY-MM-DD, YYYY-MM-DD"
                          :state="getValidationState(validationContext)"
                          :readonly="userData.permissions.calendar.edit === false"
                          trim
                        />                       
      
                        <b-form-invalid-feedback>
                          {{ validationContext.errors[0] }}
                        </b-form-invalid-feedback>

                      </b-form-group>
                    </validation-provider> 
              </b-col>  

              <!-- Calendar Start Date -->
              <b-col
                cols="12"
                md="12"
                class="mb-2"
                v-if=" calendarData.term === -99 "
              >            
                  <validation-provider
                      #default="validationContext"
                      name="Start Date"
                    >
                      <b-form-group
                        label="Start Date"
                        label-for="calendar-startdate"
                        class="mb-2 bolden"
                      >
                        <b-form-datepicker
                          id="calendar-startdate"
                          v-model="calendarData.startdate"
                          placeholder="Choose a start date for your Session"
                          local="en"
                          initial-date="2023-01-01"
                          
                        />                    
      
                        <b-form-invalid-feedback>
                          {{ validationContext.errors[0] }}
                        </b-form-invalid-feedback>

                      </b-form-group>
                    </validation-provider> 
              </b-col>  

              <!-- Calendar End Date -->
              <b-col
                cols="12"
                md="12"
                class="mb-2"
                v-if=" calendarData.term === -99 "
              >            
                  <validation-provider
                      #default="validationContext"
                      name="End Date"
                    >
                      <b-form-group
                        label="End Date"
                        label-for="calendar-enddate"
                        class="mb-2 bolden"
                      >
                        <b-form-datepicker
                          id="calendar-enddate"
                          v-model="calendarData.enddate"
                          placeholder="Choose an end date for your Session"
                          local="en"
                          initial-date="2023-01-01"
                          
                        />                    
      
                        <b-form-invalid-feedback>
                          {{ validationContext.errors[0] }}
                        </b-form-invalid-feedback>

                      </b-form-group>
                    </validation-provider> 
              </b-col> 
              
               <!-- Status -->
              <b-col
                cols="12"
                md="3"
              >
                <validation-provider
                  #default="validationContext"
                  name="Status?"             
                >
                  <b-form-group
                    label="Status?"
                    label-for="calendar-status"
                    class="mb-2 bolden"
                  >
                    <b-form-checkbox
                      id="calendar-status"
                      v-model="calendarData.status"                      
                      value="1"
                      class="custom-control-success"               
                      unchecked-value="0"
                      switch
                      :disabled="true"
                    >                     
                    </b-form-checkbox>  
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>  
  
              <!-- Submit Button -->
              <b-col cols="12" v-if="userData.permissions.calendar.edit === true">
                <b-button
                  variant="success"
                  type="submit"
                >
                  Save Calendar Details
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
    BFormDatepicker,
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
      BFormDatepicker,
      BCardBody,
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
      vSelect
    },
    props: {
      calendarData: {
        type: Object,
        required: true,
      },
      calendarId: {
        type: String,
        required: true,
      }
    },

    mounted: function () {
        let vm = this;    
        setTimeout(() => {
          if(this.calendarData.term === -99){
            this.calendarData.status = 1;
          }         
        }, 500);
    }, 

    data() {
  
        let termOptions = [
          { value: "", text: "Please select your calendar's term option " },
          { value: 1, text: "1st Term" }, 
          { value: 2, text: "2nd Term" },
          { value: 3, text: "3rd Term" }
        ]; 
        
        let sessionOptions = [
          { value: "", text: "Please select your calendar's session option " },
          { value: "2021/2022", text: "2021/2022" }, 
          { value: "2022/2023", text: "2022/2023" },
          { value: "2023/2024", text: "2023/2024" },
          { value: "2024/2025", text: "2024/2025" },
          { value: "2025/2026", text: "2025/2026" },
          { value: "2026/2027", text: "2026/2027" },
          { value: "2027/2028", text: "2027/2028" },
          { value: "2028/2029", text: "2028/2029" },
        ]; 
          
      return {  
        userData: JSON.parse(localStorage.getItem('userData')),
        sessionOptions,
        termOptions
      }
    },
   
    methods: {

        onSubmit() {      
          const sef = this;   
            this.$refs.refFormObserver.validate().then((success) => {
            if (success){
                sef.$loading(true);
                axios.put( this.baseURL + "/calendar/" + this.calendarId, this.calendarData , { headers: jwtHeader() })
                .then(function (response) {
                    let content = response.data.data; 
                    let status = response.data.success; 
                    if (content && status){
                          sef.$loading(false);
                          sef.$toast({
                            component: ToastificationContent,
                            position: "bottom-right",
                            props: {
                              title: 'Calendar details updated.',
                              icon: "CoffeeIcon",
                              variant: "info",
                              text: `Update successful.`,
                            },
                        });
                    }
                })
            }
            }).catch((error) => {
            console.log(error);
            alert("Error while updating calendar details.");
            });     
        }
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
  