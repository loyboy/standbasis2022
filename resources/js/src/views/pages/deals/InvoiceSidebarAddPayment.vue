<template>
  <b-sidebar
    id="sidebar-invoice-add-payment"
    sidebar-class="sidebar-lg"
    bg-variant="white"
    shadow
    backdrop
    no-header
    right
   
    :visible="isDealSidebarActive"
    @change="(val) => $emit('update:is-deal-sidebar-active', val)"
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
        <h5 class="mb-0">Create Deal</h5>
        <feather-icon
          class="ml-1 cursor-pointer"
          icon="XIcon"
          size="16"
          @click="hide"
        />
      </div>
      <validation-observer #default="{ handleSubmit }" ref="refFormObserver">
        <!-- Body  @hidden="resetForm" -->
        <b-form
          class="p-2"
          @submit.prevent="handleSubmit(onSubmit)"
          @reset.prevent="resetForm"
        >
          <validation-provider
            #default="validationContext"
            name="dealTitle"
            rules="required"
          >
            <!-- Deals title -->
            <b-form-group label="Deals title" label-for="Deals title">
              <b-form-input
                id="deals-details"
                v-model="dealsData.dealTitle"
                placeholder="Enter deals title"
                trim
                :state="getValidationState(validationContext)"
                type="text"
              />
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <!-- Deals Sub title -->
          <validation-provider
            #default="validationContext"
            name="dealSubTitle"
            rules="required"
          >
            <b-form-group label="Deals subtitle" label-for="Deals sub title">
              <b-form-input
                id="deals-subtitle"
                v-model="dealsData.dealSubTitle"
                placeholder="Enter deals sub title"
                :state="getValidationState(validationContext)"
                trim
                type="text"
              />
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <div class="row">
            <!-- Deal Cost -->
            <validation-provider
              #default="validationContext"
              name="cost"
              rules="required"
            >
              <b-form-group
                label="Enter deal cost"
                label-for="deal cost"
                class="col-md-12"
              >
                <b-form-input
                  id="reward"
                  type="number"
                  v-model="dealsData.dealCost"
                  trim
                  class="col-md-12"
                  :state="getValidationState(validationContext)"
                  placeholder="Enter deal cost ( Only for paid deals )"
                />
                <b-form-invalid-feedback>
                  {{ validationContext.errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
            <validation-provider
              #default="validationContext"
              name="point"
              rules="required"
            >
              <b-form-group
                label="Point Value"
                label-for="Point value"
                class="col-md-12"
              >
                <b-form-input
                  id="point"
                  type="number"
                  v-model="dealsData.pointValue"
                  class="col-md-12"
                  trim
                  :state="getValidationState(validationContext)"
                  placeholder="Enter point value e.g 200 points"
                />
                <b-form-invalid-feedback>
                  {{ validationContext.errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
          </div>

          <div class="">
            <validation-provider
              #default="validationContext"
              name="category"
              rules="required"
            >
              <b-form-group label="Deals Category" label-for="deals-category">
                <b-form-select
                  v-model="dealsData.category"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  :options="categories"
                  :state="getValidationState(validationContext)"
                />
                <b-form-invalid-feedback>
                  {{ validationContext.errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>

            <validation-provider
              #default="validationContext"
              name="store"
              rules="required"
            >
              <b-form-group label="Stores" label-for="" >
                 <b-form-select
                  v-model="myStores"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  multiple
                  :options="myStoreIds"                  
                  :state="getValidationState(validationContext)"
                />
                <b-form-invalid-feedback>
                  {{ validationContext.errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
          
          </div>

          <b-form-group label="Select  Deal Image" label-for="Image">
            <b-form-file
              v-model="file"
              accept="image/*"
              :state="Boolean(file)"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
              @change="handleOnChange"
            />
          </b-form-group>

          <!-- Deal Over Image-->
          <b-form-group label="Select  Deal coverImage" label-for="coverImage">
            <b-form-file
              v-model="coverImage"
              accept="image/*"
              :state="Boolean(coverImage)"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
              @change="handleCoverImageOnChange"
            />
          </b-form-group>

          <!-- Deal description-->
          <validation-provider
            #default="validationContext"
            name="description"
            rules="required"
          >
            <b-form-group
              label="Deals description"
              label-for="deals-description"
            >
              <b-form-textarea
                id="deals-description"
                v-model="dealsData.dealsDescription"
                placeholder="Enter deals description"
                :state="getValidationState(validationContext)"
                rows="5"
                trim
              />
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <!-- Deal description-->
          <validation-provider
            #default="validationContext"
            name="tandc"
            rules="required"
          >
            <b-form-group
              label="Terms and Condition"
              label-for="terms-condition"
            >
              <b-form-textarea
                id="terms-condition"
                v-model="dealsData.tandc"
                placeholder="Enter terms and Condition"
                :state="getValidationState(validationContext)"
                rows="5"
                trim
              />
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
          <!-- Deal description-->
          <validation-provider
            #default="validationContext"
            name="rangeDate"
            rules="required"
          >
            <b-form-group
              label="Deal  start and end date"
              label-for="deal-dates"
            >
              <flat-pickr
                v-model="dealsData.dealDates"
                class="form-control"
                :state="getValidationState(validationContext)"
                placeholder="Select deal start and end date"
                :config="{ mode: 'range' }"
              />
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
          <!-- Form Actions -->
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
              Create deal
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
  BFormTextarea,
  BButton,
  BFormFile,
  BFormSelect,
  BFormInvalidFeedback,
} from "bootstrap-vue";
import { ref } from "@vue/composition-api";
import Ripple from "vue-ripple-directive";
import flatPickr from "vue-flatpickr-component";
import vSelect from "vue-select";
import { $themeConfig } from "@themeConfig";
import { required, alphaNum, email } from "@validations";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import formValidation from "@core/comp-functions/forms/form-validation";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import store from "@/store";
import axios from "axios";
import { useShopRemoteData } from "./useDeals";
import { getUserData } from "@/auth/utils";

import { v4 as uuidv4 } from "uuid";

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
    flatPickr,
    vSelect,
    ValidationProvider,
    ValidationObserver,
  },
  directives: {
    Ripple,
  },
  props: {
    isDealSidebarActive: {
      type: Boolean,
      required: true,
    },
    updateData: {
      type: Object,
      required: false,
    },
    isUpdated: {
      type: Boolean,
      required: false,
    },
    event: "update:is-deal-sidebar-active",
  },

  setup(props) {
    const self = this;
    const categories = [];
    const userData = getUserData();

    categories.push({ value: null, text: "Please select an option" });
    store.state.appConfig.category.forEach((value, index) => {
      categories.push({ value: value.id, text: value.category });
    });  

    const { baseURL } = $themeConfig.app;
    const addPaymentData = {
      dealTitle: "",
      dealSubTitle: "",
      dealCost: "",
      pointValue: "",
      category: null,
      store: null,
      dealsData: null,
      dealsDescription: "",
      tandc: "",
      dealDates: null,
      category: null,
      firebaseId: "",
      id: null,
      merchant: "",
    };

    if (userData.role === "merchant") {
      addPaymentData.merchant = userData.merchantId
        ? userData.merchantId
        : null;
    }

    const dealsData = ref(JSON.parse(JSON.stringify(addPaymentData)));

    const resetDealsData = () => {
      dealsData.value = JSON.parse(JSON.stringify(addPaymentData));
    };
    const { refFormObserver, getValidationState, resetForm } = formValidation(resetDealsData);

    return {
      file: null,
      coverImage: null,
      refFormObserver,
      getValidationState,
      resetForm,
      categories,
      dealsData,
      addPaymentData,
      baseURL,
    };

  },



  mounted(){     
      const userData = getUserData();
       const { fetchStoresForMerchant } = useShopRemoteData();        
          
          fetchStoresForMerchant({
            merchant: 'null'
          }).then((response) => {            
            if (response.length > 0){                 
                response.forEach((value, index) => {                
                    this.myStoreIds.push({ value: value.id, text: value.store_name });                              
                });                     
            }
          });

       
  },

  watch: {
    rangeDate: function (value, mutation) {
      this.dealsData.dealDates = value;
    },
    updateData: function (value, mutation) {
      
     // console.log( "Update Data : "+ JSON.stringify(value) );

      this.dealsData.id = value.id ? value.id : 0;
      this.dealsData.dealTitle = value.title;
      this.dealsData.dealSubTitle = value.subtitle;
      this.dealsData.dealCost = value.deal_cost;
      this.dealsData.pointValue = value.point_value;
      this.dealsData.dealsDescription = value.description;
      this.dealsData.category = value.category.id;
      this.myStores = JSON.parse(  value.stores )
      this.dealsData.file = value.image;
      this.dealsData.dealDates = value.start_date + " to " + value.end_date;
      this.dealsData.coverImage = value.large;
      this.dealsData.firebaseId = value.firebase_id;
      this.dealsData.tandc = value.tandc;
     
    },
  },
  data() {
    return {
      image: null,
      rangeDate: null,
      isMerchant: false,
      myStores: [],
      myStoreIds: [{
        value: null,
        text: "Please select an option",
      }]
    };
  },
  methods: {
    onSubmit() {
      const sef = this;
      sef.$loading(true);
      sef.$emit("update:is-deal-sidebar-active", false);
      sef.dealsData.firebaseId = sef.dealsData.firebaseId != "" ? sef.dealsData.firebaseId : uuidv4();
      const formData = new FormData();
      formData.set("id", sef.dealsData.id);
      formData.set("image", sef.file);
      formData.set("coverImage", sef.coverImage);
      formData.set("dealTitle", sef.dealsData.dealTitle);
      formData.set("dealSubTitle", sef.dealsData.dealSubTitle);
      formData.set("dealCost", sef.dealsData.dealCost);
      formData.set("pointValue", sef.dealsData.pointValue);
      formData.set("category", sef.dealsData.category);
      formData.set("store", JSON.stringify(sef.myStores) );
      formData.set("dealsDescription", sef.dealsData.dealsDescription);
      formData.set("firebaseId", sef.dealsData.firebaseId);
      formData.set("tandc", sef.dealsData.tandc);
      formData.set("rangeDate", sef.dealsData.dealDates);
      
      formData.set(
        "merchantId",
        this.addPaymentData.merchant !== null
          ? this.addPaymentData.merchant
          : ""
      );
      axios
        .post(this.baseURL + "/app/upload-deals", formData)
        .then(function (response) {
          sef.$loading(false);
          sef.$emit("update:is-deal-sidebar-active", false);
          sef.$emit("fetchProduct");
          sef.resetForm();
          return response;
        });

      //
    },

    handleOnChange(e) {
      this.file = e.target.files[0];
      if (!this.file || this.file.type.indexOf("image/") !== 0) return;
      this.validateImageSize(1037, 778, this.file, "thumbnail");
    },
    handleCoverImageOnChange(e) {
      this.coverImage = e.target.files[0];
      if (!this.coverImage || this.coverImage.type.indexOf("image/") !== 0)
        return;
      this.validateImageSize(1031, 1677, this.coverImage, "cover");
    },
    validateImageSize(imgWidth, imgHeight, file, type) {
      let reader = new FileReader();
      let width = "";
      let height = "";
      reader.readAsDataURL(file);
      reader.onload = (evt) => {
        let img = new Image();
        img.onload = () => {
          width = img.width;
          height = img.height;
          
        /*   if (width !== imgWidth && height !== imgHeight) {
            if (type === "thumbnail") {
              this.file = null;
            }

            if (type === "cover") {
              this.coverImage = null;
            }

            this.$toast({
              component: ToastificationContent,
              position: "top-right",
              props: {
                title: "Error",
                icon: "CoffeeIcon",
                variant: "danger",
                text: `The acceptable image size is ${imgWidth}by${imgHeight} px`,
              },
            });
          } */
        };

        img.src = evt.target.result;
      };
    },

    uploadDeal() {},
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
