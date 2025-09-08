<template>
    <div>  
        <div class="row">        

          <b-sidebar
            id="add-new-user-sidebar"
            :visible="isLessonnoteSidebarActive"
            bg-variant="white"
            sidebar-class="sidebar-md"
            shadow
            backdrop
            no-header
            right
          >
            <template >
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
                <h5 class="mb-0">Advanced Filter</h5>

                <feather-icon
                  class="ml-1 cursor-pointer"
                  icon="XIcon"
                  size="16"
                  @click="isLessonnoteSidebarActive = false"
                />
              </div>

              <b-form
                class="p-2"
                @submit.prevent="handleChange()"
                @reset.prevent="resetForm"
              >
                <b-row>

                  <b-col cols="12" md="12" v-if=" userData.role === 'proprietor'">
                    <b-form-group label="Select school" label-for="school">
                      <b-form-select
                        v-model="filters.schoolId"
                        :options="schoolOptions"
                        @change="loadOtherValues"
                      />
                    </b-form-group>
                  </b-col>

                  <b-col cols="12" md="12" v-if=" userData.role === 'proprietor' ||  userData.role === 'principal' ">
                    <b-form-group label="Select teacher" label-for="teacher">
                      <b-form-select
                        v-model="filters.teacherId"
                        :options="teacherOptions"
                        @change="teacherGrab"
                      />
                    </b-form-group>
                  </b-col>
                  <br/> 

                  <b-col cols="12" md="12" v-if=" userData.role === 'proprietor' ||  userData.role === 'principal' ||  userData.role === 'teacher' ">
                    <b-form-group label="Select a class" label-for="classes">
                      <b-form-select
                        v-model="filters.classIndex"
                        :options="classOptions"
                        @change="classGrab"
                      />
                    </b-form-group>
                  </b-col>
                  <br/>

                  <b-col cols="12" md="12" v-if=" userData.role === 'proprietor' ||  userData.role === 'principal' ||  userData.role === 'teacher' ">
                    <b-form-group label="Select a Calendar Period" label-for="calendar">
                      <b-form-select
                        v-model="filters.calendarId"
                        :options="calendarOptions"
                        @change="calendarGrab"
                      />
                    </b-form-group>
                  </b-col>
                  <br/>

                  <b-col cols="12" md="12" v-if=" userData.role === 'proprietor' ||  userData.role === 'principal' ||  userData.role === 'teacher' ">
                      <b-form-group label="Select a Subject" label-for="subject">
                        <b-form-select
                          v-model="filters.subjectId"
                          :options="subjectOptions"
                          @change="subjectGrab"
                        />
                      </b-form-group>
                  </b-col>
                  <br/>

                  <b-col cols="12" md="12" v-if=" userData.role === 'proprietor' ||  userData.role === 'principal' ||  userData.role === 'teacher' ">
                      <b-form-group label="Select a Student" label-for="student">
                        <v-select
                                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                                    :v-model="filters.studentId"
                                    :options="studentOptions"
                                    :clearable="false"
                                    @change="studentGrab"
                                  />
                      </b-form-group> 
                  </b-col>
                  <br/>

                  <b-col cols="12" md="12" v-if=" userData.role === 'proprietor' ||  userData.role === 'principal' ||  userData.role === 'teacher' ">
                      <b-form-group label="Select score range" label-for="score">
                        <b-form-select
                          v-model="filters.scoreRange"
                          :options="scoreOptions"
                          @change="scoreGrab"
                        />
                      </b-form-group>
                  </b-col>
                  <br/>

                  <b-col cols="12" md="12" v-if=" userData.role === 'proprietor' ||  userData.role === 'principal' ||  userData.role === 'teacher' ">
                      <b-form-group label="Select assessment Type" label-for="type">
                        <b-form-select
                          v-model="filters.assessType"
                          :options="typeOptions"
                          @change="typeGrab"
                        />
                      </b-form-group>
                  </b-col>
                  <br/>

                  <b-col cols="12" md="12" v-if=" userData.role === 'proprietor' ||  userData.role === 'principal' ||  userData.role === 'teacher' ">
                    <b-form-group label="From" label-for="from">
                      <b-form-datepicker
                        id="from"
                        v-model="filters.dateFrom"
                        placeholder="Choose a date"
                        local="en"
                        initial-date="2023-01-01"
                      />
                    </b-form-group>
                  </b-col>

                  <b-col cols="12" md="12" v-if=" userData.role === 'proprietor' ||  userData.role === 'principal' ||  userData.role === 'teacher' ">
                    <b-form-group label="To" label-for="to">
                      <b-form-datepicker
                        id="to"
                        v-model="filters.dateTo"
                        placeholder="Choose a date"
                        local="en"
                        initial-date="2023-01-01"
                      />
                    </b-form-group>
                  </b-col>
                </b-row>

                <b-row class="filter-padding">
                  <b-button variant="success" class="mr-2 col-md-12" type="submit">
                    Filter Page
                  </b-button>

                  <b-button
                    type="button"
                    class="mr-2 col-md-12"
                    variant="dark"
                    @click="reset"
                  >
                    Reset
                  </b-button>
                </b-row>
              </b-form>

            </template>
          </b-sidebar>
          
          <b-col lg="4" sm="6">
            <statistic-card-horizontal
              icon="UsersIcon"
              color="primary"
              :statistic=" totalLessonnotes === undefined ? 0 : totalLessonnotes "
              statistic-title="Total"
            />
          </b-col>

          <b-col lg="4" sm="6">
            <statistic-card-horizontal
              icon="UserCheckIcon"
              color="success"
              :statistic="
                totalActiveLessonnotes === undefined ? 0 :totalActiveLessonnotes
              "
              statistic-title=">= 50% Score"
            />
          </b-col>

          <b-col lg="4" sm="6">
            <statistic-card-horizontal
              icon="UserMinusIcon"
              color="danger"
              :statistic="
                totalInactiveLessonnotes === undefined ? 0 : totalInactiveLessonnotes
              "
              statistic-title="< 50% Score"
            />
          </b-col>

        </div>

        <div class="row mt-2 mb-4"> 
          <b-col lg="12" sm="6">

            <b-form-tags
                input-id="tags-pills"
                v-model="searchValues"
                tag-variant="warning"
                tag-pills
                size="lg"
                placeholder="Search items will appear here...."
                separator=" "
                no-add-on-enter
                :disabled="true"
            >
            </b-form-tags>

          </b-col>
        </div>
  
        <!-- Table Container Card -->
        <b-card
          no-body
          class="mb-0"
        >    

         

          <ve-table
              ref="refLessonnoteListTable"
              :max-height="500"
              :fixed-header="true"
              :columns="tableColumns"
              :table-data="LessonnoteItems"
              :editOption="editOption"
              :row-style-option="rowStyleOption"
              row-key-field-name="id"
              :virtual-scroll-option="{enable:true}"

              border-y
          />  

          

        </b-card>
       
    </div>
</template>
  
  <script>
  import {
    BCard,
    BRow,
    BCol,
    BModal,
    BFormInput,
    BFormGroup,
    BButton,
    BSpinner,
    BTable,
    BSidebar,
    BForm,
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
  } from 'bootstrap-vue';
  import StatisticCardHorizontal from "@core/components/statistics-cards/StatisticCardHorizontal.vue";
  import vSelect from 'vue-select'
  import router from '@/router' 
  import store from '@/store'
  import { ref, onUnmounted ,onMounted, watch } from '@vue/composition-api'

  import formValidation from '@core/comp-functions/forms/form-validation'
  // Notification
  import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
  import useLessonnoteList from './useLessonnoteList'
  import lessonnoteStoreModule from './lessonnoteStoreModule'
  
  export default {
    components: {
    
      StatisticCardHorizontal,
      BCard,
      BRow,
      BCol,
      BModal,
      BFormInput,
      BFormGroup,
      BButton,
      BSpinner,
      BTable,
      BSidebar,
      BForm,
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
  
      vSelect
    },

    data() {
      
      let teacherOptions = [
       // { value: null, text: "Please select Teacher" }
      ]

      let classOptions = [
      //  { value: null, text: "Please select Class" }
      ]

      let calendarOptions = [
      //  { value: null, text: "Please select Calendar" }
      ]

      let subjectOptions = [
      //  { value: null, text: "Please select A Subject" }
      ]

      let studentOptions = [
       // { value: null, text: "Please select A Student" }
      ]

      let typeOptions = [
       // { value: null, text: "Please select An Assessment Type" }
      ]

      let scoreOptions = [
       // { value: null, text: "Please select A Score Range" }
      ]

      let modalTitleClasswork, modalTitleHomework, modalTitleTest, modalTitleMid, modalTitleFinal = "";

      let assessmentPicked = null;

      return {  
         classwork_max: 100,
         classwork_actual: 0,
         homework_max: 100,
         homework_actual: 0,
         test_max: 100,
         test_actual: 0,
         mid_max: 100,
         mid_actual: 0,
         final_max: 100,
         final_actual: 0,

         teacherOptions,
         classOptions,
         calendarOptions,
         subjectOptions,
         studentOptions,
         typeOptions,
         scoreOptions,

         modalTitleClasswork,
         modalTitleHomework,
         modalTitleTest,
         modalTitleMid,
         modalTitleFinal,
         assessmentPicked,

         rowStyleOption: {
                    clickHighlight: false,
                    hoverHighlight: false,
         },
         editOption: {
              // enable editing
              showIcon: true,
              // edit mode: 'cell' | 'row'
              mode: 'cell',

              afterCellValueChange: ({ row, column , value}) => {
                  console.log("cellValueChange row::", row);
                  console.log("cellValueChange column::", column);

                  if (column.field !== 'score') {
                    return;
                  }

                  const recordId = row.id;
                  const newScore = value;

                  if (this.filters.value.assessType === 'clw'){
                      this.addScoresClasswork(recordId, newScore);
                  }

                  else if (this.filters.value.assessType === 'hwk'){
                      this.addScoresHomework(recordId, newScore);
                  }

                  else if (this.filters.value.assessType === 'tst'){
                      this.addScoresTest(recordId, newScore);
                  }
              },
         },

         searchValuesCurrent: {
            teacher: "nil",
            class: "nil",
            calendar: "nil",
            subject: "nil",
            student: "nil",
            assesstype: "nil",
            score: "nil"            
         },

         dataOfType : {
          "tst": "Test",
          "clw": "Classwork",
          "hwk": "Homework",
          "mid": "MidTerm",
          "final": "Final Exams"
         }   
      }
    },

    mounted(){
        if(this.userData.role !== "proprietor"){
            setTimeout(() => {
                this.loadOtherValues( this.teacherData.school.schId );
            },2000);        
        }

        this.startEditingCell(0,4,null);
    },

    setup() {
      const { refFormObserver, getValidationState, resetForm } = formValidation(() => {})
      const Lessonnote_APP_STORE_MODULE_NAME = 'app-LessonnoteStudent';
      const lessonnote =  router.currentRoute.params.id ? router.currentRoute.params.id : null;
      const type_of_assessment =  router.currentRoute.params.type ? router.currentRoute.params.type : null;

      // Register module
      if (!store.hasModule(Lessonnote_APP_STORE_MODULE_NAME)) store.registerModule(Lessonnote_APP_STORE_MODULE_NAME, lessonnoteStoreModule)
  
      // UnRegister on leave
      onUnmounted(() => {
        if (store.hasModule(Lessonnote_APP_STORE_MODULE_NAME)) store.unregisterModule(Lessonnote_APP_STORE_MODULE_NAME)
      })  
      
      const userData = ref({});
      const teacherData = ref({});
      const schoolOptions = ref([]);

      const storedItems = JSON.parse(localStorage.getItem('userData'));
      if (storedItems){
        userData.value = storedItems;
      }

      const storedItems2 = JSON.parse(localStorage.getItem('teacherData'));
      if (storedItems2){
        teacherData.value = storedItems2;
      }

      const findIfPropisPresent = ( userData.value.role === "proprietor"  );
      const findIfTeacherisPresent = ( userData.value.role === "teacher" );
      const findIfPrinisPresent = ( userData.value.role === "principal" );       
      
      const {
        fetchLessonnotes,
        tableColumns,
        perPage,
        currentPage,
        
        totalLessonnotes,
        totalActiveLessonnotes,
        totalInactiveLessonnotes,

        dataMeta,
        perPageOptions,
        searchQuery,
        sortBy,
        isSortDirDesc,
        refLessonnoteListTable,
        isLessonnoteSidebarActive,
        
        isLoading,
 
        refetchData,
        handlePageChange,
        handleChange,

        // UI       
        resolveLessonnotestatusVariant,
        resolveLessonnoteactionVariant,
        resolveLessonnotetypeVariant,

        filters,
        LessonnoteItems,

        searchValues

      } = useLessonnoteList();

      if( findIfPropisPresent || findIfTeacherisPresent || findIfPrinisPresent ){
          filters.value.teacherId = findIfTeacherisPresent && teacherData.value ? teacherData.value.teaId : null;
          filters.value.schoolId = findIfPrinisPresent && teacherData.value ? teacherData.value.school.schId : null;
          filters.value.schoolgroup = (findIfPropisPresent || findIfPrinisPresent || findIfTeacherisPresent)  && teacherData.value ? teacherData.value.school.owner.id : null;
          filters.value.calendarId = (findIfPrinisPresent || findIfTeacherisPresent) && userData.value ? userData.value.cal_id : null;
      }

      if (lessonnote){
        filters.value.lsnId = lessonnote;
      }

      if (type_of_assessment){
        filters.value.assessType = type_of_assessment === "classwork" ? "clw" : type_of_assessment === "homework" ? "hwk" : type_of_assessment === "test" ? "tst" : "null" ;
      }

      (async function () {
        const resp = await store.dispatch(`${Lessonnote_APP_STORE_MODULE_NAME}/fetchSchools`, { id : filters.value.schoolgroup });
        let myval = resp.data.data;
        myval.forEach(obj => {
          schoolOptions.value.push( { value: obj.schId , text: obj.name } )
        });
      })();

      onMounted(() => {
        fetchLessonnotes();
      })
      
      return {
        // Sidebar
        isLessonnoteSidebarActive,
       
        isLoading,
  
        fetchLessonnotes,
        tableColumns,
        perPage,
        currentPage,

        totalLessonnotes,
        totalActiveLessonnotes,
        totalInactiveLessonnotes,

        dataMeta,
        perPageOptions,
        searchQuery,
        sortBy,
        isSortDirDesc,
        refLessonnoteListTable,

        refetchData,
        handlePageChange,
        handleChange,

        resetForm,
  
        // UI
        resolveLessonnotestatusVariant,
        resolveLessonnoteactionVariant,
        resolveLessonnotetypeVariant,

        teacherData,
        userData,
        schoolOptions,
        
        filters,
        LessonnoteItems,

        searchValues

      }
    },
    methods: {

      searchChange(val){
          this.searchQuery = val;
         // console.log("search :" + this.searchQuery);
          this.handleChange();
      },

      reset(){
         this.isLessonnoteSidebarActive = false;

        if (this.userData.role !== "teacher"){
          this.teacherOptions = [
          { value: null, text: "Please select Teacher" }
          ]

          this.classOptions = [
            { value: null, text: "Please select Class Type" }
          ]

          this.calendarOptions = [
            { value: null, text: "Please select Calendar" }
          ]

          this.subjectOptions = [
            { value: null, text: "Please select A Subject" }
          ]

          this.studentOptions = [
            { value: null, text: "Please select A Student" }
          ]

          this.typeOptions = [
            { value: null, text: "Please select An Assessment Type" }
          ]

          this.scoreOptions = [
            { value: null, text: "Please select A Score Range" }
          ]
        }

         this.searchValuesCurrent.teacher = ""
         this.searchValuesCurrent.class = ""
         this.searchValuesCurrent.calendar = ""
         this.searchValuesCurrent.subject = ""
         this.searchValuesCurrent.student = ""
         this.searchValuesCurrent.assesstype = ""
         this.searchValuesCurrent.score = ""
         
         this.searchValues = []

        // this.filters.schoolId = null;
         this.filters.classIndex = null;
         if (this.userData.role !== "teacher"){
            this.filters.teacherId = null;
         }
         //this.filters.calendarId = null;
         this.filters.subjectId = null;
         this.filters.studentId = null;
         this.filters.assessType = null;
         this.filters.scoreRange = null;
         this.filters.lsnId = null;
      
         this.filters.dateFrom = null;
         this.filters.dateTo = null;
         
         this.filters.calendarId = this.userData.cal_id;
         this.fetchLessonnotes();
      },
      
      async loadOtherValues(value){
            this.searchValues = [];

            this.filters.classIndex = null;
            if (this.userData.role !== "teacher"){
              this.filters.teacherId = null;
            }
          //  this.filters.calendarId = null;
            this.filters.subjectId = null;
            this.filters.studentId = null;
            this.filters.assessType = null;
            this.filters.scoreRange = null;

            var values = this.schoolOptions.map(function(o) { return o.value })
            var index = values.indexOf(value) 
            let choiceText = this.schoolOptions[index].text          

            const seff = this;
            let foundOlder = this.searchValues.find(function(o) { return String(o).trim() === String(seff.searchValuesCurrent.school).trim() });
            if (foundOlder){
              const index = this.searchValues.findIndex(obj => obj === seff.searchValuesCurrent.school );
              this.searchValues.splice(index, 1);
            }  
            
            let found = this.searchValues.find(function(o) { return o === value });
            if (!found){        
              this.searchValuesCurrent.school = choiceText;   
              this.searchValues.push(choiceText);
            }   

            const Lessonnote_APP_STORE_MODULE_NAME = 'app-LessonnoteStudent';
            const sef = this;     
            sef.teacherOptions = [];     
            store.dispatch(`${Lessonnote_APP_STORE_MODULE_NAME}/fetchTeachers`, { id : value })
            .then(response => { 
              let myval = response.data.data;
              myval.forEach(obj => {
                sef.teacherOptions.push( { value: obj.teaId , text: obj.fname + ' ' + obj.lname} )
              });                      
            });

            sef.subjectOptions = [];     
            store.dispatch(`${Lessonnote_APP_STORE_MODULE_NAME}/fetchSubjects`, { teacher: this.userData.role === 'teacher' ? this.teacherData.teaId : null } )
            .then(response => { 
              let myval = response.data.data;
              myval.forEach(obj => {
                sef.subjectOptions.push( { value: obj.subId , text: obj.name } )
              });            
            });

            sef.studentOptions = [];     
            /*store.dispatch(`${Lessonnote_APP_STORE_MODULE_NAME}/fetchStudents`)
            .then(response => { 
              let myval = response.data.data;
              myval.forEach(obj => {
                sef.studentOptions.push( { value: obj.subId , text: obj.name } )
              });            
            });*/
  
            sef.classOptions = [];     
            sef.classOptions.push( { value: 7 , text: "JSS1" } )            
            sef.classOptions.push( { value: 8 , text: "JSS2" } )
            sef.classOptions.push( { value: 9 , text: "JSS3" } )
            sef.classOptions.push( { value: 10 , text: "SS1" } )  
            sef.classOptions.push( { value: 11 , text: "SS2" } )
            sef.classOptions.push( { value: 12 , text: "SS3" } )

            sef.typeOptions = [];   
            sef.typeOptions.push( { value: "clw" , text: "Classwork" } ) 
            sef.typeOptions.push( { value: "hwk" , text: "Homework" } ) 
            sef.typeOptions.push( { value: "tst" , text: "Test" } ) 
            sef.typeOptions.push( { value: "mid" , text: "Mid-Term" } ) 
            sef.typeOptions.push( { value: "final" , text: "Final Exam" } ) 

            sef.scoreOptions = [];     
            sef.scoreOptions.push( { value: 40 , text: "Less than 40 percent" } )  
            sef.scoreOptions.push( { value: 60 , text: "Less than 60 percent and more than 40 percent" } )
            sef.scoreOptions.push( { value: 80 , text: "Less than 80 percent and more than 60 percent" } )
            sef.scoreOptions.push( { value: 99 , text: "Less than 99 percent and more than 80 percent" } )

            sef.calendarOptions = [];     
            store.dispatch(`${Lessonnote_APP_STORE_MODULE_NAME}/fetchCalendars`, { id : value })
            .then(response => { 
              let myval = response.data.data;
              myval.forEach(obj => {
                let isActive = obj.status === 1 ? "ACTIVE" : "INACTIVE";
                sef.calendarOptions.push( { value: obj.CalendarId , text: obj.session + "---" + "Term " + obj.term + "---" + isActive } )
                //sef.calendarOptions.push( { value: obj.CalendarId , text: obj.session + ' ' + obj.term + ' Term'} )
              });             
            });
      },

      teacherGrab(value){
          var values = this.teacherOptions.map(function(o) { return o.value })
          var index = values.indexOf(value) 
          let choiceText = this.teacherOptions[index].text         

          const sef = this;
          let foundOlder = this.searchValues.find(function(o) { return String(o).trim().replace("\n","") === String(sef.searchValuesCurrent.teacher).trim().replace("\n","") });
          if (foundOlder){
            const index = this.searchValues.findIndex(obj => String(obj).trim().replace("\n","") === String(sef.searchValuesCurrent.teacher).trim().replace("\n","") );
            this.searchValues.splice(index, 1)
          }          
          let found = this.searchValues.find(function(o) { return o === value });
          if (!found){        
            this.searchValuesCurrent.teacher = choiceText;   
            this.searchValues.push(choiceText);
          }         
      },

      classGrab(value){
        var values = this.classOptions.map(function(o) { return o.value })
        var index = values.indexOf(value) 
        let choiceText = this.classOptions[index].text

        const sef = this;
        let foundOlder = this.searchValues.find(function(o) { return String(o).trim().replace("\n","") === String(sef.searchValuesCurrent.class).trim().replace("\n","") });
        if (foundOlder){
          const index = this.searchValues.findIndex(obj => String(obj).trim().replace("\n","") === String(sef.searchValuesCurrent.class).trim().replace("\n","") );
          this.searchValues.splice(index, 1)
        }

        let found = this.searchValues.find(function(o) { return o === value });
        if (!found){
          this.searchValuesCurrent.class = choiceText;
          this.searchValues.push(choiceText);
        }       
      },

      calendarGrab(value){
        var values = this.calendarOptions.map(function(o) { return o.value })
        var index = values.indexOf(value) 
        let choiceText = this.calendarOptions[index].text

        const sef = this;
        let foundOlder = this.searchValues.find(function(o) { return String(o).trim().replace("\n","") === String(sef.searchValuesCurrent.calendar).trim().replace("\n","") });
        if (foundOlder){
          const index = this.searchValues.findIndex(obj => String(obj).trim().replace("\n","") === String(sef.searchValuesCurrent.calendar).trim().replace("\n","") );
          this.searchValues.splice(index, 1)
        }
        
        let found = this.searchValues.find(function(o) { return o === value });
        if (!found){
          this.searchValuesCurrent.calendar = choiceText;
          this.searchValues.push(choiceText);
        }       
      },

      subjectGrab(value){
        var values = this.subjectOptions.map(function(o) { return o.value })
        var index = values.indexOf(value) 
        let choiceText = this.subjectOptions[index].text

        const sef = this;
        let foundOlder = this.searchValues.find(function(o) { return String(o).trim().replace("\n","") === String(sef.searchValuesCurrent.subject).trim().replace("\n","") });
        if (foundOlder){
          const index = this.searchValues.findIndex(obj => String(obj).trim().replace("\n","") === String(sef.searchValuesCurrent.subject).trim().replace("\n","") );
          this.searchValues.splice(index, 1)
        }
        
        let found = this.searchValues.find(function(o) { return o === value });
        if (!found){
          this.searchValuesCurrent.subject = choiceText;
          this.searchValues.push(choiceText);
        }       
      },

      studentGrab(value){
        var values = this.studentOptions.map(function(o) { return o.value })
        var index = values.indexOf(value) 
        let choiceText = this.studentOptions[index].text

        const sef = this;
        let foundOlder = this.searchValues.find(function(o) { return String(o).trim().replace("\n","") === String(sef.searchValuesCurrent.student).trim().replace("\n","") });
        if (foundOlder){
          const index = this.searchValues.findIndex(obj => String(obj).trim().replace("\n","") === String(sef.searchValuesCurrent.student).trim().replace("\n","") );
          this.searchValues.splice(index, 1)
        }
        
        let found = this.searchValues.find(function(o) { return o === value });
        if (!found){
          this.searchValuesCurrent.student = choiceText;
          this.searchValues.push(choiceText);
        }       
      },

      scoreGrab(value){
        var values = this.scoreOptions.map(function(o) { return o.value })
        var index = values.indexOf(value) 
        let choiceText = this.scoreOptions[index].text

        const sef = this;
        let foundOlder = this.searchValues.find(function(o) { return String(o).trim().replace("\n","") === String(sef.searchValuesCurrent.score).trim().replace("\n","") });
        if (foundOlder){
          const index = this.searchValues.findIndex(obj => String(obj).trim().replace("\n","") === String(sef.searchValuesCurrent.score).trim().replace("\n","") );
          this.searchValues.splice(index, 1)
        }
        
        let found = this.searchValues.find(function(o) { return o === value });
        if (!found){
          this.searchValuesCurrent.score = choiceText;
          this.searchValues.push(choiceText);
        }       
      },

      typeGrab(value){
        var values = this.typeOptions.map(function(o) { return o.value })
        var index = values.indexOf(value) 
        let choiceText = this.typeOptions[index].text

        const sef = this;
        let foundOlder = this.searchValues.find(function(o) { return String(o).trim().replace("\n","") === String(sef.searchValuesCurrent.assesstype).trim().replace("\n","") });
        if (foundOlder){
          const index = this.searchValues.findIndex(obj => String(obj).trim().replace("\n","") === String(sef.searchValuesCurrent.assesstype).trim().replace("\n","") );
          this.searchValues.splice(index, 1)
        }
        
        let found = this.searchValues.find(function(o) { return o === value });
        if (!found){
          this.searchValuesCurrent.assesstype = choiceText;
          this.searchValues.push(choiceText);
        }       
      },

      startEditingCell(rowKey, colKey, defaultValue) {
            console.log("Start editing cell " + rowKey + " __ " + colKey);
            this.$refs["refLessonnoteListTable"].startEditingCell({ rowKey, colKey, defaultValue });
      },

      ////---------------------------------------------Classwork Here

      showModalClasswork() {
        this.$refs['my-modal-add-classwork'].show()
      },
      hideModalClasswork() {
        this.$refs['my-modal-add-classwork'].hide()
      },
      triggerClasswork(id, lsn, student){
        this.modalTitle = "Add classwork scores to this student: "+ student + " with Lessonnote name: " + lsn;
        this.assessmentPicked = id;
        this.showModalClasswork();
      },

      addScoresClasswork(id, input){
        
         if (Number(input) == 0 || Number(input) == null){
          alert("Please pick the actual score for this classwork assessment ");
          return;
         }

         if ( Number(input) > Number(this.classwork_max) ){
          alert("Please enter an actual score that is less than the maximum score ");
          return;
         }
         const Lessonnote_APP_STORE_MODULE_NAME = 'app-LessonnoteStudent';
         //change to percentage then input it
          let percent = Math.round( (Number(input)/this.classwork_max) * 100 )
            const sef = this;          
            store.dispatch( `${Lessonnote_APP_STORE_MODULE_NAME}/updateLessonnoteAssessment`, { score: percent, actual: Number(input), max: this.classwork_max, assessId: id  } )
            .then(response => {                            
                sef.$toast({
                  component: ToastificationContent,
                  props: {
                    title: 'Classwork scores have been added.',
                    icon: 'AlertTriangleIcon',
                    variant: 'success',
                  },
                });               
                sef.handleChange();

            }).catch((exception) => {               
               
                sef.$toast({
                  component: ToastificationContent,
                  props: {
                    title: 'There is an issue with the adding of scores process',
                    icon: 'AlertTriangleIcon',
                    variant: 'danger'
                  }
                }); 
                
		        }); 
         
      },

      ////---------------------------------------------Homework Here

      showModalHomework() {
        this.$refs['my-modal-add-homework'].show()
      },
      hideModalHomework() {
        this.$refs['my-modal-add-homework'].hide()
      },
      triggerHomework(id, lsn, student){
        this.modalTitleHomework = "Add homework scores to this student: "+ student + " with Lessonnote name: " + lsn;
        this.assessmentPicked = id;
        this.showModalHomework();
      },

      addScoresHomework(id, input){

         if (Number(input) == 0 || input == null){
            alert("Please pick the actual score for this homework assessment ");
            return;
         }

         if ( Number(input) > Number(this.homework_max) ){
            alert("Please enter an actual score that is less than the maximum score ");
            return;
         }

            const Lessonnote_APP_STORE_MODULE_NAME = 'app-LessonnoteStudent';
            //change to percentage then input it
            let percent = Math.round( (Number(input)/this.homework_max) * 100 )
            const sef = this; 
            store.dispatch( `${Lessonnote_APP_STORE_MODULE_NAME}/updateLessonnoteAssessment`, { score: percent, actual: Number(input), max: this.homework_max, assessId: id  } )
            .then(response => {                
                sef.$toast({
                  component: ToastificationContent,
                  props: {
                  title: 'Homework scores have been added.',
                  icon: 'AlertTriangleIcon',
                  variant: 'success',
                  },
                });  
                sef.handleChange();
            }).catch((exception) => { 
                sef.$toast({
                  component: ToastificationContent,
                  props: {
                    title: 'There is an issue with the adding of scores process',
                    icon: 'AlertTriangleIcon',
                    variant: 'danger'
                  }
                }); 
		        }); 
         
      },

      ////---------------------------------------------Test Here

      showModalTest() {
        this.$refs['my-modal-add-test'].show()
      },
      hideModalTest() {
        this.$refs['my-modal-add-test'].hide()
      },
      triggerTest(id, lsn, student){
        this.modalTitleTest = "Add test scores to this student: "+ student + " with Lessonnote name: " + lsn;
        this.assessmentPicked = id;
        this.showModalTest();
      },

      addScoresTest(id, input){
         if (Number(input) == 0 || input == null){
            alert("Please pick the actual score for this test assessment ");
            return;
         }

         if ( Number(input) > Number(this.test_max) ){
            alert("Please enter an actual score that is less than the maximum score ");
            return;
         }

            const Lessonnote_APP_STORE_MODULE_NAME = 'app-LessonnoteStudent';
            //change to percentage then input it
            let percent = Math.round( (Number(input)/this.test_max) * 100 )
            const sef = this; 

            store.dispatch( `${Lessonnote_APP_STORE_MODULE_NAME}/updateLessonnoteAssessment`, { score: percent, actual: Number(input), max: this.test_max, assessId: id  } )
            .then(response => {              
                sef.$toast({
                  component: ToastificationContent,
                  props: {
                  title: 'Test scores have been added.',
                  icon: 'AlertTriangleIcon',
                  variant: 'success'
                  },
                });
                sef.handleChange();  
            }).catch((exception) => {  
                sef.$toast({
                  component: ToastificationContent,
                  props: {
                    title: 'There is an issue with the adding of scores process',
                    icon: 'AlertTriangleIcon',
                    variant: 'danger'
                  }
                }); 
		        });         
      },

       ////---------------------------------------------Mid Here

      showModalMid() {
        this.$refs['my-modal-add-mid'].show()
      },
      hideModalMid() {
        this.$refs['my-modal-add-mid'].hide()
      },
      triggerMid(id, lsn, student){
        this.modalTitleMid = "Add mid-term scores to this student: "+ student + " with Lessonnote name: " + lsn;
        this.assessmentPicked = id;
        this.showModalMid();
      },

      addScoresMid(id){
         if (this.mid_max == 0 || this.mid_max == null){
            alert("Please pick the maximum score for this mid assessment ");
            return;
         }

         if (this.mid_actual == 0 || this.mid_actual == null){
            alert("Please pick the actual score for this mid assessment ");
            return;
         }

         if ( Number(this.mid_actual) > Number(this.mid_max) ){
            alert("Please enter an actual score that is less than the maximum score ");
            return;
         }

            const Lessonnote_APP_STORE_MODULE_NAME = 'app-LessonnoteStudent';
            //change to percentage then input it
            let percent = Math.round( (this.mid_actual/this.mid_max) * 100 )
            const sef = this; 

            store.dispatch( `${Lessonnote_APP_STORE_MODULE_NAME}/updateLessonnoteAssessment`, { score: percent, actual: this.mid_actual, max: this.mid_max, assessId: id  } )
            .then(response => { 
                sef.modalTitleMid = "";
               
                sef.mid_actual = 0;                
                sef.$toast({
                  component: ToastificationContent,
                  props: {
                  title: 'Mid Term scores have been added.',
                  icon: 'AlertTriangleIcon',
                  variant: 'success'
                  },
                });
                sef.hideModalMid();
                sef.handleChange();    
            }).catch((exception) => { 
                sef.modalTitleMid = "";
                
                sef.mid_actual = 0; 
                sef.$toast({
                  component: ToastificationContent,
                  props: {
                    title: 'There is an issue with the adding of scores process',
                    icon: 'AlertTriangleIcon',
                    variant: 'danger'
                  }
                }); 
		        }); 
         
      },

  ////---------------------------------------------Final Exam Here

      showModalFinal() {
        this.$refs['my-modal-add-final'].show()
      },
      hideModalFinal() {
        this.$refs['my-modal-add-final'].hide()
      },
      triggerFinal(id, lsn, student){
        this.modalTitleFinal = "Add final exam scores to this student: "+ student + " with Lessonnote name: " + lsn;
        this.assessmentPicked = id;
        this.showModalFinal();
      },

      addScoresFinal(id){
          if (this.final_max == 0 || this.final_max == null){
              alert("Please pick the maximum score for this final assessment ");
              return;
          }

          if (this.final_actual == 0 || this.final_actual == null){
              alert("Please pick the actual score for this final assessment ");
              return;
          }

          if ( Number(this.final_actual) > Number(this.final_max) ){
              alert("Please enter an actual score that is less than the maximum score ");
              return;
          }

            const Lessonnote_APP_STORE_MODULE_NAME = 'app-LessonnoteStudent';
            //change to percentage then input it
            let percent = Math.round( (this.final_actual/this.final_max) * 100 )
            const sef = this; 

            store.dispatch( `${Lessonnote_APP_STORE_MODULE_NAME}/updateLessonnoteAssessment`, { score: percent, actual: this.final_actual, max: this.final_max, assessId: id  } )
            .then(response => { 
                sef.modalTitlefinal = "";
               
                sef.final_actual = 0;                
                sef.$toast({
                  component: ToastificationContent,
                  props: {
                  title: 'final Term scores have been added.',
                  icon: 'AlertTriangleIcon',
                  variant: 'success'
                  },
                }); 
                sef.hideModalFinal();
                sef.handleChange();  
            }).catch((exception) => { 
                sef.modalTitlefinal = "";
               
                sef.final_actual = 0; 
                sef.$toast({
                  component: ToastificationContent,
                  props: {
                    title: 'There is an issue with the adding of scores process',
                    icon: 'AlertTriangleIcon',
                    variant: 'danger'
                  }
                }); 
		        }); 
         
      }

    }




  }
  </script>
  
  <style lang="scss" scoped>
  .per-page-selector {
    width: 90px;
  }
  </style>
  
  <style lang="scss">
  @import '~@core/scss/vue/libs/vue-select.scss';
  </style>
  