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
            <b-card-title> Classroom Details </b-card-title>
            <b-card-text class="text-muted mt-25" v-if="userData.permissions.classroom.edit === true">
              You may edit the classroom details of this Institution.
            </b-card-text>
            <b-card-text class="text-muted mt-25" v-if="userData.permissions.classroom.edit === false">
             You won't be able to edit the classroom details of this Institution.
            </b-card-text>
          </b-card-header>
  
          <b-card-body>
            <b-row>
  
              <!-- Class title -->
              <b-col
                cols="12"
                md="12"
              >
                <validation-provider
                  #default="validationContext"
                  name="Classoom Title"
                  rules="required"
                >
                  <b-form-group
                    label="Classoom Title"
                    label-for="class-title"
                    class="mb-2 bolden"
                  >

                    <b-form-select
                      id="class-title"
                      v-model="classroomData.title"
                      :state="getValidationState(validationContext)"
                      :options="classOptions"
                      :disabled="userData.permissions.classroom.edit === false"
                    />

                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>

              <hr/>
  
              <!-- Class Arm  -->
              <b-col
                cols="12"
                md="12"
                class="mb-2"
              >
                <validation-provider
                  #default="validationContext"
                  name="Class Arm"
                  rules="required"
                >
                  <b-form-group
                    label="Class Arm"
                    label-for="class-arm"
                    class="mb-2 bolden"
                  > 

                    <b-form-input
                      id="class-arm"
                      v-model="classroomData.ext"
                      :state="getValidationState(validationContext)"
                      :readonly="userData.permissions.classroom.edit === false"
                      trim
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
                md="12"
              >
                <validation-provider
                  #default="validationContext"
                  name="Status?"             
                >
                  <b-form-group
                    label="Status?"
                    label-for="class-status"
                    class="mb-2 bolden"
                  >
                    <b-form-checkbox
                      id="class-status"
                      v-model="classroomData.status"
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
              <b-col cols="12" v-if="userData.permissions.classroom.edit === true">
                <b-button
                  variant="success"
                  type="submit"
                >
                  Save Classroom Details
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
      classroomData: {
        type: Object,
        required: true,
      },
      classroomId: {
        type: String,
        required: true,
      }
    },

    created(){
     // console.log("Mounted: " + this.classroomData )
    },
    data() {
  
        let classOptions = [
          { value: "", text: "Please select your classroom's option " },
          { value: "JSS1", text: "JSS1" }, 
          { value: "JSS2", text: "JSS2" },
          { value: "JSS3", text: "JSS3" },
          { value: "SS1", text: "SS1" },
          { value: "SS2", text: "SS2" },
          { value: "SS3", text: "SS3" },
        ];
        
        let classIndexOptions = { "JSS1": 7, "JSS2": 8, "JSS3": 9, "SS1": 10, "SS2": 11, "SS3": 12 } 
          
      return {  
        userData: JSON.parse(localStorage.getItem('userData')),
        classOptions,
        classIndexOptions
      }
    },
   
    methods: {

        onSubmit() {      
          const sef = this;   
            this.$refs.refFormObserver.validate().then((success) => {
              if (success){
                  sef.$loading(true);
                  this.classroomData.status = Number(this.classroomData.status);
                  this.classroomData.class_index = classIndexOptions[this.classroomData.title];
                  
                  axios.put( this.baseURL + "/classstream/" + this.classroomId, this.classroomData , { headers: jwtHeader() })
                  .then(function (response) {
                      let content = response.data.data; 
                      let status = response.data.success; 
                      if (content && status){
                          sef.$loading(false);
                          sef.$toast({
                            component: ToastificationContent,
                            position: "bottom-right",
                            props: {
                              title: 'Classroom details updated.',
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
                alert("Error while updating Classroom details.");
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
  