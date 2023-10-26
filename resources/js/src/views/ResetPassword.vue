<template>
  <div class="auth-wrapper auth-v1 px-2">
    <div class="auth-inner py-2">
      <!-- Reset Password v1 -->
      <b-card class="mb-0">

        <!-- logo -->
        <b-link class="brand-logo">
          <vuexy-logo />

          <h2 class="brand-text text-primary ml-1">
            Standbasis 👋
          </h2>
        </b-link>

        <b-card-title class="mb-1">
          Change Password 🔒
        </b-card-title>
        <b-card-text class="mb-2">
          You must remember the old password to change to a new password.
        </b-card-text>

        <!-- form -->
        <validation-observer ref="simpleRules">
          <b-form
            method="POST"
            class="auth-reset-password-form mt-2"
            @submit.prevent="validationForm"
          >

           <!-- Old password -->
            <b-form-group
              label="Old Password"
              label-for="reset-password-old"
            >
              <validation-provider
                #default="{ errors }"
                name="OldPassword"
                rules="required"
              >
                <b-input-group
                  class="input-group-merge"
                  :class="errors.length > 0 ? 'is-invalid':null"
                >
                  <b-form-input
                    id="reset-password-old"
                    v-model="oPassword"
                    :type="passwordOFieldType"
                    :state="errors.length > 0 ? false:null"
                    class="form-control-merge"
                    name="reset-password-old"
                    placeholder="············"
                  />                  

                </b-input-group>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- password -->
            <b-form-group
              label="New Password"
              label-for="reset-password-new"
            >
              <validation-provider
                #default="{ errors }"
                name="Password"
                vid="Password"
                rules="required|password"
              >
                <b-input-group
                  class="input-group-merge"
                  :class="errors.length > 0 ? 'is-invalid':null"
                >
                  <b-form-input
                    id="reset-password-new"
                    v-model="password"
                    :type="password1FieldType"
                    :state="errors.length > 0 ? false:null"
                    class="form-control-merge"
                    name="reset-password-new"
                    placeholder="············"
                  />
                  <b-input-group-append is-text>
                    <feather-icon
                      class="cursor-pointer"
                      :icon="password1ToggleIcon"
                      @click="togglePassword1Visibility"
                    />
                  </b-input-group-append>
                </b-input-group>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- confirm password -->
            <b-form-group
              label-for="reset-password-confirm"
              label="Confirm Password"
            >
              <validation-provider
                #default="{ errors }"
                name="Confirm Password"
                rules="required|confirmed:Password"
              >
                <b-input-group
                  class="input-group-merge"
                  :class="errors.length > 0 ? 'is-invalid':null"
                >
                  <b-form-input
                    id="reset-password-confirm"
                    v-model="cPassword"
                    :type="password2FieldType"
                    class="form-control-merge"
                    :state="errors.length > 0 ? false:null"
                    name="reset-password-confirm"
                    placeholder="············"
                  />
                  <b-input-group-append is-text>
                    <feather-icon
                      class="cursor-pointer"
                      :icon="password2ToggleIcon"
                      @click="togglePassword2Visibility"
                    />
                  </b-input-group-append>
                </b-input-group>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- submit button -->
            <b-button
              block
              type="submit"
              variant="primary"
            >
              Set New Password
            </b-button>
          </b-form>
        </validation-observer>

       

      </b-card>
    <!-- /Reset Password v1 -->
    </div>
  </div>

</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import {
  BCard,
  BCardTitle,
  BCardText,
  BForm,
  BFormGroup,
  BInputGroup,
  BInputGroupAppend,
  BLink,
  BFormInput,
  BButton,
} from 'bootstrap-vue'
import axios from "axios";
import { required } from '@validations'
import { $themeConfig } from "@themeConfig";
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import { ref, onUnmounted ,onMounted, watch } from '@vue/composition-api'

export default {
  components: {
    VuexyLogo,
    BCard,
    BButton,
    BCardTitle,
    BCardText,
    BForm,
    BFormGroup,
    BInputGroup,
    BLink,
    BFormInput,
    BInputGroupAppend,
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      userEmail: '',
      username: '',
      cPassword: '',
      password: '',
      oPassword: '',
      // validation
      required,

      // Toggle Password
      passwordOFieldType: 'password',
      password1FieldType: 'password',
      password2FieldType: 'password',
    }
  },
  mounted(){
    this.username = this.userData.username;
  },
  computed: {
    password1ToggleIcon() {
      return this.password1FieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
    password2ToggleIcon() {
      return this.password2FieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
  },
  methods: {
    togglePassword1Visibility() {
      this.password1FieldType = this.password1FieldType === 'password' ? 'text' : 'password'
    },
    togglePassword2Visibility() {
      this.password2FieldType = this.password2FieldType === 'password' ? 'text' : 'password'
    },
    validationForm() {
        const sef = this;
        let user = {
              username: this.username,
              oldpassword: this.oPassword,
              newpassword: this.password,
        };
      this.$refs.simpleRules.validate().then(success => {
        if (success) {

          axios
            .post( this.baseURL + "/auth/changePassword", user)
            .then(async function (response) {
                let res = response.data;
                //success
                if (res.success){
                     this.$toast({
                        component: ToastificationContent,
                        position: "top-right",
                        props: {
                        title: 'Password Change Successful',
                        icon: 'EditIcon',
                        variant: 'success',
                        },
                    })
                }
            })
            .catch((error) => {
                console.log("error in changing password with Error: " + error);
                sef.$toast({
                            component: ToastificationContent,
                            position: "top-right",
                            props: {
                            title: `Oops Something went wrong`,
                            icon: "CoffeeIcon",
                            variant: "danger",
                            text: `Backend function returned False`,
                            },
                        });
                sef.$loading(false);
            });
        }
      })
    },
  },
  setup(_, { emit }) {    
    const { baseURL } = $themeConfig.app;
    const userData = ref({});
    const storedItems = JSON.parse(localStorage.getItem('userData'));
    if (storedItems){
        userData.value = storedItems;
    }

    return {    
        baseURL,
        userData
    }
  }
}
</script>

<style lang="scss">
@import '~@core/scss/vue/pages/page-auth.scss';
</style>
