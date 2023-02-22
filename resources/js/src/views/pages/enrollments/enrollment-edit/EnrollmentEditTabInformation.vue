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
            <b-card-title> Enrollment Details </b-card-title>
            <b-card-text class="text-muted mt-25" v-if="userData.permissions.enrollment.edit === true">
              You may edit the enrollment details of this Institution.
            </b-card-text>
            <b-card-text class="text-muted mt-25" v-if="userData.permissions.enrollment.edit === false">
             You won't be able to edit the enrollment details of this Institution.
            </b-card-text>
          </b-card-header>
  
          <b-card-body>
            <b-row>

              <!-- Pupil ID  -->
              <b-col
                cols="12"
                md="12"
                class="mb-2"
              >
                <validation-provider
                  #default="validationContext"
                  name="Enrollment Student Name"
                  rules="required"
                >
                  <b-form-group
                    label="Enrollment Student Name"
                    label-for="enrol-student-name"
                    class="mb-2 bolden"
                  >
  
                    <b-form-select
                      id="enrol-student-name"
                      v-model="enrollmentData.student.pupId"
                      :options="pupilData"
                      :disabled="true"
                    />
  
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>

                 <!-- Class ID  -->
                 <b-col
                cols="12"
                md="12"
                class="mb-2"
              >
                <validation-provider
                  #default="validationContext"
                  name="Enrollment Class Name"
                  rules="required"
                >
                  <b-form-group
                    label="Enrollment Class Name"
                    label-for="enrol-student-class"
                    class="mb-2 bolden"
                  >
  
                    <b-form-select
                      id="enrol-student-class"
                      v-model="enrollmentData.classstream.clsId"
                      :options="classData"
                      :disabled="userData.permissions.enrollment.edit === false"
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
                  name="Student Status"
                  rules="required"
                >
                  <b-form-group
                    label="Student Status"
                    label-for="enrol-student-status"
                    class="mb-2 bolden"
                  >  
                        <b-form-select
                            id="enrol-student-status"
                            v-model="enrollmentData.student.status"
                            :options="statusOptions"
                            :disabled="userData.permissions.enrollment.edit === false"
                        />
  
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>
  
              <!-- Submit Button -->
              <b-col cols="12" v-if="userData.permissions.enrollment.edit === true">
                  <b-button
                    variant="success"
                    type="submit"
                  >
                    Save Enrollment Details
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
  import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
  import { ref, watch, computed, onMounted } from '@vue/composition-api'

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
      enrollmentData: {
        type: Object,
        required: true,
      },
      enrollmentId: {
        type: String,
        required: true,
      },
      pupilData:{
        type: Array,
        required: true,
      },
      classData:{
        type: Array,
        required: true,
      }
    },

    data() {
  
       // let classOptions = []; 
        
        let statusOptions = [
          { value: "", text: "Please select your Status of your Student's Enrollment. " },
          { value: 1, text: "Active" },
          { value: 0, text: "InActive" },
          { value: -1, text: "Deleted" }
        ];
          
      return {  
        userData: JSON.parse(localStorage.getItem('userData')),
        statusOptions
      }
    },   
    methods: {
        onSubmit() {      
            const sef = this;
            this.$refs.refFormObserver.validate().then((success) => {
              const stuId = this.enrollmentData.student.pupId;
              const stuStatus = this.enrollmentData.student.status;
              const classId = this.enrollmentData.classstream.clsId;

              delete this.enrollmentData['student']
              delete this.enrollmentData['classstream']
              delete this.enrollmentData['calendar']

              this.enrollmentData['classstream'] = classId;
              this.enrollmentData['student'] = stuId;
              this.enrollmentData['status'] = stuStatus;

            if (success){
                sef.$loading(true);
                axios.put( this.baseURL + "/enrollment/" + this.enrollmentId, this.enrollmentData , { headers: jwtHeader() })
                .then(function (response) {
                    let content = response.data.data; 
                    let status = response.data.success; 
                    if (content && status){
                      sef.$loading(false);
                      sef.$toast({
                          component: ToastificationContent,
                          position: "bottom-right",
                          props: {
                            title: 'Enrollment details updated.',
                            icon: "CoffeeIcon",
                            variant: "info",
                            text: `Update successful.`,
                          },
                      });
                    //  sef.$forceUpdate();
                      location.reload();
                    }
                })
            }
            }).catch((error) => {
                console.log(error);
                alert("Error while updating Enrollment details.");
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
  