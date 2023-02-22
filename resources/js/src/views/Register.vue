<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">
      <!-- Brand logo-->
      <b-link class="brand-logo">
        <img
          src="/images/_/_/_/_/plenti/resources/js/src/assets/images/logo/vuexy-logo.png"
          alt="logo"
          class=""
          style="width: 100px"
        />
      </b-link>
      <!-- /Brand logo-->

      <!-- Left Text-->
      <b-col lg="8" class="d-none d-lg-flex align-items-center p-5">
        <div
          class="w-100 d-lg-flex align-items-center justify-content-center px-5"
        >
          <b-img fluid :src="imgUrl" alt="Register V2" />
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Register-->
      <b-col lg="4" class="d-flex align-items-center auth-bg px-2 p-lg-5">
        <template v-if="isRegsiterationCompleted">
          <b-card
            border-variant="success"
            title="You account was created successfully"
            bg-variant="transparent"
            class="shadow-none"
          >
            <b-card-text>
              <b
                >Kindly verify your with the verification link we sent to
                {{ userEmail }}</b
              >
            </b-card-text>
          </b-card>
        </template>

        <template v-if="isRegsiterationCompleted == false">
          <b-col sm="8" md="6" lg="12" class="px-xl-2 mx-auto">
            <b-card-title class="mb-1"> Signup as a plenti merchant🚀 </b-card-title>
            <b-card-text class="mb-2">
              Manage deals and transactions
            </b-card-text>
            <!-- form -->
            <validation-observer ref="registerForm" #default="{ invalid }">
              <b-form
                class="auth-register-form mt-2"
                @submit.prevent="register"
              >
                <!-- firstname -->
                <b-form-group
                  label="First Name"
                  label-for="register-firstname"
                >
                  <validation-provider
                    #default="{ errors }"
                    name="firstname"
                    vid="firstname"
                    rules="required"
                  >
                    <b-form-input
                      id="register-firstname"
                      v-model="firstName"
                      name="register-firstname"
                      :state="errors.length > 0 ? false : null"
                      placeholder="Enter first name"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>

                <!-- lastname -->
                <b-form-group
                  label="Last Name"
                  label-for="register-lastname"
                >
                  <validation-provider
                    #default="{ errors }"
                    name="Last Name"
                    vid="lastname"
                    rules="required"
                  >
                    <b-form-input
                      id="register-lastname"
                      v-model="lastName"
                      name="register-lastname"
                      :state="errors.length > 0 ? false : null"
                      placeholder="Enter last name"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>

                <!-- company -->
                <b-form-group
                  label="Company name"
                  label-for="register-companyname"
                >
                  <validation-provider
                    #default="{ errors }"
                    name="Company name"
                    vid="companyname"
                    rules="required"
                  >
                    <b-form-input
                      id="register-companyname"
                      v-model="companyName"
                      name="register-companyname"
                      :state="errors.length > 0 ? false : null"
                      placeholder="Enter company name"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>


                <!-- email -->
                <b-form-group label="Email" label-for="register-email">
                  <validation-provider
                    #default="{ errors }"
                    name="Email"
                    vid="email"
                    rules="required|email"
                  >
                    <b-form-input
                      id="register-email"
                      v-model="userEmail"
                      name="register-email"
                      :state="errors.length > 0 ? false : null"
                      placeholder="john@example.com"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>

                <!-- mobile -->
                <b-form-group
                  label="Contact Number"
                  label-for="register-mobile"
                >
                  <validation-provider
                    #default="{ errors }"
                    name="mobile"
                    vid="mobile"
                    rules="required"
                  >
                    <b-form-input
                      id="register-mobile"
                      v-model="mobile"
                      name="register-mobile"
                      :state="errors.length > 0 ? false : null"
                      placeholder="johndoe"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>

                <!-- mobile -->
                <b-form-group
                  label="Contact Address"
                  label-for="register-address"
                >
                  <validation-provider
                    #default="{ errors }"
                    name="address"
                    
                    vid="address"
                  >

                    <input model="vm.searchPlace" v-gmaps-searchbox="vm"  class="form-control"   ref="address"
                     :state="errors.length > 0 ? false : null"/>
                   
                    {{ JSON.stringify((vm.place != null) ? vm.place.geometry : '') }}
                   
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>

                <!-- password -->
                <b-form-group label-for="register-password" label="Password">
                  <validation-provider
                    #default="{ errors }"
                    name="Password"
                    vid="password"
                    rules="required"
                  >
                    <b-input-group
                      class="input-group-merge"
                      :class="errors.length > 0 ? 'is-invalid' : null"
                    >
                      <b-form-input
                        id="register-password"
                        v-model="password"
                        class="form-control-merge"
                        :type="passwordFieldType"
                        :state="errors.length > 0 ? false : null"
                        name="register-password"
                        placeholder="············"
                      />
                      <b-input-group-append is-text>
                        <feather-icon
                          :icon="passwordToggleIcon"
                          class="cursor-pointer"
                          @click="togglePasswordVisibility"
                        />
                      </b-input-group-append>
                    </b-input-group>
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>

          


                <b-form-group>
                  <b-form-checkbox
                    id="register-privacy-policy"
                    v-model="status"
                    name="checkbox-1"
                  >
                    I agree to
                    <b-link>privacy policy & terms</b-link>
                  </b-form-checkbox>
                </b-form-group>

                <b-button
                  variant="primary"
                  block
                  type="submit"
                  :disabled="invalid"
                >
                  Sign up
                </b-button>
              </b-form>
            </validation-observer>

            <p class="text-center mt-2">
              <span>Already have an account?</span>
              <b-link :to="{ name: 'auth-login' }">
                <span>&nbsp;Sign in instead</span>
              </b-link>
            </p>
          </b-col>
        </template>
      </b-col>
      <!-- /Register-->
    </b-row>
  </div>
</template>

<script>
/* eslint-disable global-require */
// Add google Autocomplete - https://www.webdew.com/blog/google-places-autocomplete-implementation
import { ValidationProvider, ValidationObserver } from "vee-validate";
import VuexyLogo from "@core/layouts/components/Logo.vue";
import {
  BRow,
  BCol,
  BCard,
  BLink,
  BButton,
  BForm,
  BFormCheckbox,
  BFormGroup,
  BFormInput,
  BInputGroup,
  BInputGroupAppend,
  BImg,
  BCardTitle,
  BCardText,
} from "bootstrap-vue";
import { required, email } from "@validations";
import { togglePasswordVisibility } from "@core/mixins/ui/forms";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";

import store from "@/store/index";
import useJwt from "@/auth/jwt/useJwt";

export default {
  components: {
    VuexyLogo,
    BRow,
    BImg,
    BCol,
    BLink,
    BButton,
    BForm,
    BCard,
    BCardText,
    BCardTitle,
    BFormCheckbox,
    BFormGroup,
    BFormInput,
    BInputGroup,
    BInputGroupAppend,
    // validations
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
       vm: {
        searchPlace: "",
        location: {},

      },
      userEmail: "hello@plenti.africa",
      firstName: "John",
      lastName: "Deo",
      companyName: "companyName",
      mobile: "7778787878787",
      password: "232323232323",
      sideImg: require("@/assets/images/pages/register-v2.svg"),
      // validation
      required,
      email,
      status: "",
      isRegsiterationCompleted:false,
      responseData: "sdsdsdsds",
    };
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === "password" ? "EyeIcon" : "EyeOffIcon";
    },
    imgUrl() {
      if (store.state.appConfig.layout.skin === "dark") {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require("@/assets/images/pages/register-v2-dark.svg");
        return this.sideImg;
      }
      return this.sideImg;
    },
  },
  methods: {
    register() {
      this.$refs.registerForm.validate().then((success) => {
        if (success) {
           this.$loading(true);
          this.address = this.$refs.address.value,
          useJwt
            .register({
              mobile: this.mobile,
              email: this.userEmail,
              first_name: this.firstName,
              last_name: this.lastName,
              merchant_name: this.companyName,
              address: this.address,
              password: this.password,
            })
            .then((response) => {
              this.isRegsiterationCompleted = true
               this.$loading(false);
            })
            .catch((error) => {
              if(error.status = 400 )
               this.$loading(false);
                  this.$toast({
                    component: ToastificationContent,
                    position: "top-right",
                    props: {
                      title: `Opps Something went wrong`,
                      icon: "CoffeeIcon",
                      variant: "danger",
                      text: `A user with this email or mobile number already existss`,
                    },
                  });
            });
        }
      });
    },
  },
};
/* eslint-disable global-require */
</script>

<style lang="scss">
@import "~@core/scss/vue/pages/page-auth.scss";
</style>
