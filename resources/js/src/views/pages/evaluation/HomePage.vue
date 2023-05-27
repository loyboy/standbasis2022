<template>
    <div class="container">

                            <template v-if=" isLoading === true ">
                                <div class="text-center text-danger my-2">
                                <b-spinner class="align-middle"></b-spinner>
                                <strong>Loading...</strong>
                                </div>
                            </template>       
        <b-card>
            <b-card-header>
                <h4> Standbasis Evaluator Page</h4>
            </b-card-header>
            <b-card-body class="text-center">
                <b-form @submit.prevent="submitForm">

                    <b-form-group label="Select An Exisitng Evaluation/Create a new Evaluation">
                        <b-form-select v-model="roundItem" :options="roundOptions"></b-form-select>
                    </b-form-group>

                    <b-button type="submit" v-if=" roundItem === null " variant="success" class="my-1 col-md-12">Create New If Non-Exists</b-button>
                    <b-button type="submit" v-if=" roundItem !== null " variant="secondary" class="my-1 col-md-12"> View This Round </b-button>
                </b-form>
            </b-card-body>          

        </b-card>
    </div>

     <!-- <div>
              <b-card>
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button variant="info" v-b-toggle.collapse1  block >
                    Section 1
                  </b-button>
                </b-card-header>
                <b-collapse id="collapse1" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-table :items="section1Items" :fields="fields"></b-table>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card>
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button v-b-toggle.collapse2 block variant="info">
                    Section 2
                  </b-button>
                </b-card-header>
                <b-collapse id="collapse2" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-table :items="section2Items" :fields="fields"></b-table> 
                  </b-card-body>
                </b-collapse>
              </b-card>
     </div> -->

     
</template>
  
<script>
  import {
    BCardHeader, 
    BCardBody,
    BCard,
    BCardTitle,
    BRow,
    BCol,
    BCollapse,
    BFormInput,
    BFormGroup,
    BButton,
    BSpinner,
    BTable,
    BSidebar,
    BForm,
    BFormText,
    BMedia,
    BAvatar,
    BFormSelect,
    BFormTags,
    BCardText,
    BFormDatepicker,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,
    BFormCheckbox
  } from 'bootstrap-vue';
  import StatisticCardHorizontal from "@core/components/statistics-cards/StatisticCardHorizontal.vue";
  import vSelect from 'vue-select'
  import router from '@/router'
  import axios from "axios";
  import store from '@/store'
  import { ref, onUnmounted ,onMounted, watch } from '@vue/composition-api'
  import { avatarText } from '@core/utils/filter'
  import formValidation from '@core/comp-functions/forms/form-validation'
  import { $themeConfig } from "@themeConfig";
  
  // Notification
  import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
  import jwtHeader from "@core/services/jwt-header";
  import useEvaluation from './useEvaluation'
  import evaluationStoreModule from './evaluationStoreModule'


  export default {
   
    components: {    
      StatisticCardHorizontal,
      BCardHeader, 
      BCardBody,
      BCard,
      BCardTitle,
      BRow,
      BCol,
      BCollapse,
      BFormInput,
      BFormGroup,
      BButton,
      BSpinner,
      BTable,
      BSidebar,
      BForm,
      BFormText,
      BFormTags,
      BMedia,
      BAvatar,
      BFormSelect,
      BCardText,
      BFormDatepicker,
      BLink,
      BBadge,
      BDropdown,
      BDropdownItem,
      BPagination,
      BFormCheckbox,
      vSelect
    },

    data() {     
        let roundItem = null;       
        return {  
          roundItem
        }
    },

    setup() {
      const { refFormObserver, getValidationState, resetForm } = formValidation(() => {})
      const Evaluation_APP_STORE_MODULE_NAME = 'app-Evaluation';
      const { baseURL } = $themeConfig.app; 

      // Register module
      if (!store.hasModule(Evaluation_APP_STORE_MODULE_NAME)) store.registerModule(Evaluation_APP_STORE_MODULE_NAME, evaluationStoreModule)
  
      // UnRegister on leave
      onUnmounted(() => {
        if (store.hasModule(Evaluation_APP_STORE_MODULE_NAME)) store.unregisterModule(Evaluation_APP_STORE_MODULE_NAME)
      })  
      
      const userData = ref({}); 
      const roundOptions = ref([  { value: null, text: "Please select Evaluation You wish to View" } ]);     

      const storedItems = JSON.parse(localStorage.getItem('userData'));
      if (storedItems){
        userData.value = storedItems;
      }

      const findIfEvaisPresent = ( userData.value.role === "evaluator"  );
      
      const {
        fetchRoundsInEvaluation,
        
        isLoading,
        
        handleChange,

        filters,

        roundItems

      } = useEvaluation();

        if(  findIfEvaisPresent  ){
          filters.value.schoolId =  userData.value ? userData.value.sch_id : null;
          filters.value.userId =  userData.value ? userData.value.id : null;
        }

      onMounted(() => {
          fetchRoundsInEvaluation();
          setTimeout(() => {
            roundItems.value.forEach(obj => {  
               // date - School - zone           
               roundOptions.value.push( { value: obj.roundId , text: "Round-" + obj.round + "-" + obj.school.name } );
            });
          }, 1000)       
      })
      
      return {
        
        isLoading,
  
        fetchRoundsInEvaluation,

        handleChange,
        
        filters,
       
        roundItems,

        userData,

        roundOptions,

        Evaluation_APP_STORE_MODULE_NAME,

        baseURL

      }
    },

    methods: {   

        submitForm(){
          const sef = this;
          sef.isLoading = true
          if(this.roundItem === null){
              // create a new round
              store.dispatch("app-Evaluation/createRound", { userid: sef.filters.userId, school: sef.filters.schoolId } )
              .then(response => { 
                   // console.log("A new round has been created ? " + response.data.success );
                    sef.$router.replace( { name: 'evaluation-round', params: { evaluation: response.data.data  } } ); 
                    sef.isLoading = false                      
              });
          }
          else{
              this.$router.replace( { name: 'evaluation-round', params: { evaluation: this.roundItem } } ); 
          }
        }

    }

  }
  </script>
  
  <style lang="scss" scoped>
  .per-page-selector {
    width: 90px;
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
   }

  </style>
  
  <style lang="scss">
  @import '~@core/scss/vue/libs/vue-select.scss';
  </style>
  