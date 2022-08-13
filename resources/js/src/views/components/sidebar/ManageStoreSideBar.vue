<template>
  <b-sidebar
    id="manage-store-side-bar"
    sidebar-class="sidebar-lg"
    bg-variant="white"
    shadow
    backdrop
    no-header
    right
    :visible="sideberVisible"
    @hidden="resetForm"
  >
    <template #default="{ hide }">
      <!-- Header -->
      <div
        class="
          d-flex
          justify-content-between
          align-items-center
          content-sidebar-header
          px-2
          py-1
        "
      >
        <h5 class="mb-0">Create Store</h5>
        <feather-icon
          class="ml-1 cursor-pointer"
          icon="XIcon"
          size="16"
          @click="hide"
        />
      </div>
      <validation-observer #default="{ handleSubmit }" ref="refFormObserver">
        <!-- Body -->
        <b-form
          class="p-2"
          @submit.prevent="handleSubmit(onSubmit)"
          @reset.prevent="resetForm"
        >
          <validation-provider
            #default="validationContext"
            name="Store name"
            rules="required"
          >
            <b-form-group label="Store name" label-for="Store name">
              <b-form-input
                id="store-name"
                v-model="storeData.storeName"
                placeholder="Enter store name"
                :state="getValidationState(validationContext)"
                trim
                type="text"
              />
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <validation-provider
            #default="validationContext"
            name="Store email"
            rules="required"
          >
            <b-form-group label="Store email" label-for="Store email">
              <b-form-input
                id="store-eamil"
                v-model="storeData.storeEmail"
                placeholder="Enter store email"
                :state="getValidationState(validationContext)"
                trim
                type="text"
              />
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
          <validation-provider
            #default="validationContext"
            name="Store contact mobile number"
            rules="required"
          >
            <b-form-group label="Store mobile" label-for="Store mobile">
              <b-form-input
                id="store-mobile"
                v-model="storeData.storeMobile"
                placeholder="Enter store mobile"
                :state="getValidationState(validationContext)"
                trim
                type="text"
              />
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <validation-provider
            #default="validationContext"
            name="contact person first name"
            rules="required"
          >
            <b-form-group
              label="Store contactPerson firstname"
              label-for="Store contactPerson Firstname"
            >
              <b-form-input
                id="store-contactPersonFirstname"
                v-model="storeData.contactPersonFirstname"
                placeholder="Enter store contact person firstname"
                :state="getValidationState(validationContext)"
                trim
                type="text"
              />
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <validation-provider
            #default="validationContext"
            name="contact person last name"
            rules="required"
          >
            <b-form-group
              label="Store contact person lastname"
              label-for="Store contactPersonLastname"
            >
              <b-form-input
                id="store-contactPersonLastname"
                v-model="storeData.contactPersonLastname"
                placeholder="Enter store contact person latnames"
                :state="getValidationState(validationContext)"
                trim
                type="text"
              />
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <validation-provider
            #default="validationContext"
            name="Store address"
            rules="required"
          >
            <b-form-group label="Store address" label-for="Store address">
              <b-form-input
                id="store-address"
                v-model="storeData.address"
                placeholder="Enter store address"
                :state="getValidationState(validationContext)"
                trim
                type="text"
              />
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

    
          <!-- 
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
                  v-model="storeData.password"
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
          </b-form-group> -->

          <div class="d-flex mt-2">
            <b-button
              v-ripple.400="'rgba(186, 191, 199, 0.15)'"
              variant="outline-danger"
              class="col-6"
              @click="hide"
            >
              Cancel
            </b-button>
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="dark"
              class="add-margin-left col-6"
              type="submit"
            >
              Create store
            </b-button>
          </div>
        </b-form>
      </validation-observer>
    </template>
  </b-sidebar>
</template>

<script>
import {
  BSidebar,
  BForm,
  BFormGroup,
  BFormInput,
  BInputGroup,
  BFormTextarea,
  BButton,
  BFormFile,
  BFormSelect,
  BInputGroupAppend,
  BFormInvalidFeedback,
} from "bootstrap-vue";
import { ref } from "@vue/composition-api";
import Ripple from "vue-ripple-directive";
import flatPickr from "vue-flatpickr-component";
import vSelect from "vue-select";
import { $themeConfig } from "@themeConfig";
import jwtHeader from "@core/services/jwt-header";
import { required, alphaNum, email } from "@validations";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import formValidation from "@core/comp-functions/forms/form-validation";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import { togglePasswordVisibility } from "@core/mixins/ui/forms";
import axios from "axios";
import { getUserData } from "@/auth/utils";
import AddressFieldGroup from "./AddressFieldGroup.vue";
export default {
  components: {
    BSidebar,
    BFormSelect,
    BForm,
    BFormGroup,
    BFormInput,
    BFormTextarea,
    BFormInvalidFeedback,
    BButton,
    BFormFile,
    BInputGroup,
    BInputGroupAppend,
    flatPickr,
    vSelect,
    ValidationProvider,
    ValidationObserver,
    AddressFieldGroup,
  },
  mixins: [togglePasswordVisibility],
  directives: {
    Ripple,
  },
  model: {
    prop: "isManageStoreSideBarActive",
    event: "update:is-manage-store-sidebar-active",
  },
  props: {
    updateData: {
      type: Object,
      required: false,
    },
  },
  setup(props) {
    const { baseURL } = $themeConfig.app;
    const addStoreData = {
      storeName: "",
      storeEmail: "",
      storeMobile: "",
      plentiCommision: "",
      customersEarnings: null,
      contactPersonFirstname: null,
      contactPersonLastname: null,
      address: "",
      id: 0,
    };
    const updatedStoreData = ref(null);
    const sideberVisible = null;
    const storeData = ref(JSON.parse(JSON.stringify(addStoreData)));

    const resetStoresData = () => {
      storeData.value = JSON.parse(JSON.stringify(addStoreData));
    };
    const { refFormObserver, getValidationState, resetForm } =
      formValidation(resetStoresData);
    return {
      sideberVisible,
      refFormObserver,
      getValidationState,
      resetForm,
      updatedStoreData,
      storeData,
      baseURL,
     
    };
  },
  mounted() {
    const userData = getUserData();
  },
  watch: {
    updateData: function (value, mutation) {
      this.storeData.id = value.id;
      this.storeData.storeName = value.store_name;
      this.storeData.storeEmail = value.email;
      this.storeData.storeMobile = value.mobile;
      this.storeData.plentiCommision = value.daalu_commision;
      this.storeData.customersEarnings = value.customers_earnings;
      this.storeData.contactPersonFirstname = value.contact_person_firstname;
      this.storeData.contactPersonLastname = value.contact_person_lastname;
      this.storeData.address = value.address;
    },
  },
  data() {
    return {
   
    };
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === "password" ? "EyeIcon" : "EyeOffIcon";
    },
  },
  methods: {
    onSubmit(url = this.baseURL + "/register-store") {
      this.$loading(true);
      const formData = new FormData();
      formData.set("id", this.storeData.id);
      formData.set("store_name", this.storeData.storeName);
      formData.set("email", this.storeData.storeEmail);
      formData.set("mobile", this.storeData.storeMobile);
      formData.set("password", this.storeData.password);
      formData.set("daalu_commision", this.storeData.plentiCommision);
      formData.set("customers_earnings", this.storeData.customersEarnings);
      formData.set(
        "contact_person_firstname",
        this.storeData.contactPersonFirstname
      );
      formData.set(
        "contact_person_lastname",
        this.storeData.contactPersonLastname
      );
      formData.set("address", this.storeData.address);
      return axios
        .post(url, formData, { headers: jwtHeader() })
        .then((response) => {
          this.$loading(false);
          this.$emit("update:is-manage-store-side-bar-active", false);
          this.$emit("fetchData");
          this.$toast({
            component: ToastificationContent,
            position: "top-right",
            props: {
              title: `Congratulation`,
              icon: "CoffeeIcon",
              variant: "success",
              text: `${response.data.message}`,
            },
          });
          this.resetForm();
          this.sideberVisible = false;
          return response;
        })
        .catch((error) => {
          if ((error.status = 400)) this.$loading(false);
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
    },
  },
};
</script>
<style scoped>
span {
  min-width: 50% !important;
}
</style>

<style lang="scss">
@import "~@core/scss/vue/libs/vue-select.scss";
@import "~@core/scss/vue/libs/vue-flatpicker.scss";
</style>
