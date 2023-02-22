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
            <b-card-title> Timetable Details </b-card-title>
            <b-card-text class="text-muted mt-25" v-if="userData.permissions.timetable.edit === true">
              You may edit the Timetable details of this Institution.
            </b-card-text>
            <b-card-text class="text-muted mt-25" v-if="userData.permissions.timetable.edit === false">
              You won't be able to edit the Timetable details of this Institution.
            </b-card-text>
          </b-card-header>
  
          <b-card-body>
            <b-row>

              <!-- timetable Teacher -->
              <b-col
                cols="12"
                md="10"
              >
                <validation-provider
                  #default="validationContext"
                  name="Teacher"
                  rules="required"
                >
                  <b-form-group
                    label="Teacher"
                    label-for="timetable-teacher"
                    class="mb-2 bolden"
                  >

                        <b-form-select
                            id="timetable-teacher"
                            v-model="timetableData.teacher.teaId"
                            :options="teacherOptions"
                            :disabled="userData.permissions.timetable.edit === false"
                        />

                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>
  
              <!-- timetable Subject -->
              <b-col
                cols="12"
                md="10"
              >
                <validation-provider
                  #default="validationContext"
                  name="Term"
                  rules="required"
                >
                  <b-form-group
                    label="Subject"
                    label-for="timetable-subject"
                    class="mb-2 bolden"
                  > 

                  <b-form-select
                            id="timetable-subject"
                            v-model="timetableData.subject.subId"
                            :options="subjectOptions"
                            :disabled="userData.permissions.timetable.edit === false"
                        />
  
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>  

              <!-- timetable Class -->
              <b-col
                cols="12"
                md="10"
              >
                <validation-provider
                  #default="validationContext"
                  name="Class"
                  rules="required"
                >
                  <b-form-group
                    label="Class"
                    label-for="timetable-class"
                    class="mb-2 bolden"
                  > 

                  <b-form-select
                            id="timetable-class"
                            v-model="timetableData.class_stream.clsId"
                            :options="classOptions"
                            :disabled="userData.permissions.timetable.edit === false"
                        />
  
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>  

              <!-- timetable Session -->
              <b-col
                cols="12"
                md="10"
              >
                <validation-provider
                  #default="validationContext"
                  name="Session"
                  rules="required"
                >
                  <b-form-group
                    label="Session"
                    label-for="timetable-session"
                    class="mb-2 bolden"
                  >

                  <b-form-input
                      id="timetable-session"
                      v-model="timetableData.calendar.session"
                      :state="getValidationState(validationContext)"
                      :readonly="true"
                      trim
                    />
  
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col> 
              
               <!-- timetable Term -->
               <b-col
                cols="12"
                md="10"
              >
                <validation-provider
                  #default="validationContext"
                  name="Term"
                  
                >
                  <b-form-group
                    label="Term"
                    label-for="timetable-term"
                    class="mb-2 bolden"
                  >

                    <b-form-select
                            id="timetable-term"
                            v-model="timetableData.calendar.term"
                            :options="termOptions"
                            :disabled="true"
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
                    label-for="timetable-status"
                    class="mb-2 bolden"
                  >
                    <b-form-checkbox
                      id="timetable-status"
                      v-model="timetableData.status"
                      value="1"
                      class="custom-control-success"               
                      unchecked-value="0"
                      switch
                    >                     
                    </b-form-checkbox>  
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>  
  
              <!-- Submit Button -->
              <b-col cols="12" v-if="userData.permissions.timetable.edit === true">
                <b-button
                  variant="success"
                  type="submit"
                >
                  Save Timetable Details
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
      timetableData: {
        type: Object,
        required: true,
      },
      timetableId: {
        type: String,
        required: true,
      },
      teacherOptions:{
        type: Array,
        required: true,
      },
      classOptions:{
        type: Array,
        required: true,
      },
      subjectOptions:{
        type: Array,
        required: true,
      }
    },

    data() {          
      return {  
        userData: JSON.parse(localStorage.getItem('userData')),
        termOptions: [
          {
            value: 1, text: "1st Term"
          },
          {
            value: 2, text: "2nd Term"
          },
          {
            value: 3, text: "3rd Term"
          }
        ]

      }
    },
   
    methods: {

        onSubmit() {      
            const sef = this; 
            this.$refs.refFormObserver.validate().then((success) => {

              const teaId = this.timetableData.teacher.teaId;
              const subId = this.timetableData.subject.subId;
              const classId = this.timetableData.class_stream.clsId;

              delete this.timetableData['teacher'];
              delete this.timetableData['subject'];
              delete this.timetableData['class_stream'];

              this.timetableData['teacher'] = teaId;
              this.timetableData['subject'] = subId;
              this.timetableData['class_stream'] = classId;

            if (success){
              sef.$loading(true);
                axios.put( this.baseURL + "/timetable/" + this.timetableId, this.timetableData , { headers: jwtHeader() })
                .then(async function (response) {

                    let content = response.data.data; 
                    let status = response.data.success; 

                    if (content && status){
                        sef.$loading(false);        
                        sef.$forceUpdate();
                        sef.$toast({
                            component: ToastificationContent,
                            position: "bottom-right",
                            props: {
                              title: 'Timetable details updated.',
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
              alert("Error while updating timetable details.");
            });     
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
  