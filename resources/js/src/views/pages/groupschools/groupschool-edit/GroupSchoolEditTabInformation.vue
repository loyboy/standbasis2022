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
            <b-card-title> School Group Details </b-card-title>
            <b-card-text class="text-muted mt-25" v-if="userData.permissions.school.edit === true">
              You may edit the school group details of this Institution.
            </b-card-text>
            <b-card-text class="text-muted mt-25" v-if="userData.permissions.school.edit === false">
             You won't be able to edit the school group details of this Institution.
            </b-card-text>
          </b-card-header>
  
          <b-card-body>
            <b-row>
  
              <!-- School Name -->
              <b-col
                cols="12"
                md="4"
              >
                <validation-provider
                  #default="validationContext"
                  name="School Group Name"
                  rules="required"
                >
                  <b-form-group
                    label="School group Name"
                    label-for="schgroup-name"
                    class="mb-2 bolden"
                  >
                    <b-form-input
                      id="sch-name"
                      v-model="schoolgroupData.name"
                      :state="getValidationState(validationContext)"
                      :readonly="userData.permissions.school.edit === false"
                      trim
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
                md="6"
              >
                <validation-provider
                  #default="validationContext"
                  name="Status"             
                >
                  <b-form-group
                    label="Status"
                    label-for="sch-sri"
                    class="mb-2 bolden"
                  >

                    <b-form-checkbox
                      v-model="schoolgroupData.status"
                      value="1"
                      class="custom-control-primary"               
                      unchecked-value="0"
                    disabled
                    >
                      {{ schoolgroupData.status === 1 ? "Active" : "Inactive" }}
                    </b-form-checkbox>
  
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>  
  
              <!-- Submit Button -->
              <b-col cols="12" v-if="userData.permissions.school.edit === true">
                <b-button
                  variant="success"
                  type="submit"
                >
                  Save School Group Details
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
  
  export default {
    components: {
      // BSV
      BForm,
      BCard,
      BCardHeader,
      BCardTitle,
      BCardText,
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
      vSelect,
    },
    props: {
      schoolgroupData: {
        type: Object,
        required: true,
      },
      schoolgroupId: {
        type: String,
        required: true,
      }
    },

    data() {
  
      return {  
        userData: JSON.parse(localStorage.getItem('userData')),
        
      }
    },
  
    methods: {

      onSubmit() {      
        this.$refs.refFormObserver.validate().then((success) => {
           if (success){
              axios.put( this.baseURL + "/schoolgroup/" + this.schoolgroupId, this.schoolgroupData , { headers: jwtHeader() })
              .then(function (response) {
                let content = response.data.data; 
                let status = response.data.status; 
                if (content && status){
                  alert("School group details have been updated.")
                }
              })
           }
        }).catch((error) => {
          console.log(error);
          alert("Error while updating School group details.");
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
  