<template>
  <div class="auth-wrapper auth-v1 px-2">
    <div class="auth-inner py-2">

      <b-card class="mb-0">
        <b-link class="brand-logo">
          <vuexy-logo />

          <h2 class="brand-text text-primary ml-1">
          Standbasis
          </h2>
        </b-link>

        <b-card-title class="mb-1">
              Welcome to Standbasis! 👋
        </b-card-title>
        <b-card-text class="mb-2">
          Please sign-in to your account and then we can start this adventure 😁
        </b-card-text>

        <!-- form -->
        <validation-observer ref="loginValidation">
          <b-form class="auth-login-form mt-2" @submit.prevent>

            <!-- username -->
            <b-form-group label-for="username" label="Username">
              <validation-provider #default="{ errors }" name="Username" rules="required">
                <b-form-input id="username" v-model="username" name="login-username" :state="errors.length > 0 ? false:null"
                  placeholder="Enter the username you created." autofocus />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- password -->
            <b-form-group>
               <div class="d-flex justify-content-between">
                  <label for="password">Password</label>
                  <b-link :to="{name:'auth-forgot-password-v1'}">
                    <small>Forgot Password?</small>
                  </b-link>
               </div>
               <validation-provider #default="{ errors }" name="Password" rules="required">
                  <b-input-group class="input-group-merge" :class="errors.length > 0 ? 'is-invalid' : null">
                    <b-form-input id="login-password" v-model="password" :state="errors.length > 0 ? false : null"
                      class="form-control-merge" :type="passwordFieldType" name="login-password"
                      placeholder="············" />
                    <b-input-group-append is-text>
                      <feather-icon class="cursor-pointer" :icon="passwordToggleIcon" @click="togglePasswordVisibility" />
                    </b-input-group-append>
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
            </b-form-group>

            <!-- checkbox -->
            <b-form-group>
              <b-form-checkbox id="remember-me" v-model="status" name="checkbox-1">
                Remember Me
              </b-form-checkbox>
            </b-form-group>

            <!-- submit button -->
            <b-button type="submit" variant="dark" block @click="validationForm">
              Sign in
            </b-button>

          </b-form>
        </validation-observer>

        <b-card-text class="text-center mt-2">
           <span>New on our platform? </span>
            <b-link :to="{ name: 'auth-onboarding' }">
              <span>&nbsp;Onboard your school</span>
            </b-link>
        </b-card-text>

      </b-card>

      <!-- /Login-->

    </div>
  </div>
</template>

<script>
/* eslint-disable global-require */
import { ValidationProvider, ValidationObserver } from "vee-validate";
import VuexyLogo from "@core/layouts/components/Logo.vue";
import {
  BRow,
  BCard,
  BCol,
  BLink,
  BFormGroup,
  BFormInput,
  BInputGroupAppend,
  BInputGroup,
  BFormCheckbox,
  BCardText,
  BCardTitle,
  BImg,
  BForm,
  BButton,
  VBTooltip,
} from "bootstrap-vue";
import axios from "axios";
import useJwt from "@/auth/jwt/useJwt";
import { $themeConfig } from "@themeConfig";
import { required, email } from "@validations";
import { togglePasswordVisibility } from "@core/mixins/ui/forms";
import { getHomeRouteForLoggedInUser } from "@/auth/utils";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";


export default {
  directives: {
    "b-tooltip": VBTooltip,
  },
  components: {
    BRow,
    BCol,
    BCard,
    BLink,
    BFormGroup,
    BFormInput,
    BInputGroupAppend,
    BInputGroup,
    BFormCheckbox,
    BCardText,
    BCardTitle,
    BImg,
    BForm,
    BButton,
    VuexyLogo,
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      status: "",
      password: "test_standbasis",
      username: 'user_standbasis',
      sideImg: require("@/assets/images/pages/login-v2.svg"),
      // validation rulesimport store from '@/store/index'
      required,
      email,
    };
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === "password" ? "EyeIcon" : "EyeOffIcon";
    },
  },
  methods: {
    validationForm() {
      const sef = this;
  //    this.$refs.loginValidation.validate().then((success) => {
  //      if (success) {

          this.$loading(true);
          let user = {
              username: this.username,
              password: this.password,
          };     

          axios
            .post( this.baseURL + "/auth/signin", user)
            .then(async function (response) {
                console.log("Response here : " + JSON.stringify(response))
                let res = response.data;
                if (res.access_token) {
                    try {
                        const accessToken = res.access_token;                      
                        const userData = {
                            id: res.id,                
                            username: res.username,
                            avatar: require('@/assets/images/avatars/13-small.png'),
                            permissions: JSON.parse(res.permissions),
                            email: res.email,
                            data_id: res.data_id,
                            code: res.code ? res.code : null,
                            sch_id: res.school_id ? res.school_id : null,
                            school_date: res.school_date,
                            role: res.role,
                            ability: [{
                                action: "manage",
                                subject: 'all',
                            }]
                        };                        
                        const resp =  res.data_id !== null ? (await axios.get( sef.baseURL + "/teacher/"+ res.data_id )) : null                        
                       
                        const responseData = {
                            userData,                          
                            accessToken,
                            teacherData: resp !== null ? resp.data.data  : null                      
                        };

                        return responseData;
                    } catch (e) {                      
                        console.log( "Login error " + e)
                    }
                } else {
                   let error = true;
                   return {error};
                }
              }).then(async (response) => {
                  if (!response.error){
                      let { userData,teacherData  } = response;
                    
                      useJwt.setToken(response.accessToken);  
        
                      localStorage.setItem("userData", JSON.stringify(userData));
                      localStorage.setItem("teacherData", JSON.stringify(teacherData));

                      sef.$ability.update(userData.ability);
                    
                      sef.$loading(false);
                      
                      sef.$router
                        .replace(getHomeRouteForLoggedInUser(userData.role))
                        .then(() => {
                          sef.$toast({
                            component: ToastificationContent,
                            position: "top-right",
                            props: {
                              title: `Welcome ${
                                userData.username
                              }`,
                              icon: "CoffeeIcon",
                              variant: "success",
                              text: `You have successfully logged in as ${userData.role}. Now you can start to explore!`,
                            },
                          });
                        });
                    }
                    else{
                      sef.$toast({
                        component: ToastificationContent,
                        position: "top-right",
                        props: {
                          title: `Oops Something went wrong`,
                          icon: "CoffeeIcon",
                          variant: "danger",
                          text: `Username or pasword miss match`,
                        },
                      });
                      sef.$loading(false);
                    }

             }).catch((error) => {
              console.log("error in login: " + error);
              sef.$toast({
                        component: ToastificationContent,
                        position: "top-right",
                        props: {
                          title: `Oops Something went wrong`,
                          icon: "CoffeeIcon",
                          variant: "danger",
                          text: `Username or pasword miss match`,
                        },
                      });
              sef.$loading(false)
            });
            
      //  }
      // });
    }
  },

  setup(_, { emit }) {    
    const { baseURL } = $themeConfig.app;

    return {    
        baseURL
    }
  }

};
</script>

<style lang="scss">
@import "@core/scss/vue/pages/page-auth.scss";
</style>
