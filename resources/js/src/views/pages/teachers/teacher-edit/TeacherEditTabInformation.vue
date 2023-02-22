<template>
    <validation-observer
      #default="{ handleSubmit }"
      ref="refFormObserver"
    >

      <b-media class="mb-2">

        <template v-if=" teacherData.photo !== null && ( new String(teacherData.photo).includes('https://') || new String(teacherData.photo).includes('http://') ) " #aside>
          <b-avatar
            ref="previewEl"
            :src="teacherData.photo"
            :text="avatarText(teacherData.name)"
            size="100px"
            rounded
          />
        </template>

        <template v-else-if=" teacherData.photoPath !== null " #aside2>
          <b-avatar
            ref="previewEl2"
            :src="new String(baseURL).replace('/api','') + teacherData.photoPath"
            :text="avatarText(teacherData.name)"
            size="100px"
            rounded
          />
        </template>

        <h4 class="mb-1">
          {{ teacherData.fname }} {{ teacherData.lname }}
        </h4>
        <div class="d-flex flex-wrap">
          <b-button
            variant="info"
            @click="$refs.refInputEl.click()"
          >
            <input
              ref="refInputEl"
              type="file"
              class="d-none"
              accept="image/png, image/jpeg"
              @change="handleOnChange"
            >
            <span class="d-none d-sm-inline">Update Photo</span>
            <feather-icon
              icon="EditIcon"
              class="d-inline d-sm-none"
            />
          </b-button>
         
        </div>
      </b-media>

      <b-form
        class="list-view product-checkout"
        @submit.prevent="handleSubmit(onSubmit)"
      >       
  
        <!-- Second Column -->
        <b-card no-body name="school form">
  
          <b-card-header class="flex-column align-items-start">
            <b-card-title> Teacher Details </b-card-title>
            <b-card-text class="text-muted mt-25" v-if="userData.permissions.teacher.edit === true">
              You may edit the teacher details of this Institution.
            </b-card-text>
            <b-card-text class="text-muted mt-25" v-if="userData.permissions.teacher.edit === false">
             You won't be able to edit the teacher details of this Institution.
            </b-card-text>
          </b-card-header>
  
          <b-card-body>
            <b-row>
  
              <!-- First Name -->
              <b-col
                cols="12"
                md="4"
              >
                <validation-provider
                  #default="validationContext"
                  name="Teacher Name"
                  rules="required"
                >
                  <b-form-group
                    label="Teacher First Name"
                    label-for="tea-fname"
                    class="mb-2 bolden"
                  >
                    <b-form-input
                      id="tea-fname"
                      v-model="teacherData.fname"
                      :state="getValidationState(validationContext)"
                      :readonly="userData.permissions.teacher.edit === false"
                      trim
                    />
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>
  
              <!-- Last Name  -->
              <b-col
                cols="12"
                md="4"
                class="mb-2"
              >
                <validation-provider
                  #default="validationContext"
                  name="Teacher Last Name"
                  rules="required"
                >
                  <b-form-group
                    label="Teacher Last Name"
                    label-for="tea-lname"
                    class="mb-2 bolden"
                  >
  

                    <b-form-input
                      id="tea-lname"
                      v-model="teacherData.lname"
                      :state="getValidationState(validationContext)"
                      :readonly="userData.permissions.teacher.edit === false"
                      trim
                    />
  
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>
  
              <!--Age range-->
              <b-col
                cols="12"
                md="4"
              >
                <validation-provider
                  #default="validationContext"
                  name="Teacher Age range"
                  rules="required"
                >
                  <b-form-group
                    label="Teacher Age range"
                    label-for="tea-agerange"
                    class="mb-2 bolden"
                  >
                    <b-form-input
                      id="tea-agerange"
                      v-model="teacherData.agerange"
                      :state="getValidationState(validationContext)"
                      trim
                      :disabled="userData.permissions.teacher.edit === false"
                    />
                     
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>
  
              <!-- Bias -->
              <b-col
                cols="12"
                md="4"
              >
                <validation-provider
                  #default="validationContext"
                  name="Teacher Bias"
                  rules="required"
                >
                  <b-form-group
                    label="Teacher Bias"
                    label-for="tea-bias"
                    class="mb-2 bolden"
                  >
  
                        <b-form-input
                            id="tea-bias"
                            v-model="teacherData.bias"
                            :state="getValidationState(validationContext)"
                            trim
                            :disabled="userData.permissions.teacher.edit === false"
                            />
  
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>
  
              <!-- Course Type -->
              <b-col
                cols="12"
                md="4"
              >
                <validation-provider
                  #default="validationContext"
                  name="Course Type "
                  rules="required"
                >
                  <b-form-group
                    label="Course Type "
                    label-for="tea-coursetype"
                    class="mb-2 bolden"
                  >                 
  
                  <b-form-input
                            id= "tea-coursetype"
                            v-model="teacherData.coursetype"
                            :state="getValidationState(validationContext)"
                            trim
                            :disabled="userData.permissions.teacher.edit === false"
                            />                
  
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>
   
              <!-- Email -->
              <b-col
                cols="12"
                md="4"
              >
                <validation-provider
                  #default="validationContext"
                  name="Email Address"
                  rules=""
                >
                  <b-form-group
                    label="Email Address"
                    label-for="tea-email"
                    class="mb-2 bolden"
                  >
                    <b-form-input
                      id="tea-email"
                      v-model="teacherData.email"
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
  
              <hr/>

              <!-- Experience -->
              <b-col
                cols="12"
                md="4"
              >
                <validation-provider
                  #default="validationContext"
                  name="Experience"
                  rules="required"
                >
                  <b-form-group
                    label="Experience"
                    label-for="tea-experience"
                    class="mb-2 bolden"
                  >  
                    <b-form-input
                        id="tea-experience"
                        v-model="teacherData.experience"
                        :state="getValidationState(validationContext)"
                        :readonly="userData.permissions.teacher.edit === false"
                        trim
                      />
  
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>
  
              <!-- Gender -->
              <b-col
                cols="12"
                md="4"
              >
                <validation-provider
                  #default="validationContext"
                  name="Gender"
                  rules="required"
                >
                  <b-form-group
                    label="Gender"
                    label-for="tea-gender"
                    class="mb-2 bolden"
                  >
  
                  <b-form-select
                      id="tea-gender"
                      v-model="teacherData.gender"
                      :options="teaGenderOptions"
                      :disabled="userData.permissions.teacher.edit === false"
                    />
  
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>
  
               <!-- Office -->
              <b-col
                cols="12"
                md="4"
              >
                <validation-provider
                  #default="validationContext"
                  name="Office"
                  rules="required"
                >
                  <b-form-group
                    label="Office"
                    label-for="tea-office"
                    class="mb-2 bolden"
                  >
                    <b-form-input
                      id="tea-office"
                      v-model="teacherData.office"
                      :state="getValidationState(validationContext)"
                      :readonly="userData.permissions.teacher.edit === false"
                      trim
                    />
  
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>
  
               <!-- Qualification -->
              <b-col
                cols="12"
                md="4"
              >
                <validation-provider
                  #default="validationContext"
                  name="Qualification of Teacher"
                  rules="required"
                >
                  <b-form-group
                    label="Qualification of Teacher"
                    label-for="tea-qualification"
                    class="mb-2 bolden"
                  >
                     <b-form-input
                      id="tea-qualification"
                      v-model="teacherData.qualification"
                      type="text"
                      :state="getValidationState(validationContext)"
                      :readonly="userData.permissions.teacher.edit === false"
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
                  name="Status?"             
                >
                  <b-form-group
                    label="Status?"
                    label-for="tea-status"
                    class="mb-2 bolden"
                  >

                    <b-form-checkbox
                      id="tea-status"
                      v-model="teacherData.status"
                      value="1"
                      class="custom-control-success"               
                      unchecked-value="0"
                      switch
                      :disabled="userData.permissions.teacher.edit === false"
                    >
                    </b-form-checkbox>
  
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>  
  
              <!-- Submit Button -->
              <b-col cols="12" v-if="userData.permissions.teacher.edit === true">
                <b-button
                  variant="success"
                  type="submit"
                >
                  Save Teacher Details
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
    BMedia,
    BAvatar,
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
  import { avatarText } from '@core/utils/filter'
  import { required, integer, email } from '@validations'
  import formValidation from '@core/comp-functions/forms/form-validation'
  import { $themeConfig } from "@themeConfig";
  import axios from "axios";
  import jwtHeader from "@core/services/jwt-header";
  import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
  
  export default {
    components: {
      // BSV
      BMedia,
      BAvatar,
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
      teacherData: {
        type: Object,
        required: true,
      },
      teacherId: {
        type: String,
        required: true,
      }
    },

    created(){
      console.log("Mounted: " + this.teacherData )
    },

    data() {
  
        let teaGenderOptions = [
          { value: "", text: "Please select your Teacher's Gender " },
          { value: "M", text: "Male" }, 
          { value: "F", text: "Female" }
        ];       
          
      return {  
        userData: JSON.parse(localStorage.getItem('userData')),
        teaGenderOptions,
        logo: null
      }

    },
   
    methods: {

        onSubmit() {   
            const sef = this;   
            this.$refs.refFormObserver.validate().then((success) => {
            if (success){
              sef.$loading(true);
                delete this.teacherData['school'];
                axios.put( this.baseURL + "/teacher/" + this.teacherId, this.teacherData , { headers: jwtHeader() })
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
                          title: 'Teacher details updated.',
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
              alert("Error while updating Teacher details.");
            });     
        },

        async refreshData(){
          await this.$emit('refresh'); 
          this.$loading(false); 
        },

        handleOnChange(e) {
          this.logo = e.target.files[0];
          let size = this.logo.size <= 1024 * 1024 * 2;
          if (!size) { alert("This is image is more than 2mb in size. Upload something of less size."); return; }
          if (!this.logo || this.logo.type.indexOf("image/") !== 0) { alert("This is not an Image file."); return; };
          this.$loading(true);
          const fd = new FormData();
          fd.set("logo", this.logo );
          const sef = this;
          axios.put( this.baseURL + "/teacher/photo/" + this.teacherId, fd, { headers: jwtHeader() })
                .then(async function (response) {
                //  sef.$loading(false);
                  await sef.refreshData();
                  sef.$forceUpdate();
          })
        },

    },
  
    setup(props, { emit }) {
      const { refFormObserver, getValidationState, resetForm } = formValidation(() => {})
      const { baseURL } = $themeConfig.app;
      return {
        baseURL,
        avatarText,
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
  