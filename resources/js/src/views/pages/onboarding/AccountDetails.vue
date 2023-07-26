<template>

  <validation-observer
    #default="{ handleSubmit }"
    ref="refFormObserver"
  >
    <b-form
      class="list-view product-checkout"
      @submit.prevent="handleSubmit(onSubmit)"
    >

      <!-- Right Column -->
      <b-col lg="12">
        <div class="customer-card ">
          <b-card title="Step 6">
            <b-card-text class="mb-0 bolden">
              Step 6
            </b-card-text>
            <b-card-text class="mb-0 bolden">Enter your school default user account details in this step.</b-card-text>
          </b-card>
        </div>
      </b-col>

      <!-- Left Column -->
      <b-col lg="12">
        <b-card no-body name="user-account form">
          <b-card-header class="flex-column align-items-start">
            <b-card-title> Account Details </b-card-title>
            <b-card-text class="text-muted mt-25">
              Please enter the account details of your Institution
            </b-card-text>
          </b-card-header>

          <b-card-body>
              <b-row>

                  <!-- Full Name -->
                  <b-col
                      cols="12"
                      md="6"
                  >
                      <validation-provider
                          #default="validationContext"
                          name="Full Name"
                          rules="required"
                      >
                          <b-form-group
                          label="Full Name"
                          label-for="acct-name"
                          class="mb-2 bolden"
                          >
                            <b-form-input
                                id="acct-name"
                                v-model="accountDetails.acctName"
                                :state="getValidationState(validationContext)"
                                @input="validateFullName"
                                trim
                            />

                            <div v-if="invalidFullName" class="invalid-feedback">Invalid full name format.</div>

                            <b-form-invalid-feedback>
                                {{ validationContext.errors[0] }}
                            </b-form-invalid-feedback>

                          </b-form-group>
                      </validation-provider>
                  </b-col>

                  <!-- Account Username -->
                  <b-col
                  cols="12"
                  md="6"
                  class="mb-2"
                  >
                  <validation-provider
                      #default="validationContext"
                      name="Account Username"
                      rules="required"
                  >
                      <b-form-group
                      label="Account Username"
                      label-for="acct-username"
                      class="mb-2 bolden"
                      >

                      <b-form-input
                              id="acct-name"
                              v-model="accountDetails.acctUsername"
                              :state="getValidationState(validationContext)"
                              trim
                          />

                      <b-form-invalid-feedback>
                          {{ validationContext.errors[0] }}
                      </b-form-invalid-feedback>
                      </b-form-group>
                  </validation-provider>
                  </b-col>

                  <!-- Account Password -->
                <b-col
                  cols="12"
                  md="4"
                  class="mb-2"
                  >
                      <validation-provider
                          #default="validationContext"
                          name="Account Password"
                          rules="required"
                      >
                          <b-form-group
                          label="Account Password"
                          label-for="acct-password"
                          class="mb-2 bolden"
                          >

                          <b-form-input
                                  id="acct-password"
                                  type="password"
                                  v-model="accountDetails.acctPassword"
                                  :state="getValidationState(validationContext)"
                                  trim
                              />

                          <b-form-invalid-feedback>
                              {{ validationContext.errors[0] }}
                          </b-form-invalid-feedback>
                          </b-form-group>
                      </validation-provider>
                </b-col>

                <!-- Account confirm Password -->
                <b-col
                  cols="12"
                  md="4"
                  class="mb-2"
                  >
                      <validation-provider
                          #default="validationContext"
                          name="Account Confirm Password"
                          rules="required"
                      >
                          <b-form-group
                          label="Account Confirm Password"
                          label-for="acct-confirm-password"
                          class="mb-2 bolden"
                          >

                          <b-form-input
                                  id="acct-confirm-password"
                                  type="password"
                                  v-model="confirmpassword"
                                  :state="getValidationState(validationContext)"
                                  trim
                              />

                          <b-form-invalid-feedback>
                              {{ validationContext.errors[0] }}
                          </b-form-invalid-feedback>
                          </b-form-group>
                      </validation-provider>
                  </b-col>  
                  
                <!-- Account E-mail -->
                <b-col
                  cols="12"
                  md="4"
                  class="mb-2"
                  >
                      <validation-provider
                          #default="validationContext"
                          name="Account E-mail"
                          rules="required|email"
                      >
                          <b-form-group
                          label="Account Email"
                          label-for="acct-email"
                          class="mb-2 bolden"
                          >

                          <b-form-input
                                  id="acct-email"
                                  type="email"
                                  v-model="accountDetails.acctEmail"
                                  :state="getValidationState(validationContext)"
                                  trim
                              />

                          <b-form-invalid-feedback>
                              {{ validationContext.errors[0] }}
                          </b-form-invalid-feedback>
                          </b-form-group>
                      </validation-provider>
                </b-col>

                  <!-- Submit Button -->
                <b-col cols="12" v-if=" invalidFullName === false " >
                  <b-button
                          variant="primary"
                          type="submit"
                      >
                        Save Account Details
                  </b-button>
                </b-col>
                  
              </b-row>
          </b-card-body>

        </b-card>   
      </b-col>

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
  BFormSelect
} from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver, validate } from 'vee-validate'
import vSelect from 'vue-select';
import axios from "axios";
import { required, integer, email } from '@validations'
import formValidation from '@core/comp-functions/forms/form-validation'
import { $themeConfig } from "@themeConfig";
// Notification
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
    BFormSelect,
    // Form Validation
    ValidationProvider,
    ValidationObserver,

    // 3rd party
    vSelect,
  },
  props: {
    accountDetails: {
      type: Object,
      required: true,
    },
  },

  data() {    
    return {  
         confirmpassword: '',
         invalidFullName: false
    }
  },

  methods: {

    onSubmit() {
      if ( this.accountDetails.acctPassword !== this.confirmpassword ){
       // alert("Please enter the correct password in both password fields");
        this.$toast({
                    component: ToastificationContent,
                    position: "top-right",
                    props: {
                      title: 'Password mismatch',
                      icon: "CoffeeIcon",
                      variant: "danger",
                      text: `Please ensure that both passwords are the same.`,
                    },
            });
        return;
      }

        const formPayload = { username: this.accountDetails.acctUsername };
        this.$loading(true);
        const sef = this;
        axios.post( this.baseURL + "/auth/checkUsername", formPayload)
        .then( async function (response) {         
              sef.$loading(false);
              let data = response.data;

              if (data.message === "false"){
                  sef.$toast({
                      component: ToastificationContent,
                      props: {
                      title: 'Username is available',
                      icon: 'AlertTriangleIcon',
                      variant: 'success',
                      }
                  }); 

                 let isValid = await sef.$refs.refFormObserver.validate();
                 console.log("Valid form: " + isValid);
                  if (isValid){
                    sef.$emit('next-step',"account-details");  
                  }
                  else{          
                    sef.$toast({
                              component: ToastificationContent,
                              position: "top-right",
                              props: {
                                title: 'Validation error',
                                icon: "CoffeeIcon",
                                variant: "danger",
                                text: `Please ensure that all fields have been filled`,
                              },
                    });
                    sef.accountDetails.accountFilled = false;
                  }
            
                
              }
              else{
                  sef.$toast({
                      component: ToastificationContent,
                      props: {
                      title: 'Username is not available',
                      icon: 'AlertTriangleIcon',
                      variant: 'danger',
                      }
                  }); 
                  return;
              }
                 
          }).catch((exception) => { 

            console.log("Exception: " + JSON.stringify(exception));
            
            sef.$toast({
              component: ToastificationContent,
              props: {
              title: 'There is an issue with Checking the username availability service.',
              icon: 'AlertTriangleIcon',
              variant: 'danger',
            },
            });
		    });  

      
      
    },

    validateFullName(val) {
      const fullNameRegex = /^[a-zA-Z]+\s[a-zA-Z]+$/; // Regex for minimum of two strings separated by a single space.
      this.invalidFullName = !fullNameRegex.test(val);
    }
  },

  setup(_, { emit }) {
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
.bolden {
    font-weight: bolder;
}
</style>