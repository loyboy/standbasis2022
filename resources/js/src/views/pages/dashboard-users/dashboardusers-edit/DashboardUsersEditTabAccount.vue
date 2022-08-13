<template>
  <div>
    <!-- Media -->
    <b-media class="mb-2">
      <template #aside>
        <b-avatar
          ref="previewEl"
          :src="userData.picture"
          :text="avatarText(userData.username)"
          :variant="`light-${resolveUserRoleVariant(userData.role)}`"
          size="90px"
          rounded
        />
      </template>
      <h4 class="mb-1">
        {{ userData.username }} 
      </h4>
      <div class="d-flex flex-wrap">
        <b-button variant="danger" @click="$refs.refInputEl.click()">
          <input
            ref="refInputEl"
            type="file"
            class="d-none"
            @input="inputImageRenderer"
          />
          <span class="d-none d-sm-inline">Update</span>
          <feather-icon icon="EditIcon" class="d-inline d-sm-none" />
        </b-button>      
      </div>
    </b-media>

    <validation-observer ref="userUpdateValidation">
      <b-form class="auth-login-form mt-2" @submit.prevent>
        <!-- User Info: Input Fields -->
        <b-form>
          <b-row>

            <b-col cols="12" md="4">
              <b-form-group label="Type of User" label-for="user_type">
                <b-form-input id="user_type" disabled :value=" isMerchant === true ? 'Merchant': 'Admin' " />
              </b-form-group>
            </b-col>

            <!-- Field: Username -->
            <b-col cols="12" md="4">
              <b-form-group label="Username" label-for="username">
                <b-form-input id="username" v-model="userData.username" />
              </b-form-group>
            </b-col>

            <!-- Field: First Name -->
            <b-col cols="12" md="4">
              <b-form-group label="First Name" label-for="first-name">
                <b-form-input id="first-name" v-model="userData.first_name" />
              </b-form-group>
            </b-col>

            <!-- Field: Last Name -->
            <b-col cols="12" md="4">
              <b-form-group label="Last Name" label-for="last-name">
                <b-form-input id="last-name" v-model="userData.last_name" />
              </b-form-group>
            </b-col>

            <!-- Field: Email -->
            <b-col cols="12" md="4">
              <b-form-group label="Email" label-for="email">
                <b-form-input
                  id="email"
                  v-model="userData.email"
                  type="email"
                />
              </b-form-group>
            </b-col>

            <!-- Field: Status -->
            <b-col cols="12" md="4">
              <b-form-group label="Status" label-for="user-status">
                <v-select
                  v-model="userData.status"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  :options="statusOptions"
                  :reduce="(val) => val.value"
                  :clearable="false"
                  input-id="user-status"
                  placeholder="Select a status"
                />
              </b-form-group>
            </b-col>

            <!-- Field: Role -->
            <b-col cols="12" md="4">
              <b-form-group label="Mobile" label-for="Mobile">
                <b-form-input
                  id="mobile"
                  v-model="userData.mobile"
                  type="number"
                />
              </b-form-group>
            </b-col>

            <!-- Field: Email -->
            <b-col cols="12" md="4">
              <b-form-group label="Address" label-for="address">
                <b-form-input 
                  id="address"
                  v-model="userData.address"
                  type="text"
                />
              </b-form-group>
            </b-col>

          </b-row>

          <b-row v-if=" isMerchant === true ">
            <!-- Field: Birth Date -->
            <b-col cols="12" md="6" lg="4">
              <b-form-group label="Birth Date" label-for="birth-date">
              <flat-pickr
                  v-model="userData.dob"
                  class="form-control"
                  :config="{ dateFormat: 'Y-m-d' }"
                  placeholder="YYYY-MM-DD"
                />
              </b-form-group>
            </b-col>
            <!-- Field: Gender -->
            <b-col cols="12" md="6" lg="4">
              <b-form-group
                label="Gender"
                label-for="gender"
                label-class="mb-1"
              >
                <b-form-radio-group
                  id="gender"
                  v-model="userData.gender_id"
                  :options="genderOptions"
                  
                />
              </b-form-group>
            </b-col>
          </b-row>

          <b-row>
            <b-col cols="12" md="4" lg="4">
              <b-form-group label="Merchant name" label-for="merchant-name">
               <b-form-input
                  id="merchant-name"
                  v-model="userData.merchant.merchant_name"
                  type="text"
                />
              </b-form-group>
            </b-col>

            <b-col cols="12" md="4" lg="4">
              <b-form-group label="Customer Percentage" label-for="percentage">
               <b-form-input
                  id="percentage"
                  v-model="userData.merchant.customer_percentage"
                  type="number"
                />
              </b-form-group>
            </b-col>

             <b-col cols="12" md="4" lg="4">
              <b-form-group label="Merchant Address" label-for="address">
               <b-form-input
                  id="address"
                  v-model="userData.merchant.address"
                  type="text"
                />
              </b-form-group>
            </b-col>

            <b-col cols="12" md="4" lg="4">
              <b-form-group label="Merchant Mobile" label-for="merchant-mobile">
               <b-form-input
                  id="merchant-mobile"
                  v-model="userData.merchant.mobile"
                  type="text"
                />
              </b-form-group>
            </b-col>

            <b-col cols="12" md="4" lg="4">
              <b-form-group label="Merchant Contact Email" label-for="contact-email">
               <b-form-input
                  id="contact-email"
                  v-model="userData.merchant.contact_email"
                  type="text"
                />
              </b-form-group>
            </b-col>

            <b-col cols="12" md="4" lg="4">
              <b-form-group label="Merchant Contact Phone" label-for="contact-phone">
               <b-form-input
                  id="contact-phone"
                  v-model="userData.merchant.contact_phone"
                  type="text"
                />
              </b-form-group>
            </b-col>

             <b-col cols="12" md="4" lg="4">
              <b-form-group label="Merchant Zip Code" label-for="merchant-zip">
               <b-form-input
                  id="merchant-zip"
                  v-model="userData.merchant.zip"
                  type="text"
                />
              </b-form-group>
            </b-col>

             <b-col cols="12" md="4" lg="4">
              <b-form-group label="Merchant Url Address" label-for="merchant-url">
               <b-form-input
                  id="merchant-url"
                  v-model="userData.merchant.zip"
                  type="text"
                />
              </b-form-group>
            </b-col>

          </b-row>

        </b-form>

        <!-- Action Buttons -->
        <b-button v-if=" isMerchant === true "
          variant="success"
          class="mb-1 mb-sm-0 mr-0 mr-sm-1"
          :block="$store.getters['app/currentBreakPoint'] === 'xs'"
          @click="handleSubmit"
        >
          Save Changes
        </b-button>
        <b-button
         v-if=" isMerchant === true "
          variant="outline-secondary"
          type="reset"
          :block="$store.getters['app/currentBreakPoint'] === 'xs'"
        >
          Reset
        </b-button>
      </b-form>
    </validation-observer>

  </div>
</template>

<script>
import {
  BButton,
  BMedia,
  BAvatar,
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BForm,
  BTable,
  BCard,
  BCardHeader,
  BCardTitle,
  BFormCheckbox,
  BFormRadioGroup,
  BFormCheckboxGroup,
} from "bootstrap-vue";
import vSelect from "vue-select";
import flatPickr from "vue-flatpickr-component";
import useJwt from "@/auth/jwt/useJwt";
import { ref } from "@vue/composition-api";
import useResolverList from "@/useResolverList";
import { avatarText } from "@core/utils/filter";
import { useInputImageRenderer } from "@core/comp-functions/forms/form-utils";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";

export default {
  components: {
    BButton,
    BMedia,
    BAvatar,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BForm,
    BTable,
    BCard,
    BCardHeader,
    BCardTitle,
    BFormCheckbox,   
    BFormRadioGroup,
    BFormCheckboxGroup,
    ValidationProvider,
    ValidationObserver,
    vSelect,
    flatPickr
  },
  props: {
    userData: {
      type: Object,
      required: true,
    },
    
  },

  data() {
    return {
      localUserData: JSON.parse(localStorage.getItem('userData')),
      isMerchant: false,
      isAdmin: false
    }
  },
  mounted(){
    this.isMerchant = this.localUserData.merchantId ? true : false;   
    this.isAdmin = this.localUserData.role === "admin" ? true : false;
  },
  setup(props) {
    const genderOptions = [
      { text: "Male", value: "1" },
      { text: "Female", value: "2" },
    ];
    const { resolveUserRoleVariant } = useResolverList();

    const status =  props.userData.status != null ? props.userData.status : 1;

    const statusOptions = [
      { label: "Pending", value: 0 },
      { label: "Active", value: 1 },
      { label: "Inactive", value: 2 }
    ];

    // ? Demo Purpose => Update image on click of update
    const refInputEl = ref(null);
    const previewEl = ref(null);

    const { inputImageRenderer } = useInputImageRenderer(
      refInputEl,
      (base64) => {
        // eslint-disable-next-line no-param-reassign
        props.userData.picture = base64;
      }
    );

    return {
      resolveUserRoleVariant,
      avatarText,
      statusOptions,  
      status,
      genderOptions,
      refInputEl,
      previewEl,
      inputImageRenderer,
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.userUpdateValidation.validate().then((success) => {
        if (success) {
            this.$loading(true);
            if (this.isMerchant === true){
                  useJwt.updateMerchantAccount(this.userData.merchant).then((response) => {
                      let userName =  this.userData.merchant.merchant_name;
                  
                      this.$loading(false);
                 
                      this.$toast({
                        component: ToastificationContent,
                        position: "top-right",
                        props: {
                          title: `${userName}`,
                          icon: "CoffeeIcon",
                          variant: "success",
                          text: `Merchant Profile was updated successfully`,
                        },
                      });

                      this.$loading(true);
                  

                })
                .catch((error) => {
                 
                });
              
                useJwt.updateUserProfileAccount(this.userData).then((response) => {
                  let userName =  this.userData.first_name;                  
                  this.$loading(false);
                  this.$router.replace({ path: "/deals" }).then(() => {
                      this.$toast({
                        component: ToastificationContent,
                        position: "top-right",
                        props: {
                          title: `${userName}`,
                          icon: "CoffeeIcon",
                          variant: "success",
                          text: `Merchant's User Account was updated successfully`,
                        },
                      });
                  });

                })
                .catch((error) => {
               
                });
            }
           
        }
      });
    },
  },
};
</script>

<style lang="scss">
@import "~@core/scss/vue/libs/vue-select.scss";
</style>
