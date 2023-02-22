<template>
    <validation-observer
      #default="{ handleSubmit }"
      ref="refFormObserver"
    >

  <b-media class="mb-2">
        <template v-if="schoolData.logoPath !== null" #aside>
          <b-avatar
            ref="previewEl"
            :src="new String(baseURL).replace('/api','') + schoolData.logoPath"
            :text="avatarText(schoolData.name)"
            size="100px"
            rounded
          />
        </template>
        <h4 class="mb-1">
          {{ schoolData.name }}
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
            <span class="d-none d-sm-inline">Update Logo</span>
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
            <b-card-title> School Details </b-card-title>
            <b-card-text class="text-muted mt-25" v-if="userData.permissions.school.edit === true">
              You may edit the school details of this Institution.
            </b-card-text>
            <b-card-text class="text-muted mt-25" v-if="userData.permissions.school.edit === false">
             You won't be able to edit the school details of this Institution.
            </b-card-text>
          </b-card-header>
  
          <b-card-body>
            <b-row>
  
              <!-- School Name -->
              <b-col
                cols="12"
                md="4"
              >
                <validation-provider
                  #default="validationContext"
                  name="School Name"
                  rules="required"
                >
                  <b-form-group
                    label="School Name"
                    label-for="sch-name"
                    class="mb-2 bolden"
                  >
                    <b-form-input
                      id="sch-name"
                      v-model="schoolData.name"
                      :state="getValidationState(validationContext)"
                      :readonly="userData.permissions.school.edit === false"
                      trim
                    />
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>
  
              <!-- School Type -->
              <b-col
                cols="12"
                md="4"
                class="mb-2"
              >
                <validation-provider
                  #default="validationContext"
                  name="School Type"
                  rules="required"
                >
                  <b-form-group
                    label="School Type"
                    label-for="sch-type"
                    class="mb-2 bolden"
                  >
  
                    <b-form-select
                      v-model="schoolData.type_of"
                      :options="typeOptions"
                      :disabled="userData.permissions.school.edit === false"
                    />
  
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>
  
              <!-- School Owner -->
              <b-col
                cols="12"
                md="4"
              >
                <validation-provider
                  #default="validationContext"
                  name="School Owner"
                  rules="required"
                >
                  <b-form-group
                    label="School Owner"
                    label-for="sch-owner"
                    class="mb-2 bolden"
                  >
                  <!--  <b-form-input
                      id="sch-owner"
                      v-model="schoolData.schOwner"
                      :state="getValidationState(validationContext)"
                      trim
                    />-->
  
                    <b-form-select
                    v-model="schoolData.owner.id"
                    :options="ownerOptions"
                    :disabled="true"
                  />
                    
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>
  
              <!-- Address -->
              <hr/>
  
              <!-- State -->
              <b-col
                cols="12"
                md="4"
              >
                <validation-provider
                  #default="validationContext"
                  name="State of Residence "
                  rules="required"
                >
                  <b-form-group
                    label="State of Residence"
                    label-for="user-state"
                    class="mb-2 bolden"
                  >
                 <!--   <v-select
                    v-model="schoolData.schState"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    :options="stateOptions"
                    :reduce="(val) => val.value"
                    :clearable="false"
                    input-id="user-state"
                    placeholder="Select a State within Nigeria"
                  />-->
  
                  <b-form-select
                    v-model="schoolData.state"
                    :options="stateOptions"
                    :disabled="userData.permissions.school.edit === false"
                  />
  
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>
  
              <!-- LGA -->
              <b-col
                cols="12"
                md="4"
              >
                <validation-provider
                  #default="validationContext"
                  name="LGA of Residence "
                  rules="required"
                >
                  <b-form-group
                    label="LGA of Residence"
                    label-for="user-lga"
                    class="mb-2 bolden"
                  >
                   
  
                   <b-form-select
                    v-model="schoolData.lga"
                    :options="lgaOptions[schoolData.state]"
                    :disabled="userData.permissions.school.edit === false"
                  />
  
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>
  
              <!-- Town -->
              <b-col
                cols="12"
                md="4"
              >
                <validation-provider
                  #default="validationContext"
                  name="Town/city"
                  rules=""
                >
                  <b-form-group
                    label="Town/City"
                    label-for="city"
                    class="mb-2 bolden"
                  >
                    <b-form-input
                      id="city"
                      v-model="schoolData.town"
                      :state="getValidationState(validationContext)"
                      placeholder="Enter your school's town"
                      :readonly="userData.permissions.school.edit === false"
                      trim
                    />
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>
  
              <hr/>
              <!-- Faith -->
              <b-col
                cols="12"
                md="4"
              >
                <validation-provider
                  #default="validationContext"
                  name="Faith"
                  rules="required"
                >
                  <b-form-group
                    label="Faith"
                    label-for="user-faith"
                    class="mb-2 bolden"
                  >
                 <!--   <v-select
                    v-model="schoolData.schFaith"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    :options="schFaithOptions"
                    :reduce="(val) => val.value"
                    :clearable="false"
                    input-id="user-faith"
                    placeholder="Select the Faith of your School"
                  /> -->
  
                    <b-form-select
                      v-model="schoolData.faith"
                      :options="schFaithOptions"
                      :disabled="userData.permissions.school.edit === false"
                    />
  
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>
  
              <!-- Operator -->
              <b-col
                cols="12"
                md="4"
              >
                <validation-provider
                  #default="validationContext"
                  name="Operator"
                  rules="required"
                >
                  <b-form-group
                    label="Operator"
                    label-for="user-operator"
                    class="mb-2 bolden"
                  >
  
                  <b-form-select
                      v-model="schoolData.operator"
                      :options="schOperatorOptions"
                      :disabled="userData.permissions.school.edit === false"
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
                    label-for="user-gender"
                    class="mb-2 bolden"
                  >
                    <!-- <v-select
                    v-model="schoolData.schGender"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    :options="schGenderOptions"
                    :reduce="(val) => val.value"
                    :clearable="false"
                    input-id="user-gender"
                    placeholder="Select the type of Gender your school is composed of."
                  /> -->
  
                  <b-form-select
                        v-model="schoolData.gender"
                        :options="schGenderOptions"
                        :disabled="userData.permissions.school.edit === false"
                      />
  
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>
  
               <!-- Residence -->
              <b-col
                cols="12"
                md="4"
              >
                <validation-provider
                  #default="validationContext"
                  name="Residence"
                  rules="required"
                >
                  <b-form-group
                    label="Residence"
                    label-for="user-residence"
                    class="mb-2 bolden"
                  >
                  <!--   <v-select
                    v-model="schoolData.schResidence"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    :options="schResidenceOptions"
                    :reduce="(val) => val.value"
                    :clearable="false"
                    input-id="user-residence"
                    placeholder="Select the type of Boarding facility does your School use. "
                  /> -->
  
                    <b-form-select
                        v-model="schoolData.residence"
                        :options="schResidenceOptions"
                        :disabled="userData.permissions.school.edit === false"
                      />
  
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>
  
               <!-- Location -->
              <b-col
                cols="12"
                md="4"
              >
                <validation-provider
                  #default="validationContext"
                  name="GPS Location of your School"
                  rules="required"
                >
                  <b-form-group
                    label="GPS Location of your School"
                    label-for="sch-location"
                    class="mb-2 bolden"
                  >
                     <b-form-input
                      id="sch-location"
                      v-model="schoolData.location"
                      type="text"
                      placeholder="Enter the longitude and latitude address of your School e.g (Lat, Long) 5.038963, 7.909470"
                      :state="getValidationState(validationContext)"
                      :readonly="userData.permissions.school.edit === false"
                      trim
                    />
  
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>
  
               <!-- Population -->
              <b-col
                cols="12"
                md="4"
              >
                <validation-provider
                  #default="validationContext"
                  name="Population"
                 
                >
                  <b-form-group
                    label="Population"
                    label-for="sch-population"
                    class="mb-2 bolden"
                  >
                     <b-form-input
                      id="sch-population"
                      v-model="schoolData.population"
                      type="number"
                      placeholder="Enter the Population of the School"
                      :state="getValidationState(validationContext)"
                      :readonly="userData.permissions.school.edit === false"
                      trim
                    />
  
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>
  
              <!-- E-mail -->
              <b-col
                cols="12"
                md="4"
              >
                <validation-provider
                  #default="validationContext"
                  name="E-mail of School"
                  rules="email"
                >
                  <b-form-group
                    label="E-mail of School"
                    label-for="sch-email"
                    class="mb-2 bolden"
                  >
                     <b-form-input
                      id="sch-email"
                      v-model="schoolData.email"
                      type="email"
                      placeholder="Enter your School E-mail"
                      :state="getValidationState(validationContext)"
                      :readonly="userData.permissions.school.edit === false"
                      trim
                    />
  
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>
  
               <!-- Phone -->
              <b-col
                cols="12"
                md="4"
              >
                <validation-provider
                  #default="validationContext"
                  name="Phone number of School"  
                  rules="required"             
                >
                  <b-form-group
                    label="Phone number of School"
                    label-for="sch-phone"
                    class="mb-2 bolden"
                  >
                     <b-form-input
                      id="sch-phone"
                      v-model="schoolData.phone"
                      type="number"
                      placeholder="Enter your School Phone"
                      :state="getValidationState(validationContext)"
                      :readonly="userData.permissions.school.edit === false"
                      trim
                    />
  
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>  
              
               <!-- SRI enabled -->
               <b-col
                cols="12"
                md="6"
              >
                <validation-provider
                  #default="validationContext"
                  name="Is School SRI certified?"             
                >
                  <b-form-group
                    label="Is School SRI certified?"
                    label-for="sch-sri"
                    class="mb-2 bolden"
                  >

                    <b-form-checkbox
                      v-model="schoolData.sri"
                      value="1"
                      class="custom-control-primary"               
                      unchecked-value="0"
                    disabled
                    >
                      {{ schoolData.sri === 1 ? "YES" : "NO" }}
                    </b-form-checkbox>
  
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>  
  
              <!-- Submit Button -->
              <b-col cols="12" v-if="userData.permissions.school.edit === true">
                <b-button
                  variant="success"
                  type="submit"
                >
                  Save School Details
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
  import { avatarText } from '@core/utils/filter'
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
      schoolData: {
        type: Object,
        required: true,
      },
      schoolId: {
        type: String,
        required: true,
      }
    },

    created(){
      console.log("Mounted: " + this.schoolData )
    },


    data() {
  
        let stateOptions = [
          { value: "", text: "Please select your School's state of residence. " },
          { value: "akwaibom", text: "Akwa Ibom state" }
        ];
  
        let ownerOptions = [];
  
        let typeOptions = [
          { value: "", text: "Please select your School's type " },
          { value: "primary", text: "Primary" }, 
          { value: "secondary", text: "Secondary" }
        ];
  
        let schFaithOptions = [
          { value: "", text: "Please select your School's faith. " },
          { value: "christian", text: "Christian" },
          { value: "islamic", text: "Islamic" },
          { value: "neutral", text: "Neutral" }
        ];
       
        let schOperatorOptions = [
          { value: "", text: "Please select your Operator type. " },
          { value: "government", text: "Government" },
          { value: "private-single", text: "Private Single" },
          { value: "private-group", text: "Private Group" }
        ]; 
        
        let schGenderOptions = [
          { value: "", text: "Please select your Gender student type. " },
          { value: "mixed", text: "Mixed" },
          { value: "boys-only", text: "Boys Only" },
          { value: "girls-only", text: "Girls Only" }
        ]; 
  
        let schResidenceOptions = [
          { value: "", text: "Please select if your School has a Boarding Option. " },
          { value: "boarding", text: "Boarding only" },
          { value: "day", text: "Day only" },
          { value: "day-boarding", text: "Day & Boarding" }
        ]; 
  
         let lgaOptions = {
            "akwaibom" : [
                { value: "", text: "Please select an LGA in Akwa Ibom state" },
                { value: "abak", text: "ABAK" },
                { value: "eastern obolo", text: "E. OBOLO" },
                { value: "eket", text: "EKET" },
                { value: "esit eket", text: "E. EKET" },
                { value: "essien udim", text: "E. UDIM" },
                { value: "etim ekpo", text: "E. EKPO" },
                { value: "etinan", text: "ETINAN" },
                { value: "ibeno", text: "IBENO" },
                { value: "ibesikpo asutan", text: "IBESKIPO ASUTAN" },
                { value: "ibiono ibom", text: "IBIONO IBOM" },
                { value: "ika", text: "IKA" },
                { value: "ikono", text: "IKONO" },
                { value: "ikot abasi", text: "IKOT ABASI" },
                { value: "ikot ekpene", text: "IKOT EKPENE" },
                { value: "ini", text: "INI" },
                { value: "itu", text: "ITU" },
                { value: "mbo", text: "MBO" },
                { value: "mkpat enin", text: "MKPAT ENIN" },
                { value: "nsit atai", text: "NSIT ATAI" },
                { value: "nsit ibom", text: "NSIT IBOM" },
                { value: "nsit ubium", text: "NSIT UBIUM" },
                { value: "obot akara", text: "OBOT AKARA" },
                { value: "okobo", text: "OKOBO" },
                { value: "onna", text: "ONNA" },
                { value: "oron", text: "ORON" },
                { value: "oruk anam", text: "ORUK ANAM" },
                { value: "udung uko", text: "UDUNG UKO" },
                { value: "ukana fun", text: "UKANA FUN" },
                { value: "uruan", text: "URUAN" },
                { value: "urue offong oruko", text: "URUE OFFONG ORUKO" }
            ]
         };
  
  
      return {  
        userData: JSON.parse(localStorage.getItem('userData')),
        stateOptions,
        lgaOptions,
        typeOptions,
        schFaithOptions,
        schOperatorOptions,
        schGenderOptions,
        schResidenceOptions,
        ownerOptions,
        logo: null
      }
    },
    
 /*   watch: {
      logo: function (newValue, oldValue) {
          
      }
    },*/

    mounted(){
      this.getOwners();
    },

    methods: {

      onSubmit() {      
        const sef = this;
        this.$refs.refFormObserver.validate().then((success) => {
           if (success){
              sef.$loading(true);
              delete this.schoolData['owner'];
              axios.put( this.baseURL + "/school/" + this.schoolId, this.schoolData , { headers: jwtHeader() })
              .then(async function (response) {
                let content = response.data.data; 
                let status = response.data.success; 
                if (content && status){              
                  await sef.refreshData();                
                  sef.$forceUpdate();
                  sef.$toast({
                    component: ToastificationContent,
                    position: "top-right",
                    props: {
                      title: 'School details updated.',
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
          alert("Error while updating School details.");
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
        axios.put( this.baseURL + "/school/logo/" + this.schoolId, fd, { headers: jwtHeader() })
              .then(async function (response) {
              //  sef.$loading(false);
                await sef.refreshData();
                sef.$forceUpdate();
        })
      },

      getOwners(){
          this.$loading(true);
          const sef = this;
          this.ownerOptions.push({ value:  new String(""), text: "Please select your School's owner " });
          axios.get( this.baseURL + "/misc/allSchoolGroups")
          .then(function (response) {  
                sef.$loading(false);
                let data = response.data;
                let contents = data.data;
                for (let i = 0; i < contents.length; ++i) {
                    sef.ownerOptions.push( { value: Number(contents[i].id), text: contents[i].name } )
                }
          }); 
      }

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
  