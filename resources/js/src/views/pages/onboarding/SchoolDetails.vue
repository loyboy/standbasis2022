<template>
  <validation-observer
    #default="{ handleSubmit }"
    ref="refFormObserver"
  >
    <b-form
      class="list-view product-checkout"
      @submit.prevent="handleSubmit(onSubmit)"
    >
      <!--First Row -->
      <div class="customer-card">
        <b-card title="Step 1">
          <b-card-text class="mb-0 bolden">
            Step 1
          </b-card-text>
          <b-card-text class="mb-0 bolden">Enter your school details in this step.</b-card-text>
        </b-card>
      </div>

      <!-- Second Column -->
      <b-card no-body name="school form">

        <b-card-header class="flex-column align-items-start">
          <b-card-title> School Details </b-card-title>
          <b-card-text class="text-muted mt-25">
            Please enter the school details of your Institution
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
                    v-model="schoolDetails.schName"
                    :state="getValidationState(validationContext)"
                    trim
                  />
                  <b-form-invalid-feedback>
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>

            <!-- State of Residence -->
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
                  v-model="schoolDetails.schState"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  :options="stateOptions"
                  :reduce="(val) => val.value"
                  :clearable="false"
                  input-id="user-state"
                  placeholder="Select a State within Nigeria"
                />-->

                <b-form-select
                  v-model="schoolDetails.schState"
                  :options="stateOptions"
                />

                  <b-form-invalid-feedback>
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>            

             <!-- School Jurisdiction -->
             <b-col
              cols="12"
              md="4"
              class="mb-2"
            >
              <validation-provider
                #default="validationContext"
                name="School Jurisdiction"
                rules="required"
              >
                <b-form-group
                  label="School Jurisdiction"
                  label-for="sch-type"
                  class="mb-2 bolden"
                >

                  <b-form-select
                    v-model="schoolDetails.schType"
                    :options="filteredTypeOptions"
                    @change="handleJurisdiction"
                  />

                  <b-form-invalid-feedback>
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>

            <!-- School Zone -->
            <b-col
              cols="12"
              md="4"
              class="mb-2"
            >
              <validation-provider
                #default="validationContext"
                name="School Zone"
                rules="required"
              >
                <b-form-group
                  label="School Zone"
                  label-for="sch-zone"
                  class="mb-2 bolden"
                >

                  <b-form-select
                    v-model="schoolDetails.schZone"
                    :options="filteredZoneOptions"
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
                    v-model="schoolDetails.schOwner"
                    :state="getValidationState(validationContext)"
                    trim
                  />-->

                  <b-form-select
                  v-model="schoolDetails.schOwner"
                  :options="ownerOptions"
                />
                  
                  <b-form-invalid-feedback>
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>

            <!-- Address -->
            <hr/>

            <!-- School Type -->
            <b-col
              cols="12"
              md="4"
            >
              <validation-provider
                #default="validationContext"
                name="School Type"
                rules="required"
              >
                <b-form-group
                  label="School Type"
                  label-for="user-school-type"
                  class="mb-2 bolden"
                >
                <b-form-select
                  v-model="schoolDetails.schType2"
                  :options="schTypeOptions"
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
                  v-model="schoolDetails.schLga"
                  :options="lgaOptions[schoolDetails.schState]"
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
                    v-model="schoolDetails.schTown"
                    :state="getValidationState(validationContext)"
                    placeholder="Enter your school's town"
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
                  v-model="schoolDetails.schFaith"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  :options="schFaithOptions"
                  :reduce="(val) => val.value"
                  :clearable="false"
                  input-id="user-faith"
                  placeholder="Select the Faith of your School"
                /> -->

                  <b-form-select
                    v-model="schoolDetails.schFaith"
                    :options="schFaithOptions"
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
                    v-model="schoolDetails.schOperator"
                    :options="schOperatorOptions"
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
                  v-model="schoolDetails.schGender"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  :options="schGenderOptions"
                  :reduce="(val) => val.value"
                  :clearable="false"
                  input-id="user-gender"
                  placeholder="Select the type of Gender your school is composed of."
                /> -->

                <b-form-select
                      v-model="schoolDetails.schGender"
                      :options="schGenderOptions"
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
                  v-model="schoolDetails.schResidence"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  :options="schResidenceOptions"
                  :reduce="(val) => val.value"
                  :clearable="false"
                  input-id="user-residence"
                  placeholder="Select the type of Boarding facility does your School use. "
                /> -->

                  <b-form-select
                      v-model="schoolDetails.schResidence"
                      :options="schResidenceOptions"
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
                    v-model="schoolDetails.schLocation"
                    type="text"
                    placeholder="Enter the longitude and latitude address of your School e.g (Lat, Long) 5.038963, 7.909470"
                    :state="getValidationState(validationContext)"
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
                    v-model="schoolDetails.schPopulation"
                    type="number"
                    placeholder="Enter the Population of the School"
                    :state="getValidationState(validationContext)"
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
                    v-model="schoolDetails.schEmail"
                    type="email"
                    placeholder="Enter your School E-mail"
                    :state="getValidationState(validationContext)"
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
                    v-model="schoolDetails.schPhone"
                    type="number"
                    placeholder="Enter your School Phone"
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
            <b-col cols="12">
              <b-button
                variant="primary"
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
import { $themeConfig } from "@themeConfig";
import axios from "axios";

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
    schoolDetails: {
      type: Object,
      required: true,
    },
  },

  data() {

      let stateOptions = [
        { value: "", text: "" },
        { value: "01", text: "Akwa Ibom state" },
        { value: "02", text: "Lagos state" },
        { value: "03", text: "Abia state" },
        { value: "04", text: "FCTA" }
      ];

      let zoneOptions = [
        { value: "", text: "" },
        { value: "zoneA", text: "Zone A" },
        { value: "zoneB", text: "Zone B" },
        { value: "zoneC", text: "Zone C" },
        { value: "zoneD", text: "Zone D" },
        { value: "zoneE", text: "Zone E" },
        { value: "zoneF", text: "Zone F" },
        { value: "zoneG", text: "Zone G" },
        { value: "zoneH", text: "Zone H" },
        { value: "zoneI", text: "Zone I" },
        { value: "zoneJ", text: "Zone J" },
        { value: "zoneK", text: "Zone K" },
        { value: "zoneL", text: "Zone L" },
        { value: "zoneM", text: "Zone M" },
        { value: "zoneN", text: "Zone N" },
        { value: "zoneO", text: "Zone O" },
        { value: "zoneP", text: "Zone P" },
      ];

      let zoneOptionsFct = [
        { value: "", text: "" },
        { value: "urban"  , text: "Urban" },
        { value: "rural"  , text: "Rural" },
        { value: "private", text: "Private" }
      ];

      let ownerOptions = [];

      let typeOptions = [
        { value: "", text: "" },
        { value: "subeb", text: "SUBEB" }, 
        { value: "semb", text: "SEMB" },
       /* { value: "subeb+semb", text: "Junior Secondary School & Senior Secondary School (SUBEB & SEMB)" },
        { value: "tveb", text: "Technical and Vocational School (TVEB)" }*/
      ];

      let typeOptionsFct = [
        { value: "", text: "" },
        { value: "fctubeb", text: "FCTUBEB" }, 
        { value: "fctseb" , text: "FCTSEB"  }
      ];

      let schFaithOptions = [
        { value: "", text: "" },
        { value: "christian", text: "Christian" },
        { value: "islamic", text: "Islamic" },
        { value: "neutral", text: "Neutral" }
      ];
     
      let schOperatorOptions = [
        { value: "", text: "" },
        { value: "government", text: "Government" },
        { value: "private-single", text: "Private" }        
      ]; 

      let schTypeOptions = [
        { value: "", text: "" },
        { value: "js", text: "Junior Secondary School" },
        { value: "ss", text: "Senior Secondary School" }        
      ]; 
      
      let schGenderOptions = [
        { value: "", text: "" },
        { value: "mixed", text: "Mixed" },
        { value: "boys-only", text: "Boys Only" },
        { value: "girls-only", text: "Girls Only" }
      ]; 

      let schResidenceOptions = [
        { value: "", text: "" },
        { value: "boarding", text: "Boarding only" },
        { value: "day", text: "Day only" },
        { value: "day-boarding", text: "Day & Boarding" }
      ]; 

       let lgaOptions = {
          "01" : [
              { value: "", text: "" },
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
              { value: "urue offong oruko", text: "URUE OFFONG ORUKO" },
              { value: "uyo", text: "UYO" }
          ],
          "02": [
            { value: "", text: "" },
            { value: "agege", text: "AGEGE" },
            { value: "alimosho", text: "ALIMOSHO" },
            { value: "apapa", text: "APAPA" },
            { value: "ifako-ijaye", text: "IFAKO-IJAYE" },
            { value: "ikeja", text: "IKEJA" },
            { value: "kosofe", text: "KOSOFE" },
            { value: "mushin", text: "MUSHIN" },
            { value: "oshodi-isolo", text: "OSHODI-ISOLO" },
            { value: "shomolu", text: "SHOMOLU" },
            { value: "eti-osa", text: "ETI-OSA" },
            { value: "lagos-island", text: "LAGOS ISLAND" },
            { value: "lagos-mainland", text: "LAGOS MAINLAND" },
            { value: "surulere", text: "SURULERE" },
            { value: "ojo", text: "OJO" },
            { value: "ajeromi-ifelodun", text: "AJEROMI-IFELODUN" },
            { value: "amuwo-odofin", text: "AMUWO-ODOFIN" },
            { value: "badagry", text: "BADAGRY" },
            { value: "ikorodu", text: "IKORODU" },
            { value: "ibeju-lekki", text: "IBEJU-LEKKI" },
            { value: "epe", text: "EPE" }
          ],
          "03": [
            { value: "", text: "" },
            { value: "aba-north", text: "ABA NORTH" },
            { value: "aba-south", text: "ABA SOUTH" },
            { value: "arochukwu", text: "AROCHUKWU" },
            { value: "bende", text: "BENDE" },
            { value: "ikwuano", text: "IKWUANO" },
            { value: "isiala-ngwa-north", text: "ISIALA NGWA NORTH" },
            { value: "isiala-ngwa-south", text: "ISIALA NGWA SOUTH" },
            { value: "isiukwuato", text: "ISIUKWUATO" },
            { value: "obingwa", text: "OBINGWA" },
            { value: "ohafia", text: "OHAFIA" },
            { value: "osisioma-ngwa", text: "OSISIOMA NGWA" },
            { value: "ugwunagbo", text: "UGWUNAGBO" },
            { value: "ukwa-east", text: "UKWA EAST" },
            { value: "ukwa-west", text: "UKWA WEST" },
            { value: "umuahia-north", text: "UMUAHIA NORTH" },
            { value: "umuahia-south", text: "UMUAHIA SOUTH" },
            { value: "umu-neochi", text: "UMU NNEOCHI" }
        ],
          "04": [
            { value: "buari-municipal", text: "Buari Municipal" },
            { value: "amac" , text: "Amac" },
            { value: "abaji", text: "Abaji" },
            { value: "kuje" , text: "Kuje" },
            { value: "kwali" , text: "Kwali" },
            { value: "gwagwalada" , text: "Gwagwalada" }
          ]
       };


    return {  
      stateOptions,
      zoneOptions,
      zoneOptionsFct,
      lgaOptions,
      typeOptions,
      typeOptionsFct,
      schTypeOptions,
      schFaithOptions,
      schOperatorOptions,
      schGenderOptions,
      schResidenceOptions,
      ownerOptions
    }
  },
  mounted(){
    this.getOwners();
  },
  computed: {
    filteredTypeOptions() {
      if (this.schoolDetails.schState === "04") {
        return this.typeOptionsFct;
      }
      return this.typeOptions;
    },
    filteredZoneOptions() {
      if (this.schoolDetails.schState === "04") {
        return this.zoneOptionsFct;
      }
      return this.zoneOptions;
    },
  },
  methods: {
    onSubmit() {      
      this.$refs.refFormObserver.validate().then((success) => {
        this.$emit('next-step',"sch-details");  
      }).catch((error) => {
        this.schoolDetails.schFilled = false;
      });     
    },
    handleJurisdiction(value){
      if(value === "subeb" || value === "fctubeb"){
        this.schTypeOptions = [];
        this.schTypeOptions = [{ value: "js", text: "Junior Secondary School" }];
      }
      else if(value === "semb" || value === "fctseb"){
        this.schTypeOptions = [];
        this.schTypeOptions = [{ value: "ss", text: "Senior Secondary School" }];
      }
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
