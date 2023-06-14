 <template>
    <div>

      <b-form
                class="p-2 myborder"
                @submit.prevent="handleChange()"
                @reset.prevent="resetForm"
              >
        <b-card-body>
          <b-row>
                  <b-col cols="12" md="3">
                    <span> <b> <h3> Choose a Category: </h3> </b> </span>
                  </b-col>

                  <b-col cols="12" md="3">
                    <b-form-group label="Select School" label-for="schoolbasic">
                      <b-form-radio v-model="filters.typeone" @change="changeType"  name="schoolbasic" value="school">School</b-form-radio>
                    </b-form-group>
                  </b-col>

                  <b-col cols="12" md="3">
                    <b-form-group label="Select School Group" label-for="schoolgroup">
                      <b-form-radio v-model="filters.typeone" @change="changeType" name="schoolgroup" value="schoolgroup">School Group</b-form-radio>
                    </b-form-group>
                  </b-col>

                  <b-col cols="12" md="3">
                    <b-form-group label="Select School Zone" label-for="schoolzone">
                      <b-form-radio v-model="filters.typeone" @change="changeType" name="schoolzone" value="zone">Jurisdiction</b-form-radio>
                    </b-form-group>
                  </b-col>
          </b-row>

          <b-row>
                  <b-col cols="12" md="12" v-if=" filters.typeone === 'school' " >
                    <b-form-group label=" Select School " >
                      <b-form-select
                        v-model="filters.typetwo_school"
                        :options="schoolOptions"
                        @change="changeSchool"
                      />
                    </b-form-group>
                  </b-col>
          </b-row>

          <b-row>
                  <b-col cols="12" md="12" v-if=" filters.typeone === 'schoolgroup' " >
                    <b-form-group label=" Select School Group" >
                      <b-form-select
                        v-model="filters.typetwo_schoolgroup"
                        :options="schoolOptions"
                        @change="changeGroup"                       
                      />
                    </b-form-group>
                  </b-col>
          </b-row>

          <b-row>
                  <b-col cols="12" md="12" v-if=" filters.typeone === 'zone' " >
                    <b-form-group label=" Select School Zone" >
                      <b-form-select
                        v-model="filters.typetwo_schoolzone"
                        :options="schoolOptions"
                        @change="changeZone"                       
                      />
                    </b-form-group>
                  </b-col>
          </b-row>

           <b-row>
                  <b-col cols="12" md="12" v-if=" filters.typetwo_school !== null " >
                    <b-form-group label=" Select School Evaluation " >
                      <b-form-select
                        v-model="filters.typethree"
                        :options="evaluationOptions"
                      />
                    </b-form-group>
                  </b-col>
          </b-row>
          
          <b-row>
                  <b-col cols="12" md="3">
                    <span> <b> <h2> Select Type of List: </h2> </b> </span>
                  </b-col>

                  <b-col cols="12" md="3">
                    <b-form-group >
                      <b-form-radio v-model="filters.typefour" @change="changeList"  name="fullist" value="fulllist">Full List</b-form-radio>
                    </b-form-group>
                  </b-col>

                  <b-col cols="12" md="3">
                    <b-form-group >
                      <b-form-radio v-model="filters.typefour" @change="changeList" name="subarea" value="subarea">Sub-AREA</b-form-radio>
                    </b-form-group>
                  </b-col>

                  <b-col cols="12" md="3">
                    <b-form-group>
                      <b-form-radio v-model="filters.typefour" @change="changeList" name="area" value="area">AREA</b-form-radio>
                    </b-form-group>
                  </b-col>
          </b-row>      

          <b-row class="filter-padding" align-h="center" >
            <b-col
              cols="12"
              md="8"
              class="mb-md-0 mb-2 align-center"
            >
                  <b-button variant="success" class="mr-2 col-md-12" type="submit">
                    Filter Evaluation Listing
                  </b-button> 

            </b-col>            
          </b-row>
        </b-card-body>

      </b-form>
  
      <!-- Table Container Card -->
     <b-card-code title="Evaluation Results" class="my-4 mx-1"> 
        
            <button v-if="isSchool"
                type="button"
                class="btn btn-outline-secondary waves-effect waves-float waves-light"
                style="position: relative"
                @click="getEvaluationValues('Core Processes')"
                >
               Core Processes
            </button>
            <button
                v-if="isSchool"
                type="button"
                class="btn btn-outline-secondary waves-effect waves-float waves-light"
                style="position: relative"
                @click="getEvaluationValues('Instructor Resource')"
                >
               Instructor Resource
            </button>
            <button
                v-if="isSchool"
                type="button"
                class="btn btn-outline-secondary waves-effect waves-float waves-light"
                style="position: relative"
                @click="getEvaluationValues('Learning Environment')"
                >
                Learning Environment
            </button>
            <button
                v-if="isSchool"
                type="button"
                class="btn btn-outline-secondary waves-effect waves-float waves-light"
                style="position: relative"
                @click="getEvaluationValues('Total Student Development')"
                >
                Total Student Development
            </button>  

            <button
                v-if="isSchool"
                type="button"
                class="btn btn-outline-secondary waves-effect waves-float waves-light"
                style="position: relative"
                @click="getEvaluationValues('Sustainability')"
                >
                Sustainability
            </button>
            <button
                v-if="isSchool"
                type="button"
                class="btn btn-outline-secondary waves-effect waves-float waves-light"
                style="position: relative"
                @click="getEvaluationValues('Academic Performance')"
                >
                Academic Performance
            </button>

            <button
                v-if="isSchool"
                type="button"
                class="btn btn-outline-secondary waves-effect waves-float waves-light"
                style="position: relative"
                @click="getEvaluationValues('Safety, Health, Environment, Security')"
                >
                Safety, Health, Environment, Security
            </button>

            <b-table            
              class="position-relative"
              :items="evaluationlistItems"
              :busy="isLoading"
              responsive
              :fields="dynamicFields"
            >
                <template #table-busy>
                  <div class="text-center text-danger my-2">
                    <b-spinner class="align-middle"></b-spinner>
                    <strong>Loading...</strong>
                  </div>
                </template>

                <template #cell(performance)="data">
                   <b> {{ data.item.performance }} % </b>
                </template>

            </b-table>

      </b-card-code>

    </div>

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
    BFormCheckbox,
    BFormRadio,
    BFormRadioGroup,
    VBToggle
  } from 'bootstrap-vue';
  import BCardCode from '@core/components/b-card-code'
  import StatisticCardHorizontal from "@core/components/statistics-cards/StatisticCardHorizontal.vue";
  import vSelect from 'vue-select'
  import router from '@/router'
  import axios from "axios";
  import store from '@/store'
  import { ref, onUnmounted ,onMounted, watch } from '@vue/composition-api'
  import { avatarText } from '@core/utils/filter'
  import formValidation from '@core/comp-functions/forms/form-validation'
  import { $themeConfig } from "@themeConfig";

  import useEvaluation from './useEvaluation'
  import evaluationStoreModule from './evaluationStoreModule'


  export default {
    directives: {
      'b-toggle': VBToggle
    },
    components: {    
      StatisticCardHorizontal,
      BCardHeader, 
      BCardBody,
      BCard,
      BCardCode,
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
      BFormRadio,
      BFormRadioGroup,
      vSelect
    },

    data() {    

        let schoolOptions = [
            { value: null, label: "Please select School" }
        ]

        let evaluationOptions = [
            { value: null, label: "Please select An Evaluation" }
        ]
            
        return {          
           schoolOptions,
           evaluationOptions
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

      const storedItems = JSON.parse(localStorage.getItem('userData'));
      if (storedItems){
        userData.value = storedItems;
      }     
      
      const {     
         
        isLoading,     
        
        filters,

        tableColumnsTwo,

        evaluationlistItems,

        evaluationTempList,

        dynamicFields,

        isArea,

        isSubArea,

        isSchool,

        handleChange

      } = useEvaluation();

      onMounted(() => {
          setTimeout(() => {
           
           //fetchOneRoundInEvaluation(evaluation);   
          
          }, 800)       
      })
      
      return {
        
        isLoading,
        
        filters,

        tableColumnsTwo,

        evaluationlistItems,

        evaluationTempList,

        userData,

        Evaluation_APP_STORE_MODULE_NAME,

        baseURL,

        dynamicFields,

        isArea,

        isSubArea,

        isSchool,

        handleChange

      }
    },

    methods: {  

        changeType(value){
            const sef = this;  
            let userid = this.userData.id;            
            sef.schoolOptions = [];
            if (value === "school"){
                sef.isLoading = true;
                store.dispatch(`${this.Evaluation_APP_STORE_MODULE_NAME}/fetchSchools`, { user : userid })
                .then(response => { 
                    let myval = response.data.data;
                    myval.forEach(obj => {
                        sef.schoolOptions.push( { value: obj.school.schId , text: obj.school.name } )
                    }); 
                    sef.isLoading = false;
                });
            }
            
            else if (value === "schoolgroup"){
                sef.isLoading = true;
                store.dispatch(`${this.Evaluation_APP_STORE_MODULE_NAME}/fetchSchoolGroups`, { user : userid })
                .then(response => { 
                    let myval = response.data.data;
                    myval.forEach(obj => {
                        sef.schoolOptions.push( { value: String(obj.school.owner.name).toLowerCase() , text: obj.school.owner.name } )
                    }); 
                    sef.isLoading = false;
                });
            } 

            else if (value === "zone"){
                sef.isLoading = true;
                store.dispatch(`${this.Evaluation_APP_STORE_MODULE_NAME}/fetchSchoolZones`, { user : userid })
                .then(response => { 
                    let myval = response.data.data;
                    myval.forEach(obj => {
                        sef.schoolOptions.push( { value: String(obj.school.jurisdiction).toLowerCase() , text: obj.school.jurisdiction } )
                    }); 
                    sef.isLoading = false;
                });
            } 
        },

        changeSchool(value){
            const sef = this;  
            let userid = this.userData.id;
            sef.evaluationOptions = [];
            sef.isLoading = true;

            this.filters.typetwo_schoolzone = null
            this.filters.typetwo_schoolgroup = null

            store.dispatch(`${this.Evaluation_APP_STORE_MODULE_NAME}/fetchRounds`, { user : userid, school: value, complete: true  })
            .then(response => { 
                let myval = response.data.data;
                myval.forEach(obj => {
                    sef.evaluationOptions.push( { value: obj.roundId , text: "Round-" + obj.round + "-" + obj.school.name + "-" + obj.createdAt } )
                }); 
                sef.isLoading = false;            
            });
        },

        changeGroup(value){
            this.filters.typethree = "group"
            this.filters.typetwo_school = null
            this.filters.typetwo_schoolzone = null
        },

        changeZone(value){
            this.filters.typethree = "zone"
            this.filters.typetwo_school = null
            this.filters.typetwo_schoolgroup = null
        },

        changeList(value){
            const sef = this;  
            
            if (value === "fulllist"){               
              sef.isSchool = true;
              sef.isSubArea = false;
              sef.isArea = false;
            }  
            
            else if (value === "subarea"){               
              sef.isSchool = false;
              sef.isSubArea = true;
              sef.isArea = false;
            } 

            else if (value === "area"){               
              sef.isSchool = false;
              sef.isSubArea = false;
              sef.isArea = true;
            } 
        },

        getEvaluationValues(value){           
          const sef = this; 
          //console.log("Filtered full list number:" + sef.evaluationTempList )
          let evaluationfiltered = this.evaluationTempList.filter( eva => eva.area === value );
         // console.log("Filtered broken list number:" + evaluationfiltered.length )
          this.evaluationlistItems  = evaluationfiltered;
        }

    }

  } 
  </script>

  <style lang="scss" scoped>
  .myborder{
    border: 1px darkgray dotted;
  }
  </style>