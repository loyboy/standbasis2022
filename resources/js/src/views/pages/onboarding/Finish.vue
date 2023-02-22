<template>
    <b-row class="match-height mx-1">
      
        <!-- Right Column -->
        <b-col lg="12">
          <div class="customer-card">
              <b-card title="Finish">
              <b-card-text class="mb-0">
                  Final Step
              </b-card-text>
              <b-card-text class="headerTransform">Click here to conclude this onboarding session</b-card-text>
              </b-card>
          </div>
        </b-col>

        <b-col cols="12" class="px-6 py-2">
            <b-button variant="gradient-success" class="btn-relief-success" type="button" @click="finish" >
                Finish 
            </b-button>
        </b-col> 

    </b-row>
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
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import vSelect from 'vue-select'
import { required, integer, email } from '@validations'
import formValidation from '@core/comp-functions/forms/form-validation'

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
  
   setup(_, { emit }) {  

    const finish = () => {
      emit('next-step', "sch-finish")
    }

    return {      
      finish
    }
  },

  }
</script>

<style lang="scss">
  .headerTransform {
    font-size: 20px;
    font-weight: bolder;
  }
  </style>